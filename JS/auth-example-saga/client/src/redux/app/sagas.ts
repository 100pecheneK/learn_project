import {
  cancel,
  cancelled,
  delay,
  fork,
  put,
  take,
  takeEvery,
} from 'redux-saga/effects'
import { appActionCreators } from '.'
import { HIDE_ALERT, SHOW_ALERT } from './types'

export function* appSaga() {
  yield takeEvery(SHOW_ALERT, alertManager)
}

function* alertManager({ payload: { status, message, id, time = 2000 } }: any) {
  const alert = {
    status,
    message,
    id: Date.now().toString(),
  }
  const notify = yield fork(showAlert, { payload: { alert, time } })
  yield take(HIDE_ALERT)
  // TODO: получить id алерта
  console.log(id, alert.id)

  if (id === alert.id) {
    yield cancel(notify) // Triggering cancel
  }
}

function* showAlert({ payload: { alert, time } }: any) {
  yield put(appActionCreators.addAlert(alert))
  yield delay(time)
  yield put(appActionCreators.hideAlert(alert.id))
}
