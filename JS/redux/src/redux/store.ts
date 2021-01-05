import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  InitialCounterStateType,
  counterReducer,
} from './reducers/counterReducer'
import { InitialThemeStateType, themeReducer } from './reducers/themeReducer'
import { ActionTypes } from './types/types'

export const store = createStore(
  combineReducers({ counterReducer, themeReducer }),
  composeWithDevTools(
    applyMiddleware<DispatchFunctionType, InitialStateType>(thunk)
  )
)

// types
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  InitialStateType,
  unknown,
  ActionTypes
>
type InitialStateType = InitialCounterStateType | InitialThemeStateType

type DispatchFunctionType = ThunkDispatch<
  InitialStateType,
  undefined,
  ActionTypes
>
