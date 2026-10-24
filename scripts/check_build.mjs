import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { brotliCompressSync, gzipSync } from 'node:zlib'

const html = await readFile('dist/index.html', 'utf8')
for (const title of ['Blog', 'Academic', 'Slidev', '理财簿', 'FileBrowser', 'Umami', 'Vidat2', 'KMS', 'MPusher', '1Panel']) {
  assert(html.includes(title), `Missing prerendered card: ${title}`)
}
for (const url of ['https://projectmay.davidz.cn/', 'https://git.davidz.cn/', 'https://docker.davidz.cn/']) {
  assert(!html.includes(url), `Removed card remains: ${url}`)
}
for (const [url, description] of [['https://1panel.davidz.cn/', '服务器管理 (CN)'], ['https://1panel.sf.davidz.cn/', '服务器管理 (US)']]) {
  const card = html.match(new RegExp(`<a[^>]*href="${url.replaceAll('.', '\\.')}"[^>]*>([\\s\\S]*?)</a>`))
  assert(card, `Missing 1Panel link: ${url}`)
  assert(card[1].includes('>1Panel</p>') && card[1].includes(description), `Incorrect 1Panel text: ${url}`)
}
assert(!html.includes('<!--app-html-->'), 'Prerender placeholder was not replaced')
assert.equal((html.match(/<picture>/g) || []).length, 11)
assert.equal((html.match(/loading="eager"/g) || []).length, 3)
assert.equal((html.match(/loading="lazy"/g) || []).length, 8)
assert.equal((html.match(/<source /g) || []).length, 2)
assert(html.includes('Toggle color theme'), 'Missing interactive fallback')
assert(!html.includes('sli.dev'), 'External logo dependency remains')
assert(!html.includes('modulepreload'), 'Animation must not be preloaded')
const sources = [...html.matchAll(/(?:src|srcset|href)="(\/assets\/[^" ]+)"/g)].map(m => m[1])
for (const source of sources) assert((await stat('dist' + source)).isFile(), `Missing ${source}`)
const entry = html.match(/<script type="module" crossorigin src="([^"]+)"/)[1]
const js = await readFile('dist' + entry)
assert(js.length < 90000, `Entry unexpectedly large: ${js.length}`)
assert(!js.toString().includes('Matter.js'), 'Physics library leaked into entry')
const files = await readdir('dist/assets')
assert(files.some(f => /^DarkModeMatterToggle-.*\.js$/.test(f)), 'Missing animation chunk')
console.log(`PASS: 11 prerendered cards, local hashed assets, responsive theme sources, lazy images and deferred physics`)
console.log(`Entry: ${js.length} bytes; gzip ${gzipSync(js).length}; Brotli ${brotliCompressSync(js).length}`)
console.log(`HTML: ${Buffer.byteLength(html)} bytes; Brotli ${brotliCompressSync(html).length}`)
