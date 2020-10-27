// Императивный - Структурынй стиль

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Кратное 3 и кратное 5')
  } else if (i % 3 === 0) {
    console.log('Кратное 3')
  } else if (i % 5 === 0) {
    console.log('Кратное 5')
  } else {
    console.log(i)
  }
}
