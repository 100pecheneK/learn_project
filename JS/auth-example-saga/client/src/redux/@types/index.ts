import { AuthActionTypes } from '../auth/@types'
import { rootReducer, store } from '../store'

export type ActionTypes = InitActionTypes | AuthActionTypes

export type InitActionTypes = {
  type: '__INIT__'
}
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never

export type getActionTypes<T extends { [key: string]: any }> = ReturnType<
  InferValueTypes<T>
>
