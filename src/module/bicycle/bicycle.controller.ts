import { RequestHandler } from 'express'
import { BicycleService } from './bicycle.service'

export class BicycleController {
  static createBicycle: RequestHandler = async (req, res, next) => {
    try {
      const bicycle = await BicycleService.createBicycle(req.body)
      res.status(201).json({
        message: 'Bicycle created successfully',
        success: true,
        data: bicycle,
      })
    } catch (error) {
      next(error)
    }
  }

  static getAllBicycles: RequestHandler = async (req, res, next) => {
    try {
      const searchTerm = req.query.searchTerm as string
      const bicycles = await BicycleService.getAllBicycles(searchTerm)
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        success: true,
        data: bicycles,
      })
    } catch (error) {
      next(error)
    }
  }

  static getBicycleById: RequestHandler = async (req, res, next) => {
    try {
      const bicycle = await BicycleService.getBicycleById(req.params.productId)
      if (!bicycle) {
        res.status(404).json({
          message: 'Bicycle not found',
          success: false,
        })
        return
      }
      res.status(200).json({
        message: 'Bicycle retrieved successfully',
        success: true,
        data: bicycle,
      })
    } catch (error) {
      next(error)
    }
  }

  static updateBicycle: RequestHandler = async (req, res, next) => {
    try {
      const bicycle = await BicycleService.updateBicycle(
        req.params.productId,
        req.body,
      )
      if (!bicycle) {
        res.status(404).json({
          message: 'Bicycle not found',
          success: false,
        })
        return
      }
      res.status(200).json({
        message: 'Bicycle updated successfully',
        success: true,
        data: bicycle,
      })
    } catch (error) {
      next(error)
    }
  }

  static deleteBicycle: RequestHandler = async (req, res, next) => {
    try {
      const bicycle = await BicycleService.deleteBicycle(req.params.productId)
      if (!bicycle) {
        res.status(404).json({
          message: 'Bicycle not found',
          success: false,
        })
        return
      }
      res.status(200).json({
        message: 'Bicycle deleted successfully',
        success: true,
        data: {},
      })
    } catch (error) {
      next(error)
    }
  }
}
