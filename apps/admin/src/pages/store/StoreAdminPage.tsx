import { useEffect, useState, type FormEvent } from 'react'
import { resolveProductImage } from '../../config'

interface StoreAdminPageProps {
  adminFetch: (path: string, options?: RequestInit) => Promise<any>
  onStatus: (status: string) => void
  onUploadImage: (file: File) => Promise<string>
}

type StoreTab = 'products' | 'orders' | 'categories' | 'promotions'
type ProductStatus = 'ACTIVE' | 'DRAFT' | 'ARCHIVED'

const emptyProduct = { name: '', slug: '', categoryId: '', erpProductId: '', price: '', salePrice: '', stock: '0', status: 'ACTIVE', featured: false, shortDescription: '', description: '', imagesText: '' }
const emptyCategory = { name: '', slug: '', description: '', sortOrder: '0' }
const emptyPromotion = { title: '', slug: '', description: '', discountType: 'PERCENTAGE', discountValue: '0', active: false, bannerText: '' }

function imageUrls(imagesText: string) {
  return imagesText.split('\n').map((url) => url.trim()).filter(Boolean)
}

export default function StoreAdminPage({ adminFetch, onStatus, onUploadImage }: StoreAdminPageProps) {
  const [tab, setTab] = useState<StoreTab>('products')
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [visibleProductStatuses, setVisibleProductStatuses] = useState<Record<ProductStatus, boolean>>({ ACTIVE: true, DRAFT: true, ARCHIVED: false })
  const [categories, setCategories] = useState<any[]>([])
  const [erpProducts, setErpProducts] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [promotions, setPromotions] = useState<any[]>([])
  const [editingProductId, setEditingProductId] = useState<number | null>(null)
  const [productForm, setProductForm] = useState(emptyProduct)
  const [categoryForm, setCategoryForm] = useState(emptyCategory)
  const [promotionForm, setPromotionForm] = useState(emptyPromotion)
  const [uploadingImages, setUploadingImages] = useState(false)
  const products = allProducts.filter((product) => visibleProductStatuses[product.status as ProductStatus])

  async function loadStore() {
    const [productRows, categoryRows, orderRows, promotionRows, erpProductRows] = await Promise.all([
      adminFetch('/api/admin/products'),
      adminFetch('/api/admin/categories'),
      adminFetch('/api/admin/orders'),
      adminFetch('/api/admin/promotions'),
      adminFetch('/api/admin/erp/products')
    ])
    setAllProducts(productRows)
    setCategories(categoryRows)
    setOrders(orderRows.orders || [])
    setPromotions(promotionRows)
    setErpProducts(erpProductRows)
  }

  useEffect(() => { loadStore().catch((error) => onStatus(error.message)) }, [])

  async function submitProduct(event: FormEvent) {
    event.preventDefault()
    await adminFetch(editingProductId ? `/api/admin/products/${editingProductId}` : '/api/admin/products', {
      method: editingProductId ? 'PUT' : 'POST',
      body: JSON.stringify({
        ...productForm,
        categoryId: Number(productForm.categoryId),
        erpProductId: productForm.erpProductId ? Number(productForm.erpProductId) : null,
        price: Number(productForm.price),
        salePrice: productForm.salePrice ? Number(productForm.salePrice) : null,
        stock: Number(productForm.stock),
        images: imageUrls(productForm.imagesText).map((url, index) => ({ url, sortOrder: index }))
      })
    })
    setEditingProductId(null)
    setProductForm(emptyProduct)
    await loadStore()
    onStatus('Продуктът за онлайн магазина е запазен.')
  }

  async function uploadProductImages(files: FileList | null) {
    if (!files?.length) return
    setUploadingImages(true)
    try {
      const uploadedUrls: string[] = []
      for (const file of Array.from(files)) uploadedUrls.push(await onUploadImage(file))
      const currentUrls = imageUrls(productForm.imagesText)
      setProductForm((current) => ({ ...current, imagesText: [...currentUrls, ...uploadedUrls].join('\n') }))
      onStatus(`${uploadedUrls.length} ${uploadedUrls.length === 1 ? 'снимка е качена' : 'снимки са качени'}.`)
    } catch (error) {
      onStatus(error instanceof Error ? error.message : 'Снимките не бяха качени.')
    } finally {
      setUploadingImages(false)
    }
  }

  function removeProductImage(url: string) {
    setProductForm((current) => ({ ...current, imagesText: imageUrls(current.imagesText).filter((imageUrl) => imageUrl !== url).join('\n') }))
  }

  function editProduct(product: any) {
    setEditingProductId(product.id)
    setProductForm({
      name: product.name,
      slug: product.slug,
      categoryId: String(product.categoryId),
      erpProductId: product.erpProductId ? String(product.erpProductId) : '',
      price: String(product.price),
      salePrice: product.salePrice ? String(product.salePrice) : '',
      stock: String(product.stock),
      status: product.status,
      featured: product.featured,
      shortDescription: product.shortDescription || '',
      description: product.description,
      imagesText: (product.images || []).map((image: any) => image.url).join('\n')
    })
  }

  async function removeProduct(product: any) {
    if (!window.confirm(`Да премахна ли "${product.name}" от уеб магазина?`)) return
    await adminFetch(`/api/admin/products/${product.id}`, { method: 'DELETE' })
    if (editingProductId === product.id) {
      setEditingProductId(null)
      setProductForm(emptyProduct)
    }
    await loadStore()
    onStatus('Продуктът е премахнат от уеб магазина.')
  }

  async function submitCategory(event: FormEvent) {
    event.preventDefault()
    await adminFetch('/api/admin/categories', { method: 'POST', body: JSON.stringify({ ...categoryForm, sortOrder: Number(categoryForm.sortOrder) }) })
    setCategoryForm(emptyCategory)
    await loadStore()
  }

  async function submitPromotion(event: FormEvent) {
    event.preventDefault()
    await adminFetch('/api/admin/promotions', { method: 'POST', body: JSON.stringify({ ...promotionForm, discountValue: Number(promotionForm.discountValue), productId: null, categoryId: null, startsAt: null, endsAt: null }) })
    setPromotionForm(emptyPromotion)
    await loadStore()
  }

  async function updateOrder(id: string, status: string) {
    await adminFetch(`/api/admin/orders/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) })
    await loadStore()
  }

  return (
    <section className="settings-page">
      <header className="page-heading"><div><h2>Онлайн магазин</h2><p>Каталог, поръчки, категории и промоции на публичния сайт.</p></div></header>
      <nav className="report-tabs">
        {([['products', 'Продукти'], ['orders', 'Поръчки'], ['categories', 'Категории'], ['promotions', 'Промоции']] as Array<[StoreTab, string]>).map(([key, label]) => <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>{label}</button>)}
      </nav>

      {tab === 'products' && <section className="store-split">
        <div className="erp-card wide-field">
          <strong>Покажи продукти със статус</strong>
          <div className="mini-actions">
            {([['ACTIVE', 'Публикувани'], ['DRAFT', 'Чернови'], ['ARCHIVED', 'Архивирани']] as Array<[ProductStatus, string]>).map(([status, label]) => (
              <label className="check" key={status}><input type="checkbox" checked={visibleProductStatuses[status]} onChange={(event) => setVisibleProductStatuses((current) => ({ ...current, [status]: event.target.checked }))} /> {label}</label>
            ))}
          </div>
        </div>
        <form className="erp-card" onSubmit={submitProduct}>
          <h3>{editingProductId ? 'Редакция на продукт' : 'Нов продукт'}</h3>
          <input placeholder="Име" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} required />
          <input placeholder="slug" value={productForm.slug} onChange={(e) => setProductForm({ ...productForm, slug: e.target.value })} />
          <select value={productForm.categoryId} onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })} required><option value="">Категория</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select>
          <label>ERP складов продукт<select value={productForm.erpProductId} onChange={(e) => setProductForm({ ...productForm, erpProductId: e.target.value })}><option value="">Без връзка към ERP склад</option>{erpProducts.filter((product) => product.active).map((product) => <option key={product.id} value={product.id}>{product.sku ? `${product.sku} | ` : ''}{product.name} ({product.stockQuantity})</option>)}</select></label>
          <div className="two"><input type="number" step="0.01" placeholder="Цена" value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} required /><input type="number" step="0.01" placeholder="Промо цена" value={productForm.salePrice} onChange={(e) => setProductForm({ ...productForm, salePrice: e.target.value })} /></div>
          <div className="two"><input type="number" placeholder="Наличност" value={productForm.stock} onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })} /><select value={productForm.status} onChange={(e) => setProductForm({ ...productForm, status: e.target.value })}><option value="ACTIVE">Активен</option><option value="DRAFT">Чернова</option><option value="ARCHIVED">Архив</option></select></div>
          <label className="check"><input type="checkbox" checked={productForm.featured} onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })} /> Препоръчан</label>
          <textarea placeholder="Кратко описание" value={productForm.shortDescription} onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })} />
          <textarea placeholder="Описание" value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} required />
          <div className="product-images-editor">
            <div className="product-images-heading">
              <div><strong>Снимки на продукта</strong><small>Качете снимки от устройството или добавете външен URL адрес.</small></div>
              <label className="upload-button">{uploadingImages ? 'Качване...' : 'Качи снимки'}<input type="file" accept="image/*" multiple disabled={uploadingImages} onChange={(event) => { uploadProductImages(event.target.files); event.target.value = '' }} /></label>
            </div>
            {imageUrls(productForm.imagesText).length > 0 && <div className="product-image-list">
              {imageUrls(productForm.imagesText).map((url) => <div className="product-image-item" key={url}>
                <img src={resolveProductImage(url)} alt="" />
                <span>{url}</span>
                <button type="button" className="mini-btn danger" onClick={() => removeProductImage(url)}>Премахни</button>
              </div>)}
            </div>}
            <label>URL снимки<textarea placeholder="По един URL адрес на ред" value={productForm.imagesText} onChange={(e) => setProductForm({ ...productForm, imagesText: e.target.value })} /></label>
          </div>
          <div className="actions"><button className="erp-btn primary">Запази</button>{editingProductId && <button type="button" onClick={() => { setEditingProductId(null); setProductForm(emptyProduct) }}>Отказ</button>}</div>
        </form>
        <div className="report-table-wrap"><table><thead><tr><th>Продукт</th><th>Категория</th><th>Цена</th><th>Склад</th><th>Статус</th><th></th></tr></thead><tbody>{products.map((product) => <tr key={product.id}><td>{product.name}</td><td>{product.categoryName}</td><td>{product.price} лв.</td><td>{product.stock}</td><td>{product.status}</td><td><div className="mini-actions"><button className="mini-btn" onClick={() => editProduct(product)}>Редакция</button>{product.status !== 'ARCHIVED' && <button className="mini-btn danger" onClick={() => removeProduct(product)}>Премахни</button>}</div></td></tr>)}</tbody></table></div>
      </section>}

      {tab === 'orders' && <div className="report-table-wrap"><table><thead><tr><th>Клиент</th><th>Контакт</th><th>Адрес</th><th>Общо</th><th>Статус</th></tr></thead><tbody>{orders.map((order) => <tr key={order.id}><td>{order.customerName}<small>{order.items.map((item: any) => `${item.name} x${item.quantity}`).join(', ')}</small></td><td>{order.phone}<small>{order.email}</small></td><td>{order.address}</td><td>{order.totalPrice} лв.</td><td><select value={order.status} onChange={(e) => updateOrder(order.id, e.target.value)}><option value="PENDING">Нова</option><option value="CONFIRMED">Потвърдена</option><option value="SHIPPED">Изпратена</option><option value="COMPLETED">Завършена</option><option value="CANCELLED">Отказана</option></select></td></tr>)}</tbody></table></div>}

      {tab === 'categories' && <section className="store-split"><form className="erp-card" onSubmit={submitCategory}><h3>Нова категория</h3><input placeholder="Име" value={categoryForm.name} onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })} required /><input placeholder="slug" value={categoryForm.slug} onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })} /><textarea placeholder="Описание" value={categoryForm.description} onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })} /><input type="number" placeholder="Подредба" value={categoryForm.sortOrder} onChange={(e) => setCategoryForm({ ...categoryForm, sortOrder: e.target.value })} /><button className="erp-btn primary">Добави</button></form><div className="erp-card"><h3>Категории</h3>{categories.map((category) => <div className="erp-row" key={category.id}><strong>{category.name}</strong><span>/{category.slug}</span></div>)}</div></section>}

      {tab === 'promotions' && <section className="store-split"><form className="erp-card" onSubmit={submitPromotion}><h3>Нова промоция</h3><input placeholder="Заглавие" value={promotionForm.title} onChange={(e) => setPromotionForm({ ...promotionForm, title: e.target.value })} required /><input placeholder="slug" value={promotionForm.slug} onChange={(e) => setPromotionForm({ ...promotionForm, slug: e.target.value })} /><textarea placeholder="Описание" value={promotionForm.description} onChange={(e) => setPromotionForm({ ...promotionForm, description: e.target.value })} /><div className="two"><select value={promotionForm.discountType} onChange={(e) => setPromotionForm({ ...promotionForm, discountType: e.target.value })}><option value="PERCENTAGE">Процент</option><option value="FIXED">Фиксирана сума</option></select><input type="number" step="0.01" placeholder="Отстъпка" value={promotionForm.discountValue} onChange={(e) => setPromotionForm({ ...promotionForm, discountValue: e.target.value })} /></div><input placeholder="Текст за банер" value={promotionForm.bannerText} onChange={(e) => setPromotionForm({ ...promotionForm, bannerText: e.target.value })} /><label className="check"><input type="checkbox" checked={promotionForm.active} onChange={(e) => setPromotionForm({ ...promotionForm, active: e.target.checked })} /> Активна</label><button className="erp-btn primary">Добави</button></form><div className="erp-card"><h3>Промоции</h3>{promotions.map((promotion) => <div className="erp-row" key={promotion.id}><strong>{promotion.title}</strong><span>{promotion.discountValue} {promotion.discountType === 'PERCENTAGE' ? '%' : 'лв.'} · {promotion.active ? 'активна' : 'спряна'}</span></div>)}</div></section>}
    </section>
  )
}
