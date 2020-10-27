const AbstractStrategy = require('./AbstractStrategy')

class OrStrategy extends AbstractStrategy /* implements Truthy */ {
  isTruthy(num) {
    for (let i in this.condigions) {
      if (this.condigions[i].isTruthy(num)) {
        return true
      }
    }
    return false
  }
}

module.exports = OrStrategy
