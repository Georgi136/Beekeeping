import { apiUrl } from '../../config'
import { categoryLabels, expenseLabels, unitLabels } from '../admin/labels'
import type { ReportTab, Reports } from '../admin/types'
import { MetricGrid, ReportTable } from '../shared/AdminUi'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface ReportsPageProps {
  reports: Reports
  reportTab: ReportTab
  reportRange: { from: string; to: string }
  formatEur: MoneyFormatter
  formatBgn: MoneyFormatter
  onReportTabChange: (tab: ReportTab) => void
  onReportRangeChange: (range: { from: string; to: string }) => void
}

export default function ReportsPage({ reports, reportTab, reportRange, formatEur, formatBgn, onReportTabChange, onReportRangeChange }: ReportsPageProps) {
  return (
    <section className="report-stack">
      <div className="filters">
        <label>От дата<input type="date" value={reportRange.from} onChange={(e) => onReportRangeChange({ ...reportRange, from: e.target.value })} /></label>
        <label>До дата<input type="date" value={reportRange.to} onChange={(e) => onReportRangeChange({ ...reportRange, to: e.target.value })} /></label>
        <a className="erp-btn primary" href={apiUrl(`/api/admin/erp/reports.csv?from=${reportRange.from}&to=${reportRange.to}`)}>CSV export</a>
      </div>
      <MetricGrid
        items={[
          ['Оборот', formatEur(reports.totals.turnoverEur), formatBgn(reports.totals.turnoverEur)],
          ['Брутна печалба', formatEur(reports.totals.grossProfitEur), formatBgn(reports.totals.grossProfitEur)],
          ['Разходи', formatEur(reports.totals.expensesEur), formatBgn(reports.totals.expensesEur)],
          ['Доплащане от размяна на восък', formatEur(reports.totals.waxSwapExtraPaymentEur || 0), formatBgn(reports.totals.waxSwapExtraPaymentEur || 0)],
          ['Нетна печалба', formatEur(reports.totals.netProfitEur), formatBgn(reports.totals.netProfitEur)]
        ]}
      />
      <nav className="report-tabs">
        {[
          ['monthly', 'Месечни'],
          ['daily', 'Дневни'],
          ['products', 'Продадени продукти'],
          ['expenses', 'Разходи'],
          ['low-stock', 'Ниска наличност']
        ].map(([key, label]) => <button key={key} className={reportTab === key ? 'active' : ''} onClick={() => onReportTabChange(key as ReportTab)}>{label}</button>)}
      </nav>
      {reportTab === 'monthly' && (
        <ReportTable
          headers={['Месец', 'Оборот', 'Печалба', 'Разходи', 'Нетна печалба', 'Количество', 'Продажби']}
          rows={reports.monthly.map((row) => [
            new Date(row.month).toLocaleDateString('bg-BG', { month: 'long', year: 'numeric' }),
            formatEur(row.turnover_eur),
            formatEur(row.profit_eur),
            formatEur(row.expenses_eur),
            formatEur(Number(row.profit_eur || 0) - Number(row.expenses_eur || 0)),
            String(row.sold_quantity || 0),
            String(row.sold_lines || 0)
          ])}
        />
      )}
      {reportTab === 'daily' && (
        <ReportTable
          headers={['Дата', 'Оборот', 'Печалба', 'Разходи', 'Количество']}
          rows={reports.daily.map((row) => [new Date(row.day).toLocaleDateString('bg-BG'), formatEur(row.turnover_eur), formatEur(row.profit_eur), formatEur(row.expenses_eur), String(row.sold_quantity || 0)])}
        />
      )}
      {reportTab === 'products' && (
        <ReportTable
          headers={['Продукт', 'Количество', 'Оборот', 'Печалба']}
          rows={reports.salesByProduct.map((row) => [row.product_name, String(row.quantity), formatEur(row.turnover_eur), formatEur(row.profit_eur)])}
        />
      )}
      {reportTab === 'expenses' && (
        <ReportTable
          headers={['Категория', 'Сума EUR', 'Сума BGN']}
          rows={reports.expensesByCategory.map((row) => [expenseLabels[row.category], formatEur(row._sum.amountEur || 0), formatBgn(row._sum.amountEur || 0)])}
        />
      )}
      {reportTab === 'low-stock' && (
        <ReportTable
          headers={['Продукт', 'Категория', 'Наличност', 'Минимум']}
          rows={reports.lowStockProducts.map((product) => [product.name, categoryLabels[product.category], `${product.stockQuantity} ${unitLabels[product.unit]}`, String(product.minStockQuantity)])}
        />
      )}
    </section>
  )
}
