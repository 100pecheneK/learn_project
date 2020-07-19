function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x?: number,
  y?: number,
  default?: string
}

function position(a?: number, b?: number): MyPosition {
  if (!a && !b)
    return {x: undefined, y: undefined}
  if (a && !b)
    return {x: a, y: undefined, default: a.toString()}
  return {x: b, y: b}
}

console.log(position())
console.log(position(1))
console.log(position(1, 2))
