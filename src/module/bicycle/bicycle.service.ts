import { IBicycle } from './bicycle.interface'
import { BicycleModel } from './bicycle.model'

export class BicycleService {
  static async createBicycle(bicycleData: IBicycle): Promise<IBicycle> {
    return BicycleModel.create(bicycleData)
  }

  static async getAllBicycles(searchTerm?: string): Promise<IBicycle[]> {
    const filter = searchTerm
      ? {
          $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } },
            { type: { $regex: searchTerm, $options: 'i' } },
          ],
        }
      : {}
    return BicycleModel.find(filter)
  }

  static async getBicycleById(productId: string): Promise<IBicycle | null> {
    return BicycleModel.findById(productId)
  }

  static async updateBicycle(
    id: string,
    updateData: Partial<IBicycle>,
  ): Promise<IBicycle | null> {
    return BicycleModel.findByIdAndUpdate(id, updateData, { new: true })
  }

  static async deleteBicycle(id: string): Promise<IBicycle | null> {
    return BicycleModel.findByIdAndDelete(id)
  }
}
