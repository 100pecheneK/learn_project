export type TStyles = {
  [key: string]: string
}
export type TValue = string | string[]

export type TOptions = {
  tag?: string,
  styles?: TStyles,
  imageStyles?: TStyles
  alt?: string,
}
export type TBlock = {
  readonly type: string,
  readonly value: TValue,
  readonly options?: TOptions,
  toHTML: () => string
}