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
          ['Баланс', formatEur(waxSummary.balanceEur), `${waxSummary.transactionCount} сделки`]
        ]}
      />
      <ReportTable
        headers={['Дата', 'Тип', 'Номер', 'Восък кг', 'Основи', 'Стойност восък', 'Баланс']}
        rows={waxTransactions.map((item) => {
          const foundationUnit = 'бр.'
          const foundationQty = Number(item.foundationGivenKg).toFixed(0)
          return [new Date(item.transactionDate).toLocaleDateString('bg-BG'), item.transactionType === 'SWAP' ? 'Смяна' : 'Покупка', `#${item.id}`, String(item.waxReceivedKg), `${foundationQty} ${foundationUnit}`, formatEur(item.waxValueEur), formatEur(item.balanceEur)]
        })}
      />
    </section>
  )
}
