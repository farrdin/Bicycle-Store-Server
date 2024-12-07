import Express, { Application } from 'express'
import bicycleRoute from './module/bicycle/bicycle.route'
import orderRoute from './module/order/order.route'
// import { errorHandler } from './middlewares/errorHandler'
import cors from 'cors'

const app: Application = Express()

//parser
app.use(Express.json())
app.use(cors())

// Routes
app.use('/api/products', bicycleRoute)
app.use('/api/orders', orderRoute)

// Error Handler
// app.use(errorHandler)

export default app
