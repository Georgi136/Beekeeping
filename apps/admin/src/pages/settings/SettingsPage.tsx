import type { FormEvent } from 'react'

interface SettingsPageProps {
  waxSettingsForm: { defaultBuyPriceEur: string }
  loading: boolean
  onWaxSettingsFormChange: (value: { defaultBuyPriceEur: string }) => void
  onSubmitWaxSettings: (event: FormEvent) => void
}

export default function SettingsPage({ waxSettingsForm, loading, onWaxSettingsFormChange, onSubmitWaxSettings }: SettingsPageProps) {
  return (
    <section className="settings-page">
      <form className="erp-card" onSubmit={onSubmitWaxSettings}>
        <h2>Общи настройки</h2>
        <div className="settings-grid">
          <label>Цена изкупуване восък EUR/кг<input type="number" step="0.01" min="0" value={waxSettingsForm.defaultBuyPriceEur} onChange={(e) => onWaxSettingsFormChange({ defaultBuyPriceEur: e.target.value })} /></label>
        </div>
        <button className="erp-btn primary" disabled={loading}>Запази настройки</button>
      </form>
    </section>
  )
}
