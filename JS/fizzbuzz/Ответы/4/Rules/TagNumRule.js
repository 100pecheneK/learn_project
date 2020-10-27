const AbstractRule = require('./AbstractRule')

class TagNumRule extends AbstractRule {
  constructor(_tag, _strategy) {
    super()
    this.tag = _tag
    this.strategy = _strategy
  }
  isSuccess(num) {
    return this.strategy.isTruthy(num)
  }
}

module.exports = TagNumRule
