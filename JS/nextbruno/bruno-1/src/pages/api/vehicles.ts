import {NextApiRequest, NextApiResponse} from 'next'
import {VehicleModel} from '@models'
import apiRoutesHandler from '@utils/apiRoutesHandler'


export default apiRoutesHandler({
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const vehicle = await VehicleModel.find()
      return res.json(vehicle)
    } catch (e) {
      return res.status(500).json({message: 'Server error'})
    }
  }
})