#!/usr/bin/env python3
"""Exercise the staged shared policy against a disposable local Nginx."""
import argparse
import http.client
from pathlib import Path
import socket
import subprocess
import tempfile
import time

REPO = Path(__file__).resolve().parents[1]
HOSTS = ['davidz.cn'] + [s + '.davidz.cn' for s in 'daty licaibu mturk sdurm blog iaw jenkins-update kms maze papereader slimeverse sunlight vidat vidat2'.split()]
IMMUTABLE = 'public, max-age=31536000, immutable'

def main(binary):
    checks = 0
    with tempfile.TemporaryDirectory(prefix='www-cache-') as directory:
        work = Path(directory)
        (work / 'logs').mkdir()
        fixtures = {'index.html': 'Static homepage', 'app.js': 'let x=1;', 'style.css': 'body{}', 'logo.svg': '<svg/>', 'font.woff2': 'font', 'data.json': '{}', 'file.txt': 'text', 'assets/index-Ab12_cd3.js': 'let x=2;', 'assets/logo-Ab12_cd3.svg': '<svg/>', 'app.a1b2c3d4.js': 'let x=3;', 'fake.js': '<html>Fallback</html>'}
        for name, content in fixtures.items():
            target = work / 'public' / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content)
        with socket.socket() as sock:
            sock.bind(('127.0.0.1', 0)); port = sock.getsockname()[1]
        config = work / 'nginx.conf'
        config.write_text(f'''daemon off;
master_process off;
pid {work}/nginx.pid;
error_log {work}/error.log;
events {{ worker_connections 64; }}
http {{
  access_log off;
  types {{ text/html html; text/css css; application/javascript js; application/json json; image/svg+xml svg; font/woff2 woff2; }}
  include {REPO}/deploy/nginx/static-cache-map.inc;
  server {{
    listen 127.0.0.1:{port};
    root {work}/public;
    location / {{ include {REPO}/deploy/nginx/static-cache-headers.inc; }}
    location = /fake.js {{ include {REPO}/deploy/nginx/static-cache-headers.inc; types {{ }} default_type text/html; }}
    location /spa/ {{ include {REPO}/deploy/nginx/static-cache-headers.inc; try_files $uri /index.html; }}
    location /api/ {{ add_header Cache-Control no-store always; return 200 '{{}}'; }}
  }}
}}
''')
        subprocess.run([binary, '-t', '-p', str(work), '-c', str(config)], check=True, capture_output=True)
        process = subprocess.Popen([binary, '-p', str(work), '-c', str(config)], stdout=subprocess.DEVNULL)
        def request(host, path, etag=None):
            connection = http.client.HTTPConnection('127.0.0.1', port, timeout=3)
            headers = {'Host': host}
            if etag: headers['If-None-Match'] = etag
            connection.request('GET', path, headers=headers)
            response = connection.getresponse(); response.read()
            result = response.status, response.getheader('Cache-Control'), response.getheader('ETag')
            connection.close(); return result
        try:
            for _ in range(50):
                try: request(HOSTS[0], '/index.html'); break
                except OSError: time.sleep(.05)
            for host in HOSTS:
                cases = {'/index.html':'no-cache', '/app.js':'public, max-age=3600', '/style.css':'public, max-age=3600', '/logo.svg':'public, max-age=604800', '/font.woff2':'public, max-age=604800', '/data.json':'no-cache', '/file.txt':'no-cache', '/app.a1b2c3d4.js':IMMUTABLE, '/fake.js':'no-cache', '/spa/missing.js':'no-cache', '/assets/logo-Ab12_cd3.svg': IMMUTABLE if host == 'davidz.cn' else 'public, max-age=604800', '/assets/index-Ab12_cd3.js': IMMUTABLE if host in ['davidz.cn','licaibu.davidz.cn','sunlight.davidz.cn','vidat2.davidz.cn'] else 'public, max-age=3600'}
                for path, expected in cases.items():
                    status, policy, etag = request(host, path)
                    assert (status, policy) == (200, expected), (host,path,status,policy,expected)
                    if path != '/fake.js':
                        status, policy, _ = request(host, path, etag)
                        assert (status,policy) == (304,expected), (host,path,status,policy,expected)
                    checks += 1
                for path in ['/missing.js','/assets/missing-Ab12_cd3.js','/missing.svg']:
                    assert request(host,path)[:2] == (404,'no-store'), (host,path)
                    checks += 1
                assert request(host,'/api/private')[:2] == (200,'no-store')
                checks += 1
            print(f'PASS: {checks} scenarios across {len(HOSTS)} hosts; 200/304, errors, SPA fallback and API isolation')
        finally:
            process.terminate(); process.wait(timeout=5)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--nginx', required=True)
    main(parser.parse_args().nginx)
