import database from './utils/Database'
import auth0 from './utils/auth0'

export default auth0.requireAuthentication(async (req, res) => {
  const { description } = req.body
  const { user } = await auth0.getSession(req)

  try {
    const createdRecord = await database.createOne({
      fields: {
        description,
        userId: user.sub,
      },
    })
    return res.json(createdRecord)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ mgs: 'Somethig went wrong' })
  }
})
