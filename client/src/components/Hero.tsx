export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Пчеларски магазин САКИ - Натурален пчелен мед и пчеларски инвентар - Дупница"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Пчеларски Магазин <span className="highlight">САКИ</span>
          </h1>
          <p className="hero-subtitle">
            Професионално оборудване и консумативи за пчелари в Дупница
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">Разгледайте продукти</a>
            <a href="#contact" className="btn btn-secondary">Свържете се с нас</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="bee-icon">🐝</div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
          background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.15;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,251,235,0.9) 0%, rgba(254,243,199,0.9) 100%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-title .highlight {
          color: var(--color-primary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-light);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bee-icon {
          font-size: 12rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 4rem 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta {
            justify-content: center;
          }

          .bee-icon {
            font-size: 8rem;
          }
        }
      `}</style>
    </section>
  )
}