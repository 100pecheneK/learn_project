import mongoose, {Schema, Document} from 'mongoose'


export interface IVehicle extends Document {
  brand: string,
  modelName: string,
  owner: string
}

const VehicleSchema = new Schema({
  brand: String,
  modelName: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Person'},
}, {
  timestamps: true
})

const VehicleModel = mongoose.models.Vehicle || mongoose.model<IVehicle>('Vehicle', VehicleSchema)

export default VehicleModel