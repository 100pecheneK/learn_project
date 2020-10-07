import {col, h, row} from '~templates/htmlGenerators'
import {css} from '~utils'
import Block from '~blocks/Block'


export default class TitleBlock extends Block {
  constructor(_value, _options?) {
    TitleBlock.validate(_value)
    super('title', _value, _options)
  }

  toHTML(): string {
    const titleContent = h(<string>this.value, this.options?.tag)
    return row(
      col(titleContent), css(this.options?.styles), true
    )
  }

  private static validate(value) {
    if (typeof value !== 'string') {
      throw new Error(`Can\`t place ${typeof value} in Title!`)
    }
  }
}