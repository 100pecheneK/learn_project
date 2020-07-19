interface Person {
  name: string
  age: number
}


type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  created_at: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'created_at'>
type UserKeysNoMeta2 = Pick<User, 'name'>