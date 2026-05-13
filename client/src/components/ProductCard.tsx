import React from 'react'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  onViewDetails?: (id: number) => void
}

export default function ProductCard({ id, name, price, image, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart({ id, name, price, image }, 1)
    // Could add a toast notification here
  }

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(id)
    }
  }

  return (
    <div className="product-card-shopping" onClick={handleCardClick}>
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{name}</h3>
        <div className="product-card-price">{price} лв</div>
        <div className="product-card-actions">
          {onViewDetails && (
            <button 
              className="btn btn-link" 
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(id);
              }}
            >
              Детаили
            </button>
          )}
          <button 
            className="btn btn-primary" 
            onClick={handleAddToCart}
          >
            Добави в количката
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
          height: 200px;
          overflow: hidden;
          background: #f5f5f5;
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
      `}</style>
    </div>
  )
}
