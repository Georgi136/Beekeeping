import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import contactRoutes from './routes/contact'
import productsRoutes from './modules/products/product.routes'
import ordersRoutes from './modules/orders/order.routes'
import authRoutes from './routes/auth'
import adminRoutes from './routes/admin'
import categoryRoutes from './routes/categories'
import promotionRoutes from './routes/promotions'
import landingPageRoutes from './routes/landingPages'
import erpRoutes from './modules/erp/erp.routes'
import { adminSiteSettingsRouter, publicSiteSettingsRouter } from './modules/site-settings/siteSettings.routes'
import { uploadsDir } from './paths'
import { env } from './config/env'
import { errorHandler } from './middleware/errorHandler'
import { robotsController, sitemapController } from './controllers/seoController'

const app = express()

app.set('trust proxy', 1)

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: 'cross-origin'
    }
  })
)
app.use(morgan(env.isProduction ? 'combined' : 'dev'))
app.use(
  cors({
    origin: env.isProduction ? env.clientOrigin : true,
    credentials: true
  })
)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
)
app.use(cookieParser())
app.use(express.json({ limit: '1mb' }))
app.use('/uploads', express.static(uploadsDir))

app.get('/robots.txt', robotsController)
app.get('/sitemap.xml', sitemapController)
app.get('/api/robots.txt', robotsController)
app.get('/api/sitemap.xml', sitemapController)
app.use('/api/contact', contactRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/orders', ordersRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/promotions', promotionRoutes)
app.use('/api/landing-pages', landingPageRoutes)
app.use('/api/site-settings', publicSiteSettingsRouter)
app.use('/api/auth', authRoutes)
app.use('/api/admin/erp', erpRoutes)
app.use('/api/admin/site-settings', adminSiteSettingsRouter)
app.use('/api/admin', adminRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.use(errorHandler)

export default app
