"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sitemapController = sitemapController;
exports.robotsController = robotsController;
const landingPageService_1 = require("../services/landingPageService");
const productService_1 = require("../services/productService");
const siteUrl = 'https://www.sakimed.com';
async function sitemapController(_req, res) {
    const [products, pages] = await Promise.all([(0, productService_1.getPublicProducts)({}), (0, landingPageService_1.getLandingPages)(false)]);
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
    ];
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map((url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`)
        .join('\n')}
</urlset>`;
    res.type('application/xml').send(body);
}
function robotsController(_req, res) {
    res
        .type('text/plain')
        .send(`User-agent: *
Allow: /
Disallow: /admin
Disallow: /cart
Disallow: /checkout

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}/
`);
}
