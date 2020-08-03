import express from 'express'
import {UserModel} from '../models'


interface IRequestCustom extends express.Request {
  user?: any,
}

export default async function (req: IRequestCustom, res: express.Response, next: express.NextFunction) {
  if (req.user) {
    await UserModel.findOneAndUpdate(
      {_id: req.user.user._id},
      {last_seen: new Date()})
  }
  next()
}