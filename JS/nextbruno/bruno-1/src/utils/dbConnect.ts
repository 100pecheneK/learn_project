import mongoose from 'mongoose'
import { RouteHandler } from '@utils/apiRoutesHandler'

let isConnected: boolean

async function dbConnect() {
  if (isConnected) {
    return
  }
  const db = await mongoose.connect('mongodb://localhost:27017/brunonext', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  isConnected = !!db.connections[0].readyState
}

// TODO: test this
function withDb(handler: RouteHandler) {
  dbConnect()
  return handler
}

export default withDb
