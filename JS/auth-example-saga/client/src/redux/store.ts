import { useDispatch } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { AppDispatch } from './@types'
import { rootSaga } from './saga'
import { authReducer } from './auth'
import { appReducer } from './app'

export const rootReducer = combineReducers({ authReducer, appReducer })

const saga = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
)

saga.run(rootSaga)

export const useTypedDispatch = () => useDispatch<AppDispatch>()
