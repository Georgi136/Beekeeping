import type { Request, Response } from 'express'
import { getLandingPages } from '../services/landingPageService'
import { getPublicProducts } from '../modules/products/product.service'

const siteUrl = 'https://www.sakimed.com'

export async function sitemapController(_req: Request, res: Response) {
  const [products, pages] = await Promise.all([getPublicProducts({}), getLandingPages(false)])
  const urls = [
    { loc: `${siteUrl}/`, priority: '1.00', changefreq: 'weekly' },
    { loc: `${siteUrl}/products`, priority: '0.90', changefreq: 'weekly' },
    ...products.map((product) => ({
      loc: `${siteUrl}/products/${product.slug}`,
      priority: '0.70',
      changefreq: 'monthly'
    })),
    ...pages.map((page) => ({
      loc: `${siteUrl}/special/${page.slug}`,
      priority: '0.80',
      changefreq: 'monthly'
    }))
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  res.type('application/xml').send(body)
}

export function robotsController(_req: Request, res: Response) {
  res
    .type('text/plain')
    .send(`User-agent: *
Allow: /
Disallow: /admin
Disallow: /cart
Disallow: /checkout

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}/
`)
}
