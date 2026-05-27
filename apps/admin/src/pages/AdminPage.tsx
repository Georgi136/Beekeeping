import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import SEO from '../components/SEO'
import { apiUrl } from '../config'
import DashboardPage from './dashboard/DashboardPage'
import ExpensesPage from './expenses/ExpensesPage'
import ProductsPage from './products/ProductsPage'
import ReportsPage from './reports/ReportsPage'
import SalesPage from './sales/SalesPage'
import SettingsPage from './settings/SettingsPage'
import WaxLedgerPage from './wax-ledger/WaxLedgerPage'
import WaxPage from './wax/WaxPage'
import { commonText, tabLabels } from './admin/labels'
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
  paidWaxExchangeEnabled: false,
  paidFoundationUnitsPerWaxKg: '',
  paidExchangeExtraPricePerUnitEur: '',
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
  const saleCardRef = useRef<HTMLFormElement>(null)
  const productEditorRef = useRef<HTMLFormElement>(null)

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
    swapCalculationMode: 'STANDARD_SWAP' as 'STANDARD_SWAP' | 'PAID_SWAP',
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

  useEffect(() => {
    if (!showProductEditor || !productEditorRef.current) return
    productEditorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [showProductEditor, editingProductId])

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
      paidWaxExchangeEnabled: Boolean(product.paidWaxExchangeEnabled),
      paidFoundationUnitsPerWaxKg: product.paidFoundationUnitsPerWaxKg ? String(product.paidFoundationUnitsPerWaxKg) : '',
      paidExchangeExtraPricePerUnitEur: product.paidExchangeExtraPricePerUnitEur ? String(product.paidExchangeExtraPricePerUnitEur) : '',
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
          paidWaxExchangeEnabled: productForm.category === 'WAX_FOUNDATIONS' ? productForm.paidWaxExchangeEnabled : false,
          paidFoundationUnitsPerWaxKg: productForm.category === 'WAX_FOUNDATIONS' && productForm.paidFoundationUnitsPerWaxKg ? Number(productForm.paidFoundationUnitsPerWaxKg) : null,
          paidExchangeExtraPricePerUnitEur: productForm.category === 'WAX_FOUNDATIONS' && productForm.paidExchangeExtraPricePerUnitEur ? Number(productForm.paidExchangeExtraPricePerUnitEur) : null,
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
      swapCalculationMode: 'STANDARD_SWAP',
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
      swapCalculationMode: transactionType === 'BUY' ? 'STANDARD_SWAP' : current.swapCalculationMode,
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
      swapCalculationMode: transaction.swapCalculationMode === 'PAID_SWAP' || transaction.swapCalculationMode === 'SWAP_WITH_EXTRA_PAYMENT' ? 'PAID_SWAP' : 'STANDARD_SWAP',
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
    (
      waxForm.swapCalculationMode === 'PAID_SWAP'
        ? product.paidWaxExchangeEnabled && product.paidFoundationUnitsPerWaxKg !== null && product.paidFoundationUnitsPerWaxKg !== undefined && product.paidExchangeExtraPricePerUnitEur !== null && product.paidExchangeExtraPricePerUnitEur !== undefined
        : product.waxExchangeEnabled && product.foundationUnitsPerWaxKg !== null && product.foundationUnitsPerWaxKg !== undefined
    )
  ))
  const selectedFoundationProduct = foundationProducts.find((product) => String(product.id) === waxForm.foundationProductId)
  const foundationUnitLabel = 'бр.'
  const foundationQuantityStep = '1'
  const isWaxSwap = waxForm.transactionType === 'SWAP'
  const isPaidWaxSwap = isWaxSwap && waxForm.swapCalculationMode === 'PAID_SWAP'
  const activeFoundationRatio = isPaidWaxSwap
    ? selectedFoundationProduct?.paidFoundationUnitsPerWaxKg
    : selectedFoundationProduct?.foundationUnitsPerWaxKg
  const paidSwapExtraPricePerUnit = Number(selectedFoundationProduct?.paidExchangeExtraPricePerUnitEur || 0)
  const waxValue = Number(waxForm.waxReceivedKg || 0) * Number(waxForm.waxPricePerKgEur || 0)
  const rawSuggestedFoundationQty = isWaxSwap && activeFoundationRatio
    ? Number(waxForm.waxReceivedKg || 0) * Number(activeFoundationRatio)
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

  useEffect(() => {
    if (!isPaidWaxSwap || !selectedFoundationProduct) return
    const foundationQty = Number(waxForm.foundationGivenKg || 0)
    setWaxForm((current) => ({ ...current, extraPaymentEur: (foundationQty * paidSwapExtraPricePerUnit).toFixed(2) }))
  }, [isPaidWaxSwap, selectedFoundationProduct?.id, waxForm.foundationGivenKg, paidSwapExtraPricePerUnit])

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
        <DashboardPage
          dashboard={dashboard}
          formatEur={eur}
          formatBgn={bgn}
          onShowAllSales={() => {
            setTab('sales')
            setExpandedSalesSections({ latest: false, all: true })
          }}
          onEditSale={editSale}
          onCancelSale={removeSale}
        />
      )}

        {tab === 'sales' && (
          <SalesPage
            saleCardRef={saleCardRef}
            editingSaleId={editingSaleId}
            saleForm={saleForm}
            products={products}
            quickSaleProducts={quickSaleProducts}
            selectedSaleProduct={selectedSaleProduct}
            saleProductSearch={saleProductSearch}
            sales={sales}
            expandedSalesSections={expandedSalesSections}
            salesWindowHeight={salesWindowHeight}
            loading={loading}
            formatEur={eur}
            formatBgn={bgn}
            onSubmitSale={submitSale}
            onSaleFormChange={setSaleForm}
            onSaleProductSearchChange={setSaleProductSearch}
            onExpandedSalesSectionsChange={setExpandedSalesSections}
            onEditSale={editSale}
            onCancelSale={removeSale}
            onCancelEdit={() => {
              setEditingSaleId(null)
              setSaleForm({ saleDate: today(), productId: '', quantity: '1', unitPriceEur: '', paymentMethod: 'CASH', notes: '' })
            }}
          />
        )}

        {tab === 'products' && (
          <ProductsPage
            storageSearch={storageSearch}
            storageCategory={storageCategory}
            storageStatus={storageStatus}
            showProductEditor={showProductEditor}
            editingProductId={editingProductId}
          productForm={productForm}
          editorRef={productEditorRef}
          productImportFile={productImportFile}
            productImportRows={productImportRows}
            productImportSummary={productImportSummary}
            filteredProducts={filteredProducts}
            storageTotals={storageTotals}
            loading={loading}
            formatEur={eur}
            formatBgn={bgn}
            onStorageSearchChange={setStorageSearch}
            onStorageCategoryChange={setStorageCategory}
            onStorageStatusChange={setStorageStatus}
            onNewProduct={() => {
              setEditingProductId(null)
              setProductForm(emptyProduct)
              setShowProductEditor(true)
            }}
            onProductFormChange={setProductForm}
            onShowProductEditorChange={setShowProductEditor}
            onSubmitProduct={submitProduct}
            onProductImportFileChange={setProductImportFile}
            onPreviewProductImport={previewProductImport}
            onImportProductFile={importProductFile}
            onEditProduct={editProduct}
          />
        )}

        {tab === 'reports' && reports && (
          <ReportsPage
            reports={reports}
            reportTab={reportTab}
            reportRange={reportRange}
            formatEur={eur}
            formatBgn={bgn}
            onReportTabChange={setReportTab}
            onReportRangeChange={setReportRange}
          />
        )}

        {tab === 'expenses' && (
          <ExpensesPage
            expenseForm={expenseForm}
            reports={reports}
            loading={loading}
            formatEur={eur}
            onExpenseFormChange={setExpenseForm}
            onSubmitExpense={submitExpense}
          />
        )}

        {tab === 'wax' && (
          <WaxPage
            waxSummary={waxSummary}
            waxSettings={waxSettings}
            editingWaxId={editingWaxId}
            waxForm={waxForm}
            isWaxSwap={isWaxSwap}
            isPaidWaxSwap={isPaidWaxSwap}
            foundationProducts={foundationProducts}
            selectedFoundationProduct={selectedFoundationProduct}
            activeFoundationRatio={activeFoundationRatio ? Number(activeFoundationRatio) : null}
            paidSwapExtraPricePerUnit={paidSwapExtraPricePerUnit}
            foundationUnitLabel={foundationUnitLabel}
            foundationQuantityStep={foundationQuantityStep}
            suggestedFoundationQty={suggestedFoundationQty}
            foundationQtyManual={foundationQtyManual}
            waxValue={waxValue}
            foundationValue={foundationValue}
            waxBalanceLabel={waxBalanceLabel}
            waxTransactions={waxTransactions}
            loading={loading}
            formatEur={eur}
            onSubmitWax={submitWax}
            onWaxFormChange={setWaxForm}
            onSetWaxTransactionType={setWaxTransactionType}
            onFoundationQtyManualChange={setFoundationQtyManual}
            onResetWaxForm={() => resetWaxForm()}
            onEditWax={editWax}
            onCancelWax={removeWax}
          />
        )}

        {tab === 'wax-ledger' && <WaxLedgerPage waxSummary={waxSummary} waxTransactions={waxTransactions} formatEur={eur} />}
        {tab === 'settings' && <SettingsPage waxSettingsForm={waxSettingsForm} onWaxSettingsFormChange={setWaxSettingsForm} onSubmitWaxSettings={submitWaxSettings} loading={loading} />}
      </div>
      <style>{erpStyles}</style>
    </div>
  )
}


