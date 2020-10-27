import {NextApiRequest, NextApiResponse} from 'next'
import {PersonModel} from '@models'
import apiRoutesHandler from '@/src/middlewares/apiRoutesHandler'
import withDb from '@utils/dbConnect'
import {authenticated} from '@/src/middlewares'


export default apiRoutesHandler(
  withDb({
    GET: authenticated(async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const people = await PersonModel.find().select('-password')
        return res.json(people)
      } catch (e) {
        return res.status(500).json({message: 'Server error'})
      }
    }),
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const pF = {
          name: req.body.name,
          email: req.body.email,
        }
        const p = new PersonModel(pF)
        await p.save()
        return res.json({hello: 'world'})
      } catch (e) {}
    },
  })
)
