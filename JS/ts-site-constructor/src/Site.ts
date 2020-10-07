import {MyElement} from '~Element'
import {TBlock} from '~blocks/BlockTypes'
import {getTemplate} from '~templates/getTemplate'


export interface ISite {
  render: (model: TBlock[] | []) => void
}

export class Site extends MyElement implements ISite {
  private model: any

  constructor(_selector) {
    super(_selector)
    this.init()
  }

  init() {
    // TODO: отрефакторить!!!
    let elem
    const dragStart = (e) => {
      setTimeout(() => {
        e.target.classList.add('hide')
        elem = e.target
      })
    }
    const dragEnd = (e) => {
      e.target.classList.remove('hide')
    }
    const dragOver = (e) => {
      e.preventDefault()
    }
    const dragEnter = (e) => {
      e.preventDefault()
      e.target.classList.add('hovered')
    }
    const dragLeave = (e) => {
      e.target.classList.remove('hovered')
    }
    const dragDrop = (e) => {
      e.target.append(elem)
      e.target.classList.remove('hovered')
    }
    this.$el.addEventListener('dragstart', dragStart)
    this.$el.addEventListener('dragend', dragEnd)
    this.$el.addEventListener('dragover', dragOver)
    this.$el.addEventListener('dragenter', dragEnter)
    this.$el.addEventListener('dragleave', dragLeave)
    this.$el.addEventListener('drop', dragDrop)
  }

  saveModel(model) {
    localStorage.setItem('model', JSON.stringify(model))
  }

  render(model) {
    this.$el.innerHTML = ''
    model.forEach(block => {
      try {
        const html = getTemplate(block)
        this.$el.insertAdjacentHTML('beforeend', html)

      } catch (e) {
        handleError(e, this.$el)
      }
    })
    this.saveModel(model)

    function handleError(e: Error, container: Element) {
      const errorHtml = `<p>${e.message}</p>`
      container.insertAdjacentHTML('beforeend', errorHtml)
    }
  }
}