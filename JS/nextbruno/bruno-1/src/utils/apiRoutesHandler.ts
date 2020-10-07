import { NextApiRequest, NextApiResponse } from 'next'

export type RouteHandler = {
  [key: string]: (req: NextApiRequest, response: NextApiResponse) => {}
}

export default function apiRoutesHandler(routeHandler: RouteHandler) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    if (!method || !Object.keys(routeHandler).includes(method)) {
      res.setHeader('Allow', Object.keys(routeHandler))
      return res.status(405).end(`Method ${method} Not Allowed`)
    }
    return routeHandler[method](req, res)
  }
}
