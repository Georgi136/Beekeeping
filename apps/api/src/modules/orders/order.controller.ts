import type { Request, Response } from 'express'
import { createCustomerOrder, getAdminOrders, setOrderStatus } from './order.service'
import { firstParam } from '../../utils/params'

export async function createOrderController(req: Request, res: Response) {
  const order = await createCustomerOrder(req.body)
  res.status(201).json({
    message: 'Поръчката е приета успешно.',
    order
  })
}

export async function listOrdersController(_req: Request, res: Response) {
  const orders = await getAdminOrders()
  res.json({ count: orders.length, orders })
}

export async function updateOrderStatusController(req: Request, res: Response) {
  res.json(await setOrderStatus(firstParam(req.params.id), req.body.status))
}
