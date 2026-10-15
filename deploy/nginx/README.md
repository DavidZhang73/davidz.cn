# Shared static cache correction (staged only)

Replace `/docker/nginx/config/snippets/static-cache-map.inc` with this file at the eventual coordinated deployment. The existing `static-cache-headers.inc` is compatible; its copy here documents the complete contract. Run `docker exec nginx nginx -t` before reload and keep a backup for rollback. This repository's CI deploys only `dist/`, so these files will never change Nginx automatically.

The live audit on 2026-10-15 found **15** virtual hosts consuming the shared headers: davidz.cn; daty, licaibu, mturk, sdurm, blog, iaw, jenkins-update, kms, maze, papereader, slimeverse, sunlight, vidat, vidat2 (all under davidz.cn). Some consume the policy only under `/static` or `/assets`. API, auth, admin, upstream proxy locations and their cache policy must remain untouched.

Live origin probes confirmed the defect on www, blog and licaibu assets; the other listed hosts share the same faulty policy.

The defect affects conditional static responses: Nginx removes Content-Type on 304, causing the old MIME-based map to emit no-cache instead of the original asset TTL. Classification now uses the final internal URI, preserves existing TTLs, and prevents error responses from becoming immutable. Newly fingerprinted www images gain one-year immutable caching. HTML and JSON still revalidate. Unrecognized extensions still revalidate. Successful HTML/JSON responses cannot receive asset TTLs even with misleading URL extensions.

Academic already has a separate, corrected policy. Keep `00-academic-cache.conf` and `academic-cache-headers.inc` unchanged: they preserve its language entrypoint and shared-cache HTML rules. CV redirects and reverse-proxied applications are outside this shared fix.

Before rollout: back up the existing snippets, copy the replacement, run syntax checks, gracefully reload, and compare 200/304 Cache-Control using each site's actual assets. Validate missing assets, SPA fallback, APIs and academic language routing. Roll back the snippet and reload if these checks fail.

Local regression suite: `python3 scripts/check_cache.py --nginx /path/to/nginx`. It tests every affected host against real HTTP responses without modifying production.
