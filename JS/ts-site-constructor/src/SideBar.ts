import {MyElement} from '~Element'
import {TBlock} from '~blocks/BlockTypes'
import {ColumnsBlock, TextBlock, TitleBlock} from '~/blocks/index'


interface IForm extends HTMLFontElement {
  name: string,
  value: HTMLInputElement,
  styles: HTMLInputElement
}

interface IFormEvent extends Event {
  target: IForm
}

export class SideBar extends MyElement {
  private readonly onNewBlock: (newBlock: TBlock) => void

  constructor(_selector, _onNewBlock) {
    super(_selector)
    this.onNewBlock = _onNewBlock
    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.onSubmit.bind(this))
  }

  get template(): string {
    return [
      this.getForm('title'),
      this.getForm('text'),
      this.getForm('columns'),
    ].join('')
  }

  onSubmit(e: IFormEvent) {
    e.preventDefault()
    const type = e.target.name
    const value = e.target.value.value
    const styles = e.target.styles.value

    let newBlock

    if (type === 'text') {
      newBlock = new TextBlock(value, {styles})
    } else if (type === 'title') {
      newBlock = new TitleBlock(value, {styles})
    } else if (type === 'columns') {
      newBlock = new ColumnsBlock(new Array(+value).fill(''), {styles})
    }
    this.onNewBlock(newBlock)
    e.target.value.value = ''
    e.target.styles.value = ''
  }

  getForm(type) {
    return `
      <form name="${type}">
          <h5>${type}</h5>
          <div class="form-group">
              <input class="form-control form-control-sm" name="value" placeholder="value">
          </div>
          <div class="form-group">
              <input class="form-control form-control-sm" name="styles" placeholder="styles">
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
      <hr>
    `
  }
}
