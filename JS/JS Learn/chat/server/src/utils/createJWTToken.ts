import jwt from 'jsonwebtoken'
import {reduce} from 'lodash'
import {IUser} from '../models/User'


export default (user: any) => jwt.sign(
  {user},
  process.env.JWT_KEY || '',
  {
    expiresIn: process.env.JWT_MAX_AGE
  }
)
