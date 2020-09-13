const numbers: Array<number> = [1, 2, 3, 4]
const strings: Array<string> = ['h', 'i']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}