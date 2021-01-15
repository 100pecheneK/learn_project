import mongoose from 'mongoose'

const connection = {
  isConnected: false,
}

const connectDb = async () => {
  if (connection.isConnected) {
    return
  }
  try {
    const dbConnection = await mongoose.connect(
      'mongodb://localhost:27017/miauth',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    connection.isConnected = !!dbConnection.connections[0].readyState
  } catch (err) {
    console.error(`error connecting to db ${err.message || err}`)
  }
}

class MongoDatabase {
  async getAll({ Model, filter = false } = {}) {
    let data = []
    if (filter) {
      const { page, perPage, populate, sort } = filter
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
        populate,
        sort,
      }
      if (filter.field && filter.value) {
        data = await Model.paginate({ [filter.field]: filter.value }, options)
      } else {
        data = await Model.paginate({}, options)
      }
      data = {
        ...data,
        docs: data.docs.map(record => {
          return {
            ...record._doc,
            _id: record._doc._id.toString(),
            createdAt: record._doc.createdAt.toISOString(),
            updatedAt: record._doc.updatedAt.toISOString(),
          }
        }),
      }
    } else {
      data = await Model.find().sort('created_at').lean()
    }

    return data
  }
  async updateOne({ Model, id, fields }) {
    const updatedRecord = await Model.updateOne({ _id: id }, fields)
    return updatedRecord
  }
  async deleteOne({ Model, id }) {
    return await Model.findByIdAndDelete(id)
  }
  async createOne({ Model, fields }) {
    const record = new Model({
      ...fields,
    })
    await record.save()
    return record
  }
  async findById({ Model, id, select = '' }) {
    const record = await Model.findById(id).select(select).lean()
    if (!record) {
      throw new Error('Not found')
    }
    return {
      ...record,
      _id: record._id.toString(),
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    }
  }
  async findOne({ Model, field }) {
    const record = await Model.findOne({ [field.field]: field.value })
    return record
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
  async findOne(...props) {
    await this.connectDb()
    return await this.mongoDatabase.findOne(...props)
  }
}

const mongoDatabase = new MongoDatabaseProxy(connectDb)

export { mongoDatabase }
