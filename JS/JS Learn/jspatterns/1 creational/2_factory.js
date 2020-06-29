class Membership {
  constructor(name) {
    this.name = name
  }
}

class SimpleMembership extends Membership {
  constructor(...args) {
    super(...args)
    this.cost = 50
  }
}

class StandardMembership extends Membership {
  constructor(...args) {
    super(...args)
    this.cost = 150
  }
}

class PremiumMembership extends Membership {
  constructor(...args) {
    super(...args)
    this.cost = 500
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vladilen', 'simple'),
  factory.create('Elena', 'premium'),
  factory.create('Vasilisa', 'standard'),
  factory.create('Ivan', 'premium'),
  factory.create('Petr')
]

members.forEach(m => {
  m.define()
})
