const AbstractCondition = require('./AbstractCondition')

class DivCondition extends AbstractCondition /* implements Truthy */ {
  constructor(_divider) {
    super()
    this.divider = _divider
  }

  isTruthy(num) {
    return num % this.divider === 0
  }
}

module.exports = DivCondition
