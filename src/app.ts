import Express, { Application, Request, Response } from 'express'
import cors from 'cors'
import ProductRouter from './module/product/product.route'
import OrderRouter from './module/order/order.route'

const app: Application = Express()

//parser
app.use(Express.json())
app.use(cors())

// Routes
app.use('/api/products', ProductRouter)
app.use('/api/orders', OrderRouter)

// APP Run
app.get('/', (req: Request, res: Response) => {
  res.send('Bicycle Server is running!')
})

export default app
