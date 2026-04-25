export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">За нас</h2>
        <p className="section-subtitle">
          Ние сме вашият надежден партньор в света на пчеларството
        </p>

        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1470509037663-253ce784d5be?w=1200&q=80" 
            alt="Пчеларски магазин САКИ - Натурален пчелен мед и инвентар" 
          />
        </div>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🏪</div>
            <h3>Магазин в Дупница</h3>
            <p>Разполагаме с удобен магазин в центъра на Дупница, където можете да разгледате и закупите всички необходими консумативи.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">📦</div>
            <h3>Богат асортимент</h3>
            <p>Предлагаме пчелни кошери, рамки, восъчни листове, защитно облекло, медогонки и всичко необходимо за пчеларството.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">💡</div>
            <h3>Професионални съвети</h3>
            <p>Нашият екип има дългогодишен опит в пчеларството и винаги е готов да ви помогне с експертни съвети.</p>
          </div>
          
          <div className="about-card">
            <div className="about-icon">🚚</div>
            <h3>Бърза доставка</h3>
            <p>Осигуряваме бърза и надеждна доставка на поръчаните продукти до всяка точка на страната.</p>
          </div>
        </div>

        <div className="about-info">
          <div className="about-info-content">
            <h3>Защо да изберете САКИ?</h3>
            <ul className="about-list">
              <li>Производство и търговия с пчеларски инвентар</li>
              <li>Пчелен мед от региона на Дупница</li>
              <li>Качествени продукти от доказани производители</li>
              <li>Конкурентни цени и гъвкави отстъпки</li>
              <li>Индивидуален подход към всеки клиент</li>
              <li>Победител в конкурса "Златна фирма"</li>
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
          align-items: center;
          gap: 0.75rem;
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
        }

        @media (max-width: 768px) {
          .about-info {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  )
}