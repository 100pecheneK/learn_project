import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'
import { SECRET } from '@/config'

const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    verify(req.cookies.auth!, <string>SECRET)
    return await fn(req, res)
  } catch (e) {
    return res.status(401).json({ message: 'No token' })
  }
}
export default authenticated
