import {TStyles} from '~blocks/BlockTypes'


export function css(styles: TStyles | string) {
  if (!styles) {
    return
  }
  if (typeof styles === 'string') {
    return styles
  }
  return Object.keys(styles)
    .map(key => `${key}:${styles[key]}`)
    .join(';')
}