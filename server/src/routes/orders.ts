import { Router, Request, Response } from 'express'
import { addOrder, getOrders, Order, OrderItem } from '../data'

const router = Router()

interface OrderRequest {
  customerName: string
  phone: string
  address: string
  items: OrderItem[]
  totalPrice: number
}

// POST create new order
router.post('/', (req: Request<{}, {}, OrderRequest>, res: Response) => {
  const { customerName, phone, address, items, totalPrice } = req.body

  // Validate required fields
  if (!customerName || !phone || !address || !items || items.length === 0) {
    return res.status(400).json({ 
      error: 'Missing required fields: customerName, phone, address, items' 
    })
  }

  if (typeof totalPrice !== 'number' || totalPrice <= 0) {
    return res.status(400).json({ 
      error: 'Invalid totalPrice' 
    })
  }

  // Create order
  const order: Order = {
    id: Date.now().toString(),
    customerName,
    phone,
    address,
    items,
    totalPrice,
    createdAt: new Date().toISOString()
  }

  const savedOrder = addOrder(order)

  res.status(201).json({
    message: 'Order created successfully',
    order: savedOrder
  })
})

// GET all orders (for admin, no auth)
router.get('/', (_req, res) => {
  // In production, this would require authentication
  res.json({
    message: 'All orders',
    count: getOrders().length,
    orders: getOrders()
  })
})

export default router
