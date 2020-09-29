import {NextApiRequest, NextApiResponse} from 'next'
import dbConnect from '@utils/dbConnect'


type RouteHandler = {
  [key: string]: (req: NextApiRequest, response: NextApiResponse) => {}
}

function apiRoutesHandler(routeHandler: RouteHandler) {
  dbConnect()
  return (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req
    if (!method || !Object.keys(routeHandler).includes(method)) {
      res.setHeader('Allow', Object.keys(routeHandler))
      return res.status(405).end(`Method ${method} Not Allowed`)
    }
    return routeHandler[method](req, res)
  }
}

export default apiRoutesHandler