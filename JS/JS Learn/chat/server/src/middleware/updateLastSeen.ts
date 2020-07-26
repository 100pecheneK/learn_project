import express from 'express'
import {UserModel} from '../models'


export default async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  await UserModel.findOneAndUpdate(
    {_id: '5f1c140d4b74740969526c07'},
    {last_seen: new Date()})
  next()
}