import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import {UserController, DialogController, MessageController} from './controllers'
import {updateLastSeen, checkAuth} from './middleware'

// setup
dotenv.config()
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

// middleware
app.use(bodyParser.json())
app.use(updateLastSeen)
app.use(checkAuth)

// routes
app.get('/user/:id', UserController.show)
app.post('/user/registration', UserController.create)
app.post('/user/login', UserController.login)
app.delete('/user/delete/:id', UserController.delete)

app.get('/dialogs/:id', DialogController.index)
app.post('/dialogs', DialogController.create)
app.delete('/dialogs/delete/:id', DialogController.delete)

app.get('/messages/:dialogId', MessageController.index)
app.post('/messages', MessageController.create)
app.delete('/messages/delete/:id', MessageController.delete)

// start
app.listen(process.env.PORT, function () {
  console.log(`Server on: http://localhost:${process.env.PORT}`)
})