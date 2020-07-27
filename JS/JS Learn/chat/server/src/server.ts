import express from 'express'
import dotenv from 'dotenv'
import './core/db'
import {createServer} from "http"
import createApp from './core/routes'
import createSocket from './core/socket'

// setup
dotenv.config()
const app = express()
const http = createServer(app)
const io = createSocket(http)


// middleware and routes
createApp(app, io)

// start SERVER
http.listen(process.env.PORT, function () {
  console.log(`Server on: http://localhost:${process.env.PORT}`)
})
