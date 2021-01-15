import auth0 from '../utils/auth0'
import { table } from '../utils/Airtable'

const ownsRecord = handler =>
  auth0.requireAuthentication(async (req, res) => {
    const { user } = await auth0.getSession(req)
    const { id } = req.body
    try {
      const existingRecord = await table.find(id)
      if (!existingRecord || user.sub !== existingRecord.fields.userId) {
        return res.status(404).json({ msg: 'Record not found' })
      }
      req.record = existingRecord
      return handler(req, res)
    } catch (e) {
      console.error(e)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  })

export default ownsRecord
