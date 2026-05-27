import type { Dashboard, ErpSale } from '../admin/types'
import { commonText, unitLabels } from '../admin/labels'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface DashboardPageProps {
  dashboard: Dashboard
  formatEur: MoneyFormatter
  formatBgn: MoneyFormatter
  onShowAllSales: () => void
  onEditSale: (sale: ErpSale) => void
  onCancelSale: (sale: ErpSale) => void
}

export default function DashboardPage({
  dashboard,
  formatEur,
  formatBgn,
  onShowAllSales,
  onEditSale,
  onCancelSale
}: DashboardPageProps) {
  const metrics = [
    ['Дневен оборот', formatEur(dashboard.todayTurnoverEur), formatBgn(dashboard.todayTurnoverEur)],
    ['Дневна печалба', formatEur(dashboard.todayProfitEur), formatBgn(dashboard.todayProfitEur)],
    ['Месечен оборот', formatEur(dashboard.monthlyTurnoverEur), formatBgn(dashboard.monthlyTurnoverEur)],
    ['Месечна печалба', formatEur(dashboard.monthlyProfitEur), formatBgn(dashboard.monthlyProfitEur)],
    ['Наличен восък', `${Number(dashboard.waxStockKg || 0).toFixed(3)} кг`, formatEur(dashboard.waxInventoryValueEur || 0)]
  ]

  return (
    <>
      <section className="metric-grid">
        {metrics.map((item) => (
          <div className="metric-card" key={item[0]}>
            <span>{item[0]}</span>
            <strong>{item[1]}</strong>
            <small>{item[2]}</small>
          </div>
        ))}
      </section>

      <section className="erp-columns">
        <section className="erp-panel">
          <h2>Ниска наличност</h2>
          <div className="panel-list">
            {dashboard.lowStockProducts.map((product) => (
              <div className="erp-row" key={product.id}>
                <strong>{product.name}</strong>
                <span>{`${product.stockQuantity} ${unitLabels[product.unit]} | минимум ${product.minStockQuantity}`}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="erp-panel">
          <h2>Последни продажби</h2>
          <button className="inline-action" onClick={onShowAllSales}>Всички продажби</button>
          <div className="panel-list">
            {dashboard.latestSales.map((sale) => (
              <div className="row-with-action" key={sale.id}>
                <div className="erp-row">
                  <strong>{sale.product.name}</strong>
                  <span>{`${sale.quantity} x ${formatEur(sale.unitPriceEur)} = ${formatEur(sale.totalEur)}`}</span>
                </div>
                <div className="mini-actions">
                  <button className="mini-btn" onClick={() => onEditSale(sale)}>{commonText.edit}</button>
                  <button className="mini-btn danger" onClick={() => onCancelSale(sale)}>{commonText.delete}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="erp-panel">
          <h2>Последни сделки с восък</h2>
          <div className="panel-list">
            {dashboard.latestWaxTransactions.map((item) => (
              <div className="erp-row" key={item.id}>
                <strong>{`${item.transactionType === 'SWAP' ? 'Смяна' : 'Покупка'} #${item.id}`}</strong>
                <span>{`Баланс ${formatEur(item.balanceEur)} | восък ${item.waxReceivedKg} кг`}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
