import { CounterActionTypes, DECREMENT, INCREMENT } from '../types/counter'

const initialState = {
  counter: 0,
}
export type InitialCounterStateType = typeof initialState

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): InitialCounterStateType {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}
