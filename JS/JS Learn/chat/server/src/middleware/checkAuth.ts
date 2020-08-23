import express from 'express'
import {verifyJWTToken} from '../utils'
import {IUser} from "../models/User"


interface IRequestCustom extends express.Request {
  user?: any,
  headers: any
}

export default (req: IRequestCustom, res: express.Response, next: express.NextFunction) => {
  if (req.path === '/user/login' || req.path === '/user/registration' || req.path === '/user/verify') {
    return next()
  }
  const token = req.headers.token

  verifyJWTToken(token)
    .then((user: any) => {
      req.user = user
      next()
    })
    .catch(() => {
      return res.status(403).json({message: 'Forbidden'})
    })
}