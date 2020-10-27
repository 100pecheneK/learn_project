// Тот же структурный стиль, но с использованием подпрограмм-флагов
// + Читаемость
// + Тестируемость
// - Спагетти
function isMultipleThree(n) {
  if (n % 3 === 0) {
    return true
  }
  return false
}

function isMultipleFive(n) {
  if (n % 5 === 0) {
    return true
  }
  return false
}

function isMultipleThreeAndFive(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return true
  }
  return false
}

for (let i = 1; i < 100; i++) {
  switch (true) {
    case isMultipleThreeAndFive(i):
      console.log('Кратное 3 и кратное 5')
      break
    case isMultipleThree(i):
      console.log('Кратное 3')
      break
    case isMultipleFive(i):
      console.log('Кратное 5')
      break
    default:
      console.log(i)
      break
  }
}
