import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import SEO from '../components/SEO'
import { apiUrl } from '../config'
import { categoryLabels, commonText, expenseLabels, paymentLabels, tabLabels, unitLabels } from './admin/labels'
import { erpStyles } from './admin/styles'
import type { Dashboard, ErpProduct, ErpSale, PaginatedResult, ProductImportRow, ReportTab, Reports, Tab, WaxSettings, WaxSummary, WaxTransaction } from './admin/types'

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
  waxExchangeEnabled: false,
  foundationUnitsPerWaxKg: '',
  exchangeRoundingMode: 'FLOOR',
  notes: ''
}

const emptyDashboard: Dashboard = {
  todayTurnoverEur: 0,
  todayProfitEur: 0,
  monthlyTurnoverEur: 0,
  monthlyProfitEur: 0,
  lowStockProducts: [],
  latestSales: [],
  latestWaxTransactions: [],
  waxStockKg: 0,
  waxInventoryValueEur: 0
}

const emptyWaxSummary: WaxSummary = {
  defaultBuyPriceEur: 5,
  waxStockKg: 0,
  waxInventoryValueEur: 0,
  totalWaxBoughtValueEur: 0,
  totalFoundationGivenKg: 0,
  totalFoundationGivenValueEur: 0,
  totalExtraPaymentEur: 0,
  balanceEur: 0,
  transactionCount: 0
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function eur(value: number | string | null | undefined) {
  return `${Number(value || 0).toFixed(2)} EUR`
}

function bgn(value: number | string | null | undefined) {
  return `${(Number(value || 0) * 1.95583).toFixed(2)} лв.`
}

function listItems<T>(value: T[] | PaginatedResult<T> | null | undefined): T[] {
  if (Array.isArray(value)) return value
  return Array.isArray(value?.items) ? value.items : []
}

function roundExchangeQuantity(value: number, mode?: string | null) {
  if (!Number.isFinite(value)) return 0
  if (mode === 'ROUND') return Math.round(value)
  if (mode === 'CEIL') return Math.ceil(value)
  if (mode === 'NONE') return Number(value.toFixed(3))
  return Math.floor(value)
}

export default function AdminPage() {
  const [token, setToken] = useState(() => localStorage.getItem('admin_token') || '')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [tab, setTab] = useState<Tab>('dashboard')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const saleCardRef = useRef<HTMLFormElement | null>(null)

  const [dashboard, setDashboard] = useState<Dashboard | null>(null)
  const [products, setProducts] = useState<ErpProduct[]>([])
  const [sales, setSales] = useState<ErpSale[]>([])
  const [reports, setReports] = useState<Reports | null>(null)
  const [waxTransactions, setWaxTransactions] = useState<WaxTransaction[]>([])
  const [waxSummary, setWaxSummary] = useState<WaxSummary>(emptyWaxSummary)
  const [waxSettings, setWaxSettings] = useState<WaxSettings>({ defaultBuyPriceEur: 5 })

  const [storageSearch, setStorageSearch] = useState('')
  const [storageCategory, setStorageCategory] = useState('ALL')
  const [storageStatus, setStorageStatus] = useState('ALL')
  const [editingProductId, setEditingProductId] = useState<number | null>(null)
  const [showProductEditor, setShowProductEditor] = useState(false)
  const [productForm, setProductForm] = useState(emptyProduct)
  const [productImportFile, setProductImportFile] = useState<File | null>(null)
  const [productImportRows, setProductImportRows] = useState<ProductImportRow[]>([])
  const [productImportSummary, setProductImportSummary] = useState({ totalRows: 0, validRows: 0, invalidRows: 0 })

  const [editingSaleId, setEditingSaleId] = useState<number | null>(null)
  const [expandedSalesSections, setExpandedSalesSections] = useState({ latest: true, all: false })
  const [salesWindowHeight, setSalesWindowHeight] = useState<number | null>(null)
  const [saleProductSearch, setSaleProductSearch] = useState('')
  const [saleForm, setSaleForm] = useState({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' })

  const [expenseForm, setExpenseForm] = useState({ expenseDate: today(), category: 'MATERIALS', amountEur: '', paymentMethod: 'CASH', supplier: '', notes: '' })
  const [reportTab, setReportTab] = useState<ReportTab>('monthly')
  const [reportRange, setReportRange] = useState({ from: today().slice(0, 8) + '01', to: today() })

  const [editingWaxId, setEditingWaxId] = useState<number | null>(null)
  const [waxSettingsForm, setWaxSettingsForm] = useState({ defaultBuyPriceEur: '5' })
  const [foundationQtyManual, setFoundationQtyManual] = useState(false)
  const [waxForm, setWaxForm] = useState({
    transactionType: 'BUY' as 'BUY' | 'SWAP',
    transactionDate: today(),
    waxReceivedKg: '0',
    waxPricePerKgEur: '5',
    foundationGivenKg: '0',
    foundationPricePerKgEur: '15',
    extraPaymentEur: '0',
    foundationProductId: '',
    createExpense: false,
    notes: ''
  })

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
      const error = await response.json().catch(() => ({ error: commonText.requestFailed }))
      throw new Error(error.error || commonText.requestFailed)
    }
    if (response.status === 204) return null
    return response.json()
  }

  async function adminUpload(path: string, file: File) {
    const body = new FormData()
    body.append('file', file)
    const response = await fetch(apiUrl(path), { method: 'POST', credentials: 'include', headers: authHeaders, body })
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: commonText.fileFailed }))
      throw new Error(error.error || commonText.fileFailed)
    }
    return response.json()
  }

  async function loadData() {
    const results = await Promise.allSettled([
      adminFetch('/api/admin/erp/dashboard'),
      adminFetch('/api/admin/erp/products'),
      adminFetch('/api/admin/erp/sales'),
      adminFetch(`/api/admin/erp/reports?from=${reportRange.from}&to=${reportRange.to}`),
      adminFetch('/api/admin/erp/wax-transactions'),
      adminFetch('/api/admin/erp/wax-summary'),
      adminFetch('/api/admin/erp/wax-settings')
    ])
    const [dashboardResult, productResult, saleResult, reportResult, waxResult, waxSummaryResult, waxSettingsResult] = results

    setDashboard(dashboardResult.status === 'fulfilled' ? { ...emptyDashboard, ...dashboardResult.value } : emptyDashboard)
    if (productResult.status === 'fulfilled') setProducts(Array.isArray(productResult.value) ? productResult.value : [])
    if (saleResult.status === 'fulfilled') setSales(listItems<ErpSale>(saleResult.value))
    if (reportResult.status === 'fulfilled') setReports(reportResult.value)
    if (waxResult.status === 'fulfilled') setWaxTransactions(listItems<WaxTransaction>(waxResult.value))
    if (waxSummaryResult.status === 'fulfilled') setWaxSummary({ ...emptyWaxSummary, ...waxSummaryResult.value })
    if (waxSettingsResult.status === 'fulfilled') {
      const settings = { defaultBuyPriceEur: Number(waxSettingsResult.value.defaultBuyPriceEur || 5) }
      setWaxSettings(settings)
      setWaxSettingsForm({ defaultBuyPriceEur: String(settings.defaultBuyPriceEur) })
      if (!editingWaxId) setWaxForm((current) => ({ ...current, waxPricePerKgEur: String(settings.defaultBuyPriceEur) }))
    }

    const failed = results.find((result) => result.status === 'rejected')
    if (failed?.status === 'rejected') setStatus(failed.reason instanceof Error ? failed.reason.message : 'ERP данните не се заредиха напълно.')
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
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
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
      waxExchangeEnabled: Boolean(product.waxExchangeEnabled),
      foundationUnitsPerWaxKg: product.foundationUnitsPerWaxKg ? String(product.foundationUnitsPerWaxKg) : '',
      exchangeRoundingMode: product.exchangeRoundingMode || 'FLOOR',
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
          totalSoldQuantity: Number(productForm.totalSoldQuantity),
          waxExchangeEnabled: productForm.category === 'WAX_FOUNDATIONS' ? productForm.waxExchangeEnabled : false,
          foundationUnitsPerWaxKg: productForm.category === 'WAX_FOUNDATIONS' && productForm.foundationUnitsPerWaxKg ? Number(productForm.foundationUnitsPerWaxKg) : null,
          exchangeRoundingMode: productForm.exchangeRoundingMode
        })
      })
      setProductForm(emptyProduct)
      setEditingProductId(null)
      setShowProductEditor(false)
      await loadData()
      setStatus('Продуктът е запазен.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  async function previewProductImport() {
    if (!productImportFile) {
      setStatus('Изберете CSV или Excel файл.')
      return
    }
    setLoading(true)
    try {
      const result = await adminUpload('/api/admin/erp/products/import-preview', productImportFile)
      setProductImportRows(result.rows || [])
      setProductImportSummary({ totalRows: Number(result.totalRows || 0), validRows: Number(result.validRows || 0), invalidRows: Number(result.invalidRows || 0) })
      setStatus('Прегледът на файла е готов.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  async function importProductFile() {
    if (!productImportFile) {
      setStatus('Изберете CSV или Excel файл.')
      return
    }
    setLoading(true)
    try {
      const result = await adminUpload('/api/admin/erp/products/import', productImportFile)
      setProductImportRows([])
      setProductImportSummary({ totalRows: 0, validRows: 0, invalidRows: 0 })
      setProductImportFile(null)
      await loadData()
      setStatus(`Импортът е готов: ${result.created || 0} нови, ${result.updated || 0} обновени.`)
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
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
      setStatus('Продажбата е запазена.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  function editSale(sale: ErpSale) {
    setEditingSaleId(sale.id)
    setTab('sales')
    setExpandedSalesSections({ latest: false, all: true })
    setSaleForm({
      saleDate: sale.saleDate.slice(0, 10),
      productId: String(sale.product.id),
      quantity: String(sale.quantity),
      unitPriceEur: String(sale.unitPriceEur),
      paymentMethod: sale.paymentMethod,
      notes: sale.notes || ''
    })
  }

  async function removeSale(sale: ErpSale) {
    if (!window.confirm(`Да откажа ли продажбата за "${sale.product.name}"? Количеството ще бъде върнато в склада.`)) return
    setLoading(true)
    try {
      await adminFetch(`/api/admin/erp/sales/${sale.id}`, { method: 'DELETE' })
      await loadData()
      setStatus('Продажбата е отказана.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  async function submitExpense(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await adminFetch('/api/admin/erp/expenses', { method: 'POST', body: JSON.stringify({ ...expenseForm, amountEur: Number(expenseForm.amountEur) }) })
      setExpenseForm({ expenseDate: today(), category: 'MATERIALS', amountEur: '', paymentMethod: 'CASH', supplier: '', notes: '' })
      await loadData()
      setStatus('Разходът е запазен.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  async function submitWaxSettings(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await adminFetch('/api/admin/erp/wax-settings', { method: 'PUT', body: JSON.stringify({ defaultBuyPriceEur: Number(waxSettingsForm.defaultBuyPriceEur) }) })
      await loadData()
      setStatus('Настройките за восък са запазени.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  function resetWaxForm(defaultPrice = waxSettings.defaultBuyPriceEur) {
    setEditingWaxId(null)
    setFoundationQtyManual(false)
    setWaxForm({
      transactionType: 'BUY',
      transactionDate: today(),
      waxReceivedKg: '0',
      waxPricePerKgEur: String(defaultPrice),
      foundationGivenKg: '0',
      foundationPricePerKgEur: '0',
      extraPaymentEur: '0',
      foundationProductId: '',
      createExpense: false,
      notes: ''
    })
  }

  function setWaxTransactionType(transactionType: 'BUY' | 'SWAP') {
    setFoundationQtyManual(false)
    setWaxForm((current) => ({
      ...current,
      transactionType,
      foundationGivenKg: transactionType === 'BUY' ? '0' : current.foundationGivenKg,
      foundationPricePerKgEur: transactionType === 'BUY' ? '0' : current.foundationPricePerKgEur,
      foundationProductId: transactionType === 'BUY' ? '' : current.foundationProductId,
      extraPaymentEur: transactionType === 'BUY' ? '0' : current.extraPaymentEur
    }))
  }

  async function submitWax(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await adminFetch(editingWaxId ? `/api/admin/erp/wax-transactions/${editingWaxId}` : '/api/admin/erp/wax-transactions', {
        method: editingWaxId ? 'PATCH' : 'POST',
        body: JSON.stringify({
          ...waxForm,
          customerName: null,
          customerPhone: null,
          waxReceivedKg: Number(waxForm.waxReceivedKg),
          waxPricePerKgEur: Number(waxForm.waxPricePerKgEur),
          foundationGivenKg: waxForm.transactionType === 'SWAP' ? Number(waxForm.foundationGivenKg) : 0,
          foundationPricePerKgEur: waxForm.transactionType === 'SWAP' ? Number(waxForm.foundationPricePerKgEur) : 0,
          extraPaymentEur: waxForm.transactionType === 'SWAP' ? Number(waxForm.extraPaymentEur) : 0,
          foundationProductId: waxForm.transactionType === 'SWAP' && waxForm.foundationProductId ? Number(waxForm.foundationProductId) : null
        })
      })
      resetWaxForm()
      await loadData()
      setStatus('Восъчната сделка е запазена.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
  }

  function editWax(transaction: WaxTransaction) {
    const transactionType = transaction.transactionType || (Number(transaction.foundationGivenKg || 0) > 0 ? 'SWAP' : 'BUY')
    setEditingWaxId(transaction.id)
    setFoundationQtyManual(false)
    setTab('wax')
    setWaxForm({
      transactionType,
      transactionDate: transaction.transactionDate.slice(0, 10),
      waxReceivedKg: String(transaction.waxReceivedKg),
      waxPricePerKgEur: String(transaction.waxPricePerKgEur),
      foundationGivenKg: String(transaction.foundationGivenKg),
      foundationPricePerKgEur: String(transaction.foundationPricePerKgEur),
      extraPaymentEur: String(transaction.extraPaymentEur),
      foundationProductId: transaction.foundationProductId ? String(transaction.foundationProductId) : '',
      createExpense: false,
      notes: transaction.notes || ''
    })
  }

  async function removeWax(transaction: WaxTransaction) {
    if (!window.confirm('Да откажа ли восъчната сделка? Историята ще бъде запазена.')) return
    setLoading(true)
    try {
      await adminFetch(`/api/admin/erp/wax-transactions/${transaction.id}`, { method: 'DELETE' })
      await loadData()
      setStatus('Восъчната сделка е отказана.')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : commonText.operationFailed)
    } finally {
      setLoading(false)
    }
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
  const foundationProducts = products.filter((product) => (
    product.category === 'WAX_FOUNDATIONS' &&
    product.active &&
    product.waxExchangeEnabled &&
    product.foundationUnitsPerWaxKg !== null &&
    product.foundationUnitsPerWaxKg !== undefined
  ))
  const selectedFoundationProduct = foundationProducts.find((product) => String(product.id) === waxForm.foundationProductId)
  const foundationUnitLabel = 'бр.'
  const foundationQuantityStep = '1'
  const isWaxSwap = waxForm.transactionType === 'SWAP'
  const waxValue = Number(waxForm.waxReceivedKg || 0) * Number(waxForm.waxPricePerKgEur || 0)
  const rawSuggestedFoundationQty = isWaxSwap && selectedFoundationProduct?.foundationUnitsPerWaxKg
    ? Number(waxForm.waxReceivedKg || 0) * Number(selectedFoundationProduct.foundationUnitsPerWaxKg)
    : 0
  const suggestedFoundationQty = selectedFoundationProduct ? roundExchangeQuantity(rawSuggestedFoundationQty, selectedFoundationProduct.exchangeRoundingMode) : 0
  const foundationValue = isWaxSwap ? Number(waxForm.foundationGivenKg || 0) * Number(waxForm.foundationPricePerKgEur || 0) : 0
  const waxBalance = waxValue + (isWaxSwap ? Number(waxForm.extraPaymentEur || 0) : 0) - foundationValue
  const waxBalanceLabel = waxForm.transactionType === 'BUY'
    ? `За плащане ${eur(waxValue)}`
    : waxBalance > 0
      ? `Дължите на клиента ${eur(waxBalance)}`
      : waxBalance < 0
        ? `Клиентът доплаща ${eur(Math.abs(waxBalance))}`
        : 'Балансът е изравнен'

  useEffect(() => {
    if (!isWaxSwap || !selectedFoundationProduct || foundationQtyManual) return
    setWaxForm((current) => ({ ...current, foundationGivenKg: String(suggestedFoundationQty) }))
  }, [isWaxSwap, selectedFoundationProduct?.id, waxForm.waxReceivedKg, suggestedFoundationQty, foundationQtyManual])

  useLayoutEffect(() => {
    if (tab !== 'sales' || !saleCardRef.current) return
    const element = saleCardRef.current
    const updateHeight = () => setSalesWindowHeight(Math.ceil(element.getBoundingClientRect().height))
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(element)
    window.addEventListener('resize', updateHeight)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [tab, selectedSaleProduct, quickSaleProducts.length, editingSaleId, loading])

  if (!isAuthenticated) {
    return (
      <div className="erp-login">
        <SEO title="ERP вход | SakiMed" description="Вход в административната ERP система на SakiMed." path="/admin" noindex />
        <form className="login-box" onSubmit={handleLogin}>
          <h1>SakiMed ERP</h1>
          <label>Имейл<input type="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required /></label>
          <label>Парола<input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required /></label>
          {status && <p className="status error">{status}</p>}
          <button className="erp-btn primary" disabled={loading}>{loading ? 'Влизане...' : 'Вход'}</button>
        </form>
        <style>{erpStyles}</style>
      </div>
    )
  }

  return (
    <div className="erp-shell">
      <SEO title="SakiMed ERP | Табло" description="Административен ERP панел на SakiMed." path="/admin" noindex />
      <div className="erp-wrap">
        <header className="erp-header">
          <div>
            <h1>SakiMed ERP</h1>
            <p>Продажби, склад, восък, разходи и справки</p>
          </div>
          <button className="erp-btn ghost" onClick={handleLogout}>Изход</button>
        </header>

        {status && <p className="status">{status}</p>}

        <nav className="erp-tabs">
          {tabLabels.map(([key, label]) => (
            <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>{label}</button>
          ))}
        </nav>

        {tab === 'dashboard' && dashboard && (
          <>
            <MetricGrid items={[
              ['Дневен оборот', eur(dashboard.todayTurnoverEur), bgn(dashboard.todayTurnoverEur)],
              ['Дневна печалба', eur(dashboard.todayProfitEur), bgn(dashboard.todayProfitEur)],
              ['Месечен оборот', eur(dashboard.monthlyTurnoverEur), bgn(dashboard.monthlyTurnoverEur)],
              ['Месечна печалба', eur(dashboard.monthlyProfitEur), bgn(dashboard.monthlyProfitEur)],
              ['Наличен восък', `${Number(dashboard.waxStockKg || 0).toFixed(3)} кг`, eur(dashboard.waxInventoryValueEur || 0)]
            ]} />
            <section className="erp-columns">
              <Panel title="Ниска наличност">
                {dashboard.lowStockProducts.map((product) => <Row key={product.id} title={product.name} meta={`${product.stockQuantity} ${unitLabels[product.unit]} | минимум ${product.minStockQuantity}`} />)}
              </Panel>
              <Panel title="Последни продажби">
                <button className="inline-action" onClick={() => { setTab('sales'); setExpandedSalesSections({ latest: false, all: true }) }}>Всички продажби</button>
                {dashboard.latestSales.map((sale) => (
                  <ActionRow key={sale.id} title={sale.product.name} meta={`${sale.quantity} x ${eur(sale.unitPriceEur)} = ${eur(sale.totalEur)}`}>
                    <button className="mini-btn" onClick={() => editSale(sale)}>{commonText.edit}</button>
                    <button className="mini-btn danger" onClick={() => removeSale(sale)}>{commonText.delete}</button>
                  </ActionRow>
                ))}
              </Panel>
              <Panel title="Последни сделки с восък">
                {dashboard.latestWaxTransactions.map((item) => <Row key={item.id} title={`${item.transactionType === 'SWAP' ? 'Смяна' : 'Покупка'} #${item.id}`} meta={`Баланс ${eur(item.balanceEur)} | восък ${item.waxReceivedKg} кг`} />)}
              </Panel>
            </section>
          </>
        )}

        {tab === 'sales' && (
          <section className="sales-layout">
            <form className="erp-card sale-card" ref={saleCardRef} onSubmit={submitSale}>
              <h2>{editingSaleId ? 'Редакция на продажба' : 'Бърза продажба'}</h2>
              <label>Дата<input type="date" value={saleForm.saleDate} onChange={(e) => setSaleForm({ ...saleForm, saleDate: e.target.value })} /></label>
              <div className="quick-search">
                <label>Търсене<input placeholder="Търси продукт или код" value={saleProductSearch} onChange={(e) => setSaleProductSearch(e.target.value)} /></label>
                <label>Продукт
                  <select value={saleForm.productId} onChange={(e) => {
                    const product = products.find((item) => String(item.id) === e.target.value)
                    setSaleForm({ ...saleForm, productId: e.target.value, unitPriceEur: product ? String(product.sellPriceEur) : '' })
                  }} required>
                    <option value="">Избери продукт</option>
                    {products.filter((product) => product.active).map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
                  </select>
                </label>
              </div>
              <div className="quick-products">
                {quickSaleProducts.map((product) => (
                  <button type="button" key={product.id} className={saleForm.productId === String(product.id) ? 'selected' : ''} onClick={() => setSaleForm({ ...saleForm, productId: String(product.id), unitPriceEur: String(product.sellPriceEur) })}>
                    <strong>{product.name}</strong>
                    <span>{eur(product.sellPriceEur)} | {product.stockQuantity} {unitLabels[product.unit]}</span>
                  </button>
                ))}
              </div>
              <div className="sale-input-grid">
                <label>Количество<input inputMode="decimal" type="number" step="0.001" min="0.001" value={saleForm.quantity} onChange={(e) => setSaleForm({ ...saleForm, quantity: e.target.value })} required /></label>
                <label>Цена EUR<input inputMode="decimal" type="number" step="0.01" min="0" value={saleForm.unitPriceEur} onChange={(e) => setSaleForm({ ...saleForm, unitPriceEur: e.target.value })} /></label>
              </div>
              <PillGroup value={saleForm.paymentMethod} labels={paymentLabels} onChange={(paymentMethod) => setSaleForm({ ...saleForm, paymentMethod })} />
              <label>Бележка<textarea value={saleForm.notes} onChange={(e) => setSaleForm({ ...saleForm, notes: e.target.value })} /></label>
              <div className="sale-total-bar">
                <span>Общо</span>
                <strong>{eur(Number(saleForm.quantity || 0) * Number(saleForm.unitPriceEur || selectedSaleProduct?.sellPriceEur || 0))}</strong>
                <small>{bgn(Number(saleForm.quantity || 0) * Number(saleForm.unitPriceEur || selectedSaleProduct?.sellPriceEur || 0))}</small>
              </div>
              <div className="actions">
                <button className="erp-btn primary" disabled={loading}>{editingSaleId ? 'Запази продажба' : 'Продай'}</button>
                {editingSaleId && <button type="button" className="erp-btn ghost" onClick={() => { setEditingSaleId(null); setSaleForm({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' }) }}>{commonText.cancel}</button>}
              </div>
            </form>

            <section className="sales-main" style={salesWindowHeight ? { height: salesWindowHeight } : undefined}>
              <SalesSection title="Последни продажби" count={sales.slice(0, 12).length} expanded={expandedSalesSections.latest} onToggle={() => setExpandedSalesSections((current) => ({ ...current, latest: !current.latest }))}>
                {sales.slice(0, 12).map((sale) => <SaleRow key={sale.id} sale={sale} onEdit={editSale} onCancel={removeSale} />)}
              </SalesSection>
              <SalesSection title="Всички продажби" count={sales.length} expanded={expandedSalesSections.all} onToggle={() => setExpandedSalesSections((current) => ({ ...current, all: !current.all }))}>
                <ReportTable
                  headers={[commonText.date, commonText.product, commonText.quantity, commonText.price, commonText.total, commonText.profit, commonText.payment, commonText.actions]}
                  rows={sales.map((sale) => [
                    new Date(sale.saleDate).toLocaleDateString('bg-BG'),
                    sale.product.name,
                    String(sale.quantity),
                    eur(sale.unitPriceEur),
                    eur(sale.totalEur),
                    eur(sale.profitEur),
                    paymentLabels[sale.paymentMethod],
                    ''
                  ])}
                />
              </SalesSection>
            </section>
          </section>
        )}

        {tab === 'products' && (
          <section className="storage-layout">
            <div className="storage-toolbar">
              <label>Търсене<input placeholder="Име, код или бележка" value={storageSearch} onChange={(e) => setStorageSearch(e.target.value)} /></label>
              <label>Категория<select value={storageCategory} onChange={(e) => setStorageCategory(e.target.value)}><option value="ALL">Всички</option>{Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
              <label>Статус<select value={storageStatus} onChange={(e) => setStorageStatus(e.target.value)}><option value="ALL">Всички</option><option value="LOW">Ниска наличност</option><option value="ACTIVE">Активни</option></select></label>
              <button className="erp-btn primary" onClick={() => { setEditingProductId(null); setProductForm(emptyProduct); setShowProductEditor(true) }}>Нов продукт</button>
            </div>
            <ProductImport file={productImportFile} rows={productImportRows} summary={productImportSummary} onFile={setProductImportFile} onPreview={previewProductImport} onImport={importProductFile} loading={loading} />
            {showProductEditor && (
              <form className="storage-editor" onSubmit={submitProduct}>
                <div className="storage-editor-head"><h2>{editingProductId ? 'Редакция на продукт' : 'Нов продукт'}</h2><button type="button" className="mini-btn" onClick={() => setShowProductEditor(false)}>Затвори</button></div>
                <div className="editor-grid">
                  <label>Код<input value={productForm.sku} onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })} /></label>
                  <label>Име<input value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} required /></label>
                  <label>Категория<select value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}>{Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
                  <label>Мярка<select value={productForm.unit} onChange={(e) => setProductForm({ ...productForm, unit: e.target.value })}>{Object.entries(unitLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
                  <label>Продажна цена EUR<input type="number" step="0.01" min="0" value={productForm.sellPriceEur} onChange={(e) => setProductForm({ ...productForm, sellPriceEur: e.target.value })} required /></label>
                  <label>Доставна цена EUR<input type="number" step="0.01" min="0" value={productForm.costPriceEur} onChange={(e) => setProductForm({ ...productForm, costPriceEur: e.target.value })} required /></label>
                  <label>Наличност<input type="number" step="0.001" min="0" value={productForm.stockQuantity} onChange={(e) => setProductForm({ ...productForm, stockQuantity: e.target.value })} /></label>
                  <label>Минимум<input type="number" step="0.001" min="0" value={productForm.minStockQuantity} onChange={(e) => setProductForm({ ...productForm, minStockQuantity: e.target.value })} /></label>
                  <label className="check"><input type="checkbox" checked={productForm.active} onChange={(e) => setProductForm({ ...productForm, active: e.target.checked })} /> Активен</label>
                  {productForm.category === 'WAX_FOUNDATIONS' && (
                    <section className="wide-field erp-card">
                      <h2>Настройки за размяна на восък</h2>
                      <label className="check"><input type="checkbox" checked={productForm.waxExchangeEnabled} onChange={(e) => setProductForm({ ...productForm, waxExchangeEnabled: e.target.checked })} /> Участва в размяна на восък</label>
                      <div className="two">
                        <label>Брой основи за 1 кг восък<input type="number" step="0.001" min="0" value={productForm.foundationUnitsPerWaxKg} onChange={(e) => setProductForm({ ...productForm, foundationUnitsPerWaxKg: e.target.value })} /></label>
                        <label>Закръгляне<select value={productForm.exchangeRoundingMode} onChange={(e) => setProductForm({ ...productForm, exchangeRoundingMode: e.target.value })}>
                          <option value="FLOOR">надолу</option>
                          <option value="ROUND">нормално</option>
                          <option value="CEIL">нагоре</option>
                          <option value="NONE">без закръгляне</option>
                        </select></label>
                      </div>
                      <div className="storage-hint">Пример: ако за 1 кг восък се дават 12 основи, въведете 12.</div>
                    </section>
                  )}                  <label className="wide-field">Бележки<textarea value={productForm.notes} onChange={(e) => setProductForm({ ...productForm, notes: e.target.value })} /></label>
                  <button className="erp-btn primary" disabled={loading}>{commonText.save}</button>
                </div>
              </form>
            )}
            <MetricGrid items={[['Артикули', String(filteredProducts.length), 'показани'], ['Ниска наличност', String(storageTotals.low), 'за проверка'], ['Стойност склад', eur(storageTotals.stockValue), bgn(storageTotals.stockValue)], ['Продажна стойност', eur(storageTotals.sellValue), bgn(storageTotals.sellValue)]]} />
            <div className="storage-table-wrap">
              <table>
                <thead><tr><th>Код</th><th>Продукт</th><th>Категория</th><th>Наличност</th><th>Дост.</th><th>Прод.</th><th>Стойност</th></tr></thead>
                <tbody>{filteredProducts.map((product) => (
                  <tr key={product.id} className={product.stockStatus === 'LOW' ? 'low' : ''} onClick={() => editProduct(product)}>
                    <td>{product.sku || product.id}</td><td><strong>{product.name}</strong><small>{product.active ? 'Активен' : 'Спрян'}</small></td><td>{categoryLabels[product.category]}</td><td>{product.stockQuantity} {unitLabels[product.unit]}<small>мин. {product.minStockQuantity}</small></td><td>{eur(product.costPriceEur)}</td><td>{eur(product.sellPriceEur)}</td><td>{eur(product.inventoryValueEur || 0)}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </section>
        )}

        {tab === 'reports' && reports && (
          <ReportsView reports={reports} reportTab={reportTab} setReportTab={setReportTab} reportRange={reportRange} setReportRange={setReportRange} />
        )}

        {tab === 'expenses' && (
          <section className="erp-grid">
            <form className="erp-card" onSubmit={submitExpense}>
              <h2>Нов разход</h2>
              <label>Дата<input type="date" value={expenseForm.expenseDate} onChange={(e) => setExpenseForm({ ...expenseForm, expenseDate: e.target.value })} /></label>
              <label>Категория<select value={expenseForm.category} onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}>{Object.entries(expenseLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
              <label>Сума EUR<input type="number" step="0.01" min="0" value={expenseForm.amountEur} onChange={(e) => setExpenseForm({ ...expenseForm, amountEur: e.target.value })} required /></label>
              <label>Плащане<select value={expenseForm.paymentMethod} onChange={(e) => setExpenseForm({ ...expenseForm, paymentMethod: e.target.value })}>{Object.entries(paymentLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
              <label>Доставчик<input value={expenseForm.supplier} onChange={(e) => setExpenseForm({ ...expenseForm, supplier: e.target.value })} /></label>
              <label>Бележка<textarea value={expenseForm.notes} onChange={(e) => setExpenseForm({ ...expenseForm, notes: e.target.value })} /></label>
              <button className="erp-btn primary" disabled={loading}>Запази разход</button>
            </form>
            <Panel title="Справка разходи">{reports?.expensesByCategory.map((row) => <Row key={row.category} title={expenseLabels[row.category]} meta={eur(row._sum.amountEur || 0)} />)}</Panel>
          </section>
        )}

        {tab === 'wax' && (
          <section className="wax-page">
            <MetricGrid items={[
              ['Наличен восък', `${Number(waxSummary.waxStockKg || 0).toFixed(3)} кг`, 'текущ склад'],
              ['Стойност във восък', eur(waxSummary.waxInventoryValueEur), `по ${eur(waxSettings.defaultBuyPriceEur)} / кг`],
              ['Дадени основи', `${Number(waxSummary.totalFoundationGivenKg || 0).toFixed(0)} бр.`, eur(waxSummary.totalFoundationGivenValueEur)],
              ['Баланс сделки', eur(waxSummary.balanceEur), `${waxSummary.transactionCount} сделки`]
            ]} />
            <section className="erp-grid">
              <div className="wax-form-stack">
                <form className="erp-card" onSubmit={submitWax}>
                  <h2>{editingWaxId ? 'Редакция на восъчна сделка' : 'Нова восъчна сделка'}</h2>
                  <div className="mode-switch">
                    <button type="button" className={waxForm.transactionType === 'BUY' ? 'active' : ''} onClick={() => setWaxTransactionType('BUY')}>Купувам восък</button>
                    <button type="button" className={waxForm.transactionType === 'SWAP' ? 'active' : ''} onClick={() => setWaxTransactionType('SWAP')}>Смяна основи за восък</button>
                  </div>
                  <label>Дата<input type="date" value={waxForm.transactionDate} onChange={(e) => setWaxForm({ ...waxForm, transactionDate: e.target.value })} /></label>
                  <div className="two">
                    <label>Приет восък кг<input type="number" step="0.001" min="0" value={waxForm.waxReceivedKg} onChange={(e) => setWaxForm({ ...waxForm, waxReceivedKg: e.target.value })} /></label>
                    <label>Цена восък EUR/кг<input type="number" step="0.01" min="0" value={waxForm.waxPricePerKgEur} onChange={(e) => setWaxForm({ ...waxForm, waxPricePerKgEur: e.target.value })} /></label>
                  </div>
                  {isWaxSwap && (
                    <>
                      <label>Тип основи от склада<select value={waxForm.foundationProductId} onChange={(e) => {
                        const product = foundationProducts.find((item) => String(item.id) === e.target.value)
                        setWaxForm({ ...waxForm, foundationProductId: e.target.value, foundationPricePerKgEur: product ? String(product.sellPriceEur) : waxForm.foundationPricePerKgEur })
                      }} required><option value="">Избери основи</option>{foundationProducts.map((product) => <option key={product.id} value={product.id}>{product.name} | {Number(product.stockQuantity).toFixed(0)} бр. | {eur(product.sellPriceEur)}</option>)}</select></label>
                      <div className="two">
                        <label>Дадени основи {foundationUnitLabel}<input type="number" step={foundationQuantityStep} min="0" value={waxForm.foundationGivenKg} onChange={(e) => { setFoundationQtyManual(true); setWaxForm({ ...waxForm, foundationGivenKg: e.target.value }) }} /></label>
                        <label>Цена основи EUR/{foundationUnitLabel}<input type="number" step="0.01" min="0" value={waxForm.foundationPricePerKgEur} onChange={(e) => setWaxForm({ ...waxForm, foundationPricePerKgEur: e.target.value })} /></label>
                      </div>
                      <label>Доплатено от клиента EUR<input type="number" step="0.01" min="0" value={waxForm.extraPaymentEur} onChange={(e) => setWaxForm({ ...waxForm, extraPaymentEur: e.target.value })} /></label>
                      {selectedFoundationProduct && <div className="storage-hint">
                        {Number(waxForm.waxReceivedKg || 0)} кг восък × {selectedFoundationProduct.foundationUnitsPerWaxKg} осн./кг = {suggestedFoundationQty} основи
                        {foundationQtyManual && <><br />Количеството е променено ръчно.</>}
                      </div>}
                    </>
                  )}
                  {waxForm.transactionType === 'BUY' && <label className="check"><input type="checkbox" checked={waxForm.createExpense} onChange={(e) => setWaxForm({ ...waxForm, createExpense: e.target.checked })} /> Създай разход за покупката на восък</label>}
                  <label>Бележка<textarea value={waxForm.notes} onChange={(e) => setWaxForm({ ...waxForm, notes: e.target.value })} /></label>
                  <div className="form-total">Стойност восък {eur(waxValue)} | Основи {eur(foundationValue)} | {waxBalanceLabel}</div>
                  <div className="actions"><button className="erp-btn primary" disabled={loading}>{editingWaxId ? 'Запази промени' : 'Запази сделка'}</button>{editingWaxId && <button type="button" className="erp-btn ghost" onClick={() => resetWaxForm()}>{commonText.cancel}</button>}</div>
                </form>
              </div>
              <Panel title="Восъчни сделки">{waxTransactions.map((item) => <WaxRow key={item.id} item={item} onEdit={editWax} onCancel={removeWax} />)}</Panel>
            </section>
          </section>
        )}

        {tab === 'wax-ledger' && <WaxLedger waxSummary={waxSummary} waxTransactions={waxTransactions} />}
        {tab === 'settings' && <SettingsPage waxSettingsForm={waxSettingsForm} setWaxSettingsForm={setWaxSettingsForm} submitWaxSettings={submitWaxSettings} loading={loading} />}
      </div>
      <style>{erpStyles}</style>
    </div>
  )
}

function MetricGrid({ items }: { items: Array<[string, string, string]> }) {
  return <section className="metric-grid">{items.map(([label, value, meta]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>{meta}</small></div>)}</section>
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="erp-panel"><h2>{title}</h2><div className="panel-list">{children}</div></section>
}

function Row({ title, meta }: { title: string; meta: string }) {
  return <div className="erp-row"><strong>{title}</strong><span>{meta}</span></div>
}

function ActionRow({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  return <div className="row-with-action"><Row title={title} meta={meta} /><div className="mini-actions">{children}</div></div>
}

function SalesSection({ title, count, expanded, onToggle, children }: { title: string; count: number; expanded: boolean; onToggle: () => void; children: React.ReactNode }) {
  return <section className={`sales-section ${expanded ? 'expanded' : ''}`}><button type="button" className="sales-section-head" onClick={onToggle}><span>{title}</span><small>{count}</small></button>{expanded && <div className="sales-section-body">{children}</div>}</section>
}

function SaleRow({ sale, onEdit, onCancel }: { sale: ErpSale; onEdit: (sale: ErpSale) => void; onCancel: (sale: ErpSale) => void }) {
  return <ActionRow title={sale.product.name} meta={`${new Date(sale.saleDate).toLocaleDateString('bg-BG')} | ${sale.quantity} | ${eur(sale.totalEur)} | печалба ${eur(sale.profitEur)}`}><button className="mini-btn" onClick={() => onEdit(sale)}>{commonText.edit}</button><button className="mini-btn danger" onClick={() => onCancel(sale)}>{commonText.delete}</button></ActionRow>
}

function WaxRow({ item, onEdit, onCancel }: { item: WaxTransaction; onEdit: (item: WaxTransaction) => void; onCancel: (item: WaxTransaction) => void }) {
  const foundationUnit = 'бр.'
  const foundationQty = Number(item.foundationGivenKg).toFixed(0)
  return <ActionRow title={`${item.transactionType === 'SWAP' ? 'Смяна' : 'Покупка'} #${item.id} | ${new Date(item.transactionDate).toLocaleDateString('bg-BG')}`} meta={`восък ${item.waxReceivedKg} кг | основи ${foundationQty} ${foundationUnit} | баланс ${eur(item.balanceEur)}`}><button className="mini-btn" onClick={() => onEdit(item)}>{commonText.edit}</button><button className="mini-btn danger" onClick={() => onCancel(item)}>{commonText.delete}</button></ActionRow>
}

function PillGroup({ value, labels, onChange }: { value: string; labels: Record<string, string>; onChange: (value: string) => void }) {
  return <div className="field-group"><span className="field-title">Плащане</span><div className="payment-pills">{Object.entries(labels).map(([key, label]) => <button type="button" key={key} className={value === key ? 'active' : ''} onClick={() => onChange(key)}>{label}</button>)}</div></div>
}

function ProductImport({ file, rows, summary, onFile, onPreview, onImport, loading }: { file: File | null; rows: ProductImportRow[]; summary: { totalRows: number; validRows: number; invalidRows: number }; onFile: (file: File | null) => void; onPreview: () => void; onImport: () => void; loading: boolean }) {
  return <section className="erp-card import-card"><h2>Импорт на продукти</h2><div className="import-controls"><label>CSV или Excel файл<input type="file" accept=".csv,.xlsx,.xls" onChange={(event) => onFile(event.target.files?.[0] || null)} /></label><button type="button" className="erp-btn ghost" disabled={!file || loading} onClick={onPreview}>Преглед</button><button type="button" className="erp-btn primary" disabled={!file || loading || summary.invalidRows > 0} onClick={onImport}>Импорт / обновяване</button></div>{summary.totalRows > 0 && <div className="storage-hint">Редове: {summary.totalRows} | валидни: {summary.validRows} | грешки: {summary.invalidRows}</div>}{rows.length > 0 && <div className="import-preview">{rows.slice(0, 8).map((row) => <div key={row.rowNumber} className={row.errors.length ? 'import-row invalid' : 'import-row'}><strong>{row.rowNumber}. {row.name || 'Без име'}</strong><span>{row.sku || '-'} | {categoryLabels[row.category] || row.category} | {row.stockQuantity} {unitLabels[row.unit] || row.unit}</span>{row.errors.length > 0 && <small>{row.errors.join(' ')}</small>}</div>)}</div>}</section>
}

function ReportsView({ reports, reportTab, setReportTab, reportRange, setReportRange }: { reports: Reports; reportTab: ReportTab; setReportTab: (tab: ReportTab) => void; reportRange: { from: string; to: string }; setReportRange: (range: { from: string; to: string }) => void }) {
  return <section className="report-stack"><div className="filters"><label>От дата<input type="date" value={reportRange.from} onChange={(e) => setReportRange({ ...reportRange, from: e.target.value })} /></label><label>До дата<input type="date" value={reportRange.to} onChange={(e) => setReportRange({ ...reportRange, to: e.target.value })} /></label><a className="erp-btn primary" href={apiUrl(`/api/admin/erp/reports.csv?from=${reportRange.from}&to=${reportRange.to}`)}>CSV export</a></div><MetricGrid items={[['Оборот', eur(reports.totals.turnoverEur), bgn(reports.totals.turnoverEur)], ['Брутна печалба', eur(reports.totals.grossProfitEur), bgn(reports.totals.grossProfitEur)], ['Разходи', eur(reports.totals.expensesEur), bgn(reports.totals.expensesEur)], ['Нетна печалба', eur(reports.totals.netProfitEur), bgn(reports.totals.netProfitEur)]]} /><nav className="report-tabs">{[['monthly', 'Месечни'], ['daily', 'Дневни'], ['products', 'Продадени продукти'], ['expenses', 'Разходи'], ['low-stock', 'Ниска наличност']].map(([key, label]) => <button key={key} className={reportTab === key ? 'active' : ''} onClick={() => setReportTab(key as ReportTab)}>{label}</button>)}</nav>{reportTab === 'monthly' && <ReportTable headers={['Месец', 'Оборот', 'Печалба', 'Разходи', 'Нетна печалба', 'Количество', 'Продажби']} rows={reports.monthly.map((row) => [new Date(row.month).toLocaleDateString('bg-BG', { month: 'long', year: 'numeric' }), eur(row.turnover_eur), eur(row.profit_eur), eur(row.expenses_eur), eur(Number(row.profit_eur || 0) - Number(row.expenses_eur || 0)), String(row.sold_quantity || 0), String(row.sold_lines || 0)])} />}{reportTab === 'daily' && <ReportTable headers={['Дата', 'Оборот', 'Печалба', 'Разходи', 'Количество']} rows={reports.daily.map((row) => [new Date(row.day).toLocaleDateString('bg-BG'), eur(row.turnover_eur), eur(row.profit_eur), eur(row.expenses_eur), String(row.sold_quantity || 0)])} />}{reportTab === 'products' && <ReportTable headers={['Продукт', 'Количество', 'Оборот', 'Печалба']} rows={reports.salesByProduct.map((row) => [row.product_name, String(row.quantity), eur(row.turnover_eur), eur(row.profit_eur)])} />}{reportTab === 'expenses' && <ReportTable headers={['Категория', 'Сума EUR', 'Сума BGN']} rows={reports.expensesByCategory.map((row) => [expenseLabels[row.category], eur(row._sum.amountEur || 0), bgn(row._sum.amountEur || 0)])} />}{reportTab === 'low-stock' && <ReportTable headers={['Продукт', 'Категория', 'Наличност', 'Минимум']} rows={reports.lowStockProducts.map((product) => [product.name, categoryLabels[product.category], `${product.stockQuantity} ${unitLabels[product.unit]}`, String(product.minStockQuantity)])} />}</section>
}

function WaxLedger({ waxSummary, waxTransactions }: { waxSummary: WaxSummary; waxTransactions: WaxTransaction[] }) {
  return <section className="report-stack"><h2>Восъчен отчет</h2><MetricGrid items={[['Наличен восък', `${Number(waxSummary.waxStockKg || 0).toFixed(3)} кг`, eur(waxSummary.waxInventoryValueEur)], ['Купен восък', eur(waxSummary.totalWaxBoughtValueEur), 'стойност сделки'], ['Дадени основи', `${Number(waxSummary.totalFoundationGivenKg || 0).toFixed(0)} бр.`, eur(waxSummary.totalFoundationGivenValueEur)], ['Баланс', eur(waxSummary.balanceEur), `${waxSummary.transactionCount} сделки`]]} /><ReportTable headers={['Дата', 'Тип', 'Номер', 'Восък кг', 'Основи', 'Стойност восък', 'Баланс']} rows={waxTransactions.map((item) => {
    const foundationUnit = 'бр.'
    const foundationQty = Number(item.foundationGivenKg).toFixed(0)
    return [new Date(item.transactionDate).toLocaleDateString('bg-BG'), item.transactionType === 'SWAP' ? 'Смяна' : 'Покупка', `#${item.id}`, String(item.waxReceivedKg), `${foundationQty} ${foundationUnit}`, eur(item.waxValueEur), eur(item.balanceEur)]
  })} /></section>
}

function SettingsPage({ waxSettingsForm, setWaxSettingsForm, submitWaxSettings, loading }: { waxSettingsForm: { defaultBuyPriceEur: string }; setWaxSettingsForm: (value: { defaultBuyPriceEur: string }) => void; submitWaxSettings: (event: React.FormEvent) => void; loading: boolean }) {
  return <section className="settings-page"><form className="erp-card" onSubmit={submitWaxSettings}><h2>Общи настройки</h2><div className="settings-grid"><label>Цена изкупуване восък EUR/кг<input type="number" step="0.01" min="0" value={waxSettingsForm.defaultBuyPriceEur} onChange={(e) => setWaxSettingsForm({ defaultBuyPriceEur: e.target.value })} /></label></div><button className="erp-btn primary" disabled={loading}>Запази настройки</button></form></section>
}

function ReportTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="report-table-wrap"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.length === 0 && <tr><td colSpan={headers.length}>{commonText.noRows}</td></tr>}{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`} data-label={headers[cellIndex]}>{cell}</td>)}</tr>)}</tbody></table></div>
}
