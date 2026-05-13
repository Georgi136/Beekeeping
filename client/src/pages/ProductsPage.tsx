import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { API_BASE_URL, resolveProductImage } from '../config'

interface Product {
  id: number
  name: string
  category: 'honey' | 'equipment'
  price: number
  image: string
  description: string
  stock: number
}

export default function ProductsPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'honey' | 'equipment'>('all')

  // Set initial category from query parameter
  useEffect(() => {
    const category = searchParams.get('category')
    if (category === 'honey' || category === 'equipment') {
      setSelectedCategory(category)
    }
  }, [searchParams])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`)
        if (!response.ok) throw new Error('Failed to fetch products')
        const data = await response.json()
        const mappedData = data.map((p: Product) => ({
          ...p,
          image: resolveProductImage(p.image)
        }))
        setProducts(mappedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Наши продукти</h1>
          <p>Най-качествено оборудване и мед от нашата пасека</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Зареждане...</div>
        ) : (
          <>
            <div className="category-filters">
              <button
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                Всички продукти
              </button>
              <button
                className={`filter-btn ${selectedCategory === 'honey' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('honey')}
              >
                🍯 Пчелни продукти
              </button>
              <button
                className={`filter-btn ${selectedCategory === 'equipment' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('equipment')}
              >
                🔧 За пчелари
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-products">Няма намерени продукти в тази категория</div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    onViewDetails={(id) => navigate(`/products/${id}`)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        .products-page {
          min-height: 100vh;
          padding: 3rem 0;
          background: #f9f9f9;
        }

        .products-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .products-header h1 {
          font-size: 2.5rem;
          color: var(--color-secondary);
          margin: 0 0 1rem 0;
        }

        .products-header p {
          font-size: 1.125rem;
          color: var(--color-text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .error-message {
          background: #fee;
          color: #c33;
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 2rem;
          border-left: 4px solid #c33;
        }

        .loading {
          text-align: center;
          padding: 3rem;
          font-size: 1.1rem;
          color: var(--color-text-light);
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--color-primary);
          background: white;
          color: var(--color-primary);
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
        }

        .filter-btn:hover {
          background: var(--color-primary);
          color: white;
        }

        .filter-btn.active {
          background: var(--color-primary);
          color: white;
        }

        .no-products {
          text-align: center;
          padding: 3rem;
          color: var(--color-text-light);
          font-size: 1.1rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .products-header h1 {
            font-size: 2rem;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}
