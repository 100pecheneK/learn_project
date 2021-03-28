import { ChangePasswordType, UserType } from './@types'
import {
  CHANGE_PASSWORD,
  GET_USER,
  HIDE_LOADER,
  LOGIN,
  LOGOUT,
  REFRESH_ACCESS_TOKEN,
  REGISTER,
  SET_USER,
  SHOW_LOADER,
} from './types'

export const getUser = () => ({ type: GET_USER })
export const setUser = (payload: UserType | null) => ({
  type: SET_USER,
  payload,
})
export const refreshAccessToken = () => ({ type: REFRESH_ACCESS_TOKEN })
export const login = (payload: { username: string; password: string }) => ({
  type: LOGIN,
  payload,
})
export const register = (payload: {
  username: string
  phone: string
  password: string
}) => ({ type: REGISTER, payload })

export const logout = () => ({ type: LOGOUT })
export const changePassword = (payload: ChangePasswordType) => ({
  type: CHANGE_PASSWORD,
  payload,
})

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
