import express from 'express'
import {MessageModel, UserModel} from '../models'


class MessageController {
  static async index(req: express.Request, res: express.Response) {
    const messages = await MessageModel
      .find({dialog: req.params.dialogId})
      .populate('dialog')
    res.json(messages)
  }

  static async create(req: express.Request, res: express.Response) {
    try {
      const postData = {
        text: req.body.text,
        dialog: req.body.dialog,
        user: req.body.user
      }
      const dialogs = new MessageModel(postData)
      await dialogs.save()


      res.json(dialogs)
    } catch (e) {
      res.status(500).send(e)
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    await MessageModel.findOneAndRemove({_id: req.params.id})

    res.json({message: 'Message deleted'})
  }
}

export default MessageController