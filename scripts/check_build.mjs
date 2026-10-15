import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { brotliCompressSync, gzipSync } from 'node:zlib'

const html = await readFile('dist/index.html', 'utf8')
for (const title of ['Blog', 'Academic', 'Slidev', 'ProjectMay', '理财簿', 'FileBrowser', 'Umami', 'Git', 'Vidat2', 'KMS', 'MPusher', 'Docker']) {
  assert(html.includes(title), `Missing prerendered card: ${title}`)
}
assert(!html.includes('<!--app-html-->'), 'Prerender placeholder was not replaced')
assert.equal((html.match(/<picture>/g) || []).length, 12)
assert.equal((html.match(/loading="eager"/g) || []).length, 3)
assert.equal((html.match(/loading="lazy"/g) || []).length, 9)
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
console.log(`PASS: 12 prerendered cards, local hashed assets, responsive theme sources, lazy images and deferred physics`)
console.log(`Entry: ${js.length} bytes; gzip ${gzipSync(js).length}; Brotli ${brotliCompressSync(js).length}`)
console.log(`HTML: ${Buffer.byteLength(html)} bytes; Brotli ${brotliCompressSync(html).length}`)
