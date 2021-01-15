import mongoose, { Schema } from 'mongoose'
export const UserSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
    tokens: [String],
  },
  {
    timestamps: true,
  }
)

function createModel(modelName, schema) {
  return mongoose.models[modelName] || mongoose.model(modelName, schema)
}


const UserModel = createModel('User',UserSchema)

export default UserModel
