// // __proto__
// // old ES5: Object.getPrototypeOf()
// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }
//
// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says meow`)
// }
//
// const cat = new Cat('Kot', 'blue')
// cat.voice()
// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)

// // =======
function Person() {
}

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Misha'

// console.log('skin' in person)
// console.log(person.legs)
// console.log(person.eyes)
// console.log(person.name)
// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('skin'))

// // Object.create()
let proto = {a: 22}
const myA = Object.create(proto)
console.log(myA.a)
// console.log(myA.hasOwnProperty('a'))
// console.log(myA.__proto__ === proto)
proto.a = 1000
console.log(myA.a)

proto = {b: 200}
console.log(myA.a)








