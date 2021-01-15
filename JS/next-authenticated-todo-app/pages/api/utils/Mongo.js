import TodoModel from './Mongo/models/Todo'
import mongoose from 'mongoose'

const connection = {
  isConnected: false,
}

const connectDb = async () => {
  if (connection.isConnected) {
    return
  }
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    connection.isConnected = !!dbConnection.connections[0].readyState
  } catch (err) {
    console.error(`error connecting to db ${err.message || err}`)
  }
}

function transformId(record) {
  return {
    id: record._id.toString(),
    fields: record.fields,
  }
}
function transformIds(records) {
  return records.map(transformId)
}

class MongoDatabase {
  async getAll({ filter = false } = {}) {
    let data = []
    if (filter) {
      data = await TodoModel.find({
        [`fields.${filter.field}`]: filter.value,
      })
        .sort('-createdAt')
        .lean()
    } else {
      data = await TodoModel.find().sort('created_at').lean()
    }

    return transformIds(data)
  }
  async updateOne({ id, fields }) {
    const updatedRecord = await TodoModel.findById(id)
    updatedRecord.fields = { ...updatedRecord.fields, ...fields }
    await updatedRecord.save()
    return updatedRecord
  }
  async deleteOne({ id }) {
    return await TodoModel.findByIdAndDelete(id)
  }
  async createOne({ fields }) {
    const record = new TodoModel({
      fields: { ...fields },
    })
    await record.save()
    return transformId(record)
  }
  async findById({ id }) {
    const record = await TodoModel.findById(id).lean()
    if (!record) {
      throw new Error('Not found')
    }
    return transformId(record)
  }
}

class MongoDatabaseProxy {
  constructor(connectDb) {
    this.mongoDatabase = new MongoDatabase()
    this.connectDb = connectDb
  }
  async getAll(...props) {
    await this.connectDb()
    return await this.mongoDatabase.getAll(...props)
  }
  async updateOne(...props) {
    await this.connectDb()
    return await this.mongoDatabase.updateOne(...props)
  }
  async deleteOne(...props) {
    await this.connectDb()
    return await this.mongoDatabase.deleteOne(...props)
  }
  async createOne(...props) {
    await this.connectDb()
    return await this.mongoDatabase.createOne(...props)
  }
  async findById(...props) {
    await this.connectDb()
    return await this.mongoDatabase.findById(...props)
  }
}

const mongoDatabase = new MongoDatabaseProxy(connectDb)

export { mongoDatabase }
