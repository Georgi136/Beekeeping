import type { FormEvent } from 'react'
import { commonText } from '../admin/labels'
import type { ErpProduct, WaxSettings, WaxSummary, WaxTransaction } from '../admin/types'
import { ActionRow, MetricGrid, Panel } from '../shared/AdminUi'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface WaxForm {
  transactionType: 'BUY' | 'SWAP'
  swapCalculationMode: 'STANDARD_SWAP' | 'PAID_SWAP'
  transactionDate: string
  waxReceivedKg: string
  waxPricePerKgEur: string
  foundationGivenKg: string
  foundationPricePerKgEur: string
  extraPaymentEur: string
  foundationProductId: string
  createExpense: boolean
  notes: string
}

interface WaxPageProps {
  waxSummary: WaxSummary
  waxSettings: WaxSettings
  editingWaxId: number | null
  waxForm: WaxForm
  isWaxSwap: boolean
  isPaidWaxSwap: boolean
  foundationProducts: ErpProduct[]
  selectedFoundationProduct?: ErpProduct
  activeFoundationRatio?: number | null
  paidSwapExtraPricePerUnit: number
  foundationUnitLabel: string
  foundationQuantityStep: string
  suggestedFoundationQty: number
  foundationQtyManual: boolean
  waxValue: number
  foundationValue: number
  waxBalanceLabel: string
  waxTransactions: WaxTransaction[]
  loading: boolean
  formatEur: MoneyFormatter
  onSubmitWax: (event: FormEvent) => void
  onWaxFormChange: (form: WaxForm) => void
  onSetWaxTransactionType: (transactionType: 'BUY' | 'SWAP') => void
  onFoundationQtyManualChange: (value: boolean) => void
  onResetWaxForm: () => void
  onEditWax: (item: WaxTransaction) => void
  onCancelWax: (item: WaxTransaction) => void
}

export default function WaxPage({
  waxSummary,
  waxSettings,
  editingWaxId,
  waxForm,
  isWaxSwap,
  isPaidWaxSwap,
  foundationProducts,
  selectedFoundationProduct,
  activeFoundationRatio,
  paidSwapExtraPricePerUnit,
  foundationUnitLabel,
  foundationQuantityStep,
  suggestedFoundationQty,
  foundationQtyManual,
  waxValue,
  foundationValue,
  waxBalanceLabel,
  waxTransactions,
  loading,
  formatEur,
  onSubmitWax,
  onWaxFormChange,
  onSetWaxTransactionType,
  onFoundationQtyManualChange,
  onResetWaxForm,
  onEditWax,
  onCancelWax
}: WaxPageProps) {
  return (
    <section className="wax-page">
      <MetricGrid
        items={[
          ['Наличен восък', `${Number(waxSummary.waxStockKg || 0).toFixed(3)} кг`, 'текущ склад'],
          ['Стойност във восък', formatEur(waxSummary.waxInventoryValueEur), `по ${formatEur(waxSettings.defaultBuyPriceEur)} / кг`],
          ['Дадени основи', `${Number(waxSummary.totalFoundationGivenKg || 0).toFixed(0)} бр.`, formatEur(waxSummary.totalFoundationGivenValueEur)],
          ['Баланс сделки', formatEur(waxSummary.balanceEur), `${waxSummary.transactionCount} сделки`]
        ]}
      />
      <section className="erp-grid">
        <div className="wax-form-stack">
          <form className="erp-card" onSubmit={onSubmitWax}>
            <h2>{editingWaxId ? 'Редакция на восъчна сделка' : 'Нова восъчна сделка'}</h2>
            <div className="mode-switch">
              <button type="button" className={waxForm.transactionType === 'BUY' ? 'active' : ''} onClick={() => onSetWaxTransactionType('BUY')}>Купувам восък</button>
              <button type="button" className={waxForm.transactionType === 'SWAP' ? 'active' : ''} onClick={() => onSetWaxTransactionType('SWAP')}>Восък за основи</button>
            </div>
            {isWaxSwap && (
              <div className="mode-switch">
                <button type="button" className={waxForm.swapCalculationMode === 'STANDARD_SWAP' ? 'active' : ''} onClick={() => onWaxFormChange({ ...waxForm, swapCalculationMode: 'STANDARD_SWAP', foundationProductId: '', foundationGivenKg: '0', extraPaymentEur: '0' })}>Стандартна размяна</button>
                <button type="button" className={waxForm.swapCalculationMode === 'PAID_SWAP' ? 'active' : ''} onClick={() => onWaxFormChange({ ...waxForm, swapCalculationMode: 'PAID_SWAP', foundationProductId: '', foundationGivenKg: '0', extraPaymentEur: '0' })}>Размяна с доплащане</button>
              </div>
            )}
            <label>Дата<input type="date" value={waxForm.transactionDate} onChange={(e) => onWaxFormChange({ ...waxForm, transactionDate: e.target.value })} /></label>
            <div className="two">
              <label>Приет восък кг<input type="number" step="0.001" min="0" value={waxForm.waxReceivedKg} onChange={(e) => onWaxFormChange({ ...waxForm, waxReceivedKg: e.target.value })} /></label>
              <label>Цена восък EUR/кг<input type="number" step="0.01" min="0" value={waxForm.waxPricePerKgEur} onChange={(e) => onWaxFormChange({ ...waxForm, waxPricePerKgEur: e.target.value })} /></label>
            </div>
            {isWaxSwap && (
              <>
                <label>Тип основи от склада<select value={waxForm.foundationProductId} onChange={(e) => {
                  const product = foundationProducts.find((item) => String(item.id) === e.target.value)
                  onWaxFormChange({ ...waxForm, foundationProductId: e.target.value, foundationPricePerKgEur: product ? String(product.sellPriceEur) : waxForm.foundationPricePerKgEur })
                }} required><option value="">Избери основи</option>{foundationProducts.map((product) => <option key={product.id} value={product.id}>{product.name} | {Number(product.stockQuantity).toFixed(0)} бр. | {formatEur(product.sellPriceEur)}</option>)}</select></label>
                <div className="two">
                  <label>Дадени основи {foundationUnitLabel}<input type="number" step={foundationQuantityStep} min="0" value={waxForm.foundationGivenKg} onChange={(e) => { onFoundationQtyManualChange(true); onWaxFormChange({ ...waxForm, foundationGivenKg: e.target.value }) }} /></label>
                  <label>Цена основи EUR/{foundationUnitLabel}<input type="number" step="0.01" min="0" value={waxForm.foundationPricePerKgEur} onChange={(e) => onWaxFormChange({ ...waxForm, foundationPricePerKgEur: e.target.value })} /></label>
                </div>
                <label>Доплатено от клиента EUR<input type="number" step="0.01" min="0" value={waxForm.extraPaymentEur} onChange={(e) => onWaxFormChange({ ...waxForm, extraPaymentEur: e.target.value })} /></label>
                {selectedFoundationProduct && <div className="storage-hint">
                  {Number(waxForm.waxReceivedKg || 0)} кг восък × {activeFoundationRatio} осн./кг = {suggestedFoundationQty} основи
                  {isPaidWaxSwap && <><br />{Number(waxForm.foundationGivenKg || 0)} основи × {paidSwapExtraPricePerUnit.toFixed(2)} EUR = {formatEur(waxForm.extraPaymentEur)} доплащане</>}
                  {foundationQtyManual && <><br />Количеството е променено ръчно.</>}
                </div>}
              </>
            )}
            {waxForm.transactionType === 'BUY' && <label className="check"><input type="checkbox" checked={waxForm.createExpense} onChange={(e) => onWaxFormChange({ ...waxForm, createExpense: e.target.checked })} /> Създай разход за покупката на восък</label>}
            <label>Бележка<textarea value={waxForm.notes} onChange={(e) => onWaxFormChange({ ...waxForm, notes: e.target.value })} /></label>
            <div className="form-total">Стойност восък {formatEur(waxValue)} | Основи {formatEur(foundationValue)} | {waxBalanceLabel}</div>
            <div className="actions"><button className="erp-btn primary" disabled={loading}>{editingWaxId ? 'Запази промени' : 'Запази сделка'}</button>{editingWaxId && <button type="button" className="erp-btn ghost" onClick={onResetWaxForm}>{commonText.cancel}</button>}</div>
          </form>
        </div>
        <Panel title="Восъчни сделки">{waxTransactions.map((item) => <WaxRow key={item.id} item={item} formatEur={formatEur} onEdit={onEditWax} onCancel={onCancelWax} />)}</Panel>
      </section>
    </section>
  )
}

function WaxRow({ item, formatEur, onEdit, onCancel }: { item: WaxTransaction; formatEur: MoneyFormatter; onEdit: (item: WaxTransaction) => void; onCancel: (item: WaxTransaction) => void }) {
  const foundationUnit = 'бр.'
  const foundationQty = Number(item.foundationGivenKg).toFixed(0)
  const isPaidSwap = item.swapCalculationMode === 'PAID_SWAP' || item.swapCalculationMode === 'SWAP_WITH_EXTRA_PAYMENT'
  const mode = item.transactionType === 'SWAP' ? (isPaidSwap ? 'Смяна с доплащане' : 'Смяна') : 'Покупка'
  const extraPayment = isPaidSwap ? ` | доплащане ${formatEur(item.extraPaymentEur)}` : ''
  return <ActionRow title={`${mode} #${item.id} | ${new Date(item.transactionDate).toLocaleDateString('bg-BG')}`} meta={`восък ${item.waxReceivedKg} кг | основи ${foundationQty} ${foundationUnit}${extraPayment} | баланс ${formatEur(item.balanceEur)}`}><button className="mini-btn" onClick={() => onEdit(item)}>{commonText.edit}</button><button className="mini-btn danger" onClick={() => onCancel(item)}>{commonText.delete}</button></ActionRow>
}
