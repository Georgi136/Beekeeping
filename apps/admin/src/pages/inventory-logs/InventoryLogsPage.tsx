import type { InventoryMovement } from '../admin/types'

const movementLabels: Record<string, string> = {
  SALE: 'Продажба',
  DELIVERY: 'Доставка',
  CORRECTION: 'Корекция',
  WASTE: 'Брак',
  WAX_EXCHANGE: 'Размяна на восък',
  RETURN: 'Връщане'
}

export default function InventoryLogsPage({ movements }: { movements: InventoryMovement[] }) {
  return (
    <section className="report-stack">
      <header className="page-heading">
        <div>
          <h2>Дневник на склада</h2>
          <p>Всички промени в наличностите, включително поръчки и връщания от уеб магазина.</p>
        </div>
      </header>
      <div className="report-table-wrap">
        <table>
          <thead><tr><th>Дата</th><th>Продукт</th><th>Тип</th><th>Промяна</th><th>Източник</th><th>Потребител</th><th>Бележка</th></tr></thead>
          <tbody>
            {movements.map((movement) => (
              <tr key={movement.id}>
                <td>{new Date(movement.createdAt).toLocaleString('bg-BG')}</td>
                <td><strong>{movement.product.name}</strong><small>{movement.product.sku || movement.product.id}</small></td>
                <td>{movementLabels[movement.movementType] || movement.movementType}</td>
                <td><strong>{movement.quantityChange > 0 ? '+' : ''}{movement.quantityChange}</strong></td>
                <td>{movement.referenceType || '-'}<small>{movement.referenceKey || movement.referenceId || ''}</small></td>
                <td>{movement.createdBy?.name || movement.createdBy?.email || 'Уеб магазин'}</td>
                <td>{movement.notes || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
