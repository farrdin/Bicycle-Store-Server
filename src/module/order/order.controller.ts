import { Request, Response } from 'express'
import { OrderService } from './order.service'
import mongoose from 'mongoose'

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.createOrder(req.body)
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    })
  } catch (error: unknown) {
    let statusCode = 400

    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage = error.message
      if (error.message === 'Product not found') {
        statusCode = 404
      } else if (error.message === 'Insufficient stock') {
        statusCode = 422
      }
    }

    res.status(statusCode).json({
      message: errorMessage,
      status: false,
      error: error instanceof Error ? error.name : 'Unknown Error',
    })
  }
}

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await OrderService.calculateRevenue()
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: revenue,
    })
  } catch (error: unknown) {
    const err = error as mongoose.Error.ValidationError
    res.status(500).json({
      message: 'Failed to calculate revenue',
      success: false,
      error: err.errors || error,
      stack: err.stack,
    })
  }
}

export const orderController = {
  createOrder,
  calculateRevenue,
}
