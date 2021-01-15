module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/TodosContext.js":
/*!**********************************!*\
  !*** ./contexts/TodosContext.js ***!
  \**********************************/
/*! exports provided: TodosProvider, TodosContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodosProvider\", function() { return TodosProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodosContext\", function() { return TodosContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/misha/Documents/learn_project/JS/next-authenticated-todo-app/contexts/TodosContext.js\";\n\nconst TodosContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nconst TodosProvider = ({\n  children\n}) => {\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const refreshTodos = async () => {\n    try {\n      const res = await fetch('/api/getTodos');\n      const latestTodos = await res.json();\n      setTodos(latestTodos);\n    } catch (e) {\n      console.error(e);\n    }\n  };\n\n  const addTodo = async description => {\n    try {\n      const res = await fetch('/api/createTodo', {\n        method: 'POST',\n        body: JSON.stringify({\n          description\n        }),\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      });\n      const newTodo = await res.json();\n      setTodos(prevTodos => [newTodo, ...prevTodos]);\n    } catch (e) {\n      console.error(e);\n    }\n  };\n\n  const updateTodo = async updatedTodo => {\n    try {\n      await fetch('/api/updateTodo', {\n        method: 'PUT',\n        body: JSON.stringify(updatedTodo),\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      });\n      setTodos(prevTodos => {\n        const existingTodos = [...prevTodos];\n        const existingTodo = existingTodos.find(todo => todo.id === updatedTodo.id);\n        existingTodo.fields = updatedTodo.fields;\n        return existingTodos;\n      });\n    } catch (e) {\n      console.error(e);\n    }\n  };\n\n  const deleteTodo = async id => {\n    try {\n      await fetch('/api/deleteTodo', {\n        method: 'DELETE',\n        body: JSON.stringify({\n          id\n        }),\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      });\n      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));\n    } catch (e) {\n      console.error(e);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TodosContext.Provider, {\n    value: {\n      todos,\n      setTodos,\n      refreshTodos,\n      updateTodo,\n      addTodo,\n      deleteTodo\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Ub2Rvc0NvbnRleHQuanM/ODhhYSJdLCJuYW1lcyI6WyJUb2Rvc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVG9kb3NQcm92aWRlciIsImNoaWxkcmVuIiwidG9kb3MiLCJzZXRUb2RvcyIsInVzZVN0YXRlIiwicmVmcmVzaFRvZG9zIiwicmVzIiwiZmV0Y2giLCJsYXRlc3RUb2RvcyIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWRkVG9kbyIsImRlc2NyaXB0aW9uIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibmV3VG9kbyIsInByZXZUb2RvcyIsInVwZGF0ZVRvZG8iLCJ1cGRhdGVkVG9kbyIsImV4aXN0aW5nVG9kb3MiLCJleGlzdGluZ1RvZG8iLCJmaW5kIiwidG9kbyIsImlkIiwiZmllbGRzIiwiZGVsZXRlVG9kbyIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxZQUFZLGdCQUFHQywyREFBYSxFQUFsQzs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDL0IsUUFBSTtBQUNGLFlBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsZUFBRCxDQUF2QjtBQUNBLFlBQU1DLFdBQVcsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBMUI7QUFDQU4sY0FBUSxDQUFDSyxXQUFELENBQVI7QUFDRCxLQUpELENBSUUsT0FBT0UsQ0FBUCxFQUFVO0FBQ1ZDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFFBQU1HLE9BQU8sR0FBRyxNQUFNQyxXQUFOLElBQXFCO0FBQ25DLFFBQUk7QUFDRixZQUFNUixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQ3pDUSxjQUFNLEVBQUUsTUFEaUM7QUFFekNDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUo7QUFBRixTQUFmLENBRm1DO0FBR3pDSyxlQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEI7QUFIZ0MsT0FBcEIsQ0FBdkI7QUFLQSxZQUFNQyxPQUFPLEdBQUcsTUFBTWQsR0FBRyxDQUFDRyxJQUFKLEVBQXRCO0FBQ0FOLGNBQVEsQ0FBQ2tCLFNBQVMsSUFBSSxDQUFDRCxPQUFELEVBQVUsR0FBR0MsU0FBYixDQUFkLENBQVI7QUFDRCxLQVJELENBUUUsT0FBT1gsQ0FBUCxFQUFVO0FBQ1ZDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0Q7QUFDRixHQVpEOztBQWFBLFFBQU1ZLFVBQVUsR0FBRyxNQUFNQyxXQUFOLElBQXFCO0FBQ3RDLFFBQUk7QUFDRixZQUFNaEIsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzdCUSxjQUFNLEVBQUUsS0FEcUI7QUFFN0JDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVLLFdBQWYsQ0FGdUI7QUFHN0JKLGVBQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQjtBQUhvQixPQUFwQixDQUFYO0FBS0FoQixjQUFRLENBQUNrQixTQUFTLElBQUk7QUFDcEIsY0FBTUcsYUFBYSxHQUFHLENBQUMsR0FBR0gsU0FBSixDQUF0QjtBQUNBLGNBQU1JLFlBQVksR0FBR0QsYUFBYSxDQUFDRSxJQUFkLENBQ25CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZTCxXQUFXLENBQUNLLEVBRGIsQ0FBckI7QUFHQUgsb0JBQVksQ0FBQ0ksTUFBYixHQUFzQk4sV0FBVyxDQUFDTSxNQUFsQztBQUNBLGVBQU9MLGFBQVA7QUFDRCxPQVBPLENBQVI7QUFRRCxLQWRELENBY0UsT0FBT2QsQ0FBUCxFQUFVO0FBQ1ZDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0Q7QUFDRixHQWxCRDs7QUFtQkEsUUFBTW9CLFVBQVUsR0FBRyxNQUFNRixFQUFOLElBQVk7QUFDN0IsUUFBSTtBQUNGLFlBQU1yQixLQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDN0JRLGNBQU0sRUFBRSxRQURxQjtBQUU3QkMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFVTtBQUFGLFNBQWYsQ0FGdUI7QUFHN0JULGVBQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQjtBQUhvQixPQUFwQixDQUFYO0FBS0FoQixjQUFRLENBQUNrQixTQUFTLElBQUlBLFNBQVMsQ0FBQ1UsTUFBVixDQUFpQkosSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWUEsRUFBckMsQ0FBZCxDQUFSO0FBQ0QsS0FQRCxDQU9FLE9BQU9sQixDQUFQLEVBQVU7QUFDVkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLENBQWQ7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsc0JBQ0UscUVBQUMsWUFBRCxDQUFjLFFBQWQ7QUFDRSxTQUFLLEVBQUU7QUFBRVIsV0FBRjtBQUFTQyxjQUFUO0FBQW1CRSxrQkFBbkI7QUFBaUNpQixnQkFBakM7QUFBNkNULGFBQTdDO0FBQXNEaUI7QUFBdEQsS0FEVDtBQUFBLGNBR0c3QjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBakVEIiwiZmlsZSI6Ii4vY29udGV4dHMvVG9kb3NDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuY29uc3QgVG9kb3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IFRvZG9zUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgcmVmcmVzaFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRUb2RvcycpXG4gICAgICBjb25zdCBsYXRlc3RUb2RvcyA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHNldFRvZG9zKGxhdGVzdFRvZG9zKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRUb2RvID0gYXN5bmMgZGVzY3JpcHRpb24gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jcmVhdGVUb2RvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkZXNjcmlwdGlvbiB9KSxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3VG9kbyA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHNldFRvZG9zKHByZXZUb2RvcyA9PiBbbmV3VG9kbywgLi4ucHJldlRvZG9zXSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxuICB9XG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSBhc3luYyB1cGRhdGVkVG9kbyA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKCcvYXBpL3VwZGF0ZVRvZG8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUb2RvKSxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICB9KVxuICAgICAgc2V0VG9kb3MocHJldlRvZG9zID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2RvcyA9IFsuLi5wcmV2VG9kb3NdXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9kbyA9IGV4aXN0aW5nVG9kb3MuZmluZChcbiAgICAgICAgICB0b2RvID0+IHRvZG8uaWQgPT09IHVwZGF0ZWRUb2RvLmlkXG4gICAgICAgIClcbiAgICAgICAgZXhpc3RpbmdUb2RvLmZpZWxkcyA9IHVwZGF0ZWRUb2RvLmZpZWxkc1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdUb2Rvc1xuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxuICB9XG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyBpZCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2RlbGV0ZVRvZG8nLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgfSlcbiAgICAgIHNldFRvZG9zKHByZXZUb2RvcyA9PiBwcmV2VG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gaWQpKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUb2Rvc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IHRvZG9zLCBzZXRUb2RvcywgcmVmcmVzaFRvZG9zLCB1cGRhdGVUb2RvLCBhZGRUb2RvLCBkZWxldGVUb2RvIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVG9kb3NDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5leHBvcnQgeyBUb2Rvc1Byb3ZpZGVyLCBUb2Rvc0NvbnRleHQgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/TodosContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_TodosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/TodosContext */ \"./contexts/TodosContext.js\");\n\nvar _jsxFileName = \"/Users/misha/Documents/learn_project/JS/next-authenticated-todo-app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_TodosContext__WEBPACK_IMPORTED_MODULE_2__[\"TodosProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container mx-auto my-10 max-w-xl\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLG9FQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCB7IFRvZG9zUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9Ub2Rvc0NvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUb2Rvc1Byb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIG15LTEwIG1heC13LXhsJz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub2Rvc1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/index.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });