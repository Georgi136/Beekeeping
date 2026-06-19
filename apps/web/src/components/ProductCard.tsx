import React from 'react'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../i18n/LanguageContext'

interface ProductCardProps {
  id: number
  slug?: string
  name: string
  price: number
  salePrice?: number | null
  image: string
  stock?: number
  onViewDetails?: (idOrSlug: number | string) => void
}

export default function ProductCard({ id, slug, name, price, salePrice, image, stock, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart()
  const { formatPrice, storefrontSettings } = useLanguage()
  const displayPrice = salePrice ?? price
  const canOrderOutOfStock = storefrontSettings.allowOutOfStockOrders === 'true'
  const canOrder = storefrontSettings.enabled !== 'false' && (canOrderOutOfStock || stock !== 0)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart({ id, slug, name, price, salePrice, image, stock: canOrderOutOfStock ? undefined : stock }, 1)
  }

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(slug || id)
    }
  }

  return (
    <div className="product-card-shopping" onClick={handleCardClick}>
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{name}</h3>
        <div className="product-card-price">
          {salePrice && <span className="old-price">{formatPrice(price)}</span>}
          <span>{formatPrice(displayPrice)}</span>
        </div>
        <div className="product-card-actions">
          {onViewDetails && (
            <button 
              className="btn btn-link" 
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(slug || id);
              }}
            >
              Детайли
            </button>
          )}
          <button 
            className="btn btn-primary" 
            onClick={handleAddToCart}
            disabled={!canOrder}
          >
            {storefrontSettings.enabled === 'false' ? 'Магазинът е спрян' : stock === 0 && !canOrderOutOfStock ? 'Изчерпан' : 'Добави в количката'}
          </button>
        </div>
      </div>

      <style>{`
        .product-card-shopping {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }

        .product-card-shopping:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .product-image-container {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card-shopping:hover .product-image {
          transform: scale(1.05);
        }

        .product-card-content {
          padding: 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-card-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin: 0 0 0.75rem 0;
        }

        .product-card-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1rem;
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
          flex-wrap: wrap;
        }

        .old-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 1rem;
          font-weight: 500;
        }

        .product-card-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: auto;
        }

        .btn-link {
          flex: 0 0 auto;
          padding: 0.5rem 1rem;
          background: white;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: 0.375rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-link:hover {
          background: var(--color-primary);
          color: white;
        }

        @media (max-width: 640px) {
          .product-card-shopping {
            border-radius: 0.5rem;
          }

          .product-image-container {
            aspect-ratio: 1 / 1;
            padding: 0.75rem;
            background: #f8fafc;
          }

          .product-image {
            object-fit: contain;
            border-radius: 0.375rem;
          }

          .product-card-shopping:hover .product-image {
            transform: none;
          }

          .product-card-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
