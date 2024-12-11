import { Request, Response } from 'express'
import { ProductService } from './product.service'
import mongoose from 'mongoose'

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    const result = await ProductService.createProduct(payload)
    res.status(201).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    })
  } catch (error: unknown) {
    const err = error as mongoose.Error.ValidationError
    res.json({
      message: 'Failed to create the bicycle',
      success: false,
      error: err.errors || error,
      stack: err.stack,
    })
  }
}

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string
    const result = await ProductService.getAllProduct(searchTerm)
    res.status(200).send({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: result,
    })
  } catch (error: unknown) {
    const err = error as mongoose.Error.ValidationError
    res.status(404).json({
      message: 'Failed to get the bicycles',
      success: false,
      error: err.errors || error,
      stack: err.stack,
    })
  }
}

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getSingleProduct(req.params.productId)
    if (!result) {
      res.status(404).send({
        message: 'Bicycle not found',
        success: false,
      })
      return
    }
    res.status(200).send({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    })
  } catch (error: unknown) {
    const err = error as mongoose.Error.ValidationError
    res.status(404).json({
      message: 'Failed to get specific bicycle',
      success: false,
      error: err.errors || error,
      stack: err.stack,
    })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.updateProduct(
      req.params.productId,
      req.body,
    )
    res.send({
      message: 'Bicycle updated successfully',
      status: true,
      data: result,
    })
  } catch (error: unknown) {
    const err = error as mongoose.Error.ValidationError
    res.json({
      message: 'Failed to update Bicycle',
      success: false,
      error: err.errors || error,
      stack: err.stack,
    })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    await ProductService.deleteProduct(req.params.productId)
    res.send({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    })
  } catch (error: unknown) {
    const err = error as mongoose.Error.ValidationError
    res.json({
      message: 'Failed to delete bicycle',
      success: false,
      error: err.errors || error,
      stack: err.stack,
    })
  }
}

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
