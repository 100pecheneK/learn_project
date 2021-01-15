import auth from '../../utils/auth'
import database from '../../core/Database/database'
import User from '../../models/User'

export default async (req, res) => {
  try {
    const userRegisterFields = ['email', 'name', 'password']
    await auth.handleRegister(req, res, userRegisterFields, database, {Model: User})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
