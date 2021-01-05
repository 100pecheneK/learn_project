const os = require('os')

console.log('Операционная система: ', os.platform())

console.log('Архитектура CPU: ', os.arch())

console.log('Инфа по процессорам: ', os.cpus())

console.log('Свободная память: ', os.freemem())

console.log('Всего памяти: ', os.totalmem())

console.log('Домашняя дирректория: ', os.homedir())

const h = Math.floor(os.uptime() / 60 / 60)
const m = Math.floor(os.uptime() / 60 - h * 60)
const s = os.uptime() % 60
const formatted = [
  h.toString().padStart(2, 0),
  m.toString().padStart(2, 0),
  s.toString().padStart(2, 0),
].join(':')
console.log(`Включён ${formatted}`)
