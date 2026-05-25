import React, { useEffect, useMemo, useState } from 'react'
import SEO from '../components/SEO'
import { apiUrl } from '../config'

type Tab = 'dashboard' | 'sales' | 'products' | 'reports' | 'expenses' | 'wax'
type ReportTab = 'monthly' | 'daily' | 'products' | 'expenses' | 'low-stock'

interface ErpProduct {
  id: number
  sku?: string | null
  name: string
  category: string
  unit: string
  sellPriceEur: number
  costPriceEur: number
  stockQuantity: number
  minStockQuantity: number
  totalSoldQuantity: number
  inventoryValueEur?: number
  inventorySellValueEur?: number
  unitProfitEur?: number
  soldProfitEur?: number
  stockStatus?: 'LOW' | 'OK'
  active: boolean
  notes?: string | null
}

interface ErpSale {
  id: number
  saleDate: string
  product: ErpProduct
  quantity: number
  unitPriceEur: number
  totalEur: number
  totalBgn: number
  profitEur: number
  paymentMethod: string
  notes?: string | null
}

interface Dashboard {
  todayTurnoverEur: number
  todayProfitEur: number
  monthlyTurnoverEur: number
  monthlyProfitEur: number
  lowStockProducts: ErpProduct[]
  latestSales: ErpSale[]
  latestWaxTransactions: WaxTransaction[]
}

interface WaxTransaction {
  id: number
  transactionDate: string
  customerName: string
  waxReceivedKg: number
  waxValueEur: number
  foundationGivenKg: number
  foundationValueEur: number
  extraPaymentEur: number
  balanceEur: number
}

interface Reports {
  daily: Array<{ day: string; turnover_eur: number; profit_eur: number; sold_quantity: number; sold_lines: number; expenses_eur: number }>
  monthly: Array<{ month: string; turnover_eur: number; profit_eur: number; sold_quantity: number; sold_lines: number; expenses_eur: number }>
  salesByProduct: Array<{ product_id: number; product_name: string; quantity: number; turnover_eur: number; profit_eur: number }>
  expensesByCategory: Array<{ category: string; _sum: { amountEur: number | null } }>
  lowStockProducts: ErpProduct[]
  totals: { turnoverEur: number; grossProfitEur: number; expensesEur: number; netProfitEur: number }
}

const categoryLabels: Record<string, string> = {
  HONEY: 'Мед',
  BEE_PRODUCTS: 'Пчелни продукти',
  BEEKEEPING_EQUIPMENT: 'Пчеларски инвентар',
  WAX_FOUNDATIONS: 'Восъчни основи',
  PACKAGING: 'Опаковки',
  OTHER: 'Други'
}

const unitLabels: Record<string, string> = {
  PCS: 'бр.',
  KG: 'кг',
  G: 'г',
  LITER: 'литър',
  PACKAGE: 'пакет'
}

const paymentLabels: Record<string, string> = {
  CASH: 'в брой',
  CARD: 'карта',
  BANK: 'банка',
  OTHER: 'друго'
}

const expenseLabels: Record<string, string> = {
  RENT: 'Наем',
  ELECTRICITY: 'Ток',
  FUEL: 'Гориво',
  MATERIALS: 'Материали',
  SALARIES: 'Заплати',
  DELIVERY: 'Доставка',
  ADVERTISING: 'Реклама',
  OTHER: 'Други'
}

const emptyProduct = {
  sku: '',
  name: '',
  category: 'HONEY',
  unit: 'PCS',
  sellPriceEur: '',
  costPriceEur: '',
  stockQuantity: '0',
  minStockQuantity: '0',
  totalSoldQuantity: '0',
  active: true,
  notes: ''
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function eur(value: number | null | undefined) {
  const safe = Number(value || 0)
  return `${safe.toFixed(2)} EUR`
}

function bgn(value: number | null | undefined) {
  const safe = Number(value || 0) * 1.95583
  return `${safe.toFixed(2)} лв.`
}

export default function AdminPage() {
  const [token, setToken] = useState(() => localStorage.getItem('admin_token') || '')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [tab, setTab] = useState<Tab>('dashboard')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [dashboard, setDashboard] = useState<Dashboard | null>(null)
  const [products, setProducts] = useState<ErpProduct[]>([])
  const [storageSearch, setStorageSearch] = useState('')
  const [storageCategory, setStorageCategory] = useState('ALL')
  const [storageStatus, setStorageStatus] = useState('ALL')
  const [sales, setSales] = useState<ErpSale[]>([])
  const [reports, setReports] = useState<Reports | null>(null)
  const [waxTransactions, setWaxTransactions] = useState<WaxTransaction[]>([])
  const [editingProductId, setEditingProductId] = useState<number | null>(null)
  const [reportTab, setReportTab] = useState<ReportTab>('monthly')
  const [productForm, setProductForm] = useState(emptyProduct)
  const [saleForm, setSaleForm] = useState({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' })
  const [expenseForm, setExpenseForm] = useState({ expenseDate: today(), category: 'MATERIALS', amountEur: '', paymentMethod: 'CASH', supplier: '', notes: '' })
  const [waxForm, setWaxForm] = useState({
    transactionDate: today(),
    customerName: '',
    customerPhone: '',
    waxReceivedKg: '0',
    waxPricePerKgEur: '5',
    foundationGivenKg: '0',
    foundationPricePerKgEur: '15',
    extraPaymentEur: '0',
    foundationProductId: '',
    notes: ''
  })
  const [reportRange, setReportRange] = useState({ from: today().slice(0, 8) + '01', to: today() })

  const authHeaders = useMemo(() => ({
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  }), [token])

  async function adminFetch(path: string, options: RequestInit = {}) {
    const response = await fetch(apiUrl(path), {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
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

  async function loadData() {
    const [dashboardData, productData, saleData, reportData, waxData] = await Promise.all([
      adminFetch('/api/admin/erp/dashboard'),
      adminFetch('/api/admin/erp/products'),
      adminFetch('/api/admin/erp/sales'),
      adminFetch(`/api/admin/erp/reports?from=${reportRange.from}&to=${reportRange.to}`),
      adminFetch('/api/admin/erp/wax-transactions')
    ])
    setDashboard(dashboardData)
    setProducts(productData)
    setSales(saleData)
    setReports(reportData)
    setWaxTransactions(waxData)
  }

  useEffect(() => {
    if (!token) return
    adminFetch('/api/auth/me')
      .then(() => {
        setIsAuthenticated(true)
        return loadData()
      })
      .catch(() => {
        setToken('')
        localStorage.removeItem('admin_token')
      })
  }, [])

  useEffect(() => {
    if (!isAuthenticated) return
    adminFetch(`/api/admin/erp/reports?from=${reportRange.from}&to=${reportRange.to}`).then(setReports).catch(() => undefined)
  }, [reportRange.from, reportRange.to])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const data = await adminFetch('/api/auth/login', { method: 'POST', body: JSON.stringify(loginForm) })
      setToken(data.token)
      localStorage.setItem('admin_token', data.token)
      setIsAuthenticated(true)
      await loadData()
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

  function editProduct(product: ErpProduct) {
    setEditingProductId(product.id)
    setProductForm({
      sku: product.sku || '',
      name: product.name,
      category: product.category,
      unit: product.unit,
      sellPriceEur: String(product.sellPriceEur),
      costPriceEur: String(product.costPriceEur),
      stockQuantity: String(product.stockQuantity),
      minStockQuantity: String(product.minStockQuantity),
      totalSoldQuantity: String(product.totalSoldQuantity || 0),
      active: product.active,
      notes: product.notes || ''
    })
  }

  async function submitProduct(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await adminFetch(editingProductId ? `/api/admin/erp/products/${editingProductId}` : '/api/admin/erp/products', {
        method: editingProductId ? 'PUT' : 'POST',
        body: JSON.stringify({
          ...productForm,
          sku: productForm.sku || null,
          sellPriceEur: Number(productForm.sellPriceEur),
          costPriceEur: Number(productForm.costPriceEur),
          stockQuantity: Number(productForm.stockQuantity),
          minStockQuantity: Number(productForm.minStockQuantity),
          totalSoldQuantity: Number(productForm.totalSoldQuantity)
        })
      })
      setProductForm(emptyProduct)
      setEditingProductId(null)
      await loadData()
      setStatus('Продуктът е запазен.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Грешка при запис.')
    } finally {
      setLoading(false)
    }
  }

  async function submitSale(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await adminFetch('/api/admin/erp/sales', {
        method: 'POST',
        body: JSON.stringify({
          ...saleForm,
          productId: Number(saleForm.productId),
          quantity: Number(saleForm.quantity),
          unitPriceEur: saleForm.unitPriceEur ? Number(saleForm.unitPriceEur) : undefined
        })
      })
      setSaleForm({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' })
      await loadData()
      setStatus('Продажбата е добавена и складът е намален.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Грешка при продажба.')
    } finally {
      setLoading(false)
    }
  }

  async function submitExpense(e: React.FormEvent) {
    e.preventDefault()
    await adminFetch('/api/admin/erp/expenses', {
      method: 'POST',
      body: JSON.stringify({ ...expenseForm, amountEur: Number(expenseForm.amountEur) })
    })
    setExpenseForm({ expenseDate: today(), category: 'MATERIALS', amountEur: '', paymentMethod: 'CASH', supplier: '', notes: '' })
    await loadData()
    setStatus('Разходът е записан.')
  }

  async function submitWax(e: React.FormEvent) {
    e.preventDefault()
    await adminFetch('/api/admin/erp/wax-transactions', {
      method: 'POST',
      body: JSON.stringify({
        ...waxForm,
        waxReceivedKg: Number(waxForm.waxReceivedKg),
        waxPricePerKgEur: Number(waxForm.waxPricePerKgEur),
        foundationGivenKg: Number(waxForm.foundationGivenKg),
        foundationPricePerKgEur: Number(waxForm.foundationPricePerKgEur),
        extraPaymentEur: Number(waxForm.extraPaymentEur),
        foundationProductId: waxForm.foundationProductId ? Number(waxForm.foundationProductId) : null
      })
    })
    setWaxForm({ ...waxForm, customerName: '', customerPhone: '', waxReceivedKg: '0', foundationGivenKg: '0', extraPaymentEur: '0', notes: '' })
    await loadData()
    setStatus('Восъчната сделка е записана.')
  }

  const selectedSaleProduct = products.find((product) => String(product.id) === saleForm.productId)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = [product.sku, product.name, product.notes].join(' ').toLowerCase().includes(storageSearch.toLowerCase())
    const matchesCategory = storageCategory === 'ALL' || product.category === storageCategory
    const matchesStatus = storageStatus === 'ALL' || (storageStatus === 'LOW' ? product.stockStatus === 'LOW' : product.active)
    return matchesSearch && matchesCategory && matchesStatus
  })
  const storageTotals = filteredProducts.reduce((totals, product) => ({
    stockValue: totals.stockValue + Number(product.inventoryValueEur || 0),
    sellValue: totals.sellValue + Number(product.inventorySellValueEur || 0),
    low: totals.low + (product.stockStatus === 'LOW' ? 1 : 0)
  }), { stockValue: 0, sellValue: 0, low: 0 })
  const waxValue = Number(waxForm.waxReceivedKg || 0) * Number(waxForm.waxPricePerKgEur || 0)
  const foundationValue = Number(waxForm.foundationGivenKg || 0) * Number(waxForm.foundationPricePerKgEur || 0)
  const waxBalance = waxValue - foundationValue - Number(waxForm.extraPaymentEur || 0)

  if (!isAuthenticated) {
    return (
      <div className="erp-login">
        <SEO title="ERP вход | SakiMed" description="Вход в частната ERP система на SakiMed." path="/admin" noindex />
        <form className="login-box" onSubmit={handleLogin}>
          <h1>SakiMed ERP</h1>
          <label>Имейл</label>
          <input type="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required />
          <label>Парола</label>
          <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
          {status && <p className="status error">{status}</p>}
          <button className="erp-btn primary" disabled={loading}>{loading ? 'Влизане...' : 'Вход'}</button>
        </form>
        <style>{erpStyles}</style>
      </div>
    )
  }

  return (
    <div className="erp-shell">
      <SEO title="SakiMed ERP | Админ" description="Частен back-office ERP панел за SakiMed." path="/admin" noindex />
      <div className="erp-wrap">
        <header className="erp-header">
          <div>
            <h1>SakiMed ERP</h1>
            <p>Оборот, склад, разходи и восък</p>
          </div>
          <button className="erp-btn ghost" onClick={handleLogout}>Изход</button>
        </header>

        {status && <p className="status">{status}</p>}

        <nav className="erp-tabs">
          {[
            ['dashboard', 'Табло'],
            ['sales', 'Продажби'],
            ['products', 'Склад'],
            ['reports', 'Справки'],
            ['expenses', 'Разходи'],
            ['wax', 'Восък']
          ].map(([key, label]) => (
            <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key as Tab)}>{label}</button>
          ))}
        </nav>

        {tab === 'dashboard' && dashboard && (
          <>
            <section className="metric-grid">
              <div><span>Днес оборот</span><strong>{eur(dashboard.todayTurnoverEur)}</strong><small>{bgn(dashboard.todayTurnoverEur)}</small></div>
              <div><span>Днес печалба</span><strong>{eur(dashboard.todayProfitEur)}</strong><small>{bgn(dashboard.todayProfitEur)}</small></div>
              <div><span>Месец оборот</span><strong>{eur(dashboard.monthlyTurnoverEur)}</strong><small>{bgn(dashboard.monthlyTurnoverEur)}</small></div>
              <div><span>Месец печалба</span><strong>{eur(dashboard.monthlyProfitEur)}</strong><small>{bgn(dashboard.monthlyProfitEur)}</small></div>
            </section>
            <section className="erp-columns">
              <Panel title="Ниска наличност">
                {dashboard.lowStockProducts.map((product) => <Row key={product.id} title={product.name} meta={`${product.stockQuantity} ${unitLabels[product.unit]} минимум ${product.minStockQuantity}`} />)}
              </Panel>
              <Panel title="Последни продажби">
                {dashboard.latestSales.map((sale) => <Row key={sale.id} title={sale.product.name} meta={`${sale.quantity} x ${eur(sale.unitPriceEur)} = ${eur(sale.totalEur)}`} />)}
              </Panel>
              <Panel title="Последни сделки с восък">
                {dashboard.latestWaxTransactions.map((item) => <Row key={item.id} title={item.customerName} meta={`Баланс ${eur(item.balanceEur)} | восък ${item.waxReceivedKg} кг`} />)}
              </Panel>
            </section>
          </>
        )}

        {tab === 'sales' && (
          <section className="erp-grid">
            <form className="erp-card" onSubmit={submitSale}>
              <h2>Бърза продажба</h2>
              <label>Дата</label>
              <input type="date" value={saleForm.saleDate} onChange={(e) => setSaleForm({ ...saleForm, saleDate: e.target.value })} />
              <label>Продукт</label>
              <select value={saleForm.productId} onChange={(e) => {
                const product = products.find((item) => String(item.id) === e.target.value)
                setSaleForm({ ...saleForm, productId: e.target.value, unitPriceEur: product ? String(product.sellPriceEur) : '' })
              }} required>
                <option value="">Изберете продукт</option>
                {products.filter((product) => product.active).map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
              </select>
              <div className="two">
                <label>Количество<input type="number" step="0.001" min="0.001" value={saleForm.quantity} onChange={(e) => setSaleForm({ ...saleForm, quantity: e.target.value })} required /></label>
                <label>Цена EUR<input type="number" step="0.01" min="0" value={saleForm.unitPriceEur} onChange={(e) => setSaleForm({ ...saleForm, unitPriceEur: e.target.value })} /></label>
              </div>
              <label>Плащане</label>
              <select value={saleForm.paymentMethod} onChange={(e) => setSaleForm({ ...saleForm, paymentMethod: e.target.value })}>
                {Object.entries(paymentLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
              <textarea placeholder="Бележка" value={saleForm.notes} onChange={(e) => setSaleForm({ ...saleForm, notes: e.target.value })} />
              <div className="form-total">Общо: {eur(Number(saleForm.quantity || 0) * Number(saleForm.unitPriceEur || selectedSaleProduct?.sellPriceEur || 0))}</div>
              <button className="erp-btn primary" disabled={loading}>Добави продажба</button>
            </form>
            <Panel title="Последни продажби">
              {sales.map((sale) => <Row key={sale.id} title={sale.product.name} meta={`${new Date(sale.saleDate).toLocaleDateString('bg-BG')} | ${sale.quantity} | ${eur(sale.totalEur)} | печалба ${eur(sale.profitEur)}`} />)}
            </Panel>
          </section>
        )}

        {tab === 'products' && (
          <section className="storage-layout">
            <form className="erp-card" onSubmit={submitProduct}>
              <h2>{editingProductId ? 'Редакция' : 'Нов продукт'}</h2>
              <input placeholder="ИД / код от склада" value={productForm.sku} onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })} />
              <input placeholder="Име" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} required />
              <div className="two">
                <select value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}>
                  {Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                </select>
                <select value={productForm.unit} onChange={(e) => setProductForm({ ...productForm, unit: e.target.value })}>
                  {Object.entries(unitLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                </select>
              </div>
              <div className="two">
                <input type="number" step="0.01" min="0" placeholder="Продажна EUR" value={productForm.sellPriceEur} onChange={(e) => setProductForm({ ...productForm, sellPriceEur: e.target.value })} required />
                <input type="number" step="0.01" min="0" placeholder="Доставна EUR" value={productForm.costPriceEur} onChange={(e) => setProductForm({ ...productForm, costPriceEur: e.target.value })} required />
              </div>
              <div className="two">
                <input type="number" step="0.001" min="0" placeholder="Наличност" value={productForm.stockQuantity} onChange={(e) => setProductForm({ ...productForm, stockQuantity: e.target.value })} />
                <input type="number" step="0.001" min="0" placeholder="Минимум" value={productForm.minStockQuantity} onChange={(e) => setProductForm({ ...productForm, minStockQuantity: e.target.value })} />
              </div>
              <input type="number" step="0.001" min="0" placeholder="Общо продадени" value={productForm.totalSoldQuantity} onChange={(e) => setProductForm({ ...productForm, totalSoldQuantity: e.target.value })} />
              <label className="check"><input type="checkbox" checked={productForm.active} onChange={(e) => setProductForm({ ...productForm, active: e.target.checked })} /> Активен</label>
              <textarea placeholder="Бележки" value={productForm.notes} onChange={(e) => setProductForm({ ...productForm, notes: e.target.value })} />
              <div className="actions">
                <button className="erp-btn primary" disabled={loading}>Запази</button>
                {editingProductId && <button type="button" className="erp-btn ghost" onClick={() => { setEditingProductId(null); setProductForm(emptyProduct) }}>Отказ</button>}
              </div>
            </form>
            <section className="storage-main">
              <div className="storage-toolbar">
                <input placeholder="Търсене по име, ИД или бележка" value={storageSearch} onChange={(e) => setStorageSearch(e.target.value)} />
                <select value={storageCategory} onChange={(e) => setStorageCategory(e.target.value)}>
                  <option value="ALL">Всички категории</option>
                  {Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                </select>
                <select value={storageStatus} onChange={(e) => setStorageStatus(e.target.value)}>
                  <option value="ALL">Всички</option>
                  <option value="LOW">Ниска наличност</option>
                  <option value="ACTIVE">Активни</option>
                </select>
              </div>
              <section className="metric-grid compact">
                <div><span>Артикули</span><strong>{filteredProducts.length}</strong><small>показани</small></div>
                <div><span>Ниска наличност</span><strong>{storageTotals.low}</strong><small>за проверка</small></div>
                <div><span>Стойност склад</span><strong>{eur(storageTotals.stockValue)}</strong><small>{bgn(storageTotals.stockValue)}</small></div>
                <div><span>Продажна стойност</span><strong>{eur(storageTotals.sellValue)}</strong><small>{bgn(storageTotals.sellValue)}</small></div>
              </section>
              <div className="storage-table-wrap">
                <table className="storage-table">
                  <thead>
                    <tr>
                      <th>ИД</th>
                      <th>Продукт</th>
                      <th>Категория</th>
                      <th>Наличност</th>
                      <th>Дост.</th>
                      <th>Прод.</th>
                      <th>Печалба</th>
                      <th>Продадени</th>
                      <th>Стойност</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id} onClick={() => editProduct(product)} className={product.stockStatus === 'LOW' ? 'low' : ''}>
                        <td data-label="ИД">{product.sku || product.id}</td>
                        <td data-label="Продукт"><strong>{product.name}</strong><small>{product.active ? 'Активен' : 'Спрян'}</small></td>
                        <td data-label="Категория">{categoryLabels[product.category]}</td>
                        <td data-label="Наличност">{product.stockQuantity} {unitLabels[product.unit]}<small>мин. {product.minStockQuantity}</small></td>
                        <td data-label="Дост.">{eur(product.costPriceEur)}</td>
                        <td data-label="Прод.">{eur(product.sellPriceEur)}<small>{bgn(product.sellPriceEur)}</small></td>
                        <td data-label="Печалба">{eur(product.unitProfitEur)}</td>
                        <td data-label="Продадени">{product.totalSoldQuantity || 0}</td>
                        <td data-label="Стойност">{eur(product.inventoryValueEur)}<small>{bgn(product.inventoryValueEur)}</small></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        )}

        {tab === 'reports' && reports && (
          <section className="report-stack">
            <div className="filters">
              <input type="date" value={reportRange.from} onChange={(e) => setReportRange({ ...reportRange, from: e.target.value })} />
              <input type="date" value={reportRange.to} onChange={(e) => setReportRange({ ...reportRange, to: e.target.value })} />
              <a className="erp-btn primary" href={apiUrl(`/api/admin/erp/reports.csv?from=${reportRange.from}&to=${reportRange.to}`)}>CSV export</a>
            </div>
            <section className="metric-grid">
              <div><span>Оборот</span><strong>{eur(reports.totals.turnoverEur)}</strong><small>{bgn(reports.totals.turnoverEur)}</small></div>
              <div><span>Брутна печалба</span><strong>{eur(reports.totals.grossProfitEur)}</strong><small>{bgn(reports.totals.grossProfitEur)}</small></div>
              <div><span>Разходи</span><strong>{eur(reports.totals.expensesEur)}</strong><small>{bgn(reports.totals.expensesEur)}</small></div>
              <div><span>Нетна печалба</span><strong>{eur(reports.totals.netProfitEur)}</strong><small>{bgn(reports.totals.netProfitEur)}</small></div>
            </section>
            <nav className="report-tabs">
              {[
                ['monthly', 'Месечни'],
                ['daily', 'Дневни'],
                ['products', 'Продадени продукти'],
                ['expenses', 'Разходи'],
                ['low-stock', 'Ниска наличност']
              ].map(([key, label]) => (
                <button key={key} className={reportTab === key ? 'active' : ''} onClick={() => setReportTab(key as ReportTab)}>{label}</button>
              ))}
            </nav>

            {reportTab === 'monthly' && (
              <ReportTable
                headers={['Месец', 'Оборот', 'Печалба', 'Разходи', 'Нетна печалба', 'Продадени', 'Редове']}
                rows={reports.monthly.map((row) => {
                  const monthKey = new Date(row.month).toLocaleDateString('bg-BG', { month: 'long', year: 'numeric' })
                  return [
                    monthKey,
                    `${eur(row.turnover_eur)} / ${bgn(row.turnover_eur)}`,
                    `${eur(row.profit_eur)} / ${bgn(row.profit_eur)}`,
                    `${eur(row.expenses_eur)} / ${bgn(row.expenses_eur)}`,
                    `${eur(Number(row.profit_eur || 0) - Number(row.expenses_eur || 0))}`,
                    String(row.sold_quantity || 0),
                    String(row.sold_lines || 0)
                  ]
                })}
              />
            )}

            {reportTab === 'daily' && (
              <ReportTable
                headers={['Дата', 'Оборот', 'Каса', 'Печалба', 'Разходи', 'Остатък', 'Продадени']}
                rows={reports.daily.map((row) => {
                  const turnover = Number(row.turnover_eur || 0)
                  const profit = Number(row.profit_eur || 0)
                  const expenses = Number(row.expenses_eur || 0)
                  return [
                    new Date(row.day).toLocaleDateString('bg-BG'),
                    `${eur(turnover)} / ${bgn(turnover)}`,
                    bgn(turnover),
                    `${eur(profit)} / ${bgn(profit)}`,
                    `${eur(expenses)} / ${bgn(expenses)}`,
                    bgn(Math.max(turnover - expenses, 0)),
                    String(row.sold_quantity || 0)
                  ]
                })}
              />
            )}

            {reportTab === 'products' && (
              <ReportTable
                headers={['Продукт', 'Количество', 'Оборот', 'Печалба', 'Средна цена']}
                rows={reports.salesByProduct.map((row) => [
                  row.product_name,
                  String(row.quantity),
                  eur(row.turnover_eur),
                  eur(row.profit_eur),
                  eur(Number(row.turnover_eur || 0) / Math.max(Number(row.quantity || 0), 1))
                ])}
              />
            )}

            {reportTab === 'expenses' && (
              <ReportTable
                headers={['Категория', 'Разход EUR', 'Разход BGN']}
                rows={reports.expensesByCategory.map((row) => [
                  expenseLabels[row.category],
                  eur(row._sum.amountEur || 0),
                  bgn(row._sum.amountEur || 0)
                ])}
              />
            )}

            {reportTab === 'low-stock' && (
              <div className="scroll-panel">
                <ReportTable
                  headers={['Продукт', 'Категория', 'Наличност', 'Минимум', 'Стойност']}
                  rows={reports.lowStockProducts.map((product) => [
                    product.name,
                    categoryLabels[product.category],
                    `${product.stockQuantity} ${unitLabels[product.unit]}`,
                    String(product.minStockQuantity),
                    eur(product.inventoryValueEur || product.stockQuantity * product.costPriceEur)
                  ])}
                />
              </div>
            )}
          </section>
        )}

        {tab === 'expenses' && (
          <section className="erp-grid">
            <form className="erp-card" onSubmit={submitExpense}>
              <h2>Нов разход</h2>
              <input type="date" value={expenseForm.expenseDate} onChange={(e) => setExpenseForm({ ...expenseForm, expenseDate: e.target.value })} />
              <select value={expenseForm.category} onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}>
                {Object.entries(expenseLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
              <input type="number" step="0.01" min="0" placeholder="Сума EUR" value={expenseForm.amountEur} onChange={(e) => setExpenseForm({ ...expenseForm, amountEur: e.target.value })} required />
              <select value={expenseForm.paymentMethod} onChange={(e) => setExpenseForm({ ...expenseForm, paymentMethod: e.target.value })}>
                {Object.entries(paymentLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
              <input placeholder="Доставчик" value={expenseForm.supplier} onChange={(e) => setExpenseForm({ ...expenseForm, supplier: e.target.value })} />
              <textarea placeholder="Бележка" value={expenseForm.notes} onChange={(e) => setExpenseForm({ ...expenseForm, notes: e.target.value })} />
              <button className="erp-btn primary">Запази разход</button>
            </form>
            <Panel title="Справка разходи">
              {reports?.expensesByCategory.map((row) => <Row key={row.category} title={expenseLabels[row.category]} meta={eur(row._sum.amountEur || 0)} />)}
            </Panel>
          </section>
        )}

        {tab === 'wax' && (
          <section className="erp-grid">
            <form className="erp-card" onSubmit={submitWax}>
              <h2>Обмен / изкупуване на восък</h2>
              <input type="date" value={waxForm.transactionDate} onChange={(e) => setWaxForm({ ...waxForm, transactionDate: e.target.value })} />
              <input placeholder="Име на клиент" value={waxForm.customerName} onChange={(e) => setWaxForm({ ...waxForm, customerName: e.target.value })} required />
              <input placeholder="Телефон" value={waxForm.customerPhone} onChange={(e) => setWaxForm({ ...waxForm, customerPhone: e.target.value })} />
              <div className="two">
                <input type="number" step="0.001" min="0" placeholder="Приет восък кг" value={waxForm.waxReceivedKg} onChange={(e) => setWaxForm({ ...waxForm, waxReceivedKg: e.target.value })} />
                <input type="number" step="0.01" min="0" placeholder="Цена восък EUR/кг" value={waxForm.waxPricePerKgEur} onChange={(e) => setWaxForm({ ...waxForm, waxPricePerKgEur: e.target.value })} />
              </div>
              <select value={waxForm.foundationProductId} onChange={(e) => setWaxForm({ ...waxForm, foundationProductId: e.target.value })}>
                <option value="">Восъчни основи от склада</option>
                {products.filter((product) => product.category === 'WAX_FOUNDATIONS').map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
              </select>
              <div className="two">
                <input type="number" step="0.001" min="0" placeholder="Дадени основи кг" value={waxForm.foundationGivenKg} onChange={(e) => setWaxForm({ ...waxForm, foundationGivenKg: e.target.value })} />
                <input type="number" step="0.01" min="0" placeholder="Цена основи EUR/кг" value={waxForm.foundationPricePerKgEur} onChange={(e) => setWaxForm({ ...waxForm, foundationPricePerKgEur: e.target.value })} />
              </div>
              <input type="number" step="0.01" min="0" placeholder="Доплащане EUR" value={waxForm.extraPaymentEur} onChange={(e) => setWaxForm({ ...waxForm, extraPaymentEur: e.target.value })} />
              <textarea placeholder="Бележка" value={waxForm.notes} onChange={(e) => setWaxForm({ ...waxForm, notes: e.target.value })} />
              <div className="form-total">Стойност восък {eur(waxValue)} | Основи {eur(foundationValue)} | Баланс {eur(waxBalance)}</div>
              <button className="erp-btn primary">Запази сделка</button>
            </form>
            <Panel title="Последни сделки">
              {waxTransactions.map((item) => <Row key={item.id} title={item.customerName} meta={`${new Date(item.transactionDate).toLocaleDateString('bg-BG')} | баланс ${eur(item.balanceEur)} | восък ${item.waxReceivedKg} кг`} />)}
            </Panel>
          </section>
        )}
      </div>
      <style>{erpStyles}</style>
    </div>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="erp-panel">
      <h2>{title}</h2>
      <div className="panel-list">{children}</div>
    </section>
  )
}

function Row({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="erp-row">
      <strong>{title}</strong>
      <span>{meta}</span>
    </div>
  )
}

function ReportTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="report-table-wrap">
      <table className="report-table">
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={headers.length}>Няма данни за избрания период.</td>
            </tr>
          )}
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`} data-label={headers[cellIndex]}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const erpStyles = `
  .erp-login,
  .erp-shell {
    min-height: 100vh;
    background: #f4f6f3;
    color: #172018;
    padding: 28px 0 44px;
  }

  .erp-login {
    display: grid;
    place-items: center;
  }

  .erp-wrap {
    width: min(1180px, calc(100% - 28px));
    margin: 0 auto;
  }

  .login-box,
  .erp-card,
  .erp-panel,
  .metric-grid > div {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
  }

  .login-box,
  .erp-card {
    display: grid;
    gap: 12px;
    padding: 20px;
  }

  .login-box {
    width: min(420px, calc(100% - 28px));
  }

  .erp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .erp-header h1,
  .login-box h1,
  .erp-card h2,
  .erp-panel h2 {
    margin: 0;
    color: #1f3822;
  }

  .erp-header p {
    margin: 4px 0 0;
    color: #687366;
  }

  .erp-tabs,
  .actions,
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .erp-tabs {
    margin: 0 0 16px;
  }

  .erp-tabs button,
  .erp-btn {
    min-height: 42px;
    border-radius: 6px;
    border: 1px solid #cfd9ca;
    background: #fff;
    color: #1f3822;
    padding: 0 14px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .erp-tabs button.active,
  .erp-btn.primary {
    background: #2f6b3a;
    border-color: #2f6b3a;
    color: #fff;
  }

  .erp-btn.ghost {
    background: #eef3ea;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-bottom: 16px;
  }

  .metric-grid > div {
    padding: 16px;
    display: grid;
    gap: 4px;
  }

  .metric-grid span,
  .metric-grid small,
  .erp-row span,
  .product-row small {
    color: #687366;
  }

  .metric-grid strong {
    font-size: 1.45rem;
    color: #203423;
  }

  .erp-columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .erp-grid {
    display: grid;
    grid-template-columns: minmax(320px, 410px) 1fr;
    gap: 14px;
    align-items: start;
  }

  .storage-layout {
    display: grid;
    grid-template-columns: minmax(300px, 360px) 1fr;
    gap: 14px;
    align-items: start;
  }

  .storage-main {
    display: grid;
    gap: 12px;
  }

  .storage-toolbar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) 180px 160px;
    gap: 8px;
  }

  .metric-grid.compact {
    margin-bottom: 0;
  }

  .metric-grid.compact strong {
    font-size: 1.15rem;
  }

  .storage-table-wrap {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    overflow: auto;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
  }

  .storage-table {
    width: 100%;
    min-width: 980px;
    border-collapse: collapse;
    font-size: 0.92rem;
  }

  .storage-table th,
  .storage-table td {
    padding: 10px;
    border-bottom: 1px solid #edf0eb;
    text-align: left;
    vertical-align: top;
  }

  .storage-table th {
    position: sticky;
    top: 0;
    background: #eef3ea;
    color: #1f3822;
    z-index: 1;
  }

  .storage-table tr {
    cursor: pointer;
  }

  .storage-table tr:hover {
    background: #f8faf6;
  }

  .storage-table tr.low {
    background: #fff7d6;
  }

  .storage-table td small {
    display: block;
    color: #687366;
    margin-top: 2px;
  }

  .erp-panel {
    padding: 16px;
  }

  .panel-list {
    display: grid;
    gap: 8px;
    margin-top: 12px;
  }

  .erp-row,
  .product-row {
    display: grid;
    gap: 3px;
    padding: 10px 0;
    border-bottom: 1px solid #edf0eb;
    text-align: left;
  }

  .product-row {
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: transparent;
    cursor: pointer;
    color: inherit;
  }

  label {
    display: grid;
    gap: 6px;
    font-weight: 700;
    color: #344238;
  }

  input,
  textarea,
  select {
    width: 100%;
    min-height: 42px;
    border: 1px solid #cfd9ca;
    border-radius: 6px;
    padding: 9px 10px;
    font: inherit;
    background: #fff;
    color: #172018;
  }

  textarea {
    resize: vertical;
    min-height: 84px;
  }

  .two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .check {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .check input {
    width: auto;
    min-height: auto;
  }

  .form-total,
  .status {
    border-radius: 6px;
    padding: 10px 12px;
    background: #fff7d6;
    border: 1px solid #f1df92;
    color: #6d5200;
    font-weight: 700;
  }

  .status.error {
    background: #fee2e2;
    border-color: #fecaca;
    color: #991b1b;
  }

  .report-stack {
    display: grid;
    gap: 16px;
  }

  .report-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .report-tabs button {
    min-height: 40px;
    border-radius: 6px;
    border: 1px solid #cfd9ca;
    background: #fff;
    color: #1f3822;
    padding: 0 12px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }

  .report-tabs button.active {
    background: #2f6b3a;
    border-color: #2f6b3a;
    color: #fff;
  }

  .scroll-panel,
  .report-table-wrap {
    max-height: min(62vh, 620px);
    overflow: auto;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
  }

  .scroll-panel .report-table-wrap {
    max-height: none;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .report-table {
    width: 100%;
    min-width: 760px;
    border-collapse: collapse;
  }

  .report-table th,
  .report-table td {
    padding: 11px 12px;
    border-bottom: 1px solid #edf0eb;
    text-align: left;
  }

  .report-table th {
    position: sticky;
    top: 0;
    background: #eef3ea;
    color: #1f3822;
    z-index: 1;
  }

  @media (max-width: 980px) {
    .metric-grid,
    .erp-columns,
    .erp-grid,
    .storage-layout {
      grid-template-columns: 1fr;
    }

    .storage-toolbar {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    .erp-header {
      align-items: stretch;
      flex-direction: column;
    }

    .erp-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .report-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .two {
      grid-template-columns: 1fr;
    }

    .storage-table {
      min-width: 0;
      display: block;
    }

    .report-table {
      min-width: 0;
      display: block;
    }

    .storage-table thead,
    .report-table thead {
      display: none;
    }

    .storage-table tbody,
    .storage-table tr,
    .storage-table td,
    .report-table tbody,
    .report-table tr,
    .report-table td {
      display: block;
      width: 100%;
    }

    .storage-table tr,
    .report-table tr {
      padding: 10px;
      border-bottom: 1px solid #dfe5dc;
    }

    .storage-table td,
    .report-table td {
      border: 0;
      padding: 6px 0;
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 8px;
    }

    .storage-table td::before,
    .report-table td::before {
      content: attr(data-label);
      color: #687366;
      font-weight: 700;
    }
  }
`
