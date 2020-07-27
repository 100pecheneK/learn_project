import express from 'express'
import {UserModel} from '../models'
import {createJWTToken} from "../utils"
import io from 'socket.io'


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
    const user = await UserModel.find({email: req.user.data.email})
    if (!user) {
      return res.status(404).json({message: 'Not found'})
    }
    res.json(user)
  }

  login = async (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password
    }

    const user = await UserModel.findOne({email: postData.email})
    if (!user) {
      return res.status(404).json({message: 'Bad email'})
    }
    if (user.password === postData.password) {
      const token = createJWTToken(user)
      return res.json({token})
    }
    return res.status(404).json({message: 'Bad data'})
  }

  create = async (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    }
    const user = new UserModel(postData)
    await user.save((err) => {
      if (err) {
        return res.status(500).send(err)
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
}

export default UserController