interface Product {
  id: number
  name: string
  description: string
  icon: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Кошери и рамки',
    description: 'Различни типове кошери - Дадан, Лангстрот, Универсални рамки и восъчни листове',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1470509037663-253ce784d5be?w=400&q=80'
  },
  {
    id: 2,
    name: 'Защитно облекло',
    description: 'Пчеларски костюми, ръкавици, мрежи и други средства за защита',
    icon: '👕',
    image: 'https://images.unsplash.com/photo-1470509037663-253ce784d5be?w=400&q=80'
  },
  {
    id: 3,
    name: 'Центрофуги',
    description: 'Ръчни и електрически центрофуги за ефективно извличане на мед',
    icon: '🍯',
    image: 'https://images.unsplash.com/photo-1470509037663-253ce784d5be?w=400&q=80'
  },
  {
    id: 4,
    name: 'Инвентар и инструменти',
    description: 'Пчеларски ножове, вилици, димници и друг специализиран инвентар',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1470509037663-253ce784d5be?w=400&q=80'
  },
  {
    id: 5,
    name: 'Подхранващи сиропи',
    description: 'Качествени подхранващи сиропи и добавки за пчелите',
    icon: '🫗',
    image: 'https://images.unsplash.com/photo-1470509037663-253ce784d5be?w=400&q=80'
  },
  {
    id: 6,
    name: 'Прополисов мехлем',
    description: 'Природен прополисов мехлем за локална грижа и регенерация',
    icon: '🧴',
    image: 'https://images.unsplash.com/photo-1516685018646-549d4b9fb70f?w=400&q=80'
  }
]

export default function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">Нашите продукти</h2>
        <p className="section-subtitle">
          Разгледайте нашия богат асортимент от пчеларско оборудване и консумативи
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
                Запитване →
              </a>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>Не намерихте това, което търсите?</p>
          <a href="#contact" className="btn btn-primary">Свържете се с нас</a>
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