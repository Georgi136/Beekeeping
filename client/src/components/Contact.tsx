import { useState, type FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormStatus {
  type: 'success' | 'error' | null
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Съобщението е изпратено успешно! Ще се свържем с вас скоро.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || 'Възникна грешка. Моля, опитайте отново.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Възникна грешка при изпращането. Моля, опитайте отново.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Свържете се с нас</h2>
        <p className="section-subtitle">
          Имате въпроси? Свържете се с нас и ние ще ви отговорим възможно най-бързо
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Адрес</h3>
                <p>павилион 5, ж.к. Дупница, 2600 Дупница</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Телефон</h3>
                <p>089 551 7056</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Имейл</h3>
                <p>Info@sakimed.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h3>Уебсайт</h3>
                <p>www.sakimed.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📘</div>
              <div>
                <h3>Facebook</h3>
                <p><a href="https://facebook.com/Saki2008" target="_blank" rel="noopener noreferrer">facebook.com/Saki2008</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h3>Работно време</h3>
                <p>Понеделник - Петък: 09:00 - 18:00</p>
                <p>Събота: 09:00 - 14:00</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Име *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Вашето име"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Имейл *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+359 88 123 4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Съобщение *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Вашето съобщение..."
                rows={5}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Изпраща се...' : 'Изпрати съобщение'}
            </button>

            {status.type && (
              <div className={`form-status form-status-${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .contact {
          background-color: var(--color-white);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .contact-item h3 {
          font-size: 1.125rem;
          color: var(--color-secondary);
          margin-bottom: 0.25rem;
        }

        .contact-item p {
          color: var(--color-text-light);
          font-size: 0.95rem;
        }

        .contact-form {
          background: var(--color-background);
          padding: 2rem;
          border-radius: 1rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form .btn {
          width: 100%;
        }

        .contact-form .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-status {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
        }

        .form-status-success {
          background-color: #d1fae5;
          color: #065f46;
        }

        .form-status-error {
          background-color: #fee2e2;
          color: #991b1b;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}