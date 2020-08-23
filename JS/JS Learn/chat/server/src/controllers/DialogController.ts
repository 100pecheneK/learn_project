import express from 'express'
import {DialogModel, MessageModel} from '../models'
import io from 'socket.io'


interface IRequestCustom extends express.Request {
  user?: any,
}

class DialogController {
  io: io.Server

  constructor(io: io.Server) {
    this.io = io
  }

  index = async (req: IRequestCustom, res: express.Response) => {
    const userId = req.user.user._id
    const dialogs = await DialogModel
      .find({$or: [{author: userId}, {partner: userId}]})
      .populate({
        path: 'author partner lastMessage',
        populate: {
          path: 'user'
        }
      })

    res.json(dialogs)
  }

  create = async (req: any, res: express.Response) => {
    try {
      const postData = {
        author: req.user.user._id,
        partner: req.body.partnerId
      }
      const d = await DialogModel.findOne({
        $or: [
          {author: postData.author, partner: postData.partner},
          {author: postData.partner, partner: postData.author}
        ]
      })
      if (d) {
        return res.status(400).json({message: 'У вас уже создан такой диалог'})
      }
      const dialog = new DialogModel(postData)
      await dialog.save()
      await dialog.save()

      const populatedDialog = await DialogModel.findById(dialog.id)
        .populate('author partner lastMessage')

      this.io.emit('SERVER:DIALOG_CREATED', {populatedDialog})
      res.json(populatedDialog)
    } catch (e) {
      res.status(500).send(e)
    }
  }

  delete = async (req: express.Request, res: express.Response) => {
    await DialogModel.findOneAndRemove({_id: req.params.id})

    res.json({message: 'Dialog deleted'})
  }
}

export default DialogController