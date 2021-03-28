import { getActionTypes } from '../../@types'
import * as authActionCreators from '../actionCreators'

export type UserType = {
  username: string
  phone: string
}
export type AuthorizationParamsType = {
  username: string
  password: string
}
export type AuthInitialStateType = {
  user: UserType | null
  isLoading: boolean
  isPasswordChangeSuccess: boolean
}
export type ChangePasswordType = {
  oldPassword: string
  newPassword: string
}
export type AuthActionTypes = getActionTypes<typeof authActionCreators>
