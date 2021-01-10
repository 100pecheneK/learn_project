import { AlertType } from './@types'
import { HIDE_ALERT, HIDE_LAST_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from './types'

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const showAlert = (alert: AlertType) => ({
  type: SHOW_ALERT,
  payload: alert,
})
export const hideAlert = (id: string) => ({ type: HIDE_ALERT, payload: id })
export const hideLastAlert = () => ({ type: HIDE_LAST_ALERT })
