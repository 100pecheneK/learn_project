import express from 'express'
import {verifyJWTToken} from '../utils'
import {IUser} from "../models/User"


interface IRequestCustom extends express.Request {
  user?: IUser,
  headers: {
    token?: string
  }
}

export default (req: IRequestCustom, res: express.Response, next: express.NextFunction) => {
  const token = req.headers.token

  verifyJWTToken(token)
    .then((user: IUser) => {
      req.user = user
      next()
    })
    .catch(() => {
      res.status(403).json({message: 'Forbidden'})
    })

}