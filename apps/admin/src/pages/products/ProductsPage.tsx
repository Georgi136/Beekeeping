import type { FormEvent } from 'react'
import type { RefObject } from 'react'
import { categoryLabels, commonText, unitLabels } from '../admin/labels'
import type { ErpProduct, ProductImportRow } from '../admin/types'
import { MetricGrid, ProductImport } from '../shared/AdminUi'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface ProductForm {
  sku: string
  name: string
  category: string
  unit: string
  sellPriceEur: string
  costPriceEur: string
  stockQuantity: string
  minStockQuantity: string
  totalSoldQuantity: string
  active: boolean
  waxExchangeEnabled: boolean
  foundationUnitsPerWaxKg: string
  exchangeRoundingMode: string
  notes: string
}

interface ProductsPageProps {
  storageSearch: string
  storageCategory: string
  storageStatus: string
  showProductEditor: boolean
  editingProductId: number | null
  editorRef?: RefObject<HTMLFormElement | null>
  productForm: ProductForm
  productImportFile: File | null
  productImportRows: ProductImportRow[]
  productImportSummary: { totalRows: number; validRows: number; invalidRows: number }
  filteredProducts: ErpProduct[]
  storageTotals: { stockValue: number; sellValue: number; low: number }
  loading: boolean
  formatEur: MoneyFormatter
  formatBgn: MoneyFormatter
  onStorageSearchChange: (value: string) => void
  onStorageCategoryChange: (value: string) => void
  onStorageStatusChange: (value: string) => void
  onNewProduct: () => void
  onProductFormChange: (form: ProductForm) => void
  onShowProductEditorChange: (value: boolean) => void
  onSubmitProduct: (event: FormEvent) => void
  onProductImportFileChange: (file: File | null) => void
  onPreviewProductImport: () => void
  onImportProductFile: () => void
  onEditProduct: (product: ErpProduct) => void
}

export default function ProductsPage({
  storageSearch,
  storageCategory,
  storageStatus,
  showProductEditor,
  editingProductId,
  editorRef,
  productForm,
  productImportFile,
  productImportRows,
  productImportSummary,
  filteredProducts,
  storageTotals,
  loading,
  formatEur,
  formatBgn,
  onStorageSearchChange,
  onStorageCategoryChange,
  onStorageStatusChange,
  onNewProduct,
  onProductFormChange,
  onShowProductEditorChange,
  onSubmitProduct,
  onProductImportFileChange,
  onPreviewProductImport,
  onImportProductFile,
  onEditProduct
}: ProductsPageProps) {
  return (
    <section className="storage-layout">
      <div className="storage-toolbar">
        <label>Търсене<input placeholder="Име, код или бележка" value={storageSearch} onChange={(e) => onStorageSearchChange(e.target.value)} /></label>
        <label>Категория<select value={storageCategory} onChange={(e) => onStorageCategoryChange(e.target.value)}><option value="ALL">Всички</option>{Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
        <label>Статус<select value={storageStatus} onChange={(e) => onStorageStatusChange(e.target.value)}><option value="ALL">Всички</option><option value="LOW">Ниска наличност</option><option value="ACTIVE">Активни</option></select></label>
        <button className="erp-btn primary" onClick={onNewProduct}>Нов продукт</button>
      </div>
      <ProductImport file={productImportFile} rows={productImportRows} summary={productImportSummary} onFile={onProductImportFileChange} onPreview={onPreviewProductImport} onImport={onImportProductFile} loading={loading} />
      {showProductEditor && (
        <form className="storage-editor" ref={editorRef} onSubmit={onSubmitProduct}>
          <div className="storage-editor-head"><h2>{editingProductId ? 'Редакция на продукт' : 'Нов продукт'}</h2><button type="button" className="mini-btn" onClick={() => onShowProductEditorChange(false)}>Затвори</button></div>
          <div className="editor-grid">
            <label>Код<input value={productForm.sku} onChange={(e) => onProductFormChange({ ...productForm, sku: e.target.value })} /></label>
            <label>Име<input value={productForm.name} onChange={(e) => onProductFormChange({ ...productForm, name: e.target.value })} required /></label>
            <label>Категория<select value={productForm.category} onChange={(e) => onProductFormChange({ ...productForm, category: e.target.value })}>{Object.entries(categoryLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
            <label>Мярка<select value={productForm.unit} onChange={(e) => onProductFormChange({ ...productForm, unit: e.target.value })}>{Object.entries(unitLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
            <label>Продажна цена EUR<input type="number" step="0.01" min="0" value={productForm.sellPriceEur} onChange={(e) => onProductFormChange({ ...productForm, sellPriceEur: e.target.value })} required /></label>
            <label>Доставна цена EUR<input type="number" step="0.01" min="0" value={productForm.costPriceEur} onChange={(e) => onProductFormChange({ ...productForm, costPriceEur: e.target.value })} required /></label>
            <label>Наличност<input type="number" step="0.001" min="0" value={productForm.stockQuantity} onChange={(e) => onProductFormChange({ ...productForm, stockQuantity: e.target.value })} /></label>
            <label>Минимум<input type="number" step="0.001" min="0" value={productForm.minStockQuantity} onChange={(e) => onProductFormChange({ ...productForm, minStockQuantity: e.target.value })} /></label>
            <label className="check"><input type="checkbox" checked={productForm.active} onChange={(e) => onProductFormChange({ ...productForm, active: e.target.checked })} /> Активен</label>
            {productForm.category === 'WAX_FOUNDATIONS' && (
              <section className="wide-field erp-card">
                <h2>Настройки за размяна на восък</h2>
                <label className="check"><input type="checkbox" checked={productForm.waxExchangeEnabled} onChange={(e) => onProductFormChange({ ...productForm, waxExchangeEnabled: e.target.checked })} /> Участва в размяна на восък</label>
                <div className="two">
                  <label>Брой основи за 1 кг восък<input type="number" step="0.001" min="0" value={productForm.foundationUnitsPerWaxKg} onChange={(e) => onProductFormChange({ ...productForm, foundationUnitsPerWaxKg: e.target.value })} /></label>
                  <label>Закръгляне<select value={productForm.exchangeRoundingMode} onChange={(e) => onProductFormChange({ ...productForm, exchangeRoundingMode: e.target.value })}>
                    <option value="FLOOR">надолу</option>
                    <option value="ROUND">нормално</option>
                    <option value="CEIL">нагоре</option>
                    <option value="NONE">без закръгляне</option>
                  </select></label>
                </div>
                <div className="storage-hint">Пример: ако за 1 кг восък се дават 12 основи, въведете 12.</div>
              </section>
            )}
            <label className="wide-field">Бележки<textarea value={productForm.notes} onChange={(e) => onProductFormChange({ ...productForm, notes: e.target.value })} /></label>
            <button className="erp-btn primary" disabled={loading}>{commonText.save}</button>
          </div>
        </form>
      )}
      <MetricGrid items={[['Артикули', String(filteredProducts.length), 'показани'], ['Ниска наличност', String(storageTotals.low), 'за проверка'], ['Стойност склад', formatEur(storageTotals.stockValue), formatBgn(storageTotals.stockValue)], ['Продажна стойност', formatEur(storageTotals.sellValue), formatBgn(storageTotals.sellValue)]]} />
      <div className="storage-table-wrap">
        <table>
          <thead><tr><th>Код</th><th>Продукт</th><th>Категория</th><th>Наличност</th><th>Дост.</th><th>Прод.</th><th>Стойност</th></tr></thead>
          <tbody>{filteredProducts.map((product) => (
            <tr key={product.id} className={product.stockStatus === 'LOW' ? 'low' : ''} onClick={() => onEditProduct(product)}>
              <td>{product.sku || product.id}</td><td><strong>{product.name}</strong><small>{product.active ? 'Активен' : 'Спрян'}</small></td><td>{categoryLabels[product.category]}</td><td>{product.stockQuantity} {unitLabels[product.unit]}<small>мин. {product.minStockQuantity}</small></td><td>{formatEur(product.costPriceEur)}</td><td>{formatEur(product.sellPriceEur)}</td><td>{formatEur(product.inventoryValueEur || 0)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </section>
  )
}
