import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { apiUrl } from '../config'

interface CheckoutFormProps {
  onOrderSuccess?: (orderId: string) => void
}

export default function CheckoutForm({ onOrderSuccess }: CheckoutFormProps) {
  const { cart, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await fetch(apiUrl('/api/orders'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerName: formData.customerName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          notes: formData.notes,
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
      setSuccess(true)
      clearCart()
      
      if (onOrderSuccess) {
        onOrderSuccess(data.order.id)
      }

      // Reset form
      setFormData({ customerName: '', email: '', phone: '', address: '', notes: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Възникна грешка. Моля, опитайте отново.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="checkout-success">
        <div className="success-icon">✓</div>
        <h2>Поръчката е приета!</h2>
        <p>Благодарим ви за поръчката. Ще се свържем с вас за потвърждение.</p>
        <p className="success-note">Ако имате въпрос, можете да ни потърсите и по телефона.</p>
      </div>
    )
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

      <div className="form-group">
        <label htmlFor="address">Адрес за доставка *</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
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

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-secondary);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
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
