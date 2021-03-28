webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Register; });\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/misha/Desktop/miauth/pages/register.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Register() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    email: '',\n    name: '',\n    password: ''\n  }),\n      formValues = _useState2[0],\n      setFormValues = _useState2[1];\n\n  var email = formValues.email,\n      password = formValues.password,\n      name = formValues.name;\n\n  var onInputChange = function onInputChange(e) {\n    setFormValues(function (prevFormValues) {\n      return _objectSpread(_objectSpread({}, prevFormValues), {}, Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, e.target.name, e.target.value));\n    });\n  };\n\n  var onSubmit = function onSubmit() {\n    formValues;\n    fetch('/api/register', {\n      method: 'POST',\n      body: JSON.stringify(formValues),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then( /*#__PURE__*/function () {\n      var _ref = Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {\n        var result;\n        return _Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return res.json();\n\n              case 2:\n                result = _context.sent;\n\n                if (res.status === 200) {\n                  router.push('/login');\n                } else {\n                  setError(JSON.stringify(result.error, null, 4));\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"email\",\n        placeholder: \"email\",\n        value: email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"name\",\n        placeholder: \"name\",\n        value: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"password\",\n        placeholder: \"password\",\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n        onClick: onSubmit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"pre\", {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true);\n} // export const getServerSideProps = async ctx => {\n//   const cookie = ctx.req?.headers.cookie\n//   console.log(cookie)\n//   // if (res.status === 401) {\n//   //   if (ctx.res) {\n//   //     ctx.res.setHeader('location', '/login')\n//   //     ctx.res.statusCode = 302\n//   //     return { props: {} }\n//   //   }\n//   // }\n//   return { props: {} }\n// }\n\n_s(Register, \"TMOTsSg/4k8L7DapLaryOF3GJ/U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Register;\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanN4PzBlZjIiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwib25JbnB1dENoYW5nZSIsImUiLCJwcmV2Rm9ybVZhbHVlcyIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic3RhdHVzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlDLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTFCQyxLQUYwQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQztBQUMzQ0csU0FBSyxFQUFFLEVBRG9DO0FBRTNDQyxRQUFJLEVBQUUsRUFGcUM7QUFHM0NDLFlBQVEsRUFBRTtBQUhpQyxHQUFELENBSFg7QUFBQSxNQUcxQkMsVUFIMEI7QUFBQSxNQUdkQyxhQUhjOztBQUFBLE1BUXpCSixLQVJ5QixHQVFDRyxVQVJELENBUXpCSCxLQVJ5QjtBQUFBLE1BUWxCRSxRQVJrQixHQVFDQyxVQVJELENBUWxCRCxRQVJrQjtBQUFBLE1BUVJELElBUlEsR0FRQ0UsVUFSRCxDQVFSRixJQVJROztBQVVqQyxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUMsRUFBSTtBQUN6QkYsaUJBQWEsQ0FBQyxVQUFBRyxjQUFjO0FBQUEsNkNBQ3ZCQSxjQUR1Qiw2SUFFekJELENBQUMsQ0FBQ0UsTUFBRixDQUFTUCxJQUZnQixFQUVUSyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FGQTtBQUFBLEtBQWYsQ0FBYjtBQUlELEdBTEQ7O0FBTUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQlAsY0FBVTtBQUNWUSxTQUFLLENBQUMsZUFBRCxFQUFrQjtBQUNyQkMsWUFBTSxFQUFFLE1BRGE7QUFFckJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVaLFVBQWYsQ0FGZTtBQUdyQmEsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCO0FBSFksS0FBbEIsQ0FBTCxDQUlHQyxJQUpIO0FBQUEsa1JBSVEsaUJBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDZUEsR0FBRyxDQUFDQyxJQUFKLEVBRGY7O0FBQUE7QUFDQUMsc0JBREE7O0FBRU4sb0JBQUlGLEdBQUcsQ0FBQ0csTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCMUIsd0JBQU0sQ0FBQzJCLElBQVAsQ0FBWSxRQUFaO0FBQ0QsaUJBRkQsTUFFTztBQUNMdkIsMEJBQVEsQ0FBQ2UsSUFBSSxDQUFDQyxTQUFMLENBQWVLLE1BQU0sQ0FBQ3RCLEtBQXRCLEVBQTZCLElBQTdCLEVBQW1DLENBQW5DLENBQUQsQ0FBUjtBQUNEOztBQU5LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZRCxHQWREOztBQWVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUNFLGdCQUFRLEVBQUVPLGFBRFo7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsYUFBSyxFQUFFTDtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQ0UsZ0JBQVEsRUFBRUssYUFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxtQkFBVyxFQUFDLE1BSmQ7QUFLRSxhQUFLLEVBQUVKO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBZUU7QUFDRSxnQkFBUSxFQUFFSSxhQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLG1CQUFXLEVBQUMsVUFKZDtBQUtFLGFBQUssRUFBRUg7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsZUFzQkU7QUFBUSxlQUFPLEVBQUVRLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBeUJHWixLQUFLLGlCQUFJO0FBQUEsZ0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCWjtBQUFBLGtCQURGO0FBNkJELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBekV3QkosUTtVQUNQRSxxRDs7O0tBRE9GLFEiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0pXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBuYW1lIH0gPSBmb3JtVmFsdWVzXG5cbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IGUgPT4ge1xuICAgIHNldEZvcm1WYWx1ZXMocHJldkZvcm1WYWx1ZXMgPT4gKHtcbiAgICAgIC4uLnByZXZGb3JtVmFsdWVzLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KSlcbiAgfVxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICBmb3JtVmFsdWVzXG4gICAgZmV0Y2goJy9hcGkvcmVnaXN0ZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1WYWx1ZXMpLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSkudGhlbihhc3luYyByZXMgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvciwgbnVsbCwgNCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdlbWFpbCdcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIDxwcmU+e2Vycm9yfTwvcHJlPn1cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgY3R4ID0+IHtcbi8vICAgY29uc3QgY29va2llID0gY3R4LnJlcT8uaGVhZGVycy5jb29raWVcbi8vICAgY29uc29sZS5sb2coY29va2llKVxuLy8gICAvLyBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4vLyAgIC8vICAgaWYgKGN0eC5yZXMpIHtcbi8vICAgLy8gICAgIGN0eC5yZXMuc2V0SGVhZGVyKCdsb2NhdGlvbicsICcvbG9naW4nKVxuLy8gICAvLyAgICAgY3R4LnJlcy5zdGF0dXNDb2RlID0gMzAyXG4vLyAgIC8vICAgICByZXR1cm4geyBwcm9wczoge30gfVxuLy8gICAvLyAgIH1cbi8vICAgLy8gfVxuLy8gICByZXR1cm4geyBwcm9wczoge30gfVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.jsx\n");

/***/ })

})