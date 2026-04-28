import { useLanguage } from '../i18n/LanguageContext'

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
        <div className="flag-uk">
          <div className="uk-cross"></div>
        </div>

        
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

        /* UK Flag (Union Jack) */
        .flag-uk {
          width: 100%;
          height: 100%;
          position: relative;
          background: #012169;
          overflow: hidden;
        }

        .uk-cross {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 6px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, 
            #c8102e 0%, #c8102e 28%, 
            transparent 28%, transparent 72%, 
            #c8102e 72%, #c8102e 100%
          );
        }

        .uk-cross::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 100%;
          background: linear-gradient(180deg, 
            #c8102e 0%, #c8102e 28%, 
            transparent 28%, transparent 72%, 
            #c8102e 72%, #c8102e 100%
          );
        }

        .uk-cross::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          transform: translateY(-50%);
          background: #fff;
        }

        .uk-cross::before::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2px;
          height: 100%;
          background: #fff;
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