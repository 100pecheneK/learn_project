import {
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  ThemeActionTypes,
} from '../types/theme'

const initialState = {
  value: 'light',
  disabled: false,
}
export type InitialThemeStateType = typeof initialState

export function themeReducer(
  state = initialState,
  action: ThemeActionTypes
): InitialThemeStateType {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload,
      }
    case ENABLE_BUTTONS:
      return { ...state, disabled: false }
    case DISABLE_BUTTONS:
      return { ...state, disabled: true }
    default:
      return state
  }
}
