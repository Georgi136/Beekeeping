import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t, language, homepageSettings } = useLanguage()

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <p className="section-subtitle">
          {t('aboutSubtitle')}
        </p>

        <div className="about-hero-image">
          <img 
            src={homepageSettings.aboutImageUrl || 'https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            alt={language === 'bg' ? 'Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед' : 'SAKI family bee farm in Dolistovo and Korkina - natural honey'} 
          />
        </div>

        <div className="about-story">
          <div className="story-section">
            <h3>{t('storyTitle')}</h3>
            <p>
              {t('storyText1')}
            </p>
            <p>
              {t('storyText2')}
            </p>
          </div>

          <div className="story-section">
            <h3>{t('apiariesTitle')}</h3>
            <p>{t('apiariesText1')}</p>
            <p>{t('apiariesText2')}</p>
          </div>

          <div className="story-section">
            <h3>{t('certificationTitle')}</h3>
            <p>{t('certificationText1')}</p>
            <p>{t('certificationText2')}</p>
          </div>
        </div>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🐝</div>
            <h3>{t('cardExperience')}</h3>
            <p>{t('cardExperienceText')}</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🏡</div>
            <h3>{t('cardApiaries')}</h3>
            <p>{t('cardApiariesText')}</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">✅</div>
            <h3>{t('cardCertification')}</h3>
            <p>{t('cardCertificationText')}</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🏪</div>
            <h3>{t('cardShop')}</h3>
            <p>{t('cardShopText')}</p>
          </div>

          <div className="about-card">
            <div className="about-icon">📦</div>
            <h3>{t('cardProducts')}</h3>
            <p>{t('cardProductsText')}</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🚚</div>
            <h3>{t('cardDelivery')}</h3>
            <p>{t('cardDeliveryText')}</p>
          </div>
        </div>

        <div className="about-info">
          <div className="about-info-content">
            <h3>{t('whyChooseTitle')}</h3>
            <ul className="about-list">
              <li>{t('whyChoose1')}</li>
              <li>{t('whyChoose2')}</li>
              <li>{t('whyChoose3')}</li>
              <li>{t('whyChoose4')}</li>
              <li>{t('whyChoose5')}</li>
              <li>{t('whyChoose6')}</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background-color: var(--color-white);
        }

        .about-hero-image {
          width: 100%;
          height: 400px;
          margin-bottom: 4rem;
          border-radius: 1rem;
          overflow: hidden;
        }

        .about-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .about-hero-image {
            height: 250px;
          }
        }

        .about-story {
          background: var(--color-background);
          padding: 3rem;
          border-radius: 1rem;
          margin-bottom: 4rem;
          border-left: 5px solid var(--color-primary);
        }

        .story-section {
          margin-bottom: 2.5rem;
        }

        .story-section:last-child {
          margin-bottom: 0;
        }

        .story-section h3 {
          font-size: 1.5rem;
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .story-section p {
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .story-section p strong {
          color: var(--color-secondary);
          font-weight: 600;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .about-card {
          background: var(--color-background);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .about-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .about-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-secondary);
        }

        .about-card p {
          color: var(--color-text-light);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-info {
          background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
          border-radius: 1rem;
          padding: 3rem;
        }

        .about-info-content h3 {
          color: var(--color-white);
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
        }

        .about-list {
          list-style: none;
          display: grid;
          gap: 1rem;
        }

        .about-list li {
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          line-height: 1.6;
        }

        .about-list li::before {
          content: '✓';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: var(--color-primary);
          color: var(--color-secondary);
          border-radius: 50%;
          font-weight: bold;
          font-size: 0.875rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .about-info {
            padding: 2rem;
          }

          .about-story {
            padding: 2rem;
          }

          .story-section h3 {
            font-size: 1.25rem;
          }

          .about-list li {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  )
}
