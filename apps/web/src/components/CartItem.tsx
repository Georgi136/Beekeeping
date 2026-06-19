import { CartItem as CartItemType, useCart } from '../context/CartContext'
import { useLanguage } from '../i18n/LanguageContext'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()
  const { formatPrice } = useLanguage()
  const atStockLimit = typeof item.stock === 'number' && item.quantity >= item.stock

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
        {typeof item.stock === 'number' && <p className="cart-item-stock">Налични: {item.stock}</p>}
      </div>
      <div className="cart-item-quantity">
        <button 
          className="qty-btn"
          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
        >
          −
        </button>
        <input 
          type="number" 
          min="1" 
          value={item.quantity}
          onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value, 10) || 1)}
          className="qty-input"
        />
        <button 
          className="qty-btn"
          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
          disabled={atStockLimit}
        >
          +
        </button>
      </div>
      <div className="cart-item-subtotal">
        {formatPrice(item.price * item.quantity)}
      </div>
      <button 
        className="cart-item-remove"
        onClick={() => removeFromCart(item.productId)}
      >
        ×
      </button>

      <style>{`
        .cart-item {
          display: grid;
          grid-template-columns: 80px 1fr 120px 120px 40px;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #eee;
          background: white;
        }

        .cart-item:hover {
          background: #f9f9f9;
        }

        .cart-item-image {
          width: 80px;
          height: 80px;
          border-radius: 0.375rem;
          overflow: hidden;
        }

        .cart-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cart-item-details {
          min-width: 0;
        }

        .cart-item-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin: 0 0 0.25rem 0;
        }

        .cart-item-price {
          font-size: 0.875rem;
          color: var(--color-text-light);
          margin: 0;
        }

        .cart-item-stock {
          margin: 0.25rem 0 0;
          font-size: 0.8rem;
          color: #6b7280;
        }

        .cart-item-quantity {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          background: white;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--color-primary);
          transition: background 0.2s;
        }

        .qty-btn:hover {
          background: #f5f5f5;
        }

        .qty-btn:disabled {
          opacity: 0.45;
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

        .cart-item-subtotal {
          text-align: right;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .cart-item-remove {
          width: 40px;
          height: 40px;
          border: none;
          background: #fee;
          color: #c33;
          border-radius: 0.375rem;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cart-item-remove:hover {
          background: #fdd;
          color: #a00;
        }

        @media (max-width: 768px) {
          .cart-item {
            grid-template-columns: 60px 1fr 30px;
            gap: 0.5rem;
          }

          .cart-item-quantity {
            display: none;
          }

          .cart-item-subtotal {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
