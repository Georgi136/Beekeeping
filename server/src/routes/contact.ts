import { Router, type Request, type Response } from 'express'

const router = Router()

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

router.post('/', (req: Request, res: Response) => {
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

  // In a real application, you would:
  // - Save to database
  // - Send email notification
  // - Integrate with CRM

  // For now, we'll just log and return success
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString()
  })

  res.json({
    success: true,
    message: 'Съобщението е изпратено успешно!'
  })
})

export default router