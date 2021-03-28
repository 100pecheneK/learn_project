import { RootState } from '../@types'

export const authState = (state: RootState) => state.authReducer
export const user = (state: RootState) => authState(state).user
export const isLoading = (state: RootState) => authState(state).isLoading
export const isPasswordChangeSuccess = (state: RootState) =>
  authState(state).isPasswordChangeSuccess
