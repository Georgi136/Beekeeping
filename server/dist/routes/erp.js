"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const erpController_1 = require("../controllers/erpController");
const asyncHandler_1 = require("../middleware/asyncHandler");
const auth_1 = require("../middleware/auth");
const validate_1 = require("../middleware/validate");
const erp_1 = require("../validators/erp");
const router = (0, express_1.Router)();
const productImportUpload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }
});
router.use((0, auth_1.requireRole)(['ADMIN', 'STAFF', 'ACCOUNTANT']));
router.get('/meta', (0, asyncHandler_1.asyncHandler)(erpController_1.erpMeta));
router.get('/dashboard', (0, asyncHandler_1.asyncHandler)(erpController_1.erpDashboard));
router.get('/products', (0, asyncHandler_1.asyncHandler)(erpController_1.listErpProducts));
router.post('/products', (0, auth_1.requireRole)(['ADMIN']), (0, validate_1.validateBody)(erp_1.erpProductSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.createErpProduct));
router.put('/products/:id', (0, auth_1.requireRole)(['ADMIN']), (0, validate_1.validateBody)(erp_1.erpProductSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.updateErpProduct));
router.post('/products/import-preview', (0, auth_1.requireRole)(['ADMIN']), productImportUpload.single('file'), (0, asyncHandler_1.asyncHandler)(erpController_1.previewProductImport));
router.post('/products/import', (0, auth_1.requireRole)(['ADMIN']), productImportUpload.single('file'), (0, asyncHandler_1.asyncHandler)(erpController_1.importProducts));
router.get('/sales', (0, auth_1.requireRole)(['ADMIN', 'STAFF', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.listErpSales));
router.post('/sales', (0, auth_1.requireRole)(['ADMIN', 'STAFF']), (0, validate_1.validateBody)(erp_1.erpSaleSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.createErpSale));
router.put('/sales/:id', (0, auth_1.requireRole)(['ADMIN', 'STAFF']), (0, validate_1.validateBody)(erp_1.erpSaleUpdateSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.updateErpSale));
router.delete('/sales/:id', (0, auth_1.requireRole)(['ADMIN', 'STAFF']), (0, asyncHandler_1.asyncHandler)(erpController_1.deleteErpSale));
router.get('/movements', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.listInventoryMovements));
router.get('/expenses', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.listExpenses));
router.post('/expenses', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, validate_1.validateBody)(erp_1.erpExpenseSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.createExpense));
router.put('/expenses/:id', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, validate_1.validateBody)(erp_1.erpExpenseSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.updateExpense));
router.delete('/expenses/:id', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.deleteExpense));
router.get('/wax-transactions', (0, auth_1.requireRole)(['ADMIN', 'STAFF', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.listWaxTransactions));
router.get('/wax-summary', (0, auth_1.requireRole)(['ADMIN', 'STAFF', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.erpWaxSummary));
router.get('/wax-settings', (0, auth_1.requireRole)(['ADMIN', 'STAFF', 'ACCOUNTANT']), (0, asyncHandler_1.asyncHandler)(erpController_1.erpWaxSettings));
router.put('/wax-settings', (0, auth_1.requireRole)(['ADMIN']), (0, validate_1.validateBody)(erp_1.erpWaxSettingsSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.updateErpWaxSettings));
router.post('/wax-transactions', (0, auth_1.requireRole)(['ADMIN', 'STAFF']), (0, validate_1.validateBody)(erp_1.erpWaxTransactionSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.createWaxTransaction));
router.patch('/wax-transactions/:id', (0, auth_1.requireRole)(['ADMIN', 'STAFF']), (0, validate_1.validateBody)(erp_1.erpWaxTransactionSchema), (0, asyncHandler_1.asyncHandler)(erpController_1.updateWaxTransaction));
router.delete('/wax-transactions/:id', (0, auth_1.requireRole)(['ADMIN', 'STAFF']), (0, asyncHandler_1.asyncHandler)(erpController_1.deleteWaxTransaction));
router.get('/reports', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, validate_1.validateQuery)(erp_1.erpReportQuerySchema), (0, asyncHandler_1.asyncHandler)(erpController_1.erpReports));
router.get('/reports.csv', (0, auth_1.requireRole)(['ADMIN', 'ACCOUNTANT']), (0, validate_1.validateQuery)(erp_1.erpReportQuerySchema), (0, asyncHandler_1.asyncHandler)(erpController_1.exportReportCsv));
exports.default = router;
