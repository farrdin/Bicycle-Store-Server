import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Bicycle Name is required'],
    },
    brand: {
      type: String,
      required: [true, 'Bicycle Brand Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Bicycle Price is required'],
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: [true, 'Bicycle Type is required'],
    },
    description: {
      type: String,
      required: [true, 'Bicycle description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Bicycle quantity is required'],
      min: [0, 'Quantity must be at least 0'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required'],
    },
  },
  {
    timestamps: true,
  },
)

const ProductModel = model<IProduct>('Product', ProductSchema)

export default ProductModel
