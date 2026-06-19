import { prisma } from '../lib/prisma'

type MailInput = {
  to: string
  subject: string
  text: string
}

type OrderNotification = {
  id: string
  customerName: string
  phone: string
  email?: string | null
  address: string
  notes?: string | null
  totalPrice: number | null
  items: Array<{
    name: string
    quantity: number
    price: number | null
  }>
}

type ContactNotification = {
  name: string
  email: string
  phone?: string
  message: string
}

async function readSettings() {
  const rows = await prisma.erpSetting.findMany({
    where: {
      key: {
        in: [
          'technical.smtpHost',
          'technical.smtpPort',
          'technical.smtpUser',
          'technical.smtpFrom',
          'technical.smtpSecure',
          'technical.supportEmail',
          'store.supportEmail',
          'store.orderNotificationEmail'
        ]
      }
    }
  })
  return Object.fromEntries(rows.map((row) => [row.key, row.value]))
}

function loadNodemailer() {
  try {
    return require('nodemailer') as {
      createTransport: (options: Record<string, unknown>) => {
        sendMail: (message: Record<string, unknown>) => Promise<unknown>
      }
    }
  } catch {
    return null
  }
}

function money(value: number | null) {
  return `${(value ?? 0).toFixed(2)} лв.`
}

async function sendMail(input: MailInput) {
  const settings = await readSettings()
  const nodemailer = loadNodemailer()
  const host = settings['technical.smtpHost']
  const port = Number(settings['technical.smtpPort'] || 587)
  const user = settings['technical.smtpUser']
  const pass = process.env.SMTP_PASSWORD
  const from = settings['technical.smtpFrom'] || settings['store.supportEmail'] || settings['technical.supportEmail']

  if (!nodemailer || !host || !from) {
    console.info('Email notification skipped: SMTP transport is not configured.')
    return { sent: false }
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: settings['technical.smtpSecure'] === 'true',
    auth: user && pass ? { user, pass } : undefined
  })

  await transporter.sendMail({
    from,
    to: input.to,
    subject: input.subject,
    text: input.text
  })

  return { sent: true }
}

export async function notifyNewOrder(order: OrderNotification) {
  const result = { adminSent: false, customerSent: false }

  try {
    const settings = await readSettings()
    const adminEmail = settings['store.orderNotificationEmail'] || settings['store.supportEmail'] || settings['technical.supportEmail']
    const items = order.items.map((item) => `- ${item.name} x${item.quantity}: ${money(item.price)}`).join('\n')

    if (adminEmail) {
      const adminMail = await sendMail({
        to: adminEmail,
        subject: `Нова поръчка ${order.id}`,
        text: [
          `Нова поръчка: ${order.id}`,
          `Клиент: ${order.customerName}`,
          `Телефон: ${order.phone}`,
          `Имейл: ${order.email || '-'}`,
          `Адрес: ${order.address}`,
          order.notes ? `Бележки:\n${order.notes}` : '',
          '',
          'Продукти:',
          items,
          '',
          `Общо: ${money(order.totalPrice)}`
        ].filter(Boolean).join('\n')
      })
      result.adminSent = adminMail.sent
    }

    if (order.email) {
      const customerMail = await sendMail({
        to: order.email,
        subject: `Поръчката е приета: ${order.id}`,
        text: [
          `Здравейте, ${order.customerName},`,
          '',
          'Благодарим Ви за поръчката. Ще се свържем с Вас за потвърждение.',
          '',
          'Продукти:',
          items,
          '',
          `Общо: ${money(order.totalPrice)}`,
          '',
          'САКИ'
        ].join('\n')
      })
      result.customerSent = customerMail.sent
    }
  } catch (error) {
    console.error('Email notification failed:', error)
  }

  return result
}

export async function notifyContactMessage(message: ContactNotification) {
  try {
    const settings = await readSettings()
    const to = settings['store.supportEmail'] || settings['technical.supportEmail']
    if (!to) return

    await sendMail({
      to,
      subject: `Ново съобщение от ${message.name}`,
      text: [
        `Име: ${message.name}`,
        `Имейл: ${message.email}`,
        `Телефон: ${message.phone || '-'}`,
        '',
        message.message
      ].join('\n')
    })
  } catch (error) {
    console.error('Contact notification failed:', error)
  }
}
