const Airtable = require('airtable')
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
})
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

const table = base(process.env.AIRTABLE_TABLE_NAME)

const getMinifiedRecord = record => {
  if (!record.fields?.completed) {
    record.fields.completed = false
  }
  return {
    id: record.id,
    fields: record.fields,
  }
}

const getMinifiedRecords = records => {
  return records.map(getMinifiedRecord)
}

class AirtableDatabase {
  constructor(table) {
    this.table = table
  }
  async getAll({ filter }) {
    const data = await this.table
      .select({
        filterByFormula: `${filter.field} = '${filter.value}'`,
      })
      .firstPage()

    return getMinifiedRecords(data)
  }
  async updateOne({ id, fields }) {
    const updatedRecords = await this.table.update([{ id, fields }])
    return getMinifiedRecord(updatedRecords[0])
  }
  async deleteOne({ id }) {
    const deletedRecords = await table.destroy([id])
    return getMinifiedRecord(deletedRecords[0])
  }
  async createOne({ fields }) {
    const createdRecords = await table.create([
      {
        fields,
      },
    ])
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    }
    return createdRecord
  }
  async findById({ id }) {
    return await table.find(id)
  }
}
const airtableDatabase = new AirtableDatabase(table)

export { airtableDatabase, table, getMinifiedRecords, getMinifiedRecord }
