// @ts-ignore
import image from '~assets/image.png'
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from '~/blocks/index'
import {TBlock} from '~blocks/BlockTypes'


export const model: TBlock[] = [
  new TitleBlock('Заголовок 1!!!'),
  new TitleBlock(
    'Заголовок 2!!!',
    {
      tag: 'h2',
      styles: {
        color: '#2d6eff'
      }
    }
  ),
  new TextBlock('Text 1!!!',
    {
      styles: {
        color: 'green'
      }
    }),
  new ColumnsBlock(
    [
      'Col 1',
      'Col 2',
      'Col 3',
    ]
  )
]