import React, { useEffect, useMemo, useState } from 'react'
import SEO from '../components/SEO'
import { apiUrl, resolveProductImage } from '../config'

type Tab = 'products' | 'categories' | 'promotions' | 'landing-pages' | 'orders'

interface Category {
  id: number
  name: string
  slug: string
  description?: string | null
  sortOrder: number
}

interface ProductImage {
  url: string
  alt?: string | null
  sortOrder: number
}

interface Product {
  id: number
  name: string
  slug: string
  categoryId: number
  categoryName: string
  price: number
  salePrice?: number | null
  image: string
  images: ProductImage[]
  shortDescription?: string | null
  description: string
  stock: number
  status: 'DRAFT' | 'ACTIVE' | 'ARCHIVED'
  featured: boolean
  seoTitle?: string | null
  seoDescription?: string | null
}

interface Promotion {
  id: number
  title: string
  slug: string
  description?: string | null
  discountType: 'PERCENTAGE' | 'FIXED'
  discountValue: number
  startsAt?: string | null
  endsAt?: string | null
  active: boolean
  bannerText?: string | null
  productId?: number | null
  categoryId?: number | null
  seoTitle?: string | null
  seoDescription?: string | null
}

interface LandingPage {
  id: number
  title: string
  slug: string
  heroTitle: string
  heroSubtitle?: string | null
  heroImage?: string | null
  ctaText?: string | null
  ctaLink?: string | null
  sections: unknown
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  seoTitle?: string | null
  seoDescription?: string | null
}

interface Order {
  id: string
  customerName: string
  phone: string
  email?: string | null
  address: string
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'COMPLETED' | 'CANCELLED'
  totalPrice: number
  createdAt: string
  items: Array<{ name: string; quantity: number; price: number }>
}

const emptyProduct = {
  name: '',
  slug: '',
  categoryId: '',
  price: '',
  salePrice: '',
  stock: '0',
  status: 'ACTIVE' as Product['status'],
  featured: false,
  shortDescription: '',
  description: '',
  seoTitle: '',
  seoDescription: '',
  imagesText: ''
}

const emptyPromotion = {
  title: '',
  slug: '',
  description: '',
  discountType: 'PERCENTAGE' as Promotion['discountType'],
  discountValue: '0',
  startsAt: '',
  endsAt: '',
  active: false,
  bannerText: '',
  productId: '',
  categoryId: '',
  seoTitle: '',
  seoDescription: ''
}

const emptyLandingPage = {
  title: '',
  slug: '',
  heroTitle: '',
  heroSubtitle: '',
  heroImage: '',
  ctaText: '',
  ctaLink: '',
  status: 'DRAFT' as LandingPage['status'],
  seoTitle: '',
  seoDescription: '',
  sectionsText: '[\n  {\n    "type": "text",\n    "title": "Заглавие на секцията",\n    "body": "Текст за специалния продукт или кампания."\n  }\n]'
}

export default function AdminPage() {
  const [token, setToken] = useState(() => localStorage.getItem('admin_token') || '')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [tab, setTab] = useState<Tab>('products')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [landingPages, setLandingPages] = useState<LandingPage[]>([])
  const [orders, setOrders] = useState<Order[]>([])

  const [editingProductId, setEditingProductId] = useState<number | null>(null)
  const [productForm, setProductForm] = useState(emptyProduct)
  const [categoryForm, setCategoryForm] = useState({ name: '', slug: '', description: '', sortOrder: '0' })
  const [editingPromotionId, setEditingPromotionId] = useState<number | null>(null)
  const [promotionForm, setPromotionForm] = useState(emptyPromotion)
  const [editingLandingId, setEditingLandingId] = useState<number | null>(null)
  const [landingForm, setLandingForm] = useState(emptyLandingPage)

  const authHeaders = useMemo(() => ({
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  }), [token])

  async function adminFetch(path: string, options: RequestInit = {}) {
    const response = await fetch(apiUrl(path), {
      ...options,
      credentials: 'include',
      headers: {
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...authHeaders,
        ...(options.headers || {})
      }
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Заявката не беше успешна.' }))
      throw new Error(error.error || 'Заявката не беше успешна.')
    }

    if (response.status === 204) return null
    return response.json()
  }

  async function loadAdminData() {
    const [categoryData, productData, promotionData, landingData, orderData] = await Promise.all([
      adminFetch('/api/admin/categories'),
      adminFetch('/api/admin/products'),
      adminFetch('/api/admin/promotions'),
      adminFetch('/api/admin/landing-pages'),
      adminFetch('/api/admin/orders')
    ])
    setCategories(categoryData)
    setProducts(productData)
    setPromotions(promotionData)
    setLandingPages(landingData)
    setOrders(orderData.orders || [])
  }

  useEffect(() => {
    if (!token) return
    adminFetch('/api/auth/me')
      .then(() => {
        setIsAuthenticated(true)
        return loadAdminData()
      })
      .catch(() => {
        setToken('')
        localStorage.removeItem('admin_token')
      })
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const data = await adminFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginForm)
      })
      setToken(data.token)
      localStorage.setItem('admin_token', data.token)
      setIsAuthenticated(true)
      await loadAdminData()
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Неуспешен вход.')
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await adminFetch('/api/auth/logout', { method: 'POST' }).catch(() => undefined)
    setToken('')
    localStorage.removeItem('admin_token')
    setIsAuthenticated(false)
  }

  function editProduct(product: Product) {
    setEditingProductId(product.id)
    setProductForm({
      name: product.name,
      slug: product.slug,
      categoryId: String(product.categoryId),
      price: String(product.price),
      salePrice: product.salePrice ? String(product.salePrice) : '',
      stock: String(product.stock),
      status: product.status,
      featured: product.featured,
      shortDescription: product.shortDescription || '',
      description: product.description,
      seoTitle: product.seoTitle || '',
      seoDescription: product.seoDescription || '',
      imagesText: product.images.map((image) => image.url).join('\n')
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function submitProduct(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        ...productForm,
        categoryId: Number(productForm.categoryId || categories[0]?.id),
        price: Number(productForm.price),
        salePrice: productForm.salePrice ? Number(productForm.salePrice) : null,
        stock: Number(productForm.stock),
        images: productForm.imagesText
          .split('\n')
          .map((url) => url.trim())
          .filter(Boolean)
          .map((url, index) => ({ url, alt: productForm.name, sortOrder: index }))
      }
      await adminFetch(editingProductId ? `/api/admin/products/${editingProductId}` : '/api/admin/products', {
        method: editingProductId ? 'PUT' : 'POST',
        body: JSON.stringify(payload)
      })
      setProductForm(emptyProduct)
      setEditingProductId(null)
      await loadAdminData()
      setStatus('Продуктът е запазен.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Грешка при запазване.')
    } finally {
      setLoading(false)
    }
  }

  async function uploadProductImage(file: File) {
    const data = new FormData()
    data.append('file', file)
    data.append('alt', productForm.name || 'Продукт САКИ')
    const asset = await adminFetch('/api/admin/media', { method: 'POST', body: data })
    setProductForm((prev) => ({
      ...prev,
      imagesText: [prev.imagesText, asset.url].filter(Boolean).join('\n')
    }))
  }

  async function submitCategory(e: React.FormEvent) {
    e.preventDefault()
    await adminFetch('/api/admin/categories', {
      method: 'POST',
      body: JSON.stringify({
        ...categoryForm,
        sortOrder: Number(categoryForm.sortOrder)
      })
    })
    setCategoryForm({ name: '', slug: '', description: '', sortOrder: '0' })
    await loadAdminData()
  }

  function editPromotion(promotion: Promotion) {
    setEditingPromotionId(promotion.id)
    setPromotionForm({
      title: promotion.title,
      slug: promotion.slug,
      description: promotion.description || '',
      discountType: promotion.discountType,
      discountValue: String(promotion.discountValue),
      startsAt: promotion.startsAt?.slice(0, 16) || '',
      endsAt: promotion.endsAt?.slice(0, 16) || '',
      active: promotion.active,
      bannerText: promotion.bannerText || '',
      productId: promotion.productId ? String(promotion.productId) : '',
      categoryId: promotion.categoryId ? String(promotion.categoryId) : '',
      seoTitle: promotion.seoTitle || '',
      seoDescription: promotion.seoDescription || ''
    })
  }

  async function submitPromotion(e: React.FormEvent) {
    e.preventDefault()
    const payload = {
      ...promotionForm,
      discountValue: Number(promotionForm.discountValue),
      productId: promotionForm.productId ? Number(promotionForm.productId) : null,
      categoryId: promotionForm.categoryId ? Number(promotionForm.categoryId) : null,
      startsAt: promotionForm.startsAt ? new Date(promotionForm.startsAt).toISOString() : null,
      endsAt: promotionForm.endsAt ? new Date(promotionForm.endsAt).toISOString() : null
    }
    await adminFetch(editingPromotionId ? `/api/admin/promotions/${editingPromotionId}` : '/api/admin/promotions', {
      method: editingPromotionId ? 'PUT' : 'POST',
      body: JSON.stringify(payload)
    })
    setPromotionForm(emptyPromotion)
    setEditingPromotionId(null)
    await loadAdminData()
  }

  function editLandingPage(page: LandingPage) {
    setEditingLandingId(page.id)
    setLandingForm({
      title: page.title,
      slug: page.slug,
      heroTitle: page.heroTitle,
      heroSubtitle: page.heroSubtitle || '',
      heroImage: page.heroImage || '',
      ctaText: page.ctaText || '',
      ctaLink: page.ctaLink || '',
      status: page.status,
      seoTitle: page.seoTitle || '',
      seoDescription: page.seoDescription || '',
      sectionsText: JSON.stringify(page.sections || [], null, 2)
    })
  }

  async function submitLandingPage(e: React.FormEvent) {
    e.preventDefault()
    let sections: unknown
    try {
      sections = JSON.parse(landingForm.sectionsText || '[]')
    } catch {
      setStatus('Секциите трябва да са валиден JSON.')
      return
    }

    await adminFetch(editingLandingId ? `/api/admin/landing-pages/${editingLandingId}` : '/api/admin/landing-pages', {
      method: editingLandingId ? 'PUT' : 'POST',
      body: JSON.stringify({ ...landingForm, sections })
    })
    setLandingForm(emptyLandingPage)
    setEditingLandingId(null)
    await loadAdminData()
  }

  async function updateOrder(id: string, orderStatus: Order['status']) {
    await adminFetch(`/api/admin/orders/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status: orderStatus })
    })
    await loadAdminData()
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <SEO title="Админ панел | САКИ" description="Вход за управление на магазина САКИ." path="/admin" noindex />
        <form className="login-box" onSubmit={handleLogin}>
          <h1>Админ панел</h1>
          <label>Имейл</label>
          <input type="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required />
          <label>Парола</label>
          <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
          {status && <p className="status error">{status}</p>}
          <button className="btn btn-primary" disabled={loading}>{loading ? 'Влизане...' : 'Влез'}</button>
        </form>
        <style>{adminStyles}</style>
      </div>
    )
  }

  return (
    <div className="admin-container">
      <SEO title="Управление на магазина | САКИ" description="Административен панел за САКИ." path="/admin" noindex />
      <div className="container">
        <header className="admin-header">
          <div>
            <h1>Управление на магазина</h1>
            <p>Продукти, промоции, специални страници и поръчки.</p>
          </div>
          <button className="btn btn-secondary" onClick={handleLogout}>Изход</button>
        </header>

        {status && <p className="status">{status}</p>}

        <nav className="admin-tabs">
          {[
            ['products', 'Продукти'],
            ['categories', 'Категории'],
            ['promotions', 'Промоции'],
            ['landing-pages', 'Специални страници'],
            ['orders', 'Поръчки']
          ].map(([key, label]) => (
            <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key as Tab)}>{label}</button>
          ))}
        </nav>

        {tab === 'products' && (
          <section className="admin-grid">
            <form className="admin-card" onSubmit={submitProduct}>
              <h2>{editingProductId ? 'Редактиране на продукт' : 'Нов продукт'}</h2>
              <input placeholder="Име" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} required />
              <input placeholder="slug-za-produkta" value={productForm.slug} onChange={(e) => setProductForm({ ...productForm, slug: e.target.value })} />
              <select value={productForm.categoryId} onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })} required>
                <option value="">Изберете категория</option>
                {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
              </select>
              <div className="two-col">
                <input type="number" step="0.01" placeholder="Цена" value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} required />
                <input type="number" step="0.01" placeholder="Промо цена" value={productForm.salePrice} onChange={(e) => setProductForm({ ...productForm, salePrice: e.target.value })} />
              </div>
              <div className="two-col">
                <input type="number" placeholder="Наличност" value={productForm.stock} onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })} />
                <select value={productForm.status} onChange={(e) => setProductForm({ ...productForm, status: e.target.value as Product['status'] })}>
                  <option value="ACTIVE">Публикуван</option>
                  <option value="DRAFT">Чернова</option>
                  <option value="ARCHIVED">Архивиран</option>
                </select>
              </div>
              <label className="checkbox"><input type="checkbox" checked={productForm.featured} onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })} /> Препоръчан продукт</label>
              <textarea placeholder="Кратко описание" value={productForm.shortDescription} onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })} />
              <textarea placeholder="Пълно описание" rows={5} value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} required />
              <input placeholder="SEO заглавие" value={productForm.seoTitle} onChange={(e) => setProductForm({ ...productForm, seoTitle: e.target.value })} />
              <textarea placeholder="SEO описание" value={productForm.seoDescription} onChange={(e) => setProductForm({ ...productForm, seoDescription: e.target.value })} />
              <textarea placeholder="Изображения - по един URL на ред" rows={4} value={productForm.imagesText} onChange={(e) => setProductForm({ ...productForm, imagesText: e.target.value })} />
              <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && uploadProductImage(e.target.files[0])} />
              <div className="actions">
                <button className="btn btn-primary" disabled={loading}>{editingProductId ? 'Запази' : 'Добави'}</button>
                {editingProductId && <button type="button" className="btn btn-secondary" onClick={() => { setEditingProductId(null); setProductForm(emptyProduct) }}>Отказ</button>}
              </div>
            </form>
            <div className="admin-list">
              {products.map((product) => (
                <article key={product.id} className="admin-row">
                  <img src={resolveProductImage(product.image)} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.categoryName} | {product.price} лв. | {product.stock} бр. | {product.status}</p>
                  </div>
                  <div className="actions">
                    <button className="btn btn-secondary" onClick={() => editProduct(product)}>Редактирай</button>
                    <button className="btn btn-danger" onClick={() => adminFetch(`/api/admin/products/${product.id}`, { method: 'DELETE' }).then(loadAdminData)}>Архивирай</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {tab === 'categories' && (
          <section className="admin-grid">
            <form className="admin-card" onSubmit={submitCategory}>
              <h2>Нова категория</h2>
              <input placeholder="Име" value={categoryForm.name} onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })} required />
              <input placeholder="slug" value={categoryForm.slug} onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })} />
              <textarea placeholder="Описание" value={categoryForm.description} onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })} />
              <input type="number" placeholder="Подредба" value={categoryForm.sortOrder} onChange={(e) => setCategoryForm({ ...categoryForm, sortOrder: e.target.value })} />
              <button className="btn btn-primary">Добави категория</button>
            </form>
            <div className="admin-list">
              {categories.map((category) => (
                <article key={category.id} className="admin-row text-only">
                  <div>
                    <h3>{category.name}</h3>
                    <p>/{category.slug}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {tab === 'promotions' && (
          <section className="admin-grid">
            <form className="admin-card" onSubmit={submitPromotion}>
              <h2>{editingPromotionId ? 'Редактиране на промоция' : 'Нова промоция'}</h2>
              <input placeholder="Заглавие" value={promotionForm.title} onChange={(e) => setPromotionForm({ ...promotionForm, title: e.target.value })} required />
              <input placeholder="slug" value={promotionForm.slug} onChange={(e) => setPromotionForm({ ...promotionForm, slug: e.target.value })} />
              <textarea placeholder="Описание" value={promotionForm.description} onChange={(e) => setPromotionForm({ ...promotionForm, description: e.target.value })} />
              <div className="two-col">
                <select value={promotionForm.discountType} onChange={(e) => setPromotionForm({ ...promotionForm, discountType: e.target.value as Promotion['discountType'] })}>
                  <option value="PERCENTAGE">Процент</option>
                  <option value="FIXED">Фиксирана сума</option>
                </select>
                <input type="number" step="0.01" placeholder="Отстъпка" value={promotionForm.discountValue} onChange={(e) => setPromotionForm({ ...promotionForm, discountValue: e.target.value })} />
              </div>
              <div className="two-col">
                <input type="datetime-local" value={promotionForm.startsAt} onChange={(e) => setPromotionForm({ ...promotionForm, startsAt: e.target.value })} />
                <input type="datetime-local" value={promotionForm.endsAt} onChange={(e) => setPromotionForm({ ...promotionForm, endsAt: e.target.value })} />
              </div>
              <input placeholder="Текст за банер" value={promotionForm.bannerText} onChange={(e) => setPromotionForm({ ...promotionForm, bannerText: e.target.value })} />
              <select value={promotionForm.productId} onChange={(e) => setPromotionForm({ ...promotionForm, productId: e.target.value })}>
                <option value="">За всички/категория</option>
                {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
              </select>
              <select value={promotionForm.categoryId} onChange={(e) => setPromotionForm({ ...promotionForm, categoryId: e.target.value })}>
                <option value="">Без категория</option>
                {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
              </select>
              <label className="checkbox"><input type="checkbox" checked={promotionForm.active} onChange={(e) => setPromotionForm({ ...promotionForm, active: e.target.checked })} /> Активна промоция</label>
              <input placeholder="SEO заглавие" value={promotionForm.seoTitle} onChange={(e) => setPromotionForm({ ...promotionForm, seoTitle: e.target.value })} />
              <textarea placeholder="SEO описание" value={promotionForm.seoDescription} onChange={(e) => setPromotionForm({ ...promotionForm, seoDescription: e.target.value })} />
              <button className="btn btn-primary">{editingPromotionId ? 'Запази' : 'Добави промоция'}</button>
            </form>
            <div className="admin-list">
              {promotions.map((promotion) => (
                <article key={promotion.id} className="admin-row text-only">
                  <div>
                    <h3>{promotion.title}</h3>
                    <p>{promotion.active ? 'Активна' : 'Неактивна'} | {promotion.discountValue} {promotion.discountType === 'PERCENTAGE' ? '%' : 'лв.'}</p>
                  </div>
                  <button className="btn btn-secondary" onClick={() => editPromotion(promotion)}>Редактирай</button>
                </article>
              ))}
            </div>
          </section>
        )}

        {tab === 'landing-pages' && (
          <section className="admin-grid">
            <form className="admin-card" onSubmit={submitLandingPage}>
              <h2>{editingLandingId ? 'Редактиране на страница' : 'Нова специална страница'}</h2>
              <input placeholder="Заглавие" value={landingForm.title} onChange={(e) => setLandingForm({ ...landingForm, title: e.target.value })} required />
              <input placeholder="slug" value={landingForm.slug} onChange={(e) => setLandingForm({ ...landingForm, slug: e.target.value })} />
              <input placeholder="Hero заглавие" value={landingForm.heroTitle} onChange={(e) => setLandingForm({ ...landingForm, heroTitle: e.target.value })} required />
              <textarea placeholder="Hero подзаглавие" value={landingForm.heroSubtitle} onChange={(e) => setLandingForm({ ...landingForm, heroSubtitle: e.target.value })} />
              <input placeholder="Hero изображение URL" value={landingForm.heroImage} onChange={(e) => setLandingForm({ ...landingForm, heroImage: e.target.value })} />
              <div className="two-col">
                <input placeholder="CTA текст" value={landingForm.ctaText} onChange={(e) => setLandingForm({ ...landingForm, ctaText: e.target.value })} />
                <input placeholder="CTA линк" value={landingForm.ctaLink} onChange={(e) => setLandingForm({ ...landingForm, ctaLink: e.target.value })} />
              </div>
              <select value={landingForm.status} onChange={(e) => setLandingForm({ ...landingForm, status: e.target.value as LandingPage['status'] })}>
                <option value="DRAFT">Чернова</option>
                <option value="PUBLISHED">Публикувана</option>
                <option value="ARCHIVED">Архивирана</option>
              </select>
              <textarea rows={8} value={landingForm.sectionsText} onChange={(e) => setLandingForm({ ...landingForm, sectionsText: e.target.value })} />
              <input placeholder="SEO заглавие" value={landingForm.seoTitle} onChange={(e) => setLandingForm({ ...landingForm, seoTitle: e.target.value })} />
              <textarea placeholder="SEO описание" value={landingForm.seoDescription} onChange={(e) => setLandingForm({ ...landingForm, seoDescription: e.target.value })} />
              <button className="btn btn-primary">{editingLandingId ? 'Запази' : 'Добави страница'}</button>
            </form>
            <div className="admin-list">
              {landingPages.map((page) => (
                <article key={page.id} className="admin-row text-only">
                  <div>
                    <h3>{page.title}</h3>
                    <p>/special/{page.slug} | {page.status}</p>
                  </div>
                  <button className="btn btn-secondary" onClick={() => editLandingPage(page)}>Редактирай</button>
                </article>
              ))}
            </div>
          </section>
        )}

        {tab === 'orders' && (
          <section className="admin-list">
            {orders.map((order) => (
              <article key={order.id} className="admin-row text-only">
                <div>
                  <h3>{order.customerName} | {order.totalPrice} лв.</h3>
                  <p>{order.phone} {order.email ? `| ${order.email}` : ''}</p>
                  <p>{order.address}</p>
                  <p>{order.items.map((item) => `${item.name} x${item.quantity}`).join(', ')}</p>
                </div>
                <select value={order.status} onChange={(e) => updateOrder(order.id, e.target.value as Order['status'])}>
                  <option value="PENDING">Нова</option>
                  <option value="CONFIRMED">Потвърдена</option>
                  <option value="SHIPPED">Изпратена</option>
                  <option value="COMPLETED">Завършена</option>
                  <option value="CANCELLED">Отказана</option>
                </select>
              </article>
            ))}
          </section>
        )}
      </div>
      <style>{adminStyles}</style>
    </div>
  )
}

const adminStyles = `
  .admin-login-wrapper,
  .admin-container {
    min-height: 100vh;
    background: #f8f9fa;
    padding: 3rem 0;
  }

  .admin-login-wrapper {
    display: grid;
    place-items: center;
  }

  .login-box,
  .admin-card,
  .admin-row {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }

  .login-box {
    width: min(420px, calc(100% - 2rem));
    padding: 2rem;
    display: grid;
    gap: 0.8rem;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .admin-header h1,
  .login-box h1 {
    margin: 0;
    color: var(--color-secondary);
  }

  .admin-header p {
    margin: 0.25rem 0 0;
    color: var(--color-text-light);
  }

  .admin-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .admin-tabs button {
    border: 1px solid #e5e7eb;
    background: white;
    color: var(--color-secondary);
    border-radius: 0.375rem;
    padding: 0.7rem 1rem;
    cursor: pointer;
  }

  .admin-tabs button.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
  }

  .admin-grid {
    display: grid;
    grid-template-columns: minmax(320px, 420px) 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .admin-card {
    padding: 1.25rem;
    display: grid;
    gap: 0.75rem;
    position: sticky;
    top: 5rem;
  }

  .admin-card h2 {
    margin: 0 0 0.5rem;
    color: var(--color-secondary);
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font: inherit;
  }

  textarea {
    resize: vertical;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .checkbox {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--color-secondary);
  }

  .checkbox input {
    width: auto;
  }

  .admin-list {
    display: grid;
    gap: 0.75rem;
  }

  .admin-row {
    padding: 1rem;
    display: grid;
    grid-template-columns: 72px 1fr auto;
    gap: 1rem;
    align-items: center;
  }

  .admin-row.text-only {
    grid-template-columns: 1fr auto;
  }

  .admin-row img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 0.375rem;
    background: #f3f4f6;
  }

  .admin-row h3 {
    margin: 0 0 0.25rem;
    color: var(--color-secondary);
  }

  .admin-row p {
    margin: 0.15rem 0;
    color: var(--color-text-light);
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .btn-danger {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  .status {
    background: #fffbeb;
    color: #92400e;
    border: 1px solid #fde68a;
    border-radius: 0.375rem;
    padding: 0.75rem;
    margin-bottom: 1rem;
  }

  .status.error {
    background: #fee2e2;
    color: #991b1b;
    border-color: #fecaca;
  }

  @media (max-width: 960px) {
    .admin-grid {
      grid-template-columns: 1fr;
    }

    .admin-card {
      position: static;
    }
  }

  @media (max-width: 680px) {
    .admin-row,
    .admin-row.text-only {
      grid-template-columns: 1fr;
    }

    .two-col {
      grid-template-columns: 1fr;
    }
  }
`
