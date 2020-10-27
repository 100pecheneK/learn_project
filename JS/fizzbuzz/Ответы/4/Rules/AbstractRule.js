class AbstractRule {
  isSuccess() {
    throw new Error('This method must be implemented')
  }
}

module.exports = AbstractRule
