export class MyElement {
  protected $el: Element
  constructor(_selector) {
    this.$el = this.validate(_selector)
  }

  protected validate(selector): never | Element {
    const el = document.querySelector(selector)
    if (!el) {
      throw new Error(`No element with selector "${selector}"`)
    }
    return el
  }
}