import database from './utils/Database'
import auth0 from './utils/auth0'

export default auth0.requireAuthentication(async (req, res) => {
  const { user } = await auth0.getSession(req)

  try {
    let records = await await database.getAll({
      filter: {
        field: 'userId',
        value: user.sub,
      },
    })
    return res.json(records)
  } catch (e) {
    return res.status(500).json({ mgs: 'Somethig went wrong' })
  }
})
