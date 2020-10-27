class TagNumRulesCollection {
  constructor(_tags) {
    this.tags = _tags
  }

  find(num, defaultValue) {
    for (let i in this.tags) {
      if (this.tags[i].isSuccess(num)) {
        return this.tags[i].tag
      }
    }
    return defaultValue
  }
}

module.exports = TagNumRulesCollection
