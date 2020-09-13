"use strict";
const cars = ['car1', 'car2'];
const cars2 = ['car1', 'car2'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Resolved');
    }, 1000);
});
const promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('Resolved');
    }, 1000);
});
promise.then(data => {
    console.log(data.toLowerCase());
});
promise2.then(data => {
    console.log(data.toLowerCase());
});
function mergeObjects(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = mergeObjects({ name: 'Misha' }, { age: '26' });
const merged2 = mergeObjects({ model: 'Misha' }, { year: '26' });
console.log(merged);
const merged3 = mergeObjects({ a: 1 }, { f: 2 });
console.log(merged3);
const withCount = (value) => {
    return {
        value,
        count: `Here ${value.length} symbols`
    };
};
console.log(withCount('Hello'));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Misha'
};
console.log(getObjectValue(person, 'name'));
class Collection {
    // private _items: T[] = []
    // or this
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const numbers = new Collection([1, 2, 3, 4, 5,]);
numbers.remove(2);
numbers.add(100);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    // return car as Car
    // or this
    return car;
}
const myCars = ['Ford', 'Audi'];
// myCars.shift()
console.log(myCars[1]);
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrari'
//# sourceMappingURL=generic.js.map