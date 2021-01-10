import { AppActionTypes, AppInitialStateType } from './@types'
import {
  HIDE_ALERT,
  HIDE_LAST_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from './types'

const initialState = {
  isLoading: false,
  alert: [],
}

export const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionTypes
) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      }
    case SHOW_ALERT:
      return {
        ...state,
        alert: [action.payload, ...state.alert],
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: state.alert.filter(alert => alert.id !== action.payload),
      }
    case HIDE_LAST_ALERT:
      const newAlert = [...state.alert]
      newAlert.splice(-1)
      return {
        ...state,
        alert: newAlert,
      }
    default:
      return state
  }
}
