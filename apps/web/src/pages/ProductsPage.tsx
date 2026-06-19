import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import { apiUrl, resolveProductImage } from '../config'
import { useLanguage } from '../i18n/LanguageContext'

interface Product {
  id: number
  slug: string
  name: string
  category: string
  categoryName: string
  price: number
  salePrice?: number | null
  image: string
  description: string
  stock: number
}

interface Category {
  id: number
  name: string
  slug: string
}

interface Promotion {
  id: number
  title: string
  bannerText?: string | null
  active: boolean
}

export default function ProductsPage() {
  const navigate = useNavigate()
  const { storefrontSettings } = useLanguage()
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Set initial category from query parameter
  useEffect(() => {
    const category = searchParams.get('category')
    if (category === 'honey') setSelectedCategory('pchelni-produkti')
    else if (category === 'equipment') setSelectedCategory('pchelarstvo')
    else if (category) setSelectedCategory(category)
  }, [searchParams])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, categoriesResponse, promotionsResponse] = await Promise.all([
          fetch(apiUrl('/api/products')),
          fetch(apiUrl('/api/categories')),
          fetch(apiUrl('/api/promotions'))
        ])
        if (!productsResponse.ok || !categoriesResponse.ok) throw new Error('Не успяхме да заредим продуктите.')
        const data = await productsResponse.json()
        const categoryData = await categoriesResponse.json()
        const promotionData = promotionsResponse.ok ? await promotionsResponse.json() : []
        const mappedData = data.map((p: Product) => ({
          ...p,
          image: resolveProductImage(p.image)
        }))
        setProducts(mappedData)
        setCategories(categoryData)
        setPromotions(promotionData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Възникна грешка при зареждането.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const pageTitle = selectedCategory === 'pchelni-produkti'
    ? 'Пчелни продукти от САКИ | Натурален мед и прополис'
    : selectedCategory === 'pchelarstvo'
      ? 'Пчеларски инвентар и оборудване | САКИ Дупница'
      : 'Продукти | Мед и пчеларски инвентар от САКИ'

  const selectedCategoryName = categories.find((category) => category.slug === selectedCategory)?.name
  const activePromotion = promotions.find((promotion) => promotion.active && promotion.bannerText)
  const storeDisabled = storefrontSettings.enabled === 'false'
  const showAnnouncement = storefrontSettings.announcementEnabled === 'true' && storefrontSettings.announcementText

  const pageDescription = selectedCategory === 'pchelni-produkti'
    ? 'Разгледайте пчелните продукти на САКИ - натурален мед от собствени пчелини и прополис с гарантирано качество.'
    : selectedCategory === 'pchelarstvo'
      ? 'Кошери, рамки, центрофуги, защитно облекло и практичен пчеларски инвентар за начинаещи и опитни пчелари.'
      : 'Мед, пчелни продукти, кошери, центрофуги и пчеларски инвентар от семеен магазин САКИ в Дупница.'

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} path="/products" />
      <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>{selectedCategoryName || 'Нашите продукти'}</h1>
          <p>Натурален мед, пчелни продукти и оборудване за работа в пчелина</p>
        </div>

        {activePromotion && (
          <div className="promotion-banner">
            <strong>{activePromotion.title}</strong>
            <span>{activePromotion.bannerText}</span>
          </div>
        )}

        {showAnnouncement && <div className="promotion-banner">{storefrontSettings.announcementText}</div>}

        {storeDisabled && (
          <div className="error-message">Онлайн магазинът временно не приема поръчки. Можете да разгледате продуктите и да се свържете с нас.</div>
        )}

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
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.slug ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-products">В тази категория все още няма продукти.</div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    slug={product.slug}
                    name={product.name}
                    price={product.price}
                    salePrice={product.salePrice}
                    image={product.image}
                    stock={product.stock}
                    onViewDetails={(idOrSlug) => navigate(`/products/${idOrSlug}`)}
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

        .promotion-banner {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          background: #fff7ed;
          color: #7c2d12;
          border: 1px solid #fed7aa;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
          text-align: center;
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

        @media (max-width: 520px) {
          .products-page {
            padding: 2rem 0;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
      </div>
    </>
  )
}
