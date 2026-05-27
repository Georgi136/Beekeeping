export const erpStyles = `
  .erp-login,
  .erp-shell {
    min-height: 100vh;
    background: #eef2ec;
    color: #172018;
    padding: 18px 0 36px;
  }

  .erp-login { display: grid; place-items: center; }
  .erp-wrap { width: min(1240px, calc(100% - 24px)); margin: 0 auto; }

  .login-box,
  .erp-card,
  .erp-panel,
  .metric-grid > div {
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(26, 42, 28, 0.06);
  }

  .login-box,
  .erp-card { display: grid; gap: 12px; padding: 20px; }
  .login-box { width: min(420px, calc(100% - 28px)); }

  .erp-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    padding: 24px 14px;
    margin-bottom: 14px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }

  .erp-header h1,
  .erp-card h2,
  .erp-panel h2 { margin: 0; color: #0d3020; }
  .erp-header p { margin: 8px 0 0; color: #56634f; font-weight: 700; }

  .erp-tabs,
  .report-tabs,
  .mode-switch,
  .payment-pills,
  .actions,
  .mini-actions,
  .import-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .erp-tabs {
    padding: 8px;
    margin-bottom: 14px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }

  button,
  .erp-btn,
  .erp-tabs button,
  .report-tabs button,
  .mode-switch button,
  .payment-pills button,
  .mini-btn,
  .inline-action {
    border: 1px solid #cfd9c9;
    border-radius: 6px;
    background: #f8faf6;
    color: #12301f;
    font-weight: 800;
    padding: 10px 14px;
    cursor: pointer;
  }

  button:disabled { opacity: 0.55; cursor: not-allowed; }
  .erp-tabs button.active,
  .report-tabs button.active,
  .mode-switch button.active,
  .payment-pills button.active,
  .erp-btn.primary {
    background: #12612e;
    color: #fff;
    border-color: #0e5126;
  }
  .erp-btn.ghost { background: #eef5ea; }
  .mini-btn { padding: 7px 10px; font-size: 0.82rem; }
  .mini-btn.danger { background: #ffeaea; color: #9e1f1f; border-color: #ffc7c7; }
  .inline-action { margin-bottom: 8px; }

  .status {
    padding: 10px 12px;
    border-radius: 6px;
    background: #fff8db;
    color: #654f00;
    font-weight: 800;
  }
  .status.error { background: #ffeaea; color: #9e1f1f; }

  label { display: grid; gap: 6px; font-size: 0.9rem; color: #43513f; font-weight: 800; }
  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid #cfd9c9;
    border-radius: 6px;
    padding: 10px;
    font: inherit;
    color: #172018;
    background: #fff;
    box-sizing: border-box;
  }
  textarea { min-height: 84px; resize: vertical; }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 12px;
    margin-bottom: 14px;
  }
  .metric-grid > div { padding: 18px 14px; display: grid; gap: 8px; }
  .metric-grid span { color: #62705c; font-weight: 900; }
  .metric-grid strong { font-size: 1.35rem; color: #082818; }
  .metric-grid small { color: #687366; }

  .erp-columns,
  .erp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 12px;
  }

  .erp-panel { padding: 18px; min-width: 0; }
  .panel-list { display: grid; gap: 10px; margin-top: 12px; }
  .erp-row { display: grid; gap: 6px; padding: 10px 0; border-bottom: 1px solid #edf1e9; }
  .erp-row span { color: #52604d; }
  .row-with-action { display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center; border-bottom: 1px solid #edf1e9; }
  .row-with-action .erp-row { border-bottom: 0; }

  .sales-layout,
  .storage-layout,
  .report-stack,
  .wax-page,
  .settings-page { display: grid; gap: 12px; }
  .sales-layout { grid-template-columns: minmax(320px, 420px) 1fr; align-items: start; }
  .sales-main { display: grid; gap: 10px; min-height: 0; overflow: auto; }
  .sales-section { border: 1px solid #dfe5dc; border-radius: 6px; background: #fff; overflow: hidden; }
  .sales-section-head { width: 100%; display: flex; justify-content: space-between; border: 0; border-radius: 0; }
  .sales-section-body { padding: 12px; display: grid; gap: 10px; }

  .quick-search,
  .sale-input-grid,
  .two,
  .editor-grid,
  .settings-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  .quick-products { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .quick-products button { text-align: left; display: grid; gap: 4px; min-height: 72px; }
  .quick-products button.selected { border-color: #12612e; background: #eef8ef; }
  .field-group { display: grid; gap: 8px; }
  .field-title { font-weight: 900; color: #43513f; }
  .sale-total-bar,
  .form-total {
    display: grid;
    gap: 4px;
    padding: 12px;
    border-radius: 6px;
    background: #f3f7ef;
    font-weight: 900;
  }
  .sale-total-bar strong { font-size: 1.4rem; color: #0d3020; }

  .storage-toolbar,
  .filters {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) 180px 160px auto;
    gap: 8px;
    padding: 12px;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }
  .storage-editor { background: #fff; border: 1px solid #dfe5dc; border-radius: 6px; padding: 18px; display: grid; gap: 12px; }
  .storage-editor-head { display: flex; justify-content: space-between; gap: 12px; align-items: center; }
  .wide-field { grid-column: 1 / -1; }
  .check { display: flex; align-items: center; gap: 8px; }
  .check input { width: auto; }
  .storage-hint { color: #687366; font-weight: 800; }

  .import-card { margin: 0; }
  .import-controls { align-items: end; }
  .import-preview { display: grid; gap: 8px; }
  .import-row { border: 1px solid #eadfc8; border-radius: 6px; padding: 10px; display: grid; gap: 4px; }
  .import-row.invalid { background: #fff4f2; border-color: #d96b6b; }

  .report-table-wrap,
  .storage-table-wrap {
    overflow: auto;
    background: #fff;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
  }
  table { width: 100%; border-collapse: collapse; }
  th,
  td { padding: 10px 12px; border-bottom: 1px solid #edf1e9; text-align: left; vertical-align: top; }
  th { background: #f6f8f3; color: #43513f; font-size: 0.82rem; text-transform: uppercase; }
  td small { display: block; color: #687366; margin-top: 4px; }
  tr.low { background: #fff9ea; }

  .wax-ledger-summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; }

  @media (max-width: 980px) {
    .sales-layout,
    .storage-toolbar,
    .filters,
    .quick-search,
    .sale-input-grid,
    .two,
    .editor-grid,
    .settings-grid {
      grid-template-columns: 1fr;
    }
    .sales-main { height: auto !important; }
  }
`
