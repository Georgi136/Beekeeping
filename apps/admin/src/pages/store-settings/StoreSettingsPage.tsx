import type { FormEvent } from 'react'

interface StoreSettingsPageProps {
  settings: Record<string, string>
  loading: boolean
  onSettingsChange: (settings: Record<string, string>) => void
  onSave: (event: FormEvent) => void
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
  allowOutOfStockOrders: 'false'
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
          <label>Общи условия<input placeholder="/terms" value={value('termsUrl')} onChange={(event) => update('termsUrl', event.target.value)} /></label>
          <label>Политика за поверителност<input placeholder="/privacy" value={value('privacyUrl')} onChange={(event) => update('privacyUrl', event.target.value)} /></label>
        </section>
      </div>

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
