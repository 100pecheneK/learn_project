export function row(content: string, styles?: string, draggable = false) {
  const style = styles ? `style="${styles}"` : ''
  return `<div draggable="${draggable}" class="row" ${style}>${content}</div>`
}

export function col(content: string, draggable = false) {
  return `<div draggable="${draggable}" class="col-sm">${content}</div>`
}

export function h(content: string, tag?: string, draggable = false) {
  const hs = {
    h1: `<h1 draggable="${draggable}">${content}</h1>`,
    h2: `<h2 draggable="${draggable}">${content}</h2>`,
    h3: `<h3 draggable="${draggable}">${content}</h3>`,
    h4: `<h4 draggable="${draggable}">${content}</h4>`,
    h5: `<h5 draggable="${draggable}">${content}</h5>`,
    h6: `<h6 draggable="${draggable}">${content}</h6>`
  }

  if (typeof tag === 'string') {
    if (hs.hasOwnProperty(tag)) {
      return hs[tag]
    }
    throw new Error(`Can\`t place ${tag} as Title: only h1-h6 Titles!`)
  }
  return hs['h1']
}

export function p(content: string, draggable = false) {
  return `<p draggable="${draggable}">${content}</p>`
}

export function image(src: string, alt: string, styles: string) {
  const style = styles ? `style="${styles}"` : ''
  return `<img alt="${alt || ''}" src="${src || ''}" ${style}/>`
}