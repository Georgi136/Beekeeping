import { Router } from 'express'
import {
  createErpProduct,
  createErpSale,
  createExpense,
  createWaxTransaction,
  erpDashboard,
  erpMeta,
  erpReports,
  exportReportCsv,
  listErpProducts,
  listErpSales,
  listExpenses,
  listInventoryMovements,
  listWaxTransactions,
  updateErpProduct
} from '../controllers/erpController'
import { asyncHandler } from '../middleware/asyncHandler'
import { requireRole } from '../middleware/auth'
import { validateBody, validateQuery } from '../middleware/validate'
import { erpExpenseSchema, erpProductSchema, erpReportQuerySchema, erpSaleSchema, erpWaxTransactionSchema } from '../validators/erp'

const router = Router()

router.use(requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']))

router.get('/meta', asyncHandler(erpMeta))
router.get('/dashboard', asyncHandler(erpDashboard))

router.get('/products', asyncHandler(listErpProducts))
router.post('/products', requireRole(['ADMIN']), validateBody(erpProductSchema), asyncHandler(createErpProduct))
router.put('/products/:id', requireRole(['ADMIN']), validateBody(erpProductSchema), asyncHandler(updateErpProduct))

router.get('/sales', requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']), asyncHandler(listErpSales))
router.post('/sales', requireRole(['ADMIN', 'STAFF']), validateBody(erpSaleSchema), asyncHandler(createErpSale))

router.get('/movements', requireRole(['ADMIN', 'ACCOUNTANT']), asyncHandler(listInventoryMovements))

router.get('/expenses', requireRole(['ADMIN', 'ACCOUNTANT']), asyncHandler(listExpenses))
router.post('/expenses', requireRole(['ADMIN', 'ACCOUNTANT']), validateBody(erpExpenseSchema), asyncHandler(createExpense))

router.get('/wax-transactions', requireRole(['ADMIN', 'STAFF', 'ACCOUNTANT']), asyncHandler(listWaxTransactions))
router.post('/wax-transactions', requireRole(['ADMIN', 'STAFF']), validateBody(erpWaxTransactionSchema), asyncHandler(createWaxTransaction))

router.get('/reports', requireRole(['ADMIN', 'ACCOUNTANT']), validateQuery(erpReportQuerySchema), asyncHandler(erpReports))
router.get('/reports.csv', requireRole(['ADMIN', 'ACCOUNTANT']), validateQuery(erpReportQuerySchema), asyncHandler(exportReportCsv))

export default router
