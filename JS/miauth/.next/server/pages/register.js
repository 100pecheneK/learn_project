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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Register; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/misha/Desktop/miauth/pages/register.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction Register() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: formValues,\n    1: setFormValues\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    email: '',\n    name: '',\n    password: ''\n  });\n  const {\n    email,\n    password,\n    name\n  } = formValues;\n\n  const onInputChange = e => {\n    setFormValues(prevFormValues => _objectSpread(_objectSpread({}, prevFormValues), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const onSubmit = () => {\n    formValues;\n    fetch('/api/register', {\n      method: 'POST',\n      body: JSON.stringify(formValues),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(async res => {\n      const result = await res.json();\n\n      if (res.status === 200) {\n        router.push('/login');\n      } else {\n        setError(JSON.stringify(result.error, null, 4));\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"email\",\n        placeholder: \"email\",\n        value: email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"name\",\n        placeholder: \"name\",\n        value: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"password\",\n        placeholder: \"password\",\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: onSubmit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true);\n} // export const getServerSideProps = async ctx => {\n//   const cookie = ctx.req?.headers.cookie\n//   console.log(cookie)\n//   // if (res.status === 401) {\n//   //   if (ctx.res) {\n//   //     ctx.res.setHeader('location', '/login')\n//   //     ctx.res.statusCode = 302\n//   //     return { props: {} }\n//   //   }\n//   // }\n//   return { props: {} }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qc3g/MGVmMiJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiZW1haWwiLCJuYW1lIiwicGFzc3dvcmQiLCJvbklucHV0Q2hhbmdlIiwiZSIsInByZXZGb3JtVmFsdWVzIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInJlc3VsdCIsImpzb24iLCJzdGF0dXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLHNEQUFRLENBQUM7QUFDM0NHLFNBQUssRUFBRSxFQURvQztBQUUzQ0MsUUFBSSxFQUFFLEVBRnFDO0FBRzNDQyxZQUFRLEVBQUU7QUFIaUMsR0FBRCxDQUE1QztBQUtBLFFBQU07QUFBRUYsU0FBRjtBQUFTRSxZQUFUO0FBQW1CRDtBQUFuQixNQUE0QkgsVUFBbEM7O0FBRUEsUUFBTUssYUFBYSxHQUFHQyxDQUFDLElBQUk7QUFDekJMLGlCQUFhLENBQUNNLGNBQWMsb0NBQ3ZCQSxjQUR1QjtBQUUxQixPQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0wsSUFBVixHQUFpQkcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRkEsTUFBZixDQUFiO0FBSUQsR0FMRDs7QUFNQSxRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQlYsY0FBVTtBQUNWVyxTQUFLLENBQUMsZUFBRCxFQUFrQjtBQUNyQkMsWUFBTSxFQUFFLE1BRGE7QUFFckJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVmLFVBQWYsQ0FGZTtBQUdyQmdCLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQjtBQUhZLEtBQWxCLENBQUwsQ0FJR0MsSUFKSCxDQUlRLE1BQU1DLEdBQU4sSUFBYTtBQUNuQixZQUFNQyxNQUFNLEdBQUcsTUFBTUQsR0FBRyxDQUFDRSxJQUFKLEVBQXJCOztBQUNBLFVBQUlGLEdBQUcsQ0FBQ0csTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCMUIsY0FBTSxDQUFDMkIsSUFBUCxDQUFZLFFBQVo7QUFDRCxPQUZELE1BRU87QUFDTHhCLGdCQUFRLENBQUNnQixJQUFJLENBQUNDLFNBQUwsQ0FBZUksTUFBTSxDQUFDdEIsS0FBdEIsRUFBNkIsSUFBN0IsRUFBbUMsQ0FBbkMsQ0FBRCxDQUFSO0FBQ0Q7QUFDRixLQVhEO0FBWUQsR0FkRDs7QUFlQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFDRSxnQkFBUSxFQUFFUSxhQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGFBQUssRUFBRUg7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUNFLGdCQUFRLEVBQUVHLGFBRFo7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVcsRUFBQyxNQUpkO0FBS0UsYUFBSyxFQUFFRjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWVFO0FBQ0UsZ0JBQVEsRUFBRUUsYUFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxtQkFBVyxFQUFDLFVBSmQ7QUFLRSxhQUFLLEVBQUVEO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLGVBc0JFO0FBQVEsZUFBTyxFQUFFTSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQXlCR2IsS0FBSyxpQkFBSTtBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Qlo7QUFBQSxrQkFERjtBQTZCRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvcmVnaXN0ZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgbmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KVxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgbmFtZSB9ID0gZm9ybVZhbHVlc1xuXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRGb3JtVmFsdWVzKHByZXZGb3JtVmFsdWVzID0+ICh7XG4gICAgICAuLi5wcmV2Rm9ybVZhbHVlcyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSkpXG4gIH1cbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgZm9ybVZhbHVlc1xuICAgIGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtVmFsdWVzKSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IsIG51bGwsIDQpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nZW1haWwnXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWUnXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJ1xuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiA8cHJlPntlcnJvcn08L3ByZT59XG4gICAgPC8+XG4gIClcbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4vLyAgIGNvbnN0IGNvb2tpZSA9IGN0eC5yZXE/LmhlYWRlcnMuY29va2llXG4vLyAgIGNvbnNvbGUubG9nKGNvb2tpZSlcbi8vICAgLy8gaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xuLy8gICAvLyAgIGlmIChjdHgucmVzKSB7XG4vLyAgIC8vICAgICBjdHgucmVzLnNldEhlYWRlcignbG9jYXRpb24nLCAnL2xvZ2luJylcbi8vICAgLy8gICAgIGN0eC5yZXMuc3RhdHVzQ29kZSA9IDMwMlxuLy8gICAvLyAgICAgcmV0dXJuIHsgcHJvcHM6IHt9IH1cbi8vICAgLy8gICB9XG4vLyAgIC8vIH1cbi8vICAgcmV0dXJuIHsgcHJvcHM6IHt9IH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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