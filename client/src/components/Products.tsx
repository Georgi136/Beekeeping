import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

interface Product {
  id: number
  name: string
  description: string
  icon: string
  image: string
}

const PLACEHOLDER_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 420 280%22%3E%3Crect width=%22420%22 height=%22280%22 fill=%22%23f8fafc%22/%3E%3Ctext x=%22210%22 y=%22140%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%2390a4ae%22%3EПродукт%3C/text%3E%3C/svg%3E'

const products: Product[] = [
  {
    id: 1,
    name: 'Кошери и рамки',
    description: 'Различни типове кошери - Дадан, Лангстрот, Uniwersalni рамки и восъчни листове',
    icon: '🏠',
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 2,
    name: 'Защитно облекло',
    description: 'Пчеларски костюми, ръкавици, мрежи и други средства за защита',
    icon: '👕',
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 3,
    name: 'Центрофуги',
    description: 'Ръчни и електрически центрофуги за ефективно извличане на мед',
    icon: '🍯',
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 4,
    name: 'Инвентар и инструменти',
    description: 'Пчеларски ножове, вилици, димници и друг специализиран инвентар',
    icon: '🔧',
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 5,
    name: 'Подхранващи сиропи',
    description: 'Качествени подхранващи сиропи и добавки за пчелите',
    icon: '🫗',
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 6,
    name: 'Прополисов мехлем',
    description: 'Природен прополисов мехлем за локална грижа и регенерация',
    icon: '🧴',
    image: PLACEHOLDER_IMAGE
  }
]

export default function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">{t('productsTitle')}</h2>
        <p className="section-subtitle">
          {t('productsSubtitle')}
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <a href="#contact" className="product-link">
                {t('productInquiry')}
              </a>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>{t('productsCta')}</p>
          <Link to="/products" className="btn btn-primary">{t('productsCtaButton')}</Link>
        </div>
      </div>

      <style>{`
        .products {
          background-color: var(--color-background);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .product-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .product-image {
          width: 100%;
          height: 180px;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 0.75rem;
        }

        .product-description {
          color: var(--color-text-light);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .product-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .product-link:hover {
          color: var(--color-primary-dark);
        }

        .products-cta {
          text-align: center;
          padding: 2rem;
          background: var(--color-white);
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
        }

        .products-cta p {
          color: var(--color-text-light);
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }
      `}</style>
    </section>
  )
}