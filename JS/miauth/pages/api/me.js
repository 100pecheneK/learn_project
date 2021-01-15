import auth from '../../utils/auth'
import database from '../../core/Database/database'
import User from '../../models/User'

export default auth.authRequired(async (req, res) => {
  try {
    const user = await database.findById({ Model: User, id: req.userId, select: '-password' })
    res.json({ user })
  } catch (e) {
    res.status(500).json({ error: e })
  }
})
