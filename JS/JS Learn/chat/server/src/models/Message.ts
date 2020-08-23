import mongoose, {Schema, Document} from 'mongoose'
import validator from "validator"


export interface IMessage extends Document {
  text?: string,
  readed: boolean,
  user: string,
  dialog: string,
  attachments?: [object]
}

const MessageSchema = new Schema({
  text: String,
  readed: {type: Boolean, default: false},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  dialog: {type: Schema.Types.ObjectId, ref: 'Dialog'},
  attachments: [{type: Schema.Types.ObjectId, ref: 'UploadFile'}]
}, {
  timestamps: true,
  usePushEach: true
})

const MessageModel = mongoose.model<IMessage>('Message', MessageSchema)

export default MessageModel