import { AuthInitialStateType, AuthActionTypes } from './@types'
import produce, { Draft } from 'immer'
import { HIDE_LOADER, SET_USER, SHOW_LOADER } from './types'

const initialState: AuthInitialStateType = {
  isLoading: true,
  user: null,
  isPasswordChangeSuccess: false,
}

export const reducer = produce(
  (draft: Draft<AuthInitialStateType>, action: AuthActionTypes) => {
    switch (action.type) {
      case SHOW_LOADER:
        draft.isLoading = true
        break
      case HIDE_LOADER:
        draft.isLoading = false
        break
      case SET_USER:
        draft.user = action.payload
        break
    }
  },
  initialState
)
