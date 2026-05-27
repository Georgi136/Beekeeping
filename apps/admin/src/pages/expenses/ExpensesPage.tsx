import type { FormEvent } from 'react'
import { expenseLabels, paymentLabels } from '../admin/labels'
import type { Reports } from '../admin/types'
import { Panel, Row } from '../shared/AdminUi'

type MoneyFormatter = (value: number | string | null | undefined) => string

interface ExpenseForm {
  expenseDate: string
  category: string
  amountEur: string
  paymentMethod: string
  supplier: string
  notes: string
}

interface ExpensesPageProps {
  expenseForm: ExpenseForm
  reports: Reports | null
  loading: boolean
  formatEur: MoneyFormatter
  onExpenseFormChange: (form: ExpenseForm) => void
  onSubmitExpense: (event: FormEvent) => void
}

export default function ExpensesPage({ expenseForm, reports, loading, formatEur, onExpenseFormChange, onSubmitExpense }: ExpensesPageProps) {
  return (
    <section className="erp-grid">
      <form className="erp-card" onSubmit={onSubmitExpense}>
        <h2>Нов разход</h2>
        <label>Дата<input type="date" value={expenseForm.expenseDate} onChange={(e) => onExpenseFormChange({ ...expenseForm, expenseDate: e.target.value })} /></label>
        <label>Категория<select value={expenseForm.category} onChange={(e) => onExpenseFormChange({ ...expenseForm, category: e.target.value })}>{Object.entries(expenseLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
        <label>Сума EUR<input type="number" step="0.01" min="0" value={expenseForm.amountEur} onChange={(e) => onExpenseFormChange({ ...expenseForm, amountEur: e.target.value })} required /></label>
        <label>Плащане<select value={expenseForm.paymentMethod} onChange={(e) => onExpenseFormChange({ ...expenseForm, paymentMethod: e.target.value })}>{Object.entries(paymentLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
        <label>Доставчик<input value={expenseForm.supplier} onChange={(e) => onExpenseFormChange({ ...expenseForm, supplier: e.target.value })} /></label>
        <label>Бележка<textarea value={expenseForm.notes} onChange={(e) => onExpenseFormChange({ ...expenseForm, notes: e.target.value })} /></label>
        <button className="erp-btn primary" disabled={loading}>Запази разход</button>
      </form>
      <Panel title="Справка разходи">{reports?.expensesByCategory.map((row) => <Row key={row.category} title={expenseLabels[row.category]} meta={formatEur(row._sum.amountEur || 0)} />)}</Panel>
    </section>
  )
}
