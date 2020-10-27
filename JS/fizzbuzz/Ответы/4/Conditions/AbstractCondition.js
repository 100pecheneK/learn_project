class AbstractCondition {
  isTruthy() {
    throw new Error('This method must be implemented')
  }
}

module.exports = AbstractCondition
