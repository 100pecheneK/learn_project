import database from './utils/Database'
import auth0 from './utils/auth0'

export default auth0.requireAuthentication(async (req, res) => {
  const { user } = await auth0.getSession(req)
  const { id, fields } = req.body
  try {
    const existingRecord = await database.findById({ id })
    if (!existingRecord || user.sub !== existingRecord.fields.userId) {
      return res.status(404).json({ msg: 'Record not found' })
    }
    const updatedRecord = await database.updateOne({ id, fields })
    return res.json(updatedRecord)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ mgs: 'Somethig went wrong' })
  }
})
