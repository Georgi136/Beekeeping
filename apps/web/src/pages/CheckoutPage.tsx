import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../i18n/LanguageContext'
import CheckoutForm, { type CompletedOrder } from '../components/CheckoutForm'
import SEO from '../components/SEO'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { cart, getTotalPrice } = useCart()
  const { formatPrice, storefrontSettings } = useLanguage()
  const [completedOrder, setCompletedOrder] = useState<CompletedOrder | null>(null)
  const subtotal = getTotalPrice()
  const flatShippingFee = Number(storefrontSettings.flatShippingFee || 0)
  const freeShippingThreshold = Number(storefrontSettings.freeShippingThreshold || 0)
  const shippingFee = freeShippingThreshold > 0 && subtotal >= freeShippingThreshold ? 0 : flatShippingFee
  const checkoutTotal = subtotal + shippingFee
  const minimumOrder = Number(storefrontSettings.minimumOrderAmount || 0)
  const storeEnabled = storefrontSettings.enabled !== 'false'
  const meetsMinimumOrder = minimumOrder <= 0 || subtotal >= minimumOrder

  if (completedOrder) {
    const emailMessage = completedOrder.email
      ? completedOrder.notification?.customerSent
        ? `Изпратихме потвърждение на ${completedOrder.email}.`
        : `Поръчката е приета. Автоматичният имейл до ${completedOrder.email} не беше изпратен, затова ще се свържем с вас по телефон.`
      : 'Не е въведен имейл. Ще се свържем с вас по телефон за потвърждение.'

    return (
      <div className="checkout-page">
        <SEO title="Благодарим за поръчката | САКИ" description="Поръчката е приета успешно." path="/checkout" noindex />
        <div className="container">
          <section className="order-complete">
            <div className="order-complete-heading">
              <div className="success-icon">✓</div>
              <p className="eyebrow">Поръчката е приета</p>
              <h1>Благодарим ви за поръчката!</h1>
              <p>{storefrontSettings.orderSuccessMessage}</p>
              <p>Номер на поръчка: <strong>{completedOrder.id}</strong></p>
              <p className="email-status">{emailMessage}</p>
            </div>

            <div className="order-complete-grid">
              <div className="order-complete-card">
                <h2>Детайли за поръчката</h2>
                <div className="detail-row"><span>Име</span><strong>{completedOrder.customerName}</strong></div>
                <div className="detail-row"><span>Телефон</span><strong>{completedOrder.phone}</strong></div>
                {completedOrder.email && <div className="detail-row"><span>Имейл</span><strong>{completedOrder.email}</strong></div>}
                <div className="detail-row"><span>Адрес</span><strong>{completedOrder.address}</strong></div>
                <div className="detail-row"><span>Статус</span><strong>{completedOrder.status}</strong></div>
              </div>

              <div className="order-complete-card">
                <h2>Продукти</h2>
                <div className="order-items complete-items">
                  {completedOrder.items.map((item) => (
                    <div key={item.id} className="order-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">x{item.quantity}</span>
                      <span className="item-price">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="summary-divider"></div>
                <div className="total-row">
                  <span>Общо:</span>
                  <span className="total-price">{formatPrice(completedOrder.totalPrice)}</span>
                </div>
              </div>
            </div>

            <div className="order-complete-actions">
              <button className="btn btn-primary" onClick={() => navigate('/products')}>
                Продължи пазаруването
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/')}>
                Към началната страница
              </button>
            </div>
          </section>
        </div>
        <CheckoutStyles />
      </div>
    )
  }

  if (cart.length === 0 || !storeEnabled || !meetsMinimumOrder) {
    return (
      <div className="checkout-page">
        <SEO title="Поръчка | САКИ" description="Завършване на поръчка в онлайн магазина на САКИ." path="/checkout" noindex />
        <div className="container">
          <div className="empty-state">
            <p>{!storeEnabled ? 'Онлайн магазинът временно не приема поръчки.' : !meetsMinimumOrder ? `Минимална поръчка: ${formatPrice(minimumOrder)}` : 'Няма продукти в количката'}</p>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Назад към продуктите
            </button>
          </div>
        </div>
        <CheckoutStyles />
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <SEO title="Завършване на поръчката | САКИ" description="Попълнете данните за доставка и изпратете поръчката си към САКИ." path="/checkout" noindex />
      <div className="container">
        <h1>Завършване на поръчката</h1>

        <div className="checkout-layout">
          <div className="checkout-form-section">
            <CheckoutForm onOrderSuccess={setCompletedOrder} />
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Преглед на поръчката</h3>

              <div className="order-items">
                {cart.map((item) => (
                  <div key={item.productId} className="order-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">x{item.quantity}</span>
                    <span className="item-price">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Междинна сума:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="total-row">
                <span>Доставка:</span>
                <span>{shippingFee > 0 ? formatPrice(shippingFee) : 'Безплатна'}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Общо:</span>
                <span className="total-price">{formatPrice(checkoutTotal)}</span>
              </div>

              <div className="info-box">
                <p>Важно:</p>
                <ul>
                  <li>Проверете внимателно адреса</li>
                  <li>Ще се свържем с вас за потвърждение</li>
                  <li>Срокът за доставка зависи от адреса и наличността</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutStyles />
    </div>
  )
}

function CheckoutStyles() {
  return (
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

      .summary-card,
      .order-complete-card {
        background: white;
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .summary-card {
        position: sticky;
        top: 2rem;
      }

      .summary-card h3,
      .order-complete-card h2 {
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

      .order-complete {
        max-width: 980px;
        margin: 0 auto;
      }

      .order-complete-heading {
        text-align: center;
        background: white;
        border-radius: 0.5rem;
        padding: 2.5rem 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .success-icon {
        width: 72px;
        height: 72px;
        background: #d4edda;
        color: #155724;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin: 0 auto 1rem;
      }

      .eyebrow {
        color: var(--color-primary);
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
      }

      .order-complete-heading h1 {
        margin-bottom: 1rem;
      }

      .order-complete-heading p {
        color: var(--color-text-light);
        margin: 0.4rem 0;
      }

      .email-status {
        display: inline-block;
        max-width: 680px;
        padding: 0.85rem 1rem;
        border-radius: 0.5rem;
        background: #fff8e7;
        color: var(--color-secondary) !important;
      }

      .order-complete-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }

      .detail-row {
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid #f0f0f0;
      }

      .detail-row span {
        color: var(--color-text-light);
      }

      .detail-row strong {
        color: var(--color-secondary);
        font-weight: 600;
        word-break: break-word;
      }

      .complete-items {
        margin-bottom: 0;
      }

      .order-complete-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 1.5rem;
      }

      @media (max-width: 768px) {
        .checkout-layout,
        .order-complete-grid {
          grid-template-columns: 1fr;
        }

        .summary-card {
          position: static;
        }

        .detail-row {
          grid-template-columns: 1fr;
          gap: 0.25rem;
        }
      }
    `}</style>
  )
}
