import {col, p, row} from '~templates/htmlGenerators'
import {css} from '~utils'
import Block from '~blocks/Block'


export default class ColumnsBlock extends Block {
  constructor(_value: string[], _options?) {
    ColumnsBlock.validate(_value)
    super('columns', _value, _options)
  }

  toHTML(): string {
    const html = (<string[]>this.value).map(item => col(p(item))).join('')
    return row(html, css(this.options?.styles), true)
  }

  private static validate(value) {
    if (!Array.isArray(value)) {
      throw new Error(`Can\`t place ${typeof value} in Columns!`)
    }
  }
}