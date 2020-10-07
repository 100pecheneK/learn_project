import {TBlock, TOptions, TValue} from '~blocks/BlockTypes'


export default abstract class Block implements TBlock {
  public readonly value: TValue
  public readonly options: TOptions
  public readonly alt: string
  public readonly type: string

  protected constructor(_type:string, _value: TValue, _options: TOptions) {
    this.type = _type
    this.value = _value
    this.options = _options
  }

  abstract toHTML(): string
}