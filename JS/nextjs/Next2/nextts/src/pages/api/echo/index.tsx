import {NextApiRequest, NextApiResponse} from 'next'


interface IMessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string
  }
}

export default function Message(req: IMessageNextApiRequest, res: NextApiResponse) {
  res.json({
    message: req.query.message ?? 'Message'
  })
}