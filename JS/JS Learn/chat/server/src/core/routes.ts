import {DialogController, MessageController, UserController} from '../controllers'
import bodyParser from 'body-parser'
import {checkAuth, updateLastSeen} from '../middleware'
import express from "express"
import io from 'socket.io'


export default (app: express.Application, io: io.Server) => {
  const userController = new UserController(io)
  const dialogController = new DialogController(io)
  const messageController = new MessageController(io)
  app.use(bodyParser.json())
  app.use(updateLastSeen)
  app.use(checkAuth)

  app.get('/user/me', userController.getMe)
  app.get('/user/:id', userController.show)
  app.post('/user/registration', userController.create)
  app.post('/user/login', userController.login)
  app.delete('/user/delete/:id', userController.delete)

  app.get('/dialogs', dialogController.index)
  app.post('/dialogs', dialogController.create)
  app.delete('/dialogs/delete/:id', dialogController.delete)

  app.get('/messages/:dialogId', messageController.index)
  app.post('/messages', messageController.create)
  app.delete('/messages/delete/:id', messageController.delete)
}