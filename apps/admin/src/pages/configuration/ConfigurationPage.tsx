import type { FormEvent } from 'react'
import type { SiteEnvironment } from '../admin/types'

interface ConfigurationPageProps {
  settings: Record<string, string>
  environment: SiteEnvironment | null
  loading: boolean
  onSettingsChange: (settings: Record<string, string>) => void
  onSave: (event: FormEvent) => void
}

const fields = [
  ['smtpHost', 'SMTP host', 'smtp.example.com'],
  ['smtpPort', 'SMTP port', '587'],
  ['smtpUser', 'SMTP user', ''],
  ['smtpFrom', 'SMTP from', 'SakiMed <info@sakimed.com>'],
  ['smtpSecure', 'SMTP secure', 'false']
]

function Status({ active }: { active: boolean }) {
  return <span className={`config-status ${active ? 'ok' : 'missing'}`}>{active ? 'Настроено' : 'Липсва'}</span>
}

export default function ConfigurationPage({ settings, environment, loading, onSettingsChange, onSave }: ConfigurationPageProps) {
  function update(key: string, value: string) {
    onSettingsChange({ ...settings, [`technical.${key}`]: value })
  }

  return (
    <section className="settings-page">
      <header className="page-heading">
        <div>
          <h2>Конфигурация</h2>
          <p>Технически настройки за изпращане на имейли и статус на средата.</p>
        </div>
      </header>

      <form className="erp-card" onSubmit={onSave}>
        <h3>Изпращане на имейли</h3>
        <div className="settings-grid">
          {fields.map(([key, label, placeholder]) => (
            <label key={key}>{label}<input placeholder={placeholder} value={settings[`technical.${key}`] || ''} onChange={(event) => update(key, event.target.value)} /></label>
          ))}
        </div>
        <button className="erp-btn primary" disabled={loading}>Запази конфигурацията</button>
      </form>

      <section className="erp-card">
        <h3>Статус на средата</h3>
        <p className="muted">Секретните стойности се управляват чрез environment variables и не се показват в браузъра.</p>
        <div className="config-list">
          <div><span>Среда</span><strong>{environment?.nodeEnv || '-'}</strong></div>
          <div><span>База данни</span><strong>{environment?.database || '-'}</strong><Status active={Boolean(environment?.databaseConfigured)} /></div>
          <div><span>JWT secret</span><Status active={Boolean(environment?.jwtConfigured)} /></div>
          <div><span>Blob storage</span><Status active={Boolean(environment?.blobStorageConfigured)} /></div>
          <div><span>SMTP password</span><Status active={Boolean(environment?.smtpPasswordConfigured)} /></div>
          <div><span>Client origin</span><strong>{environment?.clientOrigin || '-'}</strong></div>
        </div>
      </section>
    </section>
  )
}
