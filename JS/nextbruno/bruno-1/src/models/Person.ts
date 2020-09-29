import mongoose, {Schema, Document} from 'mongoose'


export interface IPerson extends Document {
  name: string,
  email: string
}

export const PersonSchema = new Schema({
  name: String,
  email: String
}, {
  timestamps: true
})

const PersonModel = mongoose.models.Person || mongoose.model<IPerson>('Person', PersonSchema)

export default PersonModel