import * as themeActions from '../action-creators/theme'
import { InferValueTypes } from './types'

export const CHANGE_THEME = 'CHANGE_THEME' as const
export const DISABLE_BUTTONS = 'DISABLE_BUTTONS' as const
export const ENABLE_BUTTONS = 'ENABLE_BUTTONS' as const

export type ThemeActionTypes = ReturnType<InferValueTypes<typeof themeActions>>
