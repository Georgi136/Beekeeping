import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CheckoutForm from '../components/CheckoutForm'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { cart, getTotalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-state">
            <p>Няма продукти в количката</p>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Назад към продукти
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Завършване на поръчката</h1>

        <div className="checkout-layout">
          <div className="checkout-form-section">
            <CheckoutForm onOrderSuccess={() => setTimeout(() => navigate('/'), 3000)} />
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Вашата поръчка</h3>

              <div className="order-items">
                {cart.map(item => (
                  <div key={item.productId} className="order-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">x{item.quantity}</span>
                    <span className="item-price">{(item.price * item.quantity).toFixed(2)} лв</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Общо</span>
                <span className="total-price">{getTotalPrice().toFixed(2)} лв</span>
              </div>

              <div className="info-box">
                <p>Кратки бележки:</p>
                <ul>
                  <li>Проверете внимателно адреса</li>
                  <li>Ще се свържем за потвърждение</li>
                  <li>Доставка в рамките на 2-3 работни дни</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-page {
          min-height: 100vh;
          padding: 2rem 0;
          background: #f9f9f9;
        }

        .checkout-page h1 {
          font-size: 2rem;
          color: var(--color-secondary);
          margin-bottom: 2rem;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 0.5rem;
        }

        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
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

        .order-items {
          margin-bottom: 1rem;
        }

        .order-item {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 0.5rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.95rem;
        }

        .item-name {
          color: var(--color-secondary);
          font-weight: 500;
        }

        .item-qty {
          color: var(--color-text-light);
        }

        .item-price {
          text-align: right;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .summary-divider {
          height: 1px;
          background: #eee;
          margin: 1rem 0;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .total-price {
          color: var(--color-primary);
          font-size: 1.3rem;
        }

        .info-box {
          margin-top: 1.5rem;
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 0.375rem;
          font-size: 0.85rem;
        }

        .info-box p {
          margin: 0 0 0.5rem 0;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .info-box ul {
          margin: 0;
          padding-left: 1.25rem;
          color: var(--color-text-light);
        }

        .info-box li {
          margin: 0.25rem 0;
        }

        @media (max-width: 768px) {
          .checkout-layout {
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
