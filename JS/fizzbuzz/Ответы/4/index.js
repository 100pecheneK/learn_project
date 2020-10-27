// ООП
// + Гибкое решение за счет заранее спроектированных интерфейсов
// + Легко добавить новый функционал
// - много кода, много файлов, много всего - трудоемко для разбора
//
// Tags
const Tag = require('./Tags/Tag')

// Tag Rules
const TagNumRule = require('./Rules/TagNumRule')

// Conditions
const DivCondition = require('./Conditions/DivCondition')

// Strategies
const AndStrategy = require('./Strategies/AndStrategy')

// Collections
const TagNumRulesCollection = require('./Collections/TagNumRulesCollection')

// Printers
const ConsolePrinter = require('./Printers/ConsolePrinter')

// Config
const config = require('./config')

const tagNumRulesCollection = new TagNumRulesCollection([
  new TagNumRule(
    new Tag('Кратное 3 и кратное 5'),
    new AndStrategy([new DivCondition(3), new DivCondition(5)])
  ),
  new TagNumRule(new Tag('Кратное 3'), new AndStrategy([new DivCondition(3)])),
  new TagNumRule(new Tag('Кратное 5'), new AndStrategy([new DivCondition(5)])),
])

for (let i = 1; i < config.MAX_NUM; i++) {
  new ConsolePrinter(tagNumRulesCollection.find(i, new Tag(i))).print()
}
