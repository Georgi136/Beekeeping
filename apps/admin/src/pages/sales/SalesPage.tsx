import type { FormEvent, RefObject, SetStateAction } from 'react'
import { commonText, paymentLabels, unitLabels } from '../admin/labels'
import type { ErpProduct, ErpSale } from '../admin/types'
import { ActionRow, PillGroup, ReportTable, SalesSection } from '../shared/AdminUi'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface SaleForm {
  saleDate: string
  productId: string
  quantity: string
  unitPriceEur: string
  paymentMethod: string
  notes: string
}

interface SalesPageProps {
  saleCardRef: RefObject<HTMLFormElement>
  editingSaleId: number | null
  saleForm: SaleForm
  products: ErpProduct[]
  quickSaleProducts: ErpProduct[]
  selectedSaleProduct?: ErpProduct
  saleProductSearch: string
  sales: ErpSale[]
  expandedSalesSections: { latest: boolean; all: boolean }
  salesWindowHeight: number | null
  loading: boolean
  formatEur: MoneyFormatter
  formatBgn: MoneyFormatter
  onSubmitSale: (event: FormEvent) => void
  onSaleFormChange: (form: SaleForm) => void
  onSaleProductSearchChange: (value: string) => void
  onExpandedSalesSectionsChange: (value: SetStateAction<{ latest: boolean; all: boolean }>) => void
  onEditSale: (sale: ErpSale) => void
  onCancelSale: (sale: ErpSale) => void
  onCancelEdit: () => void
}

export default function SalesPage({
  saleCardRef,
  editingSaleId,
  saleForm,
  products,
  quickSaleProducts,
  selectedSaleProduct,
  saleProductSearch,
  sales,
  expandedSalesSections,
  salesWindowHeight,
  loading,
  formatEur,
  formatBgn,
  onSubmitSale,
  onSaleFormChange,
  onSaleProductSearchChange,
  onExpandedSalesSectionsChange,
  onEditSale,
  onCancelSale,
  onCancelEdit
}: SalesPageProps) {
  const saleTotal = Number(saleForm.quantity || 0) * Number(saleForm.unitPriceEur || selectedSaleProduct?.sellPriceEur || 0)

  return (
    <section className="sales-layout">
      <form className="erp-card sale-card" ref={saleCardRef} onSubmit={onSubmitSale}>
        <h2>{editingSaleId ? 'Редакция на продажба' : 'Бърза продажба'}</h2>
        <label>Дата<input type="date" value={saleForm.saleDate} onChange={(e) => onSaleFormChange({ ...saleForm, saleDate: e.target.value })} /></label>
        <div className="quick-search">
          <label>Търсене<input placeholder="Търси продукт или код" value={saleProductSearch} onChange={(e) => onSaleProductSearchChange(e.target.value)} /></label>
          <label>Продукт
            <select value={saleForm.productId} onChange={(e) => {
              const product = products.find((item) => String(item.id) === e.target.value)
              onSaleFormChange({ ...saleForm, productId: e.target.value, unitPriceEur: product ? String(product.sellPriceEur) : '' })
            }} required>
              <option value="">Избери продукт</option>
              {products.filter((product) => product.active).map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
            </select>
          </label>
        </div>
        <div className="quick-products">
          {quickSaleProducts.map((product) => (
            <button type="button" key={product.id} className={saleForm.productId === String(product.id) ? 'selected' : ''} onClick={() => onSaleFormChange({ ...saleForm, productId: String(product.id), unitPriceEur: String(product.sellPriceEur) })}>
              <strong>{product.name}</strong>
              <span>{formatEur(product.sellPriceEur)} | {product.stockQuantity} {unitLabels[product.unit]}</span>
            </button>
          ))}
        </div>
        <div className="sale-input-grid">
          <label>Количество<input inputMode="decimal" type="number" step="0.001" min="0.001" value={saleForm.quantity} onChange={(e) => onSaleFormChange({ ...saleForm, quantity: e.target.value })} required /></label>
          <label>Цена EUR<input inputMode="decimal" type="number" step="0.01" min="0" value={saleForm.unitPriceEur} onChange={(e) => onSaleFormChange({ ...saleForm, unitPriceEur: e.target.value })} /></label>
        </div>
        <PillGroup value={saleForm.paymentMethod} labels={paymentLabels} onChange={(paymentMethod) => onSaleFormChange({ ...saleForm, paymentMethod })} />
        <label>Бележка<textarea value={saleForm.notes} onChange={(e) => onSaleFormChange({ ...saleForm, notes: e.target.value })} /></label>
        <div className="sale-total-bar">
          <span>Общо</span>
          <strong>{formatEur(saleTotal)}</strong>
          <small>{formatBgn(saleTotal)}</small>
        </div>
        <div className="actions">
          <button className="erp-btn primary" disabled={loading}>{editingSaleId ? 'Запази продажба' : 'Продай'}</button>
          {editingSaleId && <button type="button" className="erp-btn ghost" onClick={onCancelEdit}>{commonText.cancel}</button>}
        </div>
      </form>

      <section className="sales-main" style={salesWindowHeight ? { height: salesWindowHeight } : undefined}>
        <SalesSection title="Последни продажби" count={sales.slice(0, 12).length} expanded={expandedSalesSections.latest} onToggle={() => onExpandedSalesSectionsChange((current) => ({ ...current, latest: !current.latest }))}>
          {sales.slice(0, 12).map((sale) => <SaleRow key={sale.id} sale={sale} formatEur={formatEur} onEdit={onEditSale} onCancel={onCancelSale} />)}
        </SalesSection>
        <SalesSection title="Всички продажби" count={sales.length} expanded={expandedSalesSections.all} onToggle={() => onExpandedSalesSectionsChange((current) => ({ ...current, all: !current.all }))}>
          <ReportTable
            headers={[commonText.date, commonText.product, commonText.quantity, commonText.price, commonText.total, commonText.profit, commonText.payment, commonText.actions]}
            rows={sales.map((sale) => [
              new Date(sale.saleDate).toLocaleDateString('bg-BG'),
              sale.product.name,
              String(sale.quantity),
              formatEur(sale.unitPriceEur),
              formatEur(sale.totalEur),
              formatEur(sale.profitEur),
              paymentLabels[sale.paymentMethod],
              ''
            ])}
          />
        </SalesSection>
      </section>
    </section>
  )
}

function SaleRow({ sale, formatEur, onEdit, onCancel }: { sale: ErpSale; formatEur: MoneyFormatter; onEdit: (sale: ErpSale) => void; onCancel: (sale: ErpSale) => void }) {
  return <ActionRow title={sale.product.name} meta={`${new Date(sale.saleDate).toLocaleDateString('bg-BG')} | ${sale.quantity} | ${formatEur(sale.totalEur)} | печалба ${formatEur(sale.profitEur)}`}><button className="mini-btn" onClick={() => onEdit(sale)}>{commonText.edit}</button><button className="mini-btn danger" onClick={() => onCancel(sale)}>{commonText.delete}</button></ActionRow>
}
