function classDecorator(constructor: Function) {
  console.log('----classDecorator----')
  console.log('constructor: ', constructor)
}

function fieldDecorator(target: any, propName: string | Symbol) {
  console.log('----fieldDecorator----')
  console.log('target: ', target)
  console.log('propName: ', propName)
}

function methodDecorator(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('----methodDecorator----')
  console.log('target: ', target)
  console.log('propName: ', propName)
  console.log('descriptor: ', descriptor)
}

@classDecorator
class Component {

  @fieldDecorator
  name: string

  constructor(name: string) {
    this.name = name
  }

  @methodDecorator
  get componentName() {
    return this.name
  }

  @methodDecorator
  logName(): void {
    console.log(this.name)
  }
}
//
// //---
// interface IComponentDecorator {
//   selector: string
//   template: string
// }
//
// function Component(config: IComponentDecorator) {
//   return function <T extends { new(...args: any[]): object }>(Constructor: T) {
//     return class extends Constructor {
//       constructor(...args: any[]) {
//         super(...args)
//         const el = document.querySelector(config.selector)!
//         el.innerHTML = config.template
//       }
//     }
//   }
// }
//
// function bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//   const original = descriptor.value
//   return {
//     configurable: true,
//     enumerable: false,
//     get(): any {
//       return original.bind(this)
//     }
//   }
// }
//
// @Component({
//   selector: '#card',
//   template: `
//     <div class="card">
//         <div class="card-content">
//             <span class="card-title">Card component</span>
//         </div>
//     </div>
//   `
// })
// class CardComponent {
//   constructor(public name: string) {
//     this.name = name
//   }
//
//   @bind
//   logName(): void {
//     const span = document.createElement('span')
//     span.textContent = this.name
//     document.body.append(span)
//   }
// }
//
// const card = new CardComponent('name')
//
// const btn = document.getElementById('button2')!
//
// btn.addEventListener('click', card.logName)
//
// //==
// type ValidatorType = 'required' | 'email'
//
// interface IValidatorConfig {
//   [prop: string]: {
//     [validateProp: string]: ValidatorType
//   }
// }
//
// const validators: IValidatorConfig = {}
//
// function required(target: any, propName: string) {
//   validators[target.constructor.name] = {
//     ...validators[target.constructor.name],
//     [propName]: 'required'
//   }
// }
//
// function validate(object: any): boolean {
//   const objectConfig = validators[object.constructor.name]
//   if (!objectConfig) {
//     return true
//   }
//   let isValid = true
//   Object.keys(objectConfig).forEach(key => {
//     if (objectConfig[key] === 'required') {
//       isValid = isValid && !!object[key]
//     }
//   })
//   return isValid
// }
//
// class Form {
//
//   @required
//   public email: string | void
//
//   constructor(email?: string) {
//     this.email = email
//   }
// }
//
// const form = new Form()
// if (validate(form)) {
//   console.log('valid: ', form)
// } else {
//   console.log('Validation error')
// }
