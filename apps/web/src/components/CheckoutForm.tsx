import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../i18n/LanguageContext'
import { apiUrl } from '../config'

export interface CompletedOrder {
  id: string
  customerName: string
  phone: string
  email?: string | null
  address: string
  notes?: string | null
  status: string
  totalPrice: number
  notification?: {
    customerSent: boolean
    adminSent: boolean
  }
  items: Array<{
    id: string
    productId: number
    name: string
    price: number
    quantity: number
    image?: string
  }>
}

interface CheckoutFormProps {
  onOrderSuccess?: (order: CompletedOrder) => void
}

export default function CheckoutForm({ onOrderSuccess }: CheckoutFormProps) {
  const { cart, clearCart } = useCart()
  const { storefrontSettings } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    deliveryMethod: storefrontSettings.pickupEnabled === 'true' && storefrontSettings.courierEnabled !== 'true' ? 'pickup' : 'courier',
    paymentMethod: storefrontSettings.bankTransferEnabled === 'true' && storefrontSettings.cashOnDeliveryEnabled !== 'true' ? 'bank' : 'cash_on_delivery',
    notes: ''
  })

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      deliveryMethod: current.deliveryMethod === 'pickup' && storefrontSettings.pickupEnabled === 'false'
        ? 'courier'
        : current.deliveryMethod === 'courier' && storefrontSettings.courierEnabled === 'false'
          ? 'pickup'
          : current.deliveryMethod,
      paymentMethod: current.paymentMethod === 'bank' && storefrontSettings.bankTransferEnabled !== 'true'
        ? 'cash_on_delivery'
        : current.paymentMethod === 'cash_on_delivery' && storefrontSettings.cashOnDeliveryEnabled === 'false'
          ? 'bank'
          : current.paymentMethod
    }))
  }, [storefrontSettings])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const deliveryLabel = formData.deliveryMethod === 'pickup' ? 'Вземане от магазина' : 'Доставка с куриер'
      const paymentLabel = formData.paymentMethod === 'bank' ? 'Банков превод' : 'Наложен платеж'
      const address = formData.deliveryMethod === 'pickup'
        ? `Вземане от магазина${formData.city ? `, град: ${formData.city}` : ''}`
        : `${formData.city}, ${formData.address}`.trim()
      const notes = [
        `Доставка: ${deliveryLabel}`,
        `Плащане: ${paymentLabel}`,
        formData.notes ? `Бележка: ${formData.notes}` : ''
      ].filter(Boolean).join('\n')

      const response = await fetch(apiUrl('/api/orders'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerName: formData.customerName,
          email: formData.email,
          phone: formData.phone,
          address,
          notes,
          items: cart.map(item => ({
            productId: item.productId,
            quantity: item.quantity
          }))
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create order')
      }

      const data = await response.json()
      clearCart()
      
      if (onOrderSuccess) {
        onOrderSuccess(data.order)
      }

      // Reset form
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        deliveryMethod: storefrontSettings.pickupEnabled === 'true' && storefrontSettings.courierEnabled !== 'true' ? 'pickup' : 'courier',
        paymentMethod: storefrontSettings.bankTransferEnabled === 'true' && storefrontSettings.cashOnDeliveryEnabled !== 'true' ? 'bank' : 'cash_on_delivery',
        notes: ''
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Възникна грешка. Моля, опитайте отново.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Данни за поръчката</h2>

      {error && <div className="form-error">{error}</div>}

      <div className="form-group">
        <label htmlFor="customerName">Име и фамилия *</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
          placeholder="Иван Петров"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Телефон *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+359 87 123 4567"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Имейл</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="deliveryMethod">Начин на получаване *</label>
          <select
            id="deliveryMethod"
            name="deliveryMethod"
            value={formData.deliveryMethod}
            onChange={handleChange}
            required
          >
            {storefrontSettings.courierEnabled !== 'false' && <option value="courier">Доставка с куриер</option>}
            {storefrontSettings.pickupEnabled !== 'false' && <option value="pickup">Вземане от магазина</option>}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Плащане *</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            {storefrontSettings.cashOnDeliveryEnabled !== 'false' && <option value="cash_on_delivery">Наложен платеж</option>}
            {storefrontSettings.bankTransferEnabled === 'true' && <option value="bank">Банков превод</option>}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="city">Град *</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          placeholder="Дупница"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">{formData.deliveryMethod === 'pickup' ? 'Допълнителна информация' : 'Адрес за доставка *'}</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required={formData.deliveryMethod !== 'pickup'}
          placeholder="ул. Пример 123, гр. Дупница"
          rows={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Бележка към поръчката</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Уточнения за доставка или продуктите"
          rows={3}
        />
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-lg"
        disabled={loading || cart.length === 0}
      >
        {loading ? 'Изпращане...' : 'Изпрати поръчката'}
      </button>

      <style>{`
        .checkout-form {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .checkout-form h2 {
          color: var(--color-secondary);
          margin: 0 0 1.5rem 0;
          font-size: 1.5rem;
        }

        .form-error {
          background: #fee;
          color: #c33;
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1rem;
          border-left: 4px solid #c33;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-secondary);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .btn-lg {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .btn-lg:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .checkout-success {
          background: white;
          padding: 3rem 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #d4edda;
          color: #155724;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin: 0 auto 1.5rem;
        }

        .checkout-success h2 {
          color: var(--color-secondary);
          margin: 1rem 0;
          font-size: 1.75rem;
        }

        .checkout-success p {
          color: var(--color-text-light);
          margin: 0.5rem 0;
        }

        .success-note {
          color: #6c757d;
          font-size: 0.95rem;
          font-style: italic;
        }
      `}</style>
    </form>
  )
}
