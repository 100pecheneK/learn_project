// function sayHelloTo(name) {
//   const message = 'Hello ' + name
//
//   return function () {
//     console.log(message)
//   }
// }
//
// const helloToMisha = sayHelloTo('Misha')
// helloToMisha()
//
//
// function createFrameworkManager() {
//   const fw = ['Angular', 'React']
//
//   return {
//     print: function () {
//       console.log(fw.join(', '))
//     },
//     add: function (framework) {
//       fw.push(framework)
//     }
//   }
// }
//
// const manager = createFrameworkManager()
//
// manager.print()
// manager.add('Django')
// manager.print()

// // setTimout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`Fib[${j}]: ${fib[j]}`)
    }, 500 * i)
  })(i)
}




