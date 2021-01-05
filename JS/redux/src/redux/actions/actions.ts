import { increment } from '../action-creators/counter'
import { disableButtons, enableButtons } from '../action-creators/theme'
import { AppThunk } from '../store'

export const asyncIncrement = (): AppThunk => async dispatch => {
  dispatch(disableButtons())
  setTimeout(() => {
    dispatch(increment())
    dispatch(enableButtons())
  }, 1000)
}
