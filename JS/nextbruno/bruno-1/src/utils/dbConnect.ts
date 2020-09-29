import mongoose from 'mongoose'


let isConnected: boolean

async function dbConnect() {
  if (isConnected) {
    return
  }
  const db = await mongoose.connect(
    'mongodb://localhost:27017/brunonext',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  isConnected = !!db.connections[0].readyState
}

export default dbConnect