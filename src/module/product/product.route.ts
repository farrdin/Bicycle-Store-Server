import { Router } from 'express'
import { ProductController } from './product.controller'

const ProductRouter = Router()

ProductRouter.post('/', ProductController.createProduct)
ProductRouter.get('/', ProductController.getAllProduct)
ProductRouter.get('/:productId', ProductController.getSingleProduct)
ProductRouter.put('/:productId', ProductController.updateProduct)
ProductRouter.delete('/:productId', ProductController.deleteProduct)

export default ProductRouter
