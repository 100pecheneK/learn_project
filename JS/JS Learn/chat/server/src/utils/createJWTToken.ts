import jwt from 'jsonwebtoken'


export default (user: any) => jwt.sign(
  {user},
  process.env.JWT_KEY || '',
  {
    expiresIn: process.env.JWT_MAX_AGE
  }
)
