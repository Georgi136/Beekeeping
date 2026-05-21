import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import SEO from '../components/SEO'

export default function CartPage() {
  const navigate = useNavigate()
  const { cart, getTotalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <SEO title="Количка | САКИ" description="Вашата количка в онлайн магазина на САКИ." path="/cart" noindex />
        <div className="container">
          <h1>Вашата количка</h1>
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <p>Вашата количка е празна</p>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Продължи с пазаруване
            </button>
          </div>
        </div>
        <style>{`
          .empty-cart {
            text-align: center;
            padding: 4rem 2rem;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .empty-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          .empty-cart p {
            color: var(--color-text-light);
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <SEO title="Количка | САКИ" description="Прегледайте продуктите в количката си преди поръчка." path="/cart" noindex />
      <div className="container">
        <h1>Вашата количка</h1>

        <div className="cart-layout">
          <div className="cart-items-section">
            <div className="cart-items-header">
              <span>{cart.length} продукт{cart.length !== 1 ? 'и' : ''}</span>
              <button className="link-btn" onClick={clearCart}>
                Изчисти количката
              </button>
            </div>

            <div className="cart-items">
              {cart.map(item => (
                <CartItem key={item.productId} item={item} />
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Резюме на поръчката</h3>

              <div className="summary-row">
                <span>Междинна сума:</span>
                <span>{getTotalPrice().toFixed(2)} лв.</span>
              </div>

              <div className="summary-row">
                <span>Доставка:</span>
                <span className="delivery-note">Зависи от адреса</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Общо:</span>
                <span>{getTotalPrice().toFixed(2)} лв.</span>
              </div>

              <button 
                className="btn btn-primary btn-block"
                onClick={() => navigate('/checkout')}
              >
                Към поръчката
              </button>

              <button 
                className="btn btn-secondary btn-block"
                onClick={() => navigate('/products')}
              >
                Продължи с пазаруване
              </button>

              <div className="secure-badge">
                🔒 Сигурна поръчка
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cart-page {
          min-height: 100vh;
          padding: 2rem 0;
          background: #f9f9f9;
        }

        .cart-page h1 {
          font-size: 2rem;
          color: var(--color-secondary);
          margin-bottom: 2rem;
        }

        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
        }

        .cart-items-section {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .cart-items-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #eee;
          font-weight: 500;
        }

        .link-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          font-size: 0.875rem;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .link-btn:hover {
          color: var(--color-secondary);
        }

        .cart-items {
          display: flex;
          flex-direction: column;
        }

        .summary-card {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 2rem;
        }

        .summary-card h3 {
          color: var(--color-secondary);
          margin: 0 0 1.5rem 0;
          font-size: 1.1rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: var(--color-text-light);
        }

        .summary-row.total {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-secondary);
          padding: 1rem 0;
        }

        .delivery-note {
          font-size: 0.85rem;
          color: #999;
        }

        .summary-divider {
          height: 1px;
          background: #eee;
          margin: 1rem 0;
        }

        .btn-block {
          width: 100%;
          margin-top: 1rem;
          padding: 0.875rem;
        }

        .btn-secondary {
          background: white;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        }

        .btn-secondary:hover {
          background: var(--color-primary);
          color: white;
        }

        .secure-badge {
          text-align: center;
          margin-top: 1rem;
          padding: 0.75rem;
          font-size: 0.85rem;
          color: #666;
          border-top: 1px solid #eee;
        }

        @media (max-width: 768px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }

          .summary-card {
            position: static;
          }
        }
      `}</style>
    </div>
  )
}
