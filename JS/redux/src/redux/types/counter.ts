import * as counterActions from '../action-creators/counter'
import { InferValueTypes } from './types'

export const INCREMENT = 'INCREMENT' as const
export const DECREMENT = 'DECREMENT' as const

export type CounterActionTypes = ReturnType<
  InferValueTypes<typeof counterActions>
>
