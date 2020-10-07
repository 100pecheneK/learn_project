import {image, row} from '~templates/htmlGenerators'
import {css} from '~utils'
import Block from '~blocks/Block'


export default class ImageBlock extends Block {
  constructor(_value, _options?) {
    ImageBlock.validate(_value, _options)
    super('image', _value, _options)
  }

  toHTML(): string {
    return row(
      image(
        <string>this.value,
        this.options?.alt,
        css(this.options?.imageStyles)
      ),
      css(this.options?.styles)
    )
  }

  private static validate(value, options) {
    if (typeof value !== 'string') {
      throw new Error(`Can\`t place ${typeof value} in Image\`s value!`)
    }
    if (!!options?.alt && typeof options?.alt !== 'string') {
      throw new Error(`Can\`t place ${typeof options.alt} in Image\`s alt!`)
    }
  }
}