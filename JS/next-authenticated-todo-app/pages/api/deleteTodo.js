import database from './utils/Database'
import auth0 from './utils/auth0'

export default auth0.requireAuthentication(async (req, res) => {
  const { user } = await auth0.getSession(req)
  const { id } = req.body
  try {
    const existingRecord = await database.findById({ id })
    if (!existingRecord || user.sub !== existingRecord.fields.userId) {
      return res.status(404).json({ msg: 'Record not found' })
    }
    const deletedRecord = await database.deleteOne({ id })
    return res.json(deletedRecord)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ mgs: 'Somethig went wrong' })
  }
})
