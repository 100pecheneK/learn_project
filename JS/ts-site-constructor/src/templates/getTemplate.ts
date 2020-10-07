import {ColumnsBlock, TextBlock, TitleBlock} from '~blocks/index'
import {TBlock} from '~blocks/BlockTypes'


const bl = {
  'title': TitleBlock,
  'text': TextBlock,
  'columns': ColumnsBlock
}

export function getTemplate(block: TBlock) {
  return new bl[block.type](block.value, block.options).toHTML()
}