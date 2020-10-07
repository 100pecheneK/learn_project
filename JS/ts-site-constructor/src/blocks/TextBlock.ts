import {col, p, row} from '~templates/htmlGenerators'
import {css} from '~utils'
import Block from '~blocks/Block'


export default class TextBlock extends Block {
  constructor(_value, _options?) {
    TextBlock.validate(_value)
    super('text',_value, _options)
  }

  toHTML(): string {
    return row(col(p(<string>this.value)), css(this.options?.styles), true)
  }

  private static validate(value) {
    if (typeof value !== 'string') {
      throw new Error(`Can\`t place ${typeof value} in Text!`)
    }
  }
}