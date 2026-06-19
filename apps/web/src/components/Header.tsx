import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()
  const { getTotalItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false)
    
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If not on home page, navigate to home and scroll
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link 
          to="/" 
          className="logo" 
          onClick={(e) => {
            setIsMenuOpen(false)
            if (location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
            <img src="/saki-logo.png" alt={language === 'bg' ? 'Лого на пчеларски магазин САКИ' : 'SAKI beekeeping shop logo'} className="logo-img" />
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {t('navAbout')}
          </button>
          <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navProducts')}</Link>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {t('navContact')}
          </button>
          <Link to="/cart" className="nav-link cart-link" onClick={() => setIsMenuOpen(false)}>
            🛒 {language === 'bg' ? 'Количка' : 'Cart'}
            {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
          </Link>
          <div className="nav-lang-switcher">
            <LanguageSwitcher />
          </div>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={language === 'bg' ? 'Отвори менюто' : 'Toggle menu'}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style>{`
        .header {
          background-color: var(--color-white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4.5rem;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--color-secondary);
        }

        .logo-img {
          height: 64px;
          width: auto;
          max-width: 190px;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .logo-img:hover {
          transform: scale(1.05);
        }

        .header-right {
          display: none;
        }

        .logo-icon {
          font-size: 2rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          transition: color 0.3s ease;
          display: inline-block;
          white-space: nowrap;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .cart-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
        }

        .cart-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-primary);
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          margin-left: 0.25rem;
        }

        .nav-lang-switcher {
          margin-left: 1rem;
          padding-left: 1rem;
          border-left: 1px solid var(--color-border, #e5e7eb);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background-color: var(--color-secondary);
          position: relative;
          transition: background-color 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: var(--color-secondary);
          transition: transform 0.3s ease;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          top: 8px;
        }

        .hamburger.open {
          background-color: transparent;
        }

        .hamburger.open::before {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open::after {
          transform: translateY(-8px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .header-container {
            height: 4.25rem;
          }

          .logo-img {
            height: 56px;
            max-width: 160px;
          }

          .menu-toggle {
            display: block;
          }

          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--color-white);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            box-shadow: var(--shadow-md);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </header>
  )
}
