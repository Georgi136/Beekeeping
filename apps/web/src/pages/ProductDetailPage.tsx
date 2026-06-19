import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../i18n/LanguageContext'
import SEO from '../components/SEO'
import { apiUrl, resolveProductImage } from '../config'
import { absoluteUrl, SITE_NAME } from '../seo'
import { plainTextFromProductHtml, sanitizeProductHtml } from '../utils/sanitizeProductHtml'

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

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { formatPrice, storefrontCurrency, storefrontSettings } = useLanguage()
  
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(apiUrl(`/api/products/${id}`))
        if (!response.ok) throw new Error('Продуктът не е намерен.')
        const data = await response.json()
        data.image = resolveProductImage(data.image)
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Възникна грешка при зареждането.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, stock: storefrontSettings.allowOutOfStockOrders === 'true' ? undefined : product.stock }, quantity)
      setAddedToCart(true)
      setTimeout(() => setAddedToCart(false), 2000)
    }
  }

  if (loading) {
    return (
      <>
        <SEO title="Продукт | САКИ" description="Продукт от пчеларски магазин САКИ в Дупница." path={`/products/${id ?? ''}`} />
        <div className="product-detail-page">
          <div className="container">
            <div className="loading">Зареждане...</div>
          </div>
        </div>
      </>
    )
  }

  if (error || !product) {
    return (
      <>
        <SEO title="Продуктът не е намерен | САКИ" description="Този продукт не е наличен в каталога на САКИ." path={`/products/${id ?? ''}`} noindex />
        <div className="product-detail-page">
          <div className="container">
            <div className="error-message">{error || 'Продуктът не е намерен.'}</div>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Назад към продуктите
            </button>
          </div>
        </div>
      </>
    )
  }

  const categoryLabel = product.categoryName || (product.category === 'pchelni-produkti' ? 'Пчелни продукти' : 'За пчелари')
  const inStock = product.stock > 0
  const canOrderOutOfStock = storefrontSettings.allowOutOfStockOrders === 'true'
  const canOrder = storefrontSettings.enabled !== 'false' && (inStock || canOrderOutOfStock)
  const maxQuantity = canOrderOutOfStock ? undefined : product.stock
  const productTitle = `${product.name} | ${SITE_NAME}`
  const currentPrice = product.salePrice ?? product.price
  const plainDescription = plainTextFromProductHtml(product.description)
  const productDescription = `${plainDescription} Цена: ${formatPrice(currentPrice)} ${inStock ? 'В наличност.' : 'Временно изчерпан.'}`
  const safeDescriptionHtml = sanitizeProductHtml(product.description)
  const schemaPrice = storefrontCurrency === 'EUR' ? currentPrice / 1.95583 : currentPrice
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: plainDescription,
    image: absoluteUrl(product.image),
    brand: {
      '@type': 'Brand',
      name: 'САКИ'
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/products/${product.slug}`),
      priceCurrency: storefrontCurrency,
      price: Number(schemaPrice.toFixed(2)),
      availability: inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
    }
  }

  return (
    <div className="product-detail-page">
      <SEO
        title={productTitle}
        description={productDescription}
        path={`/products/${product.slug}`}
        image={product.image}
        type="product"
        jsonLd={productJsonLd}
      />
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/products')}>
          ← Назад
        </button>

        <div className="product-detail-container">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>

            <div className="product-detail-price">
              {product.salePrice && <span className="old-price">{formatPrice(product.price)}</span>}
              <span className="price-amount">{formatPrice(currentPrice)}</span>
            </div>

            <div className="product-detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Количество:</label>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity === 1}
                  >
                    −
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max={maxQuantity}
                    value={quantity}
                    onChange={(e) => {
                      const nextQuantity = Math.max(1, parseInt(e.target.value, 10) || 1)
                      setQuantity(maxQuantity ? Math.min(maxQuantity, nextQuantity) : nextQuantity)
                    }}
                    className="qty-input"
                  />
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(maxQuantity ? Math.min(maxQuantity, quantity + 1) : quantity + 1)}
                    disabled={Boolean(maxQuantity && quantity >= maxQuantity)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="btn btn-primary btn-large"
                onClick={handleAddToCart}
                disabled={!canOrder}
              >
                {storefrontSettings.enabled === 'false' ? 'Магазинът е спрян' : 'Добави в количката'}
              </button>

              {addedToCart && (
                <div className="added-message">✓ Добавено в количката.</div>
              )}
            </div>

            {!inStock && (
              <div className="stock-warning">
                В момента няма наличност.
              </div>
            )}

            <div className="product-info">
              <div className="info-item">
                <span className="info-label">Наличност:</span>
                <span className="info-value">
                  {inStock ? `${product.stock} бр.` : 'Временно изчерпан'}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Категория:</span>
                <span className="info-value">{categoryLabel}</span>
              </div>
            </div>

            <div className="product-detail-description">
              <h3>Описание</h3>
              <div className="rich-product-description" dangerouslySetInnerHTML={{ __html: safeDescriptionHtml }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-detail-page {
          min-height: 100vh;
          padding: 2rem 0;
          background: #f9f9f9;
        }

        .back-btn {
          background: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          color: var(--color-primary);
          font-size: 1rem;
          margin-bottom: 2rem;
          transition: all 0.2s;
        }

        .back-btn:hover {
          background: var(--color-primary);
          color: white;
        }

        .product-detail-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .product-detail-image {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #f5f5f5;
        }

        .product-detail-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-detail-content {
          display: flex;
          flex-direction: column;
        }

        .product-detail-name {
          font-size: 2rem;
          color: var(--color-secondary);
          margin: 1rem 0 1.5rem 0;
        }

        .product-detail-price {
          font-size: 2.5rem;
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .old-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 1.3rem;
          font-weight: 500;
        }

        .price-amount {
          margin-right: 0.25rem;
        }

        .price-currency {
          font-size: 1.5rem;
        }

        .product-detail-description {
          margin-bottom: 2rem;
        }

        .product-detail-description h3 {
          color: var(--color-secondary);
          margin: 0 0 0.75rem 0;
          font-size: 1.1rem;
        }

        .rich-product-description {
          color: var(--color-text-light);
          line-height: 1.6;
        }

        .rich-product-description p,
        .rich-product-description h3,
        .rich-product-description h4,
        .rich-product-description ul,
        .rich-product-description ol,
        .rich-product-description blockquote {
          margin: 0;
        }

        .rich-product-description p,
        .rich-product-description ul,
        .rich-product-description ol,
        .rich-product-description blockquote {
          margin-bottom: 1rem;
        }

        .rich-product-description h3,
        .rich-product-description h4 {
          color: var(--color-secondary);
          margin-bottom: 0.75rem;
        }

        .rich-product-description ul,
        .rich-product-description ol {
          padding-left: 1.35rem;
        }

        .rich-product-description img {
          display: block;
          width: min(100%, 560px);
          height: auto;
          margin: 1rem 0;
          border-radius: 0.5rem;
          background: #f5f5f5;
        }

        .rich-product-description a {
          color: var(--color-primary);
          font-weight: 600;
        }

        .rich-product-description blockquote {
          padding: 0.75rem 1rem;
          border-left: 4px solid var(--color-primary);
          background: #fff8e7;
          color: var(--color-secondary);
        }

        .stock-warning {
          background: #fff3cd;
          color: #856404;
          padding: 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1.5rem;
          border-left: 4px solid #ffc107;
        }

        .product-detail-actions {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .quantity-selector {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quantity-selector label {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .quantity-controls {
          display: flex;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .qty-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--color-primary);
          transition: background 0.2s;
        }

        .qty-btn:hover:not(:disabled) {
          background: #f5f5f5;
        }

        .qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .qty-input {
          width: 50px;
          border: none;
          text-align: center;
          font-size: 1rem;
          background: white;
        }

        .qty-input::-webkit-outer-spin-button,
        .qty-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .btn-large {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          min-width: 250px;
        }

        .added-message {
          color: #155724;
          background: #d4edda;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          width: 100%;
          text-align: center;
        }

        .product-info {
          padding-top: 1.5rem;
          margin-bottom: 2rem;
          border-top: 1px solid #eee;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          font-size: 0.95rem;
        }

        .info-label {
          font-weight: 500;
          color: var(--color-secondary);
        }

        .info-value {
          color: var(--color-text-light);
        }

        @media (max-width: 768px) {
          .product-detail-page {
            padding: 1rem 0;
          }

          .back-btn {
            margin-bottom: 1rem;
          }

          .product-detail-container {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
          }

          .product-detail-image {
            aspect-ratio: 4 / 3;
          }

          .product-detail-name {
            font-size: 1.5rem;
            margin: 0.75rem 0 1rem;
          }

          .product-detail-price {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .product-detail-actions {
            flex-direction: column;
            margin-bottom: 1.5rem;
          }

          .btn-large {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
