import { NextApiRequest, NextApiResponse } from 'next'
import { VehicleModel } from '@models'
import apiRoutesHandler from '@/src/middlewares/apiRoutesHandler'
import withDb from '@utils/dbConnect'

export default apiRoutesHandler(
  withDb({
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const vehicle = await VehicleModel.find()

        return res.json(vehicle)
      } catch (e) {
        return res.status(500).json({ message: 'Server error' })
      }
    },
  })
)
