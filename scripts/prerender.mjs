import { readFile, writeFile, rm } from 'node:fs/promises'
import { render } from '../.ssr/entry-server.mjs'
const template = await readFile('dist/index.html', 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender placeholder')
await writeFile('dist/index.html', template.replace('<!--app-html-->', await render()))
await rm('.ssr', { recursive: true, force: true })
