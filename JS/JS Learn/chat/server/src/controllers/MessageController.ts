import express from 'express'
import {DialogModel, MessageModel, UserModel} from '../models'
import io from 'socket.io'
import {log} from "util"


class MessageController {
  io: io.Server

  constructor(io: io.Server) {
    this.io = io
  }

  index = async (req: any, res: express.Response) => {
    try {
      const user = req.user.user._id
      const dialog = await DialogModel.findById(req.params.dialogId).select('author, partner')
      if (!dialog) {
        return res.status(404).json({message: 'dialog not found'})
      }

      await MessageModel.updateMany(
        {'dialog': req.params.dialogId, user: {$ne: user}},
        {readed: true}
      )

      const messages = await MessageModel
        .find({dialog: req.params.dialogId})
        .populate('dialog user')

      res.json(messages)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

  create = async (req: any, res: express.Response) => {
    try {
      const postData = {
        text: req.body.text,
        dialog: req.body.dialogId,
        user: req.user.user._id
      }

      const message = new MessageModel(postData)
      await message.save()

      await DialogModel.findOneAndUpdate(
        {_id: message.dialog},
        {lastMessage: message.id},
        {upsert: true}
      )
      const dialog = await DialogModel.findById(message.dialog).populate({
        path: 'author partner lastMessage',
        populate: {
          path: 'user'
        }
      })
      const msg = await MessageModel.findById(message.id).populate('dialog user')

      this.io.emit('SERVER:NEW_MESSAGE', msg)
      this.io.emit('SERVER:DIALOG_LAST_MESSAGE_CHANGE', dialog)
      res.json(msg)
    } catch (e) {
      res.status(500).send(e)
    }
  }

  delete = async (req: any, res: express.Response) => {

    const message = await MessageModel.findById(req.params.id)

    if (!message) {
      return res.status(404).json({message: 'Message not found'})
    }

    if (message.user.toString() !== req.user.user._id) {
      return res.status(403).json({message: 'Это не твоё!"'})
    }

    await message.remove()
    this.io.emit('SERVER:DELETE_MESSAGE', message)
    const newLastMessage = await MessageModel
      .findOne({dialog: message.dialog})
      .sort({'createdAt': -1})
      .select('_id')
      .lean()

    const dialog = await DialogModel.findById(message.dialog)
    if (!dialog) {
      return res.status(404).json({message: 'Not found dialog'})
    }
    if (!newLastMessage) {
      dialog.lastMessage = null
    } else {
      dialog.lastMessage = newLastMessage._id
    }
    await dialog.save()

    const newDialog = await DialogModel.findById(message.dialog).populate({
      path: 'author partner lastMessage',
      populate: {
        path: 'user'
      }
    })

    this.io.emit('SERVER:DIALOG_LAST_MESSAGE_CHANGE', newDialog)

    res.json({message: 'Message deleted'})
  }
}

export default MessageController