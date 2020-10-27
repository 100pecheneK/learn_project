class AbstractPrinter {
  constructor(_context) {
    this.context = _context
  }
  print() {
    throw new Error('This method must be implemented')
  }
}

module.exports = AbstractPrinter
