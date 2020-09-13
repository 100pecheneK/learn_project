"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDecorator(constructor) {
    console.log('----classDecorator----');
    console.log('constructor: ', constructor);
}
function fieldDecorator(target, propName) {
    console.log('----fieldDecorator----');
    console.log('target: ', target);
    console.log('propName: ', propName);
}
function methodDecorator(target, propName, descriptor) {
    console.log('----methodDecorator----');
    console.log('target: ', target);
    console.log('propName: ', propName);
    console.log('descriptor: ', descriptor);
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(this.name);
    }
};
__decorate([
    fieldDecorator
], Component.prototype, "name", void 0);
__decorate([
    methodDecorator
], Component.prototype, "componentName", null);
__decorate([
    methodDecorator
], Component.prototype, "logName", null);
Component = __decorate([
    classDecorator
], Component);
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
//# sourceMappingURL=decorators.js.map