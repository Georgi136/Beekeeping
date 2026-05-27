import { useLanguage } from '../i18n/LanguageContext'
import UKFlag from './UKFlag'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="English"
        title="English"
      >
      
        <UKFlag/>
        
      </button>
      <button
        className={`lang-btn ${language === 'bg' ? 'active' : ''}`}
        onClick={() => setLanguage('bg')}
        aria-label="Български"
        title="Български"
      >
        <div className="flag-bg">
          <div className="bg-stripe white"></div>
          <div className="bg-stripe green"></div>
          <div className="bg-stripe red"></div>
        </div>
      </button>

      <style>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 24px;
          border: 1px solid var(--color-border, #e5e7eb);
          border-radius: 3px;
          background: var(--color-white, #fff);
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          overflow: hidden;
        }

        .lang-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .lang-btn.active {
          border-color: var(--color-primary, #f59e0b);
          box-shadow: 0 0 0 2px var(--color-primary, #f59e0b);
        }

        /* Bulgarian Flag */
        .flag-bg {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .bg-stripe {
          flex: 1;
          width: 100%;
        }

        .bg-stripe.white {
          background: #fff;
        }

        .bg-stripe.green {
          background: #009e49;
        }

        .bg-stripe.red {
          background: #d21034;
        }

        @media (max-width: 768px) {
          .lang-btn {
            width: 28px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  )
}