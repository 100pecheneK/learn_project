import express from 'express'
import {DialogModel, MessageModel, UserModel} from '../models'
import {IUser} from "../models/User"
import io from 'socket.io'
import {log} from "util"


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

  create = async (req: express.Request, res: express.Response) => {
    try {
      const postData = {
        author: req.body.author,
        partner: req.body.partner
      }
      const dialog = new DialogModel(postData)
      await dialog.save()

      const message = new MessageModel({
        text: req.body.text,
        dialog: dialog.id,
        user: req.body.author
      })
      await message.save()

      dialog.lastMessage = message.id
      await dialog.save()

      const populatedDialog = await DialogModel.findById(dialog.id)
        .populate('author partner lastMessage')

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