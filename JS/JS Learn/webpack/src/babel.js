const start = async () => await Promise.resolve('async is working')

start().then(console.log)

class Util {
  static id = Date.now()
}

console.log(Util.id)

import('lodash').then(_ => {
  console.log('Lodasj', _.random(0, 42, true))
})