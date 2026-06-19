import type { FormEvent } from 'react'

interface StoreSettingsPageProps {
  settings: Record<string, string>
  loading: boolean
  onSettingsChange: (settings: Record<string, string>) => void
  onSave: (event: FormEvent) => void
}

type StoreReview = {
  name: string
  rating: string
  quote: string
  source: string
}

const defaults: Record<string, string> = {
  storeName: 'SakiMed',
  currency: 'BGN',
  locale: 'bg-BG',
  enabled: 'true',
  pickupEnabled: 'true',
  courierEnabled: 'true',
  cashOnDeliveryEnabled: 'true',
  bankTransferEnabled: 'false',
  cardPaymentEnabled: 'false',
  inventoryTrackingEnabled: 'true',
  allowOutOfStockOrders: 'false',
  googleReviewsUrl: 'https://share.google/EwaSOYGRTzTzdyF4C'
}

const toggleFields = [
  ['enabled', 'Онлайн магазинът е активен', 'Показва каталога и позволява нови поръчки.'],
  ['inventoryTrackingEnabled', 'Следене на наличности', 'Използва наличността на продуктите при приемане на поръчка.'],
  ['allowOutOfStockOrders', 'Поръчки без наличност', 'Позволява покупка на изчерпани продукти.'],
  ['pickupEnabled', 'Вземане от магазина', 'Клиентът може да избере получаване на място.'],
  ['courierEnabled', 'Доставка с куриер', 'Показва куриерската доставка при завършване на поръчката.'],
  ['cashOnDeliveryEnabled', 'Наложен платеж', 'Позволява плащане при получаване.'],
  ['bankTransferEnabled', 'Банков превод', 'Позволява плащане чрез банков превод.'],
  ['cardPaymentEnabled', 'Плащане с карта', 'Показва картово плащане, когато интеграцията е готова.'],
  ['announcementEnabled', 'Информационна лента', 'Показва кратко съобщение в онлайн магазина.']
] as const

function parseReviews(value: string): StoreReview[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    if (!Array.isArray(parsed)) return []
    return parsed.map((review) => ({
      name: typeof review.name === 'string' ? review.name : '',
      rating: typeof review.rating === 'string' || typeof review.rating === 'number' ? String(review.rating) : '5',
      quote: typeof review.quote === 'string' ? review.quote : '',
      source: typeof review.source === 'string' ? review.source : 'Google Maps'
    }))
  } catch {
    return []
  }
}

function serializeReviews(reviews: StoreReview[]) {
  return JSON.stringify(reviews
    .map((review) => ({
      name: review.name.trim(),
      rating: String(Math.min(5, Math.max(1, Number(review.rating) || 5))),
      quote: review.quote.trim(),
      source: review.source.trim() || 'Google Maps'
    })))
}

export default function StoreSettingsPage({ settings, loading, onSettingsChange, onSave }: StoreSettingsPageProps) {
  function value(key: string) {
    return settings[`store.${key}`] ?? defaults[key] ?? ''
  }

  function update(key: string, nextValue: string) {
    onSettingsChange({ ...settings, [`store.${key}`]: nextValue })
  }

  function toggle(key: string) {
    update(key, value(key) === 'true' ? 'false' : 'true')
  }

  const reviews = parseReviews(value('reviewsJson'))

  function updateReview(index: number, key: keyof StoreReview, nextValue: string) {
    update('reviewsJson', serializeReviews(reviews.map((review, reviewIndex) => reviewIndex === index ? { ...review, [key]: nextValue } : review)))
  }

  function addReview() {
    update('reviewsJson', serializeReviews([...reviews, { name: '', rating: '5', quote: '', source: 'Google Maps' }]))
  }

  function removeReview(index: number) {
    update('reviewsJson', serializeReviews(reviews.filter((_, reviewIndex) => reviewIndex !== index)))
  }

  return (
    <form className="store-settings-page" onSubmit={onSave}>
      <header className="page-heading">
        <div>
          <h2>Настройки на онлайн магазина</h2>
          <p>Управление на поръчките, плащанията, доставката и публичните контакти.</p>
        </div>
        <button className="erp-btn primary" disabled={loading}>{loading ? 'Запазване...' : 'Запази настройките'}</button>
      </header>

      <div className="store-settings-grid">
        <section className="erp-card">
          <h3>Основни настройки</h3>
          <label>Име на магазина<input value={value('storeName')} onChange={(event) => update('storeName', event.target.value)} /></label>
          <label>Публичен URL<input placeholder="https://www.sakimed.com" value={value('siteUrl')} onChange={(event) => update('siteUrl', event.target.value)} /></label>
          <div className="two">
            <label>Валута<select value={value('currency')} onChange={(event) => update('currency', event.target.value)}><option value="BGN">BGN - лв.</option><option value="EUR">EUR</option></select></label>
            <label>Език<select value={value('locale')} onChange={(event) => update('locale', event.target.value)}><option value="bg-BG">Български</option><option value="en-US">English</option></select></label>
          </div>
        </section>

        <section className="erp-card">
          <h3>Контакти за клиенти</h3>
          <label>Имейл за контакт<input type="email" placeholder="info@sakimed.com" value={value('supportEmail')} onChange={(event) => update('supportEmail', event.target.value)} /></label>
          <label>Телефон<input placeholder="+359 ..." value={value('supportPhone')} onChange={(event) => update('supportPhone', event.target.value)} /></label>
          <label>Имейл за нови поръчки<input type="email" placeholder="orders@sakimed.com" value={value('orderNotificationEmail')} onChange={(event) => update('orderNotificationEmail', event.target.value)} /></label>
        </section>

        <section className="erp-card">
          <h3>Доставка и минимална поръчка</h3>
          <div className="two">
            <label>Минимална поръчка<input type="number" min="0" step="0.01" placeholder="0.00" value={value('minimumOrderAmount')} onChange={(event) => update('minimumOrderAmount', event.target.value)} /></label>
            <label>Цена за доставка<input type="number" min="0" step="0.01" placeholder="0.00" value={value('flatShippingFee')} onChange={(event) => update('flatShippingFee', event.target.value)} /></label>
          </div>
          <label>Безплатна доставка над<input type="number" min="0" step="0.01" placeholder="0.00" value={value('freeShippingThreshold')} onChange={(event) => update('freeShippingThreshold', event.target.value)} /></label>
          <p className="muted">Сумите са в избраната валута на онлайн магазина.</p>
        </section>

        <section className="erp-card">
          <h3>Линкове и правна информация</h3>
          <label>Facebook<input placeholder="https://facebook.com/..." value={value('facebookUrl')} onChange={(event) => update('facebookUrl', event.target.value)} /></label>
          <label>Instagram<input placeholder="https://instagram.com/..." value={value('instagramUrl')} onChange={(event) => update('instagramUrl', event.target.value)} /></label>
          <label>TikTok<input placeholder="https://www.tiktok.com/@..." value={value('tiktokUrl')} onChange={(event) => update('tiktokUrl', event.target.value)} /></label>
          <label>Google отзиви<input placeholder="https://share.google/..." value={value('googleReviewsUrl')} onChange={(event) => update('googleReviewsUrl', event.target.value)} /></label>
          <label>Общи условия<input placeholder="/terms" value={value('termsUrl')} onChange={(event) => update('termsUrl', event.target.value)} /></label>
          <label>Политика за поверителност<input placeholder="/privacy" value={value('privacyUrl')} onChange={(event) => update('privacyUrl', event.target.value)} /></label>
        </section>
      </div>

      <section className="erp-card">
        <div className="product-images-heading">
          <div>
            <h3>Отзиви от Google Maps</h3>
            <small>Добавете ръчно избрани отзиви, звезди и цитати. Те ще се показват на началната страница.</small>
          </div>
          <div className="mini-actions">
            <button type="button" className="mini-btn" onClick={addReview}>Добави отзив</button>
            <button type="submit" className="mini-btn primary" disabled={loading}>Запази отзивите</button>
          </div>
        </div>

        {reviews.length === 0 && <p className="muted">Все още няма добавени отзиви.</p>}

        <div className="store-reviews-editor">
          {reviews.map((review, index) => (
            <div className="store-review-row" key={index}>
              <div className="two">
                <label>Име на клиента<input value={review.name} onChange={(event) => updateReview(index, 'name', event.target.value)} placeholder="Име от Google Maps" /></label>
                <label>Звезди<select value={review.rating} onChange={(event) => updateReview(index, 'rating', event.target.value)}>
                  <option value="5">5 звезди</option>
                  <option value="4">4 звезди</option>
                  <option value="3">3 звезди</option>
                  <option value="2">2 звезди</option>
                  <option value="1">1 звезда</option>
                </select></label>
              </div>
              <label>Цитат<textarea value={review.quote} onChange={(event) => updateReview(index, 'quote', event.target.value)} placeholder="Поставете текста на отзива от Google Maps" /></label>
              <div className="two">
                <label>Източник<input value={review.source} onChange={(event) => updateReview(index, 'source', event.target.value)} placeholder="Google Maps" /></label>
                <div className="actions"><button type="button" className="mini-btn danger" onClick={() => removeReview(index)}>Премахни</button></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="erp-card">
        <h3>Функции на магазина</h3>
        <div className="store-toggle-grid">
          {toggleFields.map(([key, label, description]) => (
            <label className="store-toggle" key={key}>
              <input type="checkbox" checked={value(key) === 'true'} onChange={() => toggle(key)} />
              <span><strong>{label}</strong><small>{description}</small></span>
            </label>
          ))}
        </div>
      </section>

      <section className="erp-card">
        <h3>Съобщения към клиентите</h3>
        <label>Текст в информационната лента<input placeholder="Безплатна доставка над ..." value={value('announcementText')} onChange={(event) => update('announcementText', event.target.value)} /></label>
        <label>Съобщение след поръчка<textarea placeholder="Благодарим за поръчката. Ще се свържем с Вас за потвърждение." value={value('orderSuccessMessage')} onChange={(event) => update('orderSuccessMessage', event.target.value)} /></label>
      </section>

      <button className="erp-btn primary save-bar" disabled={loading}>{loading ? 'Запазване...' : 'Запази настройките'}</button>
    </form>
  )
}
