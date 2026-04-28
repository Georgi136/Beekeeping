import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

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
  const { t } = useLanguage()
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
        setStatus({ type: 'success', message: t('formSuccess') })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || t('formError') })
      }
    } catch {
      setStatus({ type: 'error', message: t('formError') })
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
        <h2 className="section-title">{t('contactTitle')}</h2>
        <p className="section-subtitle">
          {t('contactSubtitle')}
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>{t('address')}</h3>
                <p>{t('addressValue')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>{t('phone')}</h3>
                <p>{t('phoneValue')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>{t('email')}</h3>
                <p>{t('emailValue')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h3>{t('website')}</h3>
                <p>{t('websiteValue')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📘</div>
              <div>
                <h3>{t('facebook')}</h3>
                <p><a href="https://facebook.com/Saki2008" target="_blank" rel="noopener noreferrer">{t('facebookValue')}</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h3>{t('workingHours')}</h3>
                <p>{t('workingHoursWeekday')}</p>
                <p>{t('workingHoursSaturday')}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('formName')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('formNamePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('formEmail')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('formEmailPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t('formPhone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('formPhonePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('formMessage')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t('formMessagePlaceholder')}
                rows={5}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? t('formSubmitting') : t('formSubmit')}
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