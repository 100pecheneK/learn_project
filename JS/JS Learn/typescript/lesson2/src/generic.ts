const cars: string[] = ['car1', 'car2']
const cars2: Array<string> = ['car1', 'car2']

const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Resolved')
  }, 1000)
})
const promise2: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('Resolved')
  }, 1000)
})

promise.then(data => {
  console.log(data.toLowerCase())
})

promise2.then(data => {
  console.log(data.toLowerCase())
})

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return {...a, ...b}
}

const merged = mergeObjects({name: 'Misha'}, {age: '26'})
const merged2 = mergeObjects({model: 'Misha'}, {year: '26'})
console.log(merged)

const merged3 = mergeObjects({a: 1}, {f: 2})
console.log(merged3)

interface ILength {
  length: number
}

const withCount = <T extends ILength>(value: T): { value: T, count: string } => {
  return {
    value,
    count: `Here ${value.length} symbols`
  }
}

console.log(withCount('Hello'))
console.log(withCount({length: 20}))


function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Misha'
}
console.log(getObjectValue(person, 'name'))


class Collection<T extends number | string | boolean> {
  // private _items: T[] = []
  // or this
  constructor(private _items: T[] = []) {
  }

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const numbers = new Collection<number>([1, 2, 3, 4, 5,])
numbers.remove(2)
numbers.add(100)
console.log(numbers.items)

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  // return car as Car
  // or this
  return <Car>car
}

const myCars: Readonly<Array<string>> = ['Ford', 'Audi']
// myCars.shift()
console.log(myCars[1])

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}
// ford.model = 'Ferrari'