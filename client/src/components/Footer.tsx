import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
                  <img src="/bee-logo.jpg" alt="САКИ Лого" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
            </div>
            <p>{language === 'bg' ? 'Професионален пчеларски магазин в Дупница. Оборудване и консумативи за всякакви пчеларски нужди.' : 'Professional beekeeping shop in Dupnitsa. Equipment and supplies for all beekeeping needs.'}</p>
          </div>

          <div className="footer-links">
            <h4>{language === 'bg' ? 'Бързи връзки' : 'Quick Links'}</h4>
            <ul>
              <li><a href="#about">{t('navAbout')}</a></li>
              <li><a href="#products">{t('navProducts')}</a></li>
              <li><a href="#contact">{t('navContact')}</a></li>
              <li><Link to="/admin" style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.8rem' }}>Админ</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{language === 'bg' ? 'Контакти' : 'Contact'}</h4>
            <ul>
              <li>📍 {language === 'bg' ? 'Ж.к. Дупница, Кооперативен пазар' : 'Dupnitsa, Cooperative Market'}</li>
              <li>📞 089 551 7056</li>
              <li>✉️ Info@sakimed.com</li>
              <li>🌐 www.sakimed.com</li>
              <li>📘 <a href="https://facebook.com/Saki2008" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SAKI - {language === 'bg' ? 'Дупница' : 'Dupnitsa'}. {t('footerRights')}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-secondary);
          color: var(--color-white);
          padding: 4rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-logo .logo-icon {
          font-size: 2rem;
        }

        .footer-logo .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .footer-brand p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          color: var(--color-white);
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--color-primary);
        }

        .footer-contact li {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  )
}