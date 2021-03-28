import { NoAccessTokenError, NoRefreshTokenError } from '@/utils/tokens'
import fakeAuth from '@services/fakeAuth'
import { Action } from 'redux'
import { call, put, takeLatest } from 'redux-saga/effects'
import { authActionCreators } from '.'
import { appActionCreators } from '../app'
import { AlertStatus } from '../app/@types'
import { AuthorizationParamsType, UserType } from './@types'
import { CHANGE_PASSWORD, GET_USER, LOGIN, LOGOUT, REGISTER } from './types'

export function* authSaga() {
  yield takeLatest(GET_USER, getUser)
  yield takeLatest(LOGIN, login)
  yield takeLatest(REGISTER, register)
  yield takeLatest(LOGOUT, logout)
  yield takeLatest(CHANGE_PASSWORD, changePassword)
}
function* loadUser() {
  const user: UserType = yield call(fakeAuth.getUser)
  yield put(authActionCreators.setUser(user))
}

function* getUser() {
  try {
    yield put(authActionCreators.showLoader())
    yield call(loadUser)
  } catch (e) {
    if (e instanceof NoAccessTokenError) return
    if (e instanceof NoRefreshTokenError) return

    yield put(
      appActionCreators.showAlert({
        status: AlertStatus.DANGER,
        message: 'Something went wrong when loading user' + e.message,
        time: 5000,
      })
    )
    console.error(e)
  } finally {
    yield put(authActionCreators.hideLoader())
  }
}

function* authorizator(payload: AuthorizationParamsType) {
  yield call(fakeAuth.login, payload)
  yield call(loadUser)
}

function* login({ payload }: ReturnType<typeof authActionCreators.login>) {
  try {
    yield put(authActionCreators.showLoader())
    yield call(authorizator, payload)
  } catch (e) {
    yield put(
      appActionCreators.showAlert({
        status: AlertStatus.DANGER,
        message: 'Something went wrong when login' + e.message,
        time: 5000,
      })
    )
    console.error(e)
  } finally {
    yield put(authActionCreators.hideLoader())
  }
}

function* register({
  payload,
}: ReturnType<typeof authActionCreators.register>) {
  try {
    yield put(authActionCreators.showLoader())
    yield call(fakeAuth.register, payload)
    yield call(authorizator, {
      username: payload.username,
      password: payload.password,
    })
  } catch (e) {
    yield put(
      appActionCreators.showAlert({
        status: AlertStatus.DANGER,
        message: 'Something went wrong when register' + e.message,
        time: 5000,
      })
    )
    console.error(e)
  } finally {
    yield put(authActionCreators.hideLoader())
  }
}

function* logout() {
  try {
    yield put(authActionCreators.showLoader())
    yield call(fakeAuth.logout)
    yield put(authActionCreators.setUser(null))
  } catch (e) {
    yield put(
      appActionCreators.showAlert({
        status: AlertStatus.DANGER,
        message: 'Something went wrong when logout' + e.message,
        time: 5000,
      })
    )
    console.error(e)
  } finally {
    yield put(authActionCreators.hideLoader())
  }
}

function* changePassword({
  payload,
}: ReturnType<typeof authActionCreators.changePassword>) {
  try {
    yield put(authActionCreators.showLoader())
    yield call(fakeAuth.changePassword)
  } catch (e) {
  } finally {
  }
}
