import express from 'express'
import {
  createBicycle,
  getAllBicycles,
  getBicycleById,
  updateBicycle,
  deleteBicycle,
} from './bicycle.controller'

const router = express.Router()

// Create a new product
router.post('/', createBicycle)

// Get all products with optional searchTerm
router.get('/', getAllBicycles)

// Get a specific product by ID
router.get('/:productId', getBicycleById)

// Update a product by ID
router.put('/:productId', updateBicycle)

// Delete a product by ID
router.delete('/:productId', deleteBicycle)

export default router
