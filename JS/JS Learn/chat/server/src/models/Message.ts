import mongoose, {Schema, Document} from 'mongoose'
import validator from "validator"


export interface IMessage extends Document {
  text: string,
  unread: boolean,
  user: string,
  dialog: string
}

const MessageSchema = new Schema({
  text: String,
  unread: {type: Boolean, default: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  dialog: {type: Schema.Types.ObjectId, ref: 'Dialog'}
}, {
  timestamps: true
})

const MessageModel = mongoose.model<IMessage>('Message', MessageSchema)

export default MessageModel