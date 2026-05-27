import type { WaxSummary, WaxTransaction } from '../admin/types'
import { MetricGrid, ReportTable } from '../shared/AdminUi'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface WaxLedgerPageProps {
  waxSummary: WaxSummary
  waxTransactions: WaxTransaction[]
  formatEur: MoneyFormatter
}

export default function WaxLedgerPage({ waxSummary, waxTransactions, formatEur }: WaxLedgerPageProps) {
  return (
    <section className="report-stack">
      <h2>Восъчен отчет</h2>
      <MetricGrid
        items={[
          ['Наличен восък', `${Number(waxSummary.waxStockKg || 0).toFixed(3)} кг`, formatEur(waxSummary.waxInventoryValueEur)],
          ['Купен восък', formatEur(waxSummary.totalWaxBoughtValueEur), 'стойност сделки'],
          ['Дадени основи', `${Number(waxSummary.totalFoundationGivenKg || 0).toFixed(0)} бр.`, formatEur(waxSummary.totalFoundationGivenValueEur)],
          ['Доплащане', formatEur(waxSummary.totalExtraPaymentEur), 'от размяна на восък'],
          ['Баланс', formatEur(waxSummary.balanceEur), `${waxSummary.transactionCount} сделки`]
        ]}
      />
      <ReportTable
        headers={['Дата', 'Номер', 'Режим', 'Восък кг', 'Продукт основи', 'Коефициент', 'Изчислени', 'Дадени', 'Доплащане/бр.', 'Общо доплащане', 'Баланс']}
        rows={waxTransactions.map((item) => {
          const isPaidSwap = item.swapCalculationMode === 'PAID_SWAP' || item.swapCalculationMode === 'SWAP_WITH_EXTRA_PAYMENT'
          const isSwap = item.transactionType === 'SWAP'
          const mode = isSwap ? (isPaidSwap ? 'С доплащане' : 'Стандартна размяна') : 'Покупка'
          const ratio = item.foundationUnitsPerWaxKgUsed ? `${Number(item.foundationUnitsPerWaxKgUsed).toFixed(3)} осн./кг` : '-'
          const calculatedQty = item.suggestedFoundationGivenKg !== null && item.suggestedFoundationGivenKg !== undefined
            ? `${Number(item.suggestedFoundationGivenKg).toFixed(0)} бр.`
            : '-'
          const actualQty = `${Number(item.foundationGivenKg || 0).toFixed(0)} бр.`
          return [
            new Date(item.transactionDate).toLocaleDateString('bg-BG'),
            `#${item.id}`,
            mode,
            String(item.waxReceivedKg),
            item.foundationProduct?.name || '-',
            ratio,
            calculatedQty,
            actualQty,
            item.extraPaymentPerFoundationEur ? formatEur(item.extraPaymentPerFoundationEur) : '-',
            formatEur(item.extraPaymentEur),
            formatEur(item.balanceEur)
          ]
        })}
      />
    </section>
  )
}
