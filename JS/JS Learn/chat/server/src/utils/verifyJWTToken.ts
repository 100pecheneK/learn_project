import jwt from 'jsonwebtoken'
import {IUser} from "../models/User"


export default (token: string) => new Promise(
  (resolve, reject) =>
    jwt.verify(
      token,
      process.env.JWT_KEY || '',
      (err: any, decodedToken: IUser) => {
        if (err || !decodedToken) {
          return reject(err)
        }
        resolve(decodedToken)
      }
    ))

