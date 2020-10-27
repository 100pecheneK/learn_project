const AbstractPrinter = require('./AbstractPrinter')

class ConsolePrinter extends AbstractPrinter {
  print() {
    console.log(this.context.value)
  }
}

module.exports = ConsolePrinter
