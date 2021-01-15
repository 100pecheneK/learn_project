import auth from '../../utils/auth'
import database from '../../core/Database/database'
import User from '../../models/User'

export default async (req, res) => {
  try {
    await auth.handleLogin(req, res, database, {
      Model: User,
    })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
