const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TS'

const numberArray: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 2, 3, 4, 5]

const words: string[] = ['Hello', 'JS']

const tuple: [string, number] = ['Misha', 123456789]

let variable: any = 42
variable = 'String'

function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Миша')

function throwError(message: string): never {
  throw new Error(message)
}

const infinite = (): never => {
  while (true) {

  }
}

type Login = string


const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined





