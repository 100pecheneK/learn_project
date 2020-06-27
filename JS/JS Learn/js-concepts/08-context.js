const person = {
  surname: 'Старк',
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
  },
}
//
// const john = {
//   surname: 'Сноу'
// }
//
// person.knows('всё', 'Бран')
// person.knows.call(john, 'не знаешь', 'Джон')
// person.knows.apply(john, ['не знаешь', 'Джон'])
// person.knows.call(john, ...['не знаешь', 'Джон'])
// const boundJohn = person.knows.bind(john, 'не знаешь', 'Джон')
// boundJohn()

// // ====
// function Person(name, age) {
//   this.name = name
//   this.age = age
//
//   console.log(this)
// }
//
// const misha = new Person('Misha', 18)

// // ==== Явный
// function logThis() {
//   console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
// // ==== Неявный
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this)
//
//     function a() {
//       console.log('a', this)
//     }
//
//     const b = () => console.log('b', this)
//     a.call(this)
//     b()
//   }
// }
//
// animal.logThis()

// //

function Cat(color) {
  this.color = color
  console.log('This', this)
  ;(() => console.log('Arrow this', this))()
  ;(function () {
    console.log('Fanc this', this)
  }.call(this))
}

new Cat('red')
