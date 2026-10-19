// Build a relocatable preview (relative asset paths, in-memory routing) into .preview/.
// Used to share a clickable preview before anything is deployed.
import { execSync } from 'node:child_process'
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'

execSync('npx vite build --base=./ --outDir .preview --emptyOutDir', {
  stdio: 'inherit',
  env: { ...process.env, VITE_ROUTER: 'memory' },
})
const fix = (file, from, to) => writeFileSync(file, readFileSync(file, 'utf8').replaceAll(from, to))
fix('.preview/index.html', '"/fonts/', '"./fonts/')
for (const f of readdirSync('.preview/assets').filter((f) => f.endsWith('.css'))) {
  fix(`.preview/assets/${f}`, 'url(/fonts/', 'url(../fonts/')
}

// Artifact page variant: no document wrapper (the host adds one) and fonts inlined as data URIs.
const css = readdirSync('.preview/assets').find((f) => f.endsWith('.css'))
for (const font of readdirSync('.preview/fonts')) {
  const uri = `data:font/woff2;base64,${readFileSync(`.preview/fonts/${font}`).toString('base64')}`
  fix(`.preview/assets/${css}`, `url(../fonts/${font})`, `url(${uri})`)
}
const html = readFileSync('.preview/index.html', 'utf8')
const head = html.match(/<head>([\s\S]*)<\/head>/)[1].replace(/\s*<link rel="preload"[^>]*>/g, '').replace(/\s*<meta (charset|name="viewport")[^>]*>/g, '')
const body = html.match(/<body>([\s\S]*)<\/body>/)[1]
writeFileSync('.preview/page.html', `${head.trim()}\n<style>body{background:#fff}</style>\n${body.trim()}\n`)
