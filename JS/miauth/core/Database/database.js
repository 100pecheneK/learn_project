const { mongoDatabase } = require('./Mongo')
// const { airtableDatabase } = require('./Airtable')

class Database {
  constructor(database) {
    this.database = database
  }
  async getAll(...props) {
    return await this.database.getAll(...props)
  }
  async updateOne(...props) {
    return await this.database.updateOne(...props)
  }
  async deleteOne(...props) {
    return await this.database.deleteOne(...props)
  }
  async createOne(...props) {
    return await this.database.createOne(...props)
  }
  async findById(...props) {
    return await this.database.findById(...props)
  }
  async findOne(...props) {
    return await this.database.findOne(...props)
  }
}

const database = new Database(mongoDatabase)
// const database = new Database(airtableDatabase)

export default database
