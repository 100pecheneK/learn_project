// // Null, Undefined, Boolean, number, string, object, symbol
//
// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'String') // "", '', ``
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('Symbol'))
// console.log(typeof null)
// console.log(typeof function () {})
// console.log(typeof NaN)
//
// // Приведение типов
// let language = 'JS'
//
// if (language) {
//   console.log('Language', language)
// }
//
// // false = '', 0, null, undefined, NaN, false
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(false))

// // Строки и числа
// console.log(1 + '2') // String
// console.log('' + 1 + 0) // String
// console.log('' - 1 + 0) // Number
// console.log('3' * '5') // Number
// console.log(4 + 10 + 'px') // String
// console.log('px' + 5 + 10) // String
// console.log('42' - 40) // Number
// console.log('42px' - 2) // NaN
// console.log(null + 2) // Number
// console.log(undefined + 2) // NaN

// // == vs ===
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(undefined == null)
// console.log(undefined === null)
// console.log('0' == false)
// console.log('0' == 0)
// console.log(0 == 0)

// // Сравнения
// console.log(false == '')
// console.log(false == [])
// console.log(false == {})
// console.log('' == 0)
// console.log('' == [])
// console.log('' == {})
// console.log(0 == [])
// console.log(0 == {})
// console.log(0 == null)