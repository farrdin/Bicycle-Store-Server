import { IProduct } from './product.interface'
import ProductModel from './product.model'

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await ProductModel.create(payload)
  return result
}

const getAllProduct = async (searchTerm?: string): Promise<IProduct[]> => {
  const filter: {
    $or?: { name?: RegExp; brand?: RegExp; type?: RegExp }[]
  } = {}

  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i')
    filter.$or = [{ name: regex }, { brand: regex }, { type: regex }]
  }

  const result = ProductModel.find(filter)
  return result
}

const getSingleProduct = async (payload: string): Promise<IProduct | null> => {
  const result = await ProductModel.findById(payload)
  return result
}

const updateProduct = async (
  id: string,
  updateData: IProduct,
): Promise<IProduct | null> => {
  const result = await ProductModel.findByIdAndUpdate(id, updateData, {
    new: true,
  })
  return result
}

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  const result = await ProductModel.findByIdAndDelete(id)
  return result
}

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
