import { Router, type Request, type Response } from 'express'
import { notifyContactMessage } from '../services/notificationService'

const router = Router()

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

router.post('/', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body as ContactFormData

  // Validate required fields
  if (!name || !email || !message) {
    res.status(400).json({
      success: false,
      message: 'Моля, попълте всички задължителни полета.'
    })
    return
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: 'Моля, въведете валиден имейл адрес.'
    })
    return
  }

  console.log('Contact form submission:', {
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString()
  })

  await notifyContactMessage({ name, email, phone, message })

  res.json({
    success: true,
    message: 'Съобщението е изпратено успешно!'
  })
})

export default router
