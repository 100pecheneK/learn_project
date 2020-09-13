import {NextApiRequest, NextApiResponse} from 'next'


interface IGetByIdNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default function getById(req: IGetByIdNextApiRequest, res: NextApiResponse) {
  res.json(req.query.id)
}