class AbstractStrategy {
  constructor(_conditionsOrStrategies) {
    this.condigions = _conditionsOrStrategies
  }
  isTruthy() {
    throw new Error('This method must be implemented')
  }
}

module.exports = AbstractStrategy

