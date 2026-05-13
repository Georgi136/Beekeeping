import express from 'express'
import cors from 'cors'
import path from 'path'
import contactRoutes from './routes/contact'
import productsRoutes from './routes/products'
import ordersRoutes from './routes/orders'

const app = express()
const PORT = process.env.PORT || 3001

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/orders', ordersRoutes)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})