import mongoose, {Document, Schema} from 'mongoose'
import validator from "validator"
import {v4 as uuidv4} from 'uuid'
import differenceInMinutes from 'date-fns/differenceInMinutes'


export interface IUser extends Document {
  email?: string,
  fullname?: string,
  password?: string,
  confirmed?: boolean,
  avatar?: string,
  confirm_hash?: string,
  last_seen?: Date,
  isOnline?: boolean
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: 'Email is required',
    validate: [validator.isEmail, 'Invalid email'],
    unique: true
  },
  fullname: {
    type: String,
    required: 'Fullname is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  avatar: String,
  confirm_hash: {
    type: String,
    default: uuidv4()
  },
  last_seen: {
    type: Date,
    default: new Date()
  },
  isOnline: {
    type: Boolean,
    default: function (this: any) {
      return differenceInMinutes(new Date(), new Date(this.last_seen)) < 1
    }
  }
}, {
  timestamps: true
})

UserSchema.index({email: 'text', fullname: 'text'})

const UserModel = mongoose.model<IUser>('User', UserSchema)

export default UserModel