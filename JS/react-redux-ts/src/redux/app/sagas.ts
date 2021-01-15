import { Action } from 'redux'
import { delay, put, takeEvery } from 'redux-saga/effects'
import { appActionCreators } from '.'
import { PostsActionTypes } from '../posts/@types'
import { AlertType } from './@types'
import { SHOW_ALERT } from './types'

export function* appSaga() {
  yield takeEvery(SHOW_ALERT, showAlert)
}

type ShowAlertArgs = Action<PostsActionTypes> & {
  payload: Omit<AlertType, 'id'> & {
    time?: number
  }
}

function* showAlert({
  payload: { status, message, time = 2000 },
}: ShowAlertArgs) {
  const alert = {
    status,
    message,
    id: Date.now().toString(),
  }
  yield put(appActionCreators.addAlert(alert))
  yield delay(time)
  yield put(appActionCreators.hideLastAlert())
}
