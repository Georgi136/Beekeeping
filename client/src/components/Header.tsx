import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
            <img src="/bee-logo.jpg" alt="САКИ Лого" className="logo-img" />
        </a>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navAbout')}</a>
          <a href="#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navProducts')}</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('navContact')}</a>
          <div className="nav-lang-switcher">
            <LanguageSwitcher />
          </div>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
          height: 4rem;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--color-secondary);
        }

        .logo-img {
          height: 50px;
          width: auto;
          max-width: 150px;
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
          whitespace: nowrap;
        }

        .nav-link:hover {
          color: var(--color-primary);
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
          .logo-img {
            height: 40px;
            max-width: 120px;
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