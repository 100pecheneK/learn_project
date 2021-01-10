import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { postsReducer } from './posts'
import { appActions, appReducer } from './app'
import {
  AppDispatch,
  DispatchFunctionType,
  InitialStateType,
  RootState,
} from './@types'
import { forbiddenWords } from './middleware'
import { sagaWatcher } from './sagas'

export const rootReducer = combineReducers({ postsReducer, appReducer })

const saga = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware<DispatchFunctionType, InitialStateType>(
      thunk,
      forbiddenWords(),
      saga
    )
  )
)
saga.run(sagaWatcher)

export const useTypedDispatch = () => useDispatch<AppDispatch>()
// TODO: Придумать как это использовать, если у меня есть функции селекторов
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
