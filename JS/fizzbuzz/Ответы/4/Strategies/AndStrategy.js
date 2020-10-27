const AbstractStrategy = require('./AbstractStrategy')

class AndStrategy extends AbstractStrategy /* implements Truthy */ {
  isTruthy(num) {
    for (let i in this.condigions) {
      if (!this.condigions[i].isTruthy(num)) {
        return false
      }
    }
    return true
  }
}

module.exports = AndStrategy
