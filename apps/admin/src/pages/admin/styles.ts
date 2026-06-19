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
  .workspace-switch,
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
  .workspace-switch { margin-bottom: 8px; }
  .workspace-switch button { background: #e8eee5; }
  .workspace-switch button.active { background: #17301e; color: #fff; border-color: #17301e; }

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
  .mini-btn.primary { background: #12612e; color: #fff; border-color: #0e5126; }
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

  .store-settings-page,
  .sales-layout,
  .storage-layout,
  .report-stack,
  .wax-page,
  .settings-page { display: grid; gap: 12px; }
  .page-heading {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: end;
    padding: 16px 18px;
    border: 1px solid #dfe5dc;
    border-radius: 6px;
    background: #fff;
  }
  .page-heading h2,
  .erp-card h3 { margin: 0; color: #0d3020; }
  .page-heading p,
  .muted { margin: 6px 0 0; color: #687366; font-weight: 700; }
  .settings-stack { display: grid; gap: 12px; }
  .save-bar { justify-self: start; }
  .store-settings-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .store-toggle-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .store-toggle { display: flex; gap: 10px; align-items: start; padding: 12px; border: 1px solid #dfe5dc; border-radius: 6px; background: #fbfcfa; cursor: pointer; }
  .store-toggle input { width: auto; margin-top: 2px; }
  .store-toggle span { display: grid; gap: 4px; }
  .store-toggle small { color: #687366; line-height: 1.35; }
  .store-split { display: grid; grid-template-columns: minmax(300px, 390px) minmax(0, 1fr); gap: 12px; align-items: start; }
  .config-list { display: grid; gap: 0; border: 1px solid #edf1e9; border-radius: 6px; }
  .config-list > div { display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; padding: 11px 12px; border-bottom: 1px solid #edf1e9; }
  .config-list > div:last-child { border-bottom: 0; }
  .config-status { padding: 3px 8px; border-radius: 999px; font-size: 0.78rem; font-weight: 900; }
  .config-status.ok { color: #0d5a29; background: #e6f6e7; }
  .config-status.missing { color: #9e1f1f; background: #ffeaea; }
  .homepage-configurator { display: grid; gap: 12px; }
  .configurator-heading { align-items: center; }
  .configurator-toolbar { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
  .configurator-grid { display: grid; grid-template-columns: 230px minmax(330px, 1fr) minmax(300px, 420px); gap: 12px; align-items: start; }
  .section-rail,
  .section-editor,
  .preview-pane { background: #fff; border: 1px solid #dfe5dc; border-radius: 6px; }
  .section-rail { display: grid; gap: 8px; padding: 12px; }
  .section-rail-item { border: 1px solid #e4e9e0; border-radius: 6px; padding: 6px; }
  .section-rail-item.selected { border-color: #12612e; background: #f0f8ef; }
  .section-select { width: 100%; display: grid; gap: 4px; text-align: left; border: 0; background: transparent; padding: 6px; }
  .section-select small { color: #687366; font-weight: 700; }
  .section-controls { display: flex; gap: 4px; align-items: center; padding: 3px 6px 0; }
  .section-controls button { padding: 3px 7px; min-height: 28px; }
  .compact-check { display: flex; align-items: center; gap: 4px; margin-right: auto; font-size: .75rem; }
  .compact-check input { width: auto; }
  .section-editor { display: grid; gap: 12px; padding: 16px; max-height: 74vh; overflow: auto; }
  .editor-title h3 { margin: 0; color: #0d3020; }
  .editor-title p { margin: 5px 0 0; color: #687366; font-weight: 700; }
  .save-draft { position: sticky; bottom: 0; justify-self: start; box-shadow: 0 -8px 16px rgba(255,255,255,.92); }
  .image-field { display: grid; gap: 8px; }
  .product-images-editor { display: grid; gap: 10px; padding: 12px; border: 1px solid #dfe5dc; border-radius: 6px; background: #fbfcfa; }
  .product-images-heading { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; align-items: center; }
  .product-images-heading div { display: grid; gap: 4px; }
  .product-images-heading small { color: #687366; }
  .product-image-list { display: grid; gap: 8px; }
  .product-image-item { display: grid; grid-template-columns: 64px minmax(0, 1fr) auto; gap: 8px; align-items: center; padding: 7px; border: 1px solid #e4e9e0; border-radius: 4px; background: #fff; }
  .product-image-item img { width: 64px; height: 52px; object-fit: cover; border-radius: 4px; }
  .product-image-item span { min-width: 0; overflow: hidden; color: #687366; font-size: .76rem; text-overflow: ellipsis; white-space: nowrap; }
  .store-reviews-editor { display: grid; gap: 10px; }
  .store-review-row { display: grid; gap: 10px; padding: 12px; border: 1px solid #dfe5dc; border-radius: 6px; background: #fbfcfa; }
  .featured-product-list { display: grid; gap: 7px; max-height: 260px; overflow: auto; padding: 8px; border: 1px solid #dfe5dc; border-radius: 6px; }
  .featured-product { display: flex; gap: 8px; align-items: center; padding: 8px; border: 1px solid #edf1e9; border-radius: 4px; background: #fbfcfa; }
  .featured-product input { width: auto; }
  .featured-product small { margin-left: auto; color: #687366; }
  .image-field img { width: 100%; max-height: 150px; object-fit: cover; border: 1px solid #dfe5dc; border-radius: 6px; }
  .upload-button { display: inline-flex; justify-self: start; padding: 8px 10px; border: 1px solid #cfd9c9; border-radius: 6px; background: #f8faf6; cursor: pointer; }
  .upload-button input { display: none; }
  .preview-pane { padding: 10px; overflow: auto; }
  .site-preview { margin: 0 auto; overflow: hidden; border: 1px solid #dfe5dc; border-radius: 6px; background: #fff; color: #17301e; transition: width .2s ease; }
  .site-preview.desktop { width: 100%; }
  .site-preview.mobile { width: min(100%, 320px); }
  .preview-hero { padding: 30px 18px; background-size: cover; background-position: center; color: #fff; }
  .preview-hero h1 { margin: 0 0 9px; font-size: 1.45rem; }
  .preview-hero p,
  .preview-section p { margin: 0 0 12px; font-size: .8rem; line-height: 1.5; }
  .preview-hero div { display: flex; gap: 5px; flex-wrap: wrap; }
  .preview-hero button { padding: 6px 8px; font-size: .66rem; background: #f7bd28; border-color: #f7bd28; }
  .preview-section { padding: 16px; border-bottom: 1px solid #edf1e9; }
  .preview-section h2 { margin: 0 0 7px; font-size: 1.1rem; }
  .preview-section h3 { margin: 10px 0 5px; font-size: .9rem; }
  .preview-section img { width: 100%; max-height: 110px; object-fit: cover; border-radius: 4px; }
  .preview-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .preview-products i { display: grid; min-height: 54px; align-items: center; padding: 5px; border-radius: 4px; background: #eef2ec; color: #43513f; font-size: .64rem; font-style: normal; font-weight: 800; }
  .site-preview footer { padding: 10px 16px; background: #17301e; color: #fff; font-size: .68rem; }
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
  .wax-settings-details { padding: 0; gap: 0; overflow: hidden; }
  .wax-settings-details summary {
    padding: 14px 18px;
    cursor: pointer;
    color: #0d3020;
    font-size: 1rem;
    font-weight: 900;
    list-style-position: inside;
  }
  .wax-settings-details[open] summary { border-bottom: 1px solid #edf1e9; }
  .wax-settings-body { display: grid; gap: 12px; padding: 16px 18px 18px; }

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
    .store-split { grid-template-columns: 1fr; }
    .store-settings-grid,
    .store-toggle-grid { grid-template-columns: 1fr; }
    .product-image-item { grid-template-columns: 56px minmax(0, 1fr); }
    .product-image-item img { width: 56px; height: 48px; grid-row: span 2; }
    .product-image-item .mini-btn { justify-self: start; }
    .configurator-grid { grid-template-columns: 1fr; }
    .section-rail { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .section-rail > strong { grid-column: 1 / -1; }
    .section-editor { max-height: none; }
    .sales-main { height: auto !important; }
  }
`
