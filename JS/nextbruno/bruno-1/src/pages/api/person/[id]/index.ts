import {NextApiRequest, NextApiResponse} from 'next'
import FetchData from '@utils/fetchData'
import {IPerson} from '@models/Person'
import {API_URL} from '@/config'


interface IGetPersonByIdNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default async function getPersonById(req: IGetPersonByIdNextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const person = await FetchData.put(
      `${API_URL}/people/${req.query.id}`,
      {
        name: req.body.name,
        email: req.body.email
      })
    return res.json(person)
  }
  const person: IPerson = await FetchData.get(`${API_URL}/people/${req.query.id}`)
  res.json(person)
}