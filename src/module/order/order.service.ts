import ProductModel from '../product/product.model'
import { IOrder } from './order.interface'
import OrderModel from './order.model'

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { product, quantity } = payload
  const productData = await ProductModel.findById(product)

  if (!productData) {
    throw new Error('Product not found')
  }
  if (productData.quantity < quantity) {
    throw new Error('Insufficient Stock')
  }
  productData.quantity -= quantity
  productData.inStock = productData.quantity > 0
  await productData.save()

  const OrderService = await OrderModel.create(payload)
  return OrderService
}

const calculateRevenue = async (): Promise<{ totalReveneue: number }> => {
  const result = await OrderModel.aggregate([
    {
      $lookup: {
        from: 'products',
        localField: 'product',
        foreignField: '_id',
        as: 'productDetails',
      },
    },
    { $unwind: '$productDetails' },
    {
      $project: {
        quantity: 1,
        price: { $toDouble: '$productDetails.price' },
      },
    },
    {
      $group: {
        _id: null,
        totalReveneue: {
          $sum: { $multiply: [{ $toDouble: '$quantity' }, '$price'] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalReveneue: 1,
      },
    },
  ])
  return result[0] || { totalReveneue: 0 }
}

export const OrderService = {
  createOrder,
  calculateRevenue,
}
