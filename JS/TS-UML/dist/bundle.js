/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Departament/Departament.ts":
/*!****************************************!*\
  !*** ./src/Departament/Departament.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Departament {\n    constructor(name) {\n        this.name = name;\n        this.employees = [];\n    }\n    setName(newName) {\n        this.name = newName;\n    }\n    getName() {\n        return this.name;\n    }\n    getEmployeeCount() {\n        return this.employees.length;\n    }\n    addEmployee(newEmployee) {\n        if (!this.employees.includes(newEmployee)) {\n            this.employees.push(newEmployee);\n        }\n    }\n    getEmployee() {\n        return this.employees;\n    }\n    removeEmployee(employee) {\n        this.employees = this.employees.filter(e => e.getIdCard() !== employee.getIdCard());\n    }\n}\nexports.default = Departament;\n\n\n//# sourceURL=webpack:///./src/Departament/Departament.ts?");

/***/ }),

/***/ "./src/Employee/Employee.ts":
/*!**********************************!*\
  !*** ./src/Employee/Employee.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Man_1 = __importDefault(__webpack_require__(/*! ../Man/Man */ \"./src/Man/Man.ts\"));\nclass Employee extends Man_1.default {\n    constructor(name, surname, position) {\n        super(name, surname);\n        this.position = position;\n        this.rooms = [];\n        this.pastPosition = [];\n    }\n    setPastPosition(newPastPosition) {\n        this.pastPosition.push(newPastPosition);\n    }\n    getPastPosition() {\n        return this.pastPosition;\n    }\n    deletePastPosition(pastPosition) {\n        this.pastPosition = this.pastPosition.filter(p => p.getName !== pastPosition.getName &&\n            p.getDepartament().getName() !== pastPosition.getDepartament().getName());\n    }\n    setDepartament(newDepartament) {\n        this.departament = newDepartament;\n        newDepartament.addEmployee(this);\n    }\n    getDepartament() {\n        if (!this.departament) {\n            throw new Error('Employee has`t departament!');\n        }\n        return this.departament;\n    }\n    setPosition(newPosition) {\n        this.position = newPosition;\n    }\n    getPosition() {\n        return this.position;\n    }\n    getIdCard() {\n        if (!this.card) {\n            throw new Error('Employee has`t card!');\n        }\n        return this.card;\n    }\n    setIdCard(newIdCard) {\n        this.card = newIdCard;\n    }\n    getRoom() {\n        return this.rooms;\n    }\n    setRoom(newRoom) {\n        if (!this.rooms.includes(newRoom)) {\n            this.rooms.push(newRoom);\n        }\n    }\n    deleteRoom(room) {\n        this.rooms = this.rooms.filter(r => r.getNumber() !== room.getNumber());\n    }\n}\nexports.default = Employee;\n\n\n//# sourceURL=webpack:///./src/Employee/Employee.ts?");

/***/ }),

/***/ "./src/IdCard/IdCard.ts":
/*!******************************!*\
  !*** ./src/IdCard/IdCard.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass IdCard {\n    constructor(number) {\n        this.number = number;\n    }\n    getNumber() {\n        return this.number;\n    }\n    setNumber(number) {\n        this.number = number;\n    }\n}\nexports.default = IdCard;\n\n\n//# sourceURL=webpack:///./src/IdCard/IdCard.ts?");

/***/ }),

/***/ "./src/Man/Man.ts":
/*!************************!*\
  !*** ./src/Man/Man.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Man {\n    constructor(name, surname) {\n        this.name = name;\n        this.surname = surname;\n    }\n    getName() {\n        return this.name;\n    }\n    getSurname() {\n        return this.surname;\n    }\n    setName(newName) {\n        this.name = newName;\n    }\n    setSurname(newSurname) {\n        this.surname = newSurname;\n    }\n}\nexports.default = Man;\n\n\n//# sourceURL=webpack:///./src/Man/Man.ts?");

/***/ }),

/***/ "./src/Menu/Menu.ts":
/*!**************************!*\
  !*** ./src/Menu/Menu.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Menu {\n    showEmployees(employees) {\n        console.log('Menu open:');\n        employees.forEach((e, i) => {\n            console.log('Employee ' + i);\n            console.log('cardId: ' + e.getIdCard());\n            console.log('Name: ' + e.getName());\n        });\n    }\n}\nexports.default = Menu;\n\n\n//# sourceURL=webpack:///./src/Menu/Menu.ts?");

/***/ }),

/***/ "./src/PastPosition/PastPosition.ts":
/*!******************************************!*\
  !*** ./src/PastPosition/PastPosition.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass PastPosition {\n    constructor(position, departament) {\n        this.position = position;\n        this.departament = departament;\n    }\n    setName(newName) {\n        this.position = newName;\n    }\n    getName() {\n        return this.position;\n    }\n    setDepartament(newDepartament) {\n        this.departament = newDepartament;\n    }\n    getDepartament() {\n        return this.departament;\n    }\n}\nexports.default = PastPosition;\n\n\n//# sourceURL=webpack:///./src/PastPosition/PastPosition.ts?");

/***/ }),

/***/ "./src/Room/Room.ts":
/*!**************************!*\
  !*** ./src/Room/Room.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Room {\n    constructor(number) {\n        this.number = number;\n    }\n    getNumber() {\n        return this.number;\n    }\n    setNumber(number) {\n        this.number = number;\n    }\n}\nexports.default = Room;\n\n\n//# sourceURL=webpack:///./src/Room/Room.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Departament_1 = __importDefault(__webpack_require__(/*! ./Departament/Departament */ \"./src/Departament/Departament.ts\"));\nconst Employee_1 = __importDefault(__webpack_require__(/*! ./Employee/Employee */ \"./src/Employee/Employee.ts\"));\nconst IdCard_1 = __importDefault(__webpack_require__(/*! ./IdCard/IdCard */ \"./src/IdCard/IdCard.ts\"));\nconst PastPosition_1 = __importDefault(__webpack_require__(/*! ./PastPosition/PastPosition */ \"./src/PastPosition/PastPosition.ts\"));\nconst Room_1 = __importDefault(__webpack_require__(/*! ./Room/Room */ \"./src/Room/Room.ts\"));\nconst Menu_1 = __importDefault(__webpack_require__(/*! ./Menu/Menu */ \"./src/Menu/Menu.ts\"));\nconst employee = new Employee_1.default('Misha', 'M', 'worker');\nconst card = new IdCard_1.default(100);\nemployee.setIdCard(card);\nconst room1 = new Room_1.default(1);\nconst room2 = new Room_1.default(2);\nconst room3 = new Room_1.default(3);\nemployee.setRoom(room1);\nemployee.setRoom(room1);\nemployee.setRoom(room2);\nemployee.setRoom(room3);\nemployee.getRoom().forEach(employee.deleteRoom.bind(employee));\nconst departament = new Departament_1.default('Dep 1');\nconst departament2 = new Departament_1.default('Dep 2');\nemployee.setDepartament(departament);\nemployee.setPastPosition(new PastPosition_1.default(employee.getPosition(), employee.getDepartament()));\ndepartament.removeEmployee(employee);\nemployee.setPosition('Student');\nemployee.setDepartament(departament2);\nconst menu = new Menu_1.default();\nmenu.showEmployees(departament2.getEmployee());\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });