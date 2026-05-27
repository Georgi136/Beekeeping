import type { ReactNode } from 'react'
import { categoryLabels, commonText, unitLabels } from '../admin/labels'
import type { ProductImportRow } from '../admin/types'

export function MetricGrid({ items }: { items: Array<[string, string, string]> }) {
  return <section className="metric-grid">{items.map(([label, value, meta]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>{meta}</small></div>)}</section>
}

export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return <section className="erp-panel"><h2>{title}</h2><div className="panel-list">{children}</div></section>
}

export function Row({ title, meta }: { title: string; meta: string }) {
  return <div className="erp-row"><strong>{title}</strong><span>{meta}</span></div>
}

export function ActionRow({ title, meta, children }: { title: string; meta: string; children: ReactNode }) {
  return <div className="row-with-action"><Row title={title} meta={meta} /><div className="mini-actions">{children}</div></div>
}

export function SalesSection({ title, count, expanded, onToggle, children }: { title: string; count: number; expanded: boolean; onToggle: () => void; children: ReactNode }) {
  return <section className={`sales-section ${expanded ? 'expanded' : ''}`}><button type="button" className="sales-section-head" onClick={onToggle}><span>{title}</span><small>{count}</small></button>{expanded && <div className="sales-section-body">{children}</div>}</section>
}

export function PillGroup({ value, labels, onChange }: { value: string; labels: Record<string, string>; onChange: (value: string) => void }) {
  return <div className="field-group"><span className="field-title">Плащане</span><div className="payment-pills">{Object.entries(labels).map(([key, label]) => <button type="button" key={key} className={value === key ? 'active' : ''} onClick={() => onChange(key)}>{label}</button>)}</div></div>
}

export function ProductImport({ file, rows, summary, onFile, onPreview, onImport, loading }: { file: File | null; rows: ProductImportRow[]; summary: { totalRows: number; validRows: number; invalidRows: number }; onFile: (file: File | null) => void; onPreview: () => void; onImport: () => void; loading: boolean }) {
  return <section className="erp-card import-card"><h2>Импорт на продукти</h2><div className="import-controls"><label>CSV или Excel файл<input type="file" accept=".csv,.xlsx,.xls" onChange={(event) => onFile(event.target.files?.[0] || null)} /></label><button type="button" className="erp-btn ghost" disabled={!file || loading} onClick={onPreview}>Преглед</button><button type="button" className="erp-btn primary" disabled={!file || loading || summary.invalidRows > 0} onClick={onImport}>Импорт / обновяване</button></div>{summary.totalRows > 0 && <div className="storage-hint">Редове: {summary.totalRows} | Валидни: {summary.validRows} | Грешки: {summary.invalidRows}</div>}{rows.length > 0 && <div className="import-preview">{rows.slice(0, 8).map((row) => <div key={row.rowNumber} className={row.errors.length ? 'import-row invalid' : 'import-row'}><strong>{row.rowNumber}. {row.name || 'Без име'}</strong><span>{row.sku || '-'} | {categoryLabels[row.category] || row.category} | {row.stockQuantity} {unitLabels[row.unit] || row.unit}</span>{row.errors.length > 0 && <small>{row.errors.join(' ')}</small>}</div>)}</div>}</section>
}

export function ReportTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="report-table-wrap"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.length === 0 && <tr><td colSpan={headers.length}>{commonText.noRows}</td></tr>}{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`} data-label={headers[cellIndex]}>{cell}</td>)}</tr>)}</tbody></table></div>
}
