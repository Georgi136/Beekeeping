import React, { useEffect, useMemo, useState } from 'react'
import SEO from '../components/SEO'
import { apiUrl } from '../config'

type Tab = 'dashboard' | 'sales' | 'products' | 'reports' | 'expenses' | 'wax'
type SalesView = 'quick' | 'all'
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
  const [showProductEditor, setShowProductEditor] = useState(false)
  const [editingSaleId, setEditingSaleId] = useState<number | null>(null)
  const [salesView, setSalesView] = useState<SalesView>('quick')
  const [saleProductSearch, setSaleProductSearch] = useState('')
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
    setShowProductEditor(true)
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
    setTimeout(() => {
      document.querySelector('.erp-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
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
      setShowProductEditor(false)
      await loadData()
      setStatus('Продуктът е запазен.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Грешка при запис.')
    } finally {
      setLoading(false)
    }
  }

  function openNewProductEditor() {
    setEditingProductId(null)
    setProductForm(emptyProduct)
    setShowProductEditor(true)
    setTimeout(() => {
      document.querySelector('.storage-editor')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  async function submitSale(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await adminFetch(editingSaleId ? `/api/admin/erp/sales/${editingSaleId}` : '/api/admin/erp/sales', {
        method: editingSaleId ? 'PUT' : 'POST',
        body: JSON.stringify({
          ...saleForm,
          productId: Number(saleForm.productId),
          quantity: Number(saleForm.quantity),
          unitPriceEur: saleForm.unitPriceEur ? Number(saleForm.unitPriceEur) : undefined
        })
      })
      setEditingSaleId(null)
      setSaleForm({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' })
      await loadData()
      setStatus(editingSaleId ? 'Продажбата е редактирана и складът е коригиран.' : 'Продажбата е добавена и складът е намален.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Грешка при продажба.')
    } finally {
      setLoading(false)
    }
  }

  function editSale(sale: ErpSale) {
    setEditingSaleId(sale.id)
    setTab('sales')
    setSalesView('all')
    setSaleForm({
      saleDate: sale.saleDate.slice(0, 10),
      productId: String(sale.product.id),
      quantity: String(sale.quantity),
      unitPriceEur: String(sale.unitPriceEur),
      paymentMethod: sale.paymentMethod,
      notes: sale.notes || ''
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function openAllSales() {
    setTab('sales')
    setSalesView('all')
  }

  function selectSaleProduct(product: ErpProduct) {
    setSaleForm({ ...saleForm, productId: String(product.id), unitPriceEur: String(product.sellPriceEur) })
    setSaleProductSearch('')
  }

  async function removeSale(sale: ErpSale) {
    const confirmed = window.confirm(`Да изтрия ли продажбата за "${sale.product.name}"? Количеството ще бъде върнато в склада.`)
    if (!confirmed) return
    setLoading(true)
    try {
      await adminFetch(`/api/admin/erp/sales/${sale.id}`, { method: 'DELETE' })
      if (editingSaleId === sale.id) {
        setEditingSaleId(null)
        setSaleForm({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' })
      }
      await loadData()
      setStatus('Продажбата е изтрита и количеството е върнато в склада.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Грешка при изтриване.')
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
  const quickSaleProducts = products
    .filter((product) => product.active)
    .filter((product) => product.name.toLowerCase().includes(saleProductSearch.toLowerCase()) || String(product.sku || '').includes(saleProductSearch))
    .slice(0, saleProductSearch ? 12 : 8)
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
                <button className="inline-action" onClick={openAllSales}>Виж всички продажби</button>
                {dashboard.latestSales.map((sale) => (
                  <div className="row-with-action" key={sale.id}>
                    <Row title={sale.product.name} meta={`${sale.quantity} x ${eur(sale.unitPriceEur)} = ${eur(sale.totalEur)}`} />
                    <div className="mini-actions">
                      <button className="mini-btn" onClick={() => editSale(sale)}>Редакция</button>
                      <button className="mini-btn danger" onClick={() => removeSale(sale)}>Изтрий</button>
                    </div>
                  </div>
                ))}
              </Panel>
              <Panel title="Последни сделки с восък">
                {dashboard.latestWaxTransactions.map((item) => <Row key={item.id} title={item.customerName} meta={`Баланс ${eur(item.balanceEur)} | восък ${item.waxReceivedKg} кг`} />)}
              </Panel>
            </section>
          </>
        )}

        {tab === 'sales' && (
          <section className="sales-layout">
            <form className="erp-card sale-card" onSubmit={submitSale}>
              <div className="sale-card-head">
                <div>
                  <h2>{editingSaleId ? 'Редакция на продажба' : 'Бърза продажба'}</h2>
                  <p>{selectedSaleProduct ? selectedSaleProduct.name : 'Изберете продукт и въведете количество'}</p>
                </div>
                <input type="date" value={saleForm.saleDate} onChange={(e) => setSaleForm({ ...saleForm, saleDate: e.target.value })} />
              </div>

              <div className="quick-search">
                <input placeholder="Търси продукт или ИД" value={saleProductSearch} onChange={(e) => setSaleProductSearch(e.target.value)} />
                <select value={saleForm.productId} onChange={(e) => {
                  const product = products.find((item) => String(item.id) === e.target.value)
                  if (product) selectSaleProduct(product)
                  else setSaleForm({ ...saleForm, productId: '', unitPriceEur: '' })
                }} required>
                  <option value="">Всички продукти</option>
                  {products.filter((product) => product.active).map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
                </select>
              </div>

              <div className="quick-products">
                {quickSaleProducts.map((product) => (
                  <button type="button" key={product.id} className={saleForm.productId === String(product.id) ? 'selected' : ''} onClick={() => selectSaleProduct(product)}>
                    <strong>{product.name}</strong>
                    <span>{eur(product.sellPriceEur)} · {product.stockQuantity} {unitLabels[product.unit]}</span>
                  </button>
                ))}
              </div>

              <div className="sale-input-grid">
                <label>Количество<input inputMode="decimal" type="number" step="0.001" min="0.001" value={saleForm.quantity} onChange={(e) => setSaleForm({ ...saleForm, quantity: e.target.value })} required /></label>
                <label>Цена EUR<input inputMode="decimal" type="number" step="0.01" min="0" value={saleForm.unitPriceEur} onChange={(e) => setSaleForm({ ...saleForm, unitPriceEur: e.target.value })} /></label>
              </div>

              <div className="payment-pills">
                {Object.entries(paymentLabels).map(([key, label]) => (
                  <button type="button" key={key} className={saleForm.paymentMethod === key ? 'active' : ''} onClick={() => setSaleForm({ ...saleForm, paymentMethod: key })}>{label}</button>
                ))}
              </div>

              <textarea className="sale-note" placeholder="Бележка" value={saleForm.notes} onChange={(e) => setSaleForm({ ...saleForm, notes: e.target.value })} />
              <div className="sale-total-bar">
                <span>Общо</span>
                <strong>{eur(Number(saleForm.quantity || 0) * Number(saleForm.unitPriceEur || selectedSaleProduct?.sellPriceEur || 0))}</strong>
                <small>{bgn(Number(saleForm.quantity || 0) * Number(saleForm.unitPriceEur || selectedSaleProduct?.sellPriceEur || 0))}</small>
              </div>
              <div className="actions sale-actions">
                <button className="erp-btn primary" disabled={loading}>{editingSaleId ? 'Запази продажба' : 'Продай'}</button>
                {editingSaleId && <button type="button" className="erp-btn ghost" onClick={() => { setEditingSaleId(null); setSaleForm({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' }) }}>Отказ</button>}
              </div>
            </form>
            <section className="sales-main">
              <nav className="report-tabs">
                <button className={salesView === 'quick' ? 'active' : ''} onClick={() => setSalesView('quick')}>Последни</button>
                <button className={salesView === 'all' ? 'active' : ''} onClick={() => setSalesView('all')}>Всички продажби</button>
              </nav>
              {salesView === 'quick' && (
                <Panel title="Последни продажби">
                  <button className="inline-action" onClick={openAllSales}>Виж всички продажби</button>
                  {sales.slice(0, 12).map((sale) => (
                    <div className="row-with-action" key={sale.id}>
                      <Row title={sale.product.name} meta={`${new Date(sale.saleDate).toLocaleDateString('bg-BG')} | ${sale.quantity} | ${eur(sale.totalEur)} | печалба ${eur(sale.profitEur)}`} />
                      <div className="mini-actions">
                        <button className="mini-btn" onClick={() => editSale(sale)}>Редакция</button>
                        <button className="mini-btn danger" onClick={() => removeSale(sale)}>Изтрий</button>
                      </div>
                    </div>
                  ))}
                </Panel>
              )}
              {salesView === 'all' && (
                <div className="report-table-wrap">
                  <table className="report-table">
                    <thead>
                      <tr>
                        <th>Дата</th>
                        <th>Продукт</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Оборот</th>
                        <th>Печалба</th>
                        <th>Плащане</th>
                        <th>Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sales.map((sale) => (
                        <tr key={sale.id}>
                          <td data-label="Дата">{new Date(sale.saleDate).toLocaleDateString('bg-BG')}</td>
                          <td data-label="Продукт">{sale.product.name}</td>
                          <td data-label="Количество">{sale.quantity}</td>
                          <td data-label="Цена">{eur(sale.unitPriceEur)}</td>
                          <td data-label="Оборот">{eur(sale.totalEur)}<small>{bgn(sale.totalEur)}</small></td>
                          <td data-label="Печалба">{eur(sale.profitEur)}</td>
                          <td data-label="Плащане">{paymentLabels[sale.paymentMethod]}</td>
                          <td data-label="Действия">
                            <div className="mini-actions">
                              <button className="mini-btn" onClick={() => editSale(sale)}>Редакция</button>
                              <button className="mini-btn danger" onClick={() => removeSale(sale)}>Изтрий</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </section>
        )}

        {tab === 'products' && (
          <section className="storage-layout">
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
                <button className="erp-btn primary" onClick={openNewProductEditor}>Нов продукт</button>
              </div>
              {showProductEditor && (
                <form className="storage-editor" onSubmit={submitProduct}>
                  <div className="storage-editor-head">
                    <h2>{editingProductId ? 'Редакция на продукт' : 'Нов продукт'}</h2>
                    <button type="button" className="mini-btn" onClick={() => { setShowProductEditor(false); setEditingProductId(null); setProductForm(emptyProduct) }}>Затвори</button>
                  </div>
                  <div className="editor-grid">
                    <input placeholder="ИД / код от склада" value={productForm.sku} onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })} />
                    <input placeholder="Име" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} required />
                    <select value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}>
                      {Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                    </select>
                    <select value={productForm.unit} onChange={(e) => setProductForm({ ...productForm, unit: e.target.value })}>
                      {Object.entries(unitLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                    </select>
                    <input type="number" step="0.01" min="0" placeholder="Продажна EUR" value={productForm.sellPriceEur} onChange={(e) => setProductForm({ ...productForm, sellPriceEur: e.target.value })} required />
                    <input type="number" step="0.01" min="0" placeholder="Доставна EUR" value={productForm.costPriceEur} onChange={(e) => setProductForm({ ...productForm, costPriceEur: e.target.value })} required />
                    <input type="number" step="0.001" min="0" placeholder="Наличност" value={productForm.stockQuantity} onChange={(e) => setProductForm({ ...productForm, stockQuantity: e.target.value })} />
                    <input type="number" step="0.001" min="0" placeholder="Минимум" value={productForm.minStockQuantity} onChange={(e) => setProductForm({ ...productForm, minStockQuantity: e.target.value })} />
                    <input type="number" step="0.001" min="0" placeholder="Общо продадени" value={productForm.totalSoldQuantity} onChange={(e) => setProductForm({ ...productForm, totalSoldQuantity: e.target.value })} />
                    <label className="check"><input type="checkbox" checked={productForm.active} onChange={(e) => setProductForm({ ...productForm, active: e.target.checked })} /> Активен</label>
                    <textarea placeholder="Бележки" value={productForm.notes} onChange={(e) => setProductForm({ ...productForm, notes: e.target.value })} />
                    <div className="actions">
                      <button className="erp-btn primary" disabled={loading}>Запази</button>
                      {editingProductId && <button type="button" className="erp-btn ghost" onClick={() => { setEditingProductId(null); setProductForm(emptyProduct); setShowProductEditor(false) }}>Отказ</button>}
                    </div>
                  </div>
                </form>
              )}
              <section className="metric-grid compact">
                <div><span>Артикули</span><strong>{filteredProducts.length}</strong><small>показани</small></div>
                <div><span>Ниска наличност</span><strong>{storageTotals.low}</strong><small>за проверка</small></div>
                <div><span>Стойност склад</span><strong>{eur(storageTotals.stockValue)}</strong><small>{bgn(storageTotals.stockValue)}</small></div>
                <div><span>Продажна стойност</span><strong>{eur(storageTotals.sellValue)}</strong><small>{bgn(storageTotals.sellValue)}</small></div>
              </section>
              <div className="storage-hint">Таблицата се скролира вертикално и хоризонтално.</div>
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
    background: #eef2ec;
    color: #172018;
    padding: 18px 0 36px;
  }

  .erp-login {
    display: grid;
    place-items: center;
  }

  .erp-wrap {
    width: min(1240px, calc(100% - 24px));
    margin: 0 auto;
  }

  .login-box,
  .erp-card,
  .erp-panel,
  .metric-grid > div {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(26, 42, 28, 0.06);
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
    margin-bottom: 14px;
    padding: 12px 14px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
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
    margin: 0 0 14px;
    padding: 6px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }

  .erp-tabs button,
  .erp-btn {
    min-height: 42px;
    border-radius: 5px;
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
    background: #225c32;
    border-color: #225c32;
    color: #fff;
  }

  .erp-btn.ghost {
    background: #eef3ea;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  .metric-grid > div {
    padding: 14px;
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

  .sales-layout {
    display: grid;
    grid-template-columns: minmax(330px, 470px) minmax(0, 1fr);
    gap: 14px;
    align-items: start;
  }

  .sales-main {
    display: grid;
    gap: 12px;
    min-width: 0;
  }

  .sale-card {
    position: sticky;
    top: 12px;
    gap: 14px;
    border-color: #cfd9ca;
  }

  .sale-card-head {
    display: grid;
    grid-template-columns: 1fr 150px;
    gap: 10px;
    align-items: start;
  }

  .sale-card-head p {
    margin: 4px 0 0;
    color: #687366;
    font-weight: 700;
  }

  .quick-search,
  .sale-input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .quick-products {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    max-height: 250px;
    overflow: auto;
    padding-right: 2px;
  }

  .quick-products button {
    display: grid;
    gap: 4px;
    min-height: 68px;
    border: 1px solid #d5ded0;
    border-radius: 6px;
    background: #fbfcfa;
    color: #172018;
    padding: 10px;
    text-align: left;
    cursor: pointer;
  }

  .quick-products button.selected {
    border-color: #225c32;
    background: #eaf3e6;
    box-shadow: inset 0 0 0 1px #225c32;
  }

  .quick-products span {
    color: #687366;
    font-size: 0.86rem;
  }

  .payment-pills {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .payment-pills button {
    min-height: 44px;
    border: 1px solid #cfd9ca;
    border-radius: 6px;
    background: #fff;
    color: #1f3822;
    font: inherit;
    font-weight: 800;
    cursor: pointer;
  }

  .payment-pills button.active {
    background: #225c32;
    border-color: #225c32;
    color: #fff;
  }

  .sale-note {
    min-height: 58px;
  }

  .sale-total-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
    align-items: end;
    padding: 14px;
    border: 1px solid #d7dfd3;
    border-radius: 6px;
    background: #f8faf6;
  }

  .sale-total-bar span {
    color: #687366;
    font-weight: 800;
  }

  .sale-total-bar strong {
    font-size: 1.65rem;
    color: #172018;
  }

  .sale-total-bar small {
    grid-column: 2;
    color: #687366;
    font-weight: 800;
  }

  .sale-actions .erp-btn.primary {
    min-height: 50px;
    flex: 1;
    font-size: 1.05rem;
  }
  }

  .storage-layout {
    display: block;
  }

  .storage-main {
    display: grid;
    gap: 12px;
    min-width: 0;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(26, 42, 28, 0.06);
    overflow: hidden;
  }

  .storage-main .metric-grid {
    padding: 0 12px;
  }

  .storage-hint {
    padding: 0 12px;
    color: #687366;
    font-size: 0.86rem;
    font-weight: 700;
  }

  .storage-toolbar {
    display: grid;
    grid-template-columns: minmax(260px, 1fr) 190px 170px 140px;
    gap: 8px;
    padding: 12px;
    background: #f8faf6;
    border-bottom: 1px solid #dfe5dc;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .storage-editor {
    margin: 12px;
    padding: 14px;
    border: 1px solid #d5ded0;
    border-radius: 6px;
    background: #fbfcfa;
  }

  .storage-editor-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .storage-editor-head h2 {
    margin: 0;
    color: #1f3822;
  }

  .editor-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    align-items: start;
  }

  .editor-grid textarea {
    grid-column: span 2;
    min-height: 48px;
  }

  .metric-grid.compact {
    margin-bottom: 0;
  }

  .metric-grid.compact strong {
    font-size: 1.15rem;
  }

  .storage-table-wrap {
    max-height: min(66vh, 720px);
    background: #fff;
    border-top: 1px solid #dfe5dc;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
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

  .storage-table tbody tr:nth-child(even):not(.low) {
    background: #fbfcfa;
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

  .row-with-action {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid #edf0eb;
  }

  .row-with-action .erp-row {
    border-bottom: 0;
  }

  .inline-action,
  .mini-btn {
    min-height: 34px;
    border-radius: 6px;
    border: 1px solid #cfd9ca;
    background: #eef3ea;
    color: #1f3822;
    padding: 0 10px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }

  .inline-action {
    justify-self: start;
  }

  .mini-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .mini-btn.danger {
    background: #fee2e2;
    border-color: #fecaca;
    color: #991b1b;
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
    .sales-layout,
    .storage-layout {
      grid-template-columns: 1fr;
    }

    .sale-card {
      position: static;
    }

    .storage-toolbar {
      grid-template-columns: 1fr 1fr;
      position: static;
    }

    .storage-toolbar input {
      grid-column: 1 / -1;
    }

    .editor-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 620px) {
    .erp-shell {
      padding-top: 8px;
    }

    .erp-wrap {
      width: min(100% - 16px, 1240px);
    }

    .erp-header {
      align-items: stretch;
      flex-direction: column;
      padding: 10px;
    }

    .erp-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .report-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .storage-table-wrap {
      max-width: calc(100vw - 28px);
      max-height: 62vh;
    }

    .storage-toolbar {
      grid-template-columns: 1fr;
    }

    .storage-toolbar input {
      grid-column: auto;
    }

    .editor-grid {
      grid-template-columns: 1fr;
    }

    .editor-grid textarea {
      grid-column: auto;
    }

    .two {
      grid-template-columns: 1fr;
    }

    .sale-card {
      padding: 12px;
      margin-inline: -2px;
    }

    .sale-card-head,
    .quick-search,
    .sale-input-grid {
      grid-template-columns: 1fr;
    }

    .quick-products {
      grid-template-columns: 1fr 1fr;
      max-height: 230px;
    }

    .quick-products button {
      min-height: 76px;
      padding: 9px;
    }

    .payment-pills {
      grid-template-columns: 1fr 1fr;
    }

    .payment-pills button,
    input,
    textarea,
    select {
      min-height: 48px;
    }

    .sale-total-bar {
      position: sticky;
      bottom: 0;
      z-index: 3;
      margin-inline: -12px;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      box-shadow: 0 -8px 18px rgba(23, 32, 24, 0.08);
    }

    .sale-actions {
      position: sticky;
      bottom: 0;
      z-index: 4;
      background: #fff;
      padding-top: 8px;
      margin-bottom: -4px;
    }

    .sale-actions .erp-btn {
      width: 100%;
    }

    .report-table {
      min-width: 0;
      display: block;
    }

    .report-table thead {
      display: none;
    }

    .report-table tbody,
    .report-table tr,
    .report-table td {
      display: block;
      width: 100%;
    }

    .report-table tr {
      padding: 10px;
      border-bottom: 1px solid #dfe5dc;
    }

    .report-table td {
      border: 0;
      padding: 6px 0;
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 8px;
    }

    .row-with-action {
      grid-template-columns: 1fr;
      padding-bottom: 10px;
    }

    .mini-btn {
      justify-self: start;
    }

    .report-table td::before {
      content: attr(data-label);
      color: #687366;
      font-weight: 700;
    }
  }
`
