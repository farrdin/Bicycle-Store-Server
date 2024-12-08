import Express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { BicycleRoutes } from './module/bicycle/bicycle.route'

const app: Application = Express()

//parser
app.use(Express.json())
app.use(cors())

// Routes
app.use('/api/products', BicycleRoutes)
app.use('/api/products/:productId', BicycleRoutes)

// APP Run
app.get('/', (req: Request, res: Response) => {
  res.send('Bicycle Server is running!')
})

export default app
