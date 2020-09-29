import {NextApiRequest, NextApiResponse} from 'next'
import {PersonModel} from '@models'
import apiRoutesHandler from '@utils/apiRoutesHandler'


export default apiRoutesHandler({
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const people = await PersonModel.find()
      return res.json(people)
    } catch (e) {
      return res.status(500).json({message: 'Server error'})
    }
  },
  POST: async (req, res) => {
    try {
      return res.json({hello: 'world'})
    } catch (e) {

    }
  }
})