import { InferValueTypes } from '../../@types'
import * as appActionCreators from '../action-creators'

export type AppActionTypes = ReturnType<
  InferValueTypes<typeof appActionCreators>
>

export enum AlertStatus {
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export type AlertType = {
  id: string
  message: string
  status: AlertStatus
}

export type AppInitialStateType = {
  isLoading: boolean
  alert: AlertType[]
}
