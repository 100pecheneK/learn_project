import { AppThunk } from '../@types'
import { AlertType } from './@types'
import { hideLastAlert, showAlert } from './action-creators'

type AddAlertArgs = Omit<AlertType, 'id'> & {
  time?: number
}

export const addAlert = ({
  status,
  message,
  time = 2000,
}: AddAlertArgs): AppThunk => async dispatch => {
  const alert = {
    status,
    message,
    id: Date.now().toString(),
  }
  dispatch(showAlert(alert))
  setTimeout(() => {
    dispatch(hideLastAlert())
  }, time)
}
