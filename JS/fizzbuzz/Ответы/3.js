// Декларативный - функциональный стиль
// + Выразительно
// - тяжело понять
function generator(divider, word) {
  return function (num) {
    if (num % divider === 0) {
      return word
    }
    return ''
  }
}
const three = generator(3, 'Кратное 3')
const five = generator(5, 'Кратное 5')

// Генерация массива [0...98]
// Увеличить каждое число на 1
// Вывести результат
;[...Array(99).keys()]
  .map(i => i + 1)
  .forEach(i => console.log(three(i) + five(i) || i))
