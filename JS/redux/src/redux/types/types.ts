import { CounterActionTypes } from './counter'
import { ThemeActionTypes } from './theme'

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never

export type InitActionTypes = {
  type: '__INIT__'
}

export type ActionTypes =
  | InitActionTypes
  | CounterActionTypes
  | ThemeActionTypes
