import { NextApiRequest, NextApiResponse } from 'next'
import { PersonModel } from '@models'
import apiRoutesHandler from '@utils/apiRoutesHandler'
import withDb from '@utils/dbConnect'
import { IPerson } from '@/src/models/Person'

export default apiRoutesHandler(
  withDb({
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const people = await PersonModel.find()
        return res.json(people)
      } catch (e) {
        return res.status(500).json({ message: 'Server error' })
      }
    },
    POST: async (req, res) => {
      try {
        const pF = {
          name: req.body.name,
          email: req.body.email,
        }
        const p = new PersonModel(pF)
        await p.save()
        return res.json({ hello: 'world' })
      } catch (e) {}
    },
  })
)
