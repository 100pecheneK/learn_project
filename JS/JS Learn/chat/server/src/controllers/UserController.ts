import express from 'express'
import {UserModel} from '../models'
import {createJWTToken} from "../utils"
import io from 'socket.io'
import {IUser} from "../models/User"
import {DocumentDefinition, DocumentQuery, Query} from "mongoose"


interface IRequestCustom extends express.Request {
  user?: any,
}

class UserController {
  io: io.Server

  constructor(io: io.Server) {
    this.io = io
  }

  show = async (req: express.Request, res: express.Response) => {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
      return res.status(404).json({message: 'Not found'})
    }
    res.json(user)
  }

  getMe = async (req: IRequestCustom, res: express.Response) => {
    try {
      const user = await UserModel.findById(req.user.user._id)
      if (!user) {
        return res.status(404).json({message: 'Not found'})
      }
      return res.json(user)
    } catch (e) {
      return res.status(500).json({message: 'Server error'})
    }
  }

  login = async (req: express.Request, res: express.Response) => {
    try {
      const postData = {
        email: req.body.email,
        password: req.body.password
      }

      const user = await UserModel.findOne({email: postData.email})
      if (!user) {
        return res.status(403).json({message: 'Bad email'})
      }
      if (user.password === postData.password) {
        const token = createJWTToken(user)
        return res.json({token})
      }
      return res.status(403).json({message: 'Bad password'})
    } catch (e) {
      return res.status(500).json({message: 'Server error'})
    }
  }
  verify = async (req: express.Request, res: express.Response) => {
    const hash = req.body.hash

    if (!hash) {
      return res.status(400).json({message: 'Invalid verify code'})
    }
    const user = await UserModel.findOne({confirm_hash: hash.toString()}).select('_id')
    if (!user) {
      return res.status(400).json({message: 'Invalid verify code'})
    }

    user.confirmed = true
    user.confirm_hash = ''
    await user.save()

    return res.json({message: 'Ваш аккаунт подтверждён'})
  }


  create = async (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    }
    const isUserExists: boolean = !!await UserModel.countDocuments({email: postData.email})
    if (isUserExists) {
      return res.status(400).json({message: 'Пользователь с таким E-Mail уже существует'})
    }
    const user = new UserModel(postData)
    await user.save((err: any) => {
      if (err) {
        return res.status(500).json({message: 'Ошибка сервера'})
      }
      return res.send('User created')
    })
  }

  delete = async (req: express.Request, res: express.Response) => {
    const user = await UserModel.findOneAndRemove({_id: req.params.id})
    if (!user) {
      return res.status(404).json({message: 'Not found'})
    }
    res.json({message: `User ${user.fullname} deleted`})
  }

  findUsers = async (req: any, res: express.Response) => {
    try {
      const search = req.query.search
      const users = await UserModel.find(
        {$text: {$search: search}},
        {score: {$meta: 'textScore'}}
      ).sort({score: {$meta: 'textScore'}})
      return res.json(users)
    } catch (e) {
      console.error(e)
      return res.status(500).json({message: 'Server error'})
    }
  }
}

export default UserController