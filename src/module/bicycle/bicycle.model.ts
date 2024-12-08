import mongoose, { Schema } from 'mongoose'
import { IBicycle } from './bicycle.interface'

const BicycleSchema = new Schema<IBicycle>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true, collection: 'bicycles' },
)

export const BicycleModel = mongoose.model<IBicycle>('Bicycle', BicycleSchema)
