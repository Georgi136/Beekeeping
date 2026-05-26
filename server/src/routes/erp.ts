import { Router } from 'express'
import multer from 'multer'
import {
  createErpProduct,
  createErpSale,
  createExpense,
  deleteExpense,
  createWaxTransaction,
  deleteErpSale,
  deleteWaxTransaction,
  erpDashboard,
  erpMeta,
  erpReports,
  erpWaxSettings,
  erpWaxSummary,
  exportReportCsv,
  importProducts,
  listErpProducts,
  listErpSales,
  listExpenses,
  listInventoryMovements,
  listWaxTransactions,
  previewProductImport,
  updateErpWaxSettings,
  updateErpSale,
  updateErpProduct,
  updateExpense,
  updateWaxTransaction
} from '../controllers/erpController'
import { asyncHandler } from '../middleware/asyncHandler'
import { requireRole } from '../middleware/auth'
import { validateBody, validateQuery } from '../middleware/validate'
import { erpExpenseSchema, erpProductSchema, erpReportQuerySchema, erpSaleSchema, erpSaleUpdateSchema, erpWaxSettingsSchema, erpWaxTransactionSchema } from '../validators/erp'

const router = Router()
const productImportUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
})

router.use(requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']))

router.get('/meta', asyncHandler(erpMeta))
router.get('/dashboard', asyncHandler(erpDashboard))

router.get('/products', asyncHandler(listErpProducts))
router.post('/products', requireRole(['ADMIN']), validateBody(erpProductSchema), asyncHandler(createErpProduct))
router.put('/products/:id', requireRole(['ADMIN']), validateBody(erpProductSchema), asyncHandler(updateErpProduct))
router.post('/products/import-preview', requireRole(['ADMIN']), productImportUpload.single('file'), asyncHandler(previewProductImport))
router.post('/products/import', requireRole(['ADMIN']), productImportUpload.single('file'), asyncHandler(importProducts))

router.get('/sales', requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']), asyncHandler(listErpSales))
router.post('/sales', requireRole(['ADMIN', 'STAFF']), validateBody(erpSaleSchema), asyncHandler(createErpSale))
router.put('/sales/:id', requireRole(['ADMIN', 'STAFF']), validateBody(erpSaleUpdateSchema), asyncHandler(updateErpSale))
router.delete('/sales/:id', requireRole(['ADMIN', 'STAFF']), asyncHandler(deleteErpSale))

router.get('/movements', requireRole(['ADMIN', 'ACCOUNTANT']), asyncHandler(listInventoryMovements))

router.get('/expenses', requireRole(['ADMIN', 'ACCOUNTANT']), asyncHandler(listExpenses))
router.post('/expenses', requireRole(['ADMIN', 'ACCOUNTANT']), validateBody(erpExpenseSchema), asyncHandler(createExpense))
router.put('/expenses/:id', requireRole(['ADMIN', 'ACCOUNTANT']), validateBody(erpExpenseSchema), asyncHandler(updateExpense))
router.delete('/expenses/:id', requireRole(['ADMIN', 'ACCOUNTANT']), asyncHandler(deleteExpense))

router.get('/wax-transactions', requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']), asyncHandler(listWaxTransactions))
router.get('/wax-summary', requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']), asyncHandler(erpWaxSummary))
router.get('/wax-settings', requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']), asyncHandler(erpWaxSettings))
router.put('/wax-settings', requireRole(['ADMIN']), validateBody(erpWaxSettingsSchema), asyncHandler(updateErpWaxSettings))
router.post('/wax-transactions', requireRole(['ADMIN', 'STAFF']), validateBody(erpWaxTransactionSchema), asyncHandler(createWaxTransaction))
router.patch('/wax-transactions/:id', requireRole(['ADMIN', 'STAFF']), validateBody(erpWaxTransactionSchema), asyncHandler(updateWaxTransaction))
router.delete('/wax-transactions/:id', requireRole(['ADMIN', 'STAFF']), asyncHandler(deleteWaxTransaction))

router.get('/reports', requireRole(['ADMIN', 'ACCOUNTANT']), validateQuery(erpReportQuerySchema), asyncHandler(erpReports))
router.get('/reports.csv', requireRole(['ADMIN', 'ACCOUNTANT']), validateQuery(erpReportQuerySchema), asyncHandler(exportReportCsv))

export default router
