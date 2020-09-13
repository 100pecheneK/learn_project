import express from 'express'
import {DialogModel, MessageModel} from '../models'


class DialogController {
  static async index(req: express.Request, res: express.Response) {
    const dialogs = await DialogModel
      .findById({_id: req.params.id})
      .populate('author partner')
    res.json(dialogs)
  }

  static async create(req: express.Request, res: express.Response) {
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

      res.json(dialog)
    } catch (e) {
      res.status(500).send(e)
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    await DialogModel.findOneAndRemove({_id: req.params.id})

    res.json({message: 'Dialog deleted'})
  }
}

export default DialogController