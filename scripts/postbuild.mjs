// GitHub Pages serves static files only. Copy the app shell so real paths load it:
//   /blog     → dist/blog/index.html
//   anything else → dist/404.html (the app renders its designed 404 page)
// Also write robots.txt and sitemap.xml.
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'

const site = 'https://praneethpapishetty.com'
const routes = ['/', '/blog']

mkdirSync('dist/blog', { recursive: true })
copyFileSync('dist/index.html', 'dist/blog/index.html')
copyFileSync('dist/index.html', 'dist/404.html')

writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`)
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${site}${r === '/' ? '/' : `${r}/`}</loc></url>`)
    .join('\n')}\n</urlset>\n`,
)
