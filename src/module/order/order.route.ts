import { Router } from 'express'
import { orderController } from './order.controller'

const OrderRouter = Router()

OrderRouter.post('/', orderController.createOrder)
OrderRouter.get('/revenue', orderController.calculateRevenue)

export default OrderRouter
