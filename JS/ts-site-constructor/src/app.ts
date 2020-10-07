import {model} from '~model'
import {SideBar} from '~SideBar'
import {ISite, Site} from '~Site'
import {TBlock} from '~blocks/BlockTypes'


export class App {
  private site: ISite

  constructor(private model: TBlock[] | []) {}

  init() {
    try {
      this.site = new Site('#site')
      this.site.render(this.model)
      new SideBar('#panel', this.onNewBlock.bind(this))
    } catch (e) {
      console.error(e.message)
    }
  }

  onNewBlock(newBlock: TBlock) {
    this.model.push(newBlock)
    this.site.render(this.model)
  }
}