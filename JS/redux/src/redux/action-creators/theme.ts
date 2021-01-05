import { CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from '../types/theme'

export const changeTheme = (newTheme: string) => ({
  type: CHANGE_THEME,
  payload: newTheme,
})
export const enableButtons = () => ({ type: ENABLE_BUTTONS })
export const disableButtons = () => ({ type: DISABLE_BUTTONS })
