import express from 'express'
import {UserModel} from '../models'
import {createJWTToken} from "../utils"


class UserController {
  static async show(req: express.Request, res: express.Response) {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
      return res.status(404).json({message: 'Not found'})
    }
    res.json(user)
  }

  static async getMe() {

  }

  static async login(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.login,
      password: req.body.password
    }

    const user = await UserModel.findOne({email: postData.email})
    if (!user) {
      return res.status(404).json({message: 'Bad data'})
    }
    if (user.password === postData.password) {
      const token = createJWTToken(postData)
      return res.json({token})
    }
    return res.status(404).json({message: 'Bad data'})
  }

  static async create(req: express.Request, res: express.Response) {
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
    })
    res.send('User created')
  }

  static async delete(req: express.Request, res: express.Response) {
    const user = await UserModel.findOneAndRemove({_id: req.params.id})
    if (!user) {
      return res.status(404).json({message: 'Not found'})
    }
    res.json({message: `User ${user.fullname} deleted`})
  }
}

export default UserController