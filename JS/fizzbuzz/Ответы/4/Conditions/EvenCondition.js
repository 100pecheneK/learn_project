const AbstractCondition = require('./AbstractCondition')

class EvenCondition extends AbstractCondition /* implements Truthy */ {
  isTruthy(num) {
    return num % 2 === 0
  }
}

module.exports = EvenCondition
