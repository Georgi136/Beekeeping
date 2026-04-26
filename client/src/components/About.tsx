export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">За нас</h2>
        <p className="section-subtitle">
          Семейна фирма със 20+ години опит в пчеларството и производство на натурален пчелен мед
        </p>

        <div className="about-hero-image">
          <img 
            src="https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Семейна пчелна ферма САКИ в Долистово и Коркина - натурален пчелен мед" 
          />
        </div>

        <div className="about-story">
          <div className="story-section">
            <h3>Нашата история</h3>
            <p>
              САКИ е семейна фирма, основана с искрена любов към пчеларството и производството на чист, натурален пчелен мед. За повече от две десетилетия развихме дълбоко познание на пчелния свят и искусството на пчеларството. Нашата опит и дедикация се отразяват в всеки продукт, който предлагаме.
            </p>
            <p>
              От скромни начала до днес, семейството ни остана верно на принципите на качество, прозрачност и устойчивост. Пчеларството за нас е повече от бизнес – това е призвание, предадено от поколение на поколение.
            </p>
          </div>

          <div className="story-section">
            <h3>Нашите Пчелини</h3>
            <p>
              Пчелините ни са разположени в селата <strong>Долистово и Коркина</strong>, където природата предоставя перфектни условия за развитие на здравите пчелни семейства. Тези региони са известни с разнообразието на цветя и чистотата на окръжаващата среда, което гарантира нашия <strong>натурален пчелен мед</strong> от най-висока категория.
            </p>
            <p>
              Всяка пчелна колония се грижи с внимание и опит, осигурявайки оптимални условия за производство на чист мед без химикали и добавки.
            </p>
          </div>

          <div className="story-section">
            <h3>Сертификация и качество</h3>
            <p>
              Нашия <strong>пчелен мед е сертифициран от БАБХ</strong> (Българска агенция по безопасност на храните), което гарантира качеството, чистотата и съответствието с всички международни стандарти. Сертификацията от БАБХ е доказателство за нашия ангажимент към здравето и доверието на нашите клиенти.
            </p>
            <p>
              Предлагаме пчелни продукти, които можете да консумирате с пълна уверност в тяхната чистота и полезност.
            </p>
          </div>
        </div>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🐝</div>
            <h3>20+ години опит</h3>
            <p>Две десетилетия на дедикация в пчеларството и производството на натурален пчелен мед, придобили дълбоко познание и мастерство.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🏡</div>
            <h3>Собствени Пчелини</h3>
            <p>Нашите Пчелини са разположени в селата <strong>Долистово и Коркина</strong>, където произвеждаме чист пчелен мед в идеални условия.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">✅</div>
            <h3>Сертификация БАБХ</h3>
            <p>Нашия пчелен мед е сертифициран от БАБХ, гарантирайки най-високите стандарти на качество и безопасност.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🏪</div>
            <h3>Магазин в Дупница</h3>
            <p>Посетете нашия магазин на Кооперативния пазар, Павилион номер 5, в гр. Дупница за преки продажби и консултации.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">📦</div>
            <h3>Пълен асортимент</h3>
            <p>Предлагаме натурален пчелен мед, кошери, пчеларски инвентар, центрофуги и прополисов мехлем за всички пчелари.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🚚</div>
            <h3>Бърза доставка</h3>
            <p>Осигуряваме надеждна доставка на всички продукти по цялата страна с грижа и професионализъм.</p>
          </div>
        </div>

        <div className="about-info">
          <div className="about-info-content">
            <h3>Защо да вярвате на САКИ?</h3>
            <ul className="about-list">
              <li>20+ години опит в пчеларството и производство на чист пчелен мед</li>
              <li>Собствена пчелна ферма в Долистово и Коркина с натурален пчелен мед</li>
              <li>Сертификация от БАБХ за качество и безопасност</li>
              <li>Семейна фирма, позната с прозрачност и честност</li>
              <li>Пълен асортимент от пчеларски материали и продукти</li>
              <li>Експертни консултации и поддръжка на пчеларите</li>
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