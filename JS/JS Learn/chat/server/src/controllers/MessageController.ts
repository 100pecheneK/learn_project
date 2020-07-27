import express from 'express'
import {DialogModel, MessageModel, UserModel} from '../models'
import io from 'socket.io'


class MessageController {
  io: io.Server

  constructor(io: io.Server) {
    this.io = io
  }

  index = async (req: express.Request, res: express.Response) => {
    const messages = await MessageModel
      .find({dialog: req.params.dialogId})
      .populate('dialog')
    res.json(messages)
  }

  create = async (req: any, res: express.Response) => {
    try {
      const postData = {
        text: req.body.text,
        dialog: req.body.dialog,
        user: req.user.user._id
      }
      const message = new MessageModel(postData)
      await message.save()
      const msg = await MessageModel.findById(message.id).populate('dialog')

      const dialog = await DialogModel.findById(postData.dialog)
      if (!dialog) {
        return res.status(404).json({message: 'Not found'})
      }

      this.io.emit('SERVER:NEW_MESSAGE', msg)
      res.json(msg)
    } catch (e) {
      res.status(500).send(e)
    }
  }

  delete = async (req: express.Request, res: express.Response) => {
    await MessageModel.findOneAndRemove({_id: req.params.id})

    res.json({message: 'Message deleted'})
  }
}

export default MessageController