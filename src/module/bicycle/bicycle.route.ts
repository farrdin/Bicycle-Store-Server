import { Router } from 'express'
import { BicycleController } from './bicycle.controller'

const router = Router()

router.post('/', BicycleController.createBicycle)
router.get('/', BicycleController.getAllBicycles)
router.get('/:productId', BicycleController.getBicycleById)
router.put('/:productId', BicycleController.updateBicycle)
router.delete('/:productId', BicycleController.deleteBicycle)

export const BicycleRoutes = router
