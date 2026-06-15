import { useEffect, useMemo, useState, type FormEvent } from 'react'

interface HomepageSettingsPageProps {
  settings: Record<string, string>
  loading: boolean
  onSettingsChange: (settings: Record<string, string>) => void
  onSave: (event: FormEvent) => void
  onPublish: () => void
  onResetDraft: () => void
  onUploadImage: (file: File) => Promise<string>
  adminFetch: (path: string, options?: RequestInit) => Promise<any>
}

type Language = 'bg' | 'en'
type Viewport = 'desktop' | 'mobile'
type SectionKey = 'hero' | 'products' | 'about' | 'contact'

const sections: Array<{ key: SectionKey; label: string; description: string }> = [
  { key: 'hero', label: 'Основен банер', description: 'Първото впечатление на началната страница' },
  { key: 'products', label: 'Продукти', description: 'Представяне на каталога' },
  { key: 'about', label: 'За нас', description: 'История, пчелини и качество' },
  { key: 'contact', label: 'Контакти', description: 'Адрес, телефон и работно време' }
]

const defaults = {
  heroImageUrl: 'https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  aboutImageUrl: 'https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  heroCtaHoneyLink: '/products?category=pchelni-produkti',
  heroCtaEquipmentLink: '/products?category=pchelarstvo'
}

export default function HomepageSettingsPage(props: HomepageSettingsPageProps) {
  const { settings, loading, onSettingsChange, onSave, onPublish, onResetDraft, onUploadImage } = props
  const [section, setSection] = useState<SectionKey>('hero')
  const [language, setLanguage] = useState<Language>('bg')
  const [viewport, setViewport] = useState<Viewport>('desktop')
  const [uploading, setUploading] = useState(false)
  const [storeProducts, setStoreProducts] = useState<Array<{ id: number; name: string; stock: number; status: string }>>([])

  useEffect(() => {
    props.adminFetch('/api/admin/products')
      .then((products) => setStoreProducts(Array.isArray(products) ? products : []))
      .catch(() => setStoreProducts([]))
  }, [])

  const order = useMemo(() => {
    const saved = settings['homepageDraft.meta.sectionOrder'] || 'hero,products,about,contact'
    return saved.split(',').filter((key): key is SectionKey => sections.some((item) => item.key === key))
  }, [settings])

  function draftKey(key: string) {
    return `homepageDraft.${language}.${key}`
  }

  function value(key: string) {
    return settings[draftKey(key)] || settings[`homepage.${language}.${key}`] || defaults[key as keyof typeof defaults] || ''
  }

  function update(key: string, nextValue: string) {
    onSettingsChange({ ...settings, [draftKey(key)]: nextValue })
  }

  function metaValue(key: string, fallback = '') {
    return settings[`homepageDraft.meta.${key}`] || settings[`homepage.meta.${key}`] || fallback
  }

  function updateMeta(key: string, nextValue: string) {
    onSettingsChange({ ...settings, [`homepageDraft.meta.${key}`]: nextValue })
  }

  const featuredProductIds = metaValue('products.featuredIds').split(',').filter(Boolean)

  function toggleFeaturedProduct(id: number) {
    const value = String(id)
    const nextIds = featuredProductIds.includes(value)
      ? featuredProductIds.filter((item) => item !== value)
      : [...featuredProductIds, value]
    updateMeta('products.featuredIds', nextIds.join(','))
  }

  function isVisible(key: SectionKey) {
    return (settings[`homepageDraft.meta.${key}.visible`] || settings[`homepage.meta.${key}.visible`] || 'true') !== 'false'
  }

  function setVisible(key: SectionKey, visible: boolean) {
    onSettingsChange({ ...settings, [`homepageDraft.meta.${key}.visible`]: String(visible) })
  }

  function moveSection(key: SectionKey, direction: -1 | 1) {
    const index = order.indexOf(key)
    const target = index + direction
    if (target < 0 || target >= order.length) return
    const next = [...order]
    ;[next[index], next[target]] = [next[target], next[index]]
    onSettingsChange({ ...settings, 'homepageDraft.meta.sectionOrder': next.join(',') })
  }

  async function upload(key: 'heroImageUrl' | 'aboutImageUrl', file?: File) {
    if (!file) return
    setUploading(true)
    try {
      update(key, await onUploadImage(file))
    } finally {
      setUploading(false)
    }
  }

  const previewSections = order.filter(isVisible)

  return (
    <section className="homepage-configurator">
      <header className="page-heading configurator-heading">
        <div>
          <h2>Начална страница</h2>
          <p>Редактирайте чернова, прегледайте резултата и публикувайте когато сте готови.</p>
        </div>
        <div className="actions">
          <button type="button" onClick={onResetDraft}>Върни публикуваното</button>
          <button type="button" className="erp-btn primary" onClick={onPublish} disabled={loading}>Публикувай</button>
        </div>
      </header>

      <div className="configurator-toolbar">
        <div className="report-tabs">
          <button type="button" className={language === 'bg' ? 'active' : ''} onClick={() => setLanguage('bg')}>Български</button>
          <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>English</button>
        </div>
        <div className="report-tabs">
          <button type="button" className={viewport === 'desktop' ? 'active' : ''} onClick={() => setViewport('desktop')}>Desktop</button>
          <button type="button" className={viewport === 'mobile' ? 'active' : ''} onClick={() => setViewport('mobile')}>Mobile</button>
        </div>
      </div>

      <form className="configurator-grid" onSubmit={onSave}>
        <aside className="section-rail">
          <strong>Секции</strong>
          {order.map((key, index) => {
            const item = sections.find((candidate) => candidate.key === key)!
            return (
              <div className={`section-rail-item ${section === key ? 'selected' : ''}`} key={key}>
                <button type="button" className="section-select" onClick={() => setSection(key)}>
                  <span>{item.label}</span>
                  <small>{item.description}</small>
                </button>
                <div className="section-controls">
                  <label className="compact-check"><input type="checkbox" checked={isVisible(key)} onChange={(event) => setVisible(key, event.target.checked)} /> Видима</label>
                  <button type="button" title="Нагоре" disabled={index === 0} onClick={() => moveSection(key, -1)}>↑</button>
                  <button type="button" title="Надолу" disabled={index === order.length - 1} onClick={() => moveSection(key, 1)}>↓</button>
                </div>
              </div>
            )
          })}
        </aside>

        <main className="section-editor">
          {section === 'hero' && <>
            <EditorTitle title="Основен банер" subtitle="Кратко, ясно послание и силна снимка." />
            <ImageField label="Фонова снимка" value={value('heroImageUrl')} onChange={(next) => update('heroImageUrl', next)} onUpload={(file) => upload('heroImageUrl', file)} uploading={uploading} />
            <label>Заглавие<input value={value('heroTitle')} onChange={(event) => update('heroTitle', event.target.value)} /></label>
            <label>Подзаглавие<textarea value={value('heroSubtitle')} onChange={(event) => update('heroSubtitle', event.target.value)} /></label>
            <div className="two">
              <label>Бутон 1<input value={value('heroCtaHoney')} onChange={(event) => update('heroCtaHoney', event.target.value)} /></label>
              <label>Линк 1<input value={value('heroCtaHoneyLink')} onChange={(event) => update('heroCtaHoneyLink', event.target.value)} /></label>
              <label>Бутон 2<input value={value('heroCtaEquipment')} onChange={(event) => update('heroCtaEquipment', event.target.value)} /></label>
              <label>Линк 2<input value={value('heroCtaEquipmentLink')} onChange={(event) => update('heroCtaEquipmentLink', event.target.value)} /></label>
            </div>
          </>}

          {section === 'products' && <>
            <EditorTitle title="Продукти" subtitle="Текстът над продуктовата селекция на началната страница." />
            <label>Заглавие<input value={value('productsTitle')} onChange={(event) => update('productsTitle', event.target.value)} /></label>
            <label>Описание<textarea value={value('productsSubtitle')} onChange={(event) => update('productsSubtitle', event.target.value)} /></label>
            <label>Максимален брой продукти<input type="number" min="1" max="12" value={metaValue('products.limit', '6')} onChange={(event) => updateMeta('products.limit', event.target.value)} /></label>
            <div className="field-group">
              <span className="field-title">Продукти на началната страница</span>
              <p className="muted">Изберете конкретни продукти. Ако няма избрани, ще се покажат препоръчаните продукти от каталога.</p>
              <div className="featured-product-list">
                {storeProducts.map((product) => (
                  <label className="featured-product" key={product.id}>
                    <input type="checkbox" checked={featuredProductIds.includes(String(product.id))} onChange={() => toggleFeaturedProduct(product.id)} />
                    <span>{product.name}</span>
                    <small>{product.stock} бр.</small>
                  </label>
                ))}
                {!storeProducts.length && <span className="muted">Няма продукти в онлайн каталога.</span>}
              </div>
            </div>
            <label>Текст под продуктите<input value={value('productsCta')} onChange={(event) => update('productsCta', event.target.value)} /></label>
            <div className="two">
              <label>Текст на бутона<input value={value('productsCtaButton')} onChange={(event) => update('productsCtaButton', event.target.value)} /></label>
              <label>Линк на бутона<input value={value('productsCtaLink')} onChange={(event) => update('productsCtaLink', event.target.value)} placeholder="/products" /></label>
            </div>
          </>}

          {section === 'about' && <>
            <EditorTitle title="За нас" subtitle="Разкажете историята на бизнеса и подчертавайте доверието." />
            <ImageField label="Снимка за секцията" value={value('aboutImageUrl')} onChange={(next) => update('aboutImageUrl', next)} onUpload={(file) => upload('aboutImageUrl', file)} uploading={uploading} />
            <label>Заглавие<input value={value('aboutTitle')} onChange={(event) => update('aboutTitle', event.target.value)} /></label>
            <label>Кратко представяне<textarea value={value('aboutSubtitle')} onChange={(event) => update('aboutSubtitle', event.target.value)} /></label>
            <label>Заглавие история<input value={value('storyTitle')} onChange={(event) => update('storyTitle', event.target.value)} /></label>
            <label>История - абзац 1<textarea value={value('storyText1')} onChange={(event) => update('storyText1', event.target.value)} /></label>
            <label>История - абзац 2<textarea value={value('storyText2')} onChange={(event) => update('storyText2', event.target.value)} /></label>
            <label>Заглавие пчелини<input value={value('apiariesTitle')} onChange={(event) => update('apiariesTitle', event.target.value)} /></label>
            <label>Пчелини - абзац 1<textarea value={value('apiariesText1')} onChange={(event) => update('apiariesText1', event.target.value)} /></label>
            <label>Пчелини - абзац 2<textarea value={value('apiariesText2')} onChange={(event) => update('apiariesText2', event.target.value)} /></label>
            <label>Заглавие качество<input value={value('certificationTitle')} onChange={(event) => update('certificationTitle', event.target.value)} /></label>
            <label>Качество - абзац 1<textarea value={value('certificationText1')} onChange={(event) => update('certificationText1', event.target.value)} /></label>
            <label>Качество - абзац 2<textarea value={value('certificationText2')} onChange={(event) => update('certificationText2', event.target.value)} /></label>
          </>}

          {section === 'contact' && <>
            <EditorTitle title="Контакти" subtitle="Данните, по които клиентите могат да ви намерят." />
            <label>Заглавие<input value={value('contactTitle')} onChange={(event) => update('contactTitle', event.target.value)} /></label>
            <label>Описание<textarea value={value('contactSubtitle')} onChange={(event) => update('contactSubtitle', event.target.value)} /></label>
            <div className="two">
              <label>Адрес<input value={value('addressValue')} onChange={(event) => update('addressValue', event.target.value)} /></label>
              <label>Телефон<input value={value('phoneValue')} onChange={(event) => update('phoneValue', event.target.value)} /></label>
              <label>Имейл<input value={value('emailValue')} onChange={(event) => update('emailValue', event.target.value)} /></label>
              <label>Уебсайт<input value={value('websiteValue')} onChange={(event) => update('websiteValue', event.target.value)} /></label>
              <label>Facebook<input value={value('facebookValue')} onChange={(event) => update('facebookValue', event.target.value)} /></label>
              <label>Работно време делник<input value={value('workingHoursWeekday')} onChange={(event) => update('workingHoursWeekday', event.target.value)} /></label>
              <label>Работно време събота<input value={value('workingHoursSaturday')} onChange={(event) => update('workingHoursSaturday', event.target.value)} /></label>
              <label>Footer слоган<input value={value('footerTagline')} onChange={(event) => update('footerTagline', event.target.value)} /></label>
            </div>
          </>}

          <button className="erp-btn primary save-draft" disabled={loading}>Запази чернова</button>
        </main>

        <aside className="preview-pane">
          <div className={`site-preview ${viewport}`}>
            {previewSections.map((key) => <PreviewSection key={key} section={key} value={value} products={storeProducts} featuredProductIds={featuredProductIds} productLimit={Number(metaValue('products.limit', '6'))} />)}
            <footer>{value('footerTagline')}</footer>
          </div>
        </aside>
      </form>
    </section>
  )
}

function EditorTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return <header className="editor-title"><h3>{title}</h3><p>{subtitle}</p></header>
}

function ImageField(props: { label: string; value: string; uploading: boolean; onChange: (value: string) => void; onUpload: (file?: File) => void }) {
  return <div className="image-field"><label>{props.label}<input value={props.value} onChange={(event) => props.onChange(event.target.value)} /></label><label className="upload-button">{props.uploading ? 'Качване...' : 'Качи снимка'}<input type="file" accept="image/*" onChange={(event) => props.onUpload(event.target.files?.[0])} disabled={props.uploading} /></label>{props.value && <img src={props.value} alt="" />}</div>
}

function PreviewSection({ section, value, products, featuredProductIds, productLimit }: { section: SectionKey; value: (key: string) => string; products: Array<{ id: number; name: string }>; featuredProductIds: string[]; productLimit: number }) {
  if (section === 'hero') return <section className="preview-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 35, 20, .58), rgba(10, 35, 20, .58)), url("${value('heroImageUrl')}")` }}><h1>{value('heroTitle')}</h1><p>{value('heroSubtitle')}</p><div><button>{value('heroCtaHoney')}</button><button>{value('heroCtaEquipment')}</button></div></section>
  if (section === 'products') {
    const selected = featuredProductIds.length ? products.filter((product) => featuredProductIds.includes(String(product.id))) : products
    return <section className="preview-section"><h2>{value('productsTitle')}</h2><p>{value('productsSubtitle')}</p><div className="preview-products">{selected.slice(0, productLimit || 6).map((product) => <i key={product.id}>{product.name}</i>)}</div></section>
  }
  if (section === 'about') return <section className="preview-section"><h2>{value('aboutTitle')}</h2><p>{value('aboutSubtitle')}</p><img src={value('aboutImageUrl')} alt="" /><h3>{value('storyTitle')}</h3><p>{value('storyText1')}</p></section>
  return <section className="preview-section"><h2>{value('contactTitle')}</h2><p>{value('contactSubtitle')}</p><small>{value('addressValue')} · {value('phoneValue')}</small></section>
}
