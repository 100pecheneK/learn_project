webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/misha/Desktop/miauth/pages/login.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Login() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      formValues = _useState2[0],\n      setFormValues = _useState2[1];\n\n  var email = formValues.email,\n      password = formValues.password;\n\n  var onInputChange = function onInputChange(e) {\n    setFormValues(function (prevFormValues) {\n      return _objectSpread(_objectSpread({}, prevFormValues), {}, Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, e.target.name, e.target.value));\n    });\n  };\n\n  var onSubmit = function onSubmit() {\n    formValues;\n    console.log('onSubmit -> formValues', formValues);\n    fetch('/api/login', {\n      method: 'POST',\n      body: JSON.stringify(formValues),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then( /*#__PURE__*/function () {\n      var _ref = Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {\n        return _Users_misha_Desktop_miauth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.t0 = console;\n                _context.next = 3;\n                return res.json();\n\n              case 3:\n                _context.t1 = _context.sent;\n                return _context.abrupt(\"return\", _context.t0.log.call(_context.t0, _context.t1));\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }())[\"catch\"](function (e) {\n      return setError(JSON.stringify(e, null, 4));\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"email\",\n        placeholder: \"email\",\n        value: email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"password\",\n        placeholder: \"password\",\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n        onClick: onSubmit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"pre\", {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Login, \"kGv+pGg95rJvF4yMhmvXlZRgYNg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4P2U1MDciXSwibmFtZXMiOlsiTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJvbklucHV0Q2hhbmdlIiwiZSIsInByZXZGb3JtVmFsdWVzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDhCLGtCQUVKQyxzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRXZCQyxLQUZ1QjtBQUFBLE1BRWhCQyxRQUZnQjs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQztBQUMzQ0csU0FBSyxFQUFFLEVBRG9DO0FBRTNDQyxZQUFRLEVBQUU7QUFGaUMsR0FBRCxDQUhkO0FBQUEsTUFHdkJDLFVBSHVCO0FBQUEsTUFHWEMsYUFIVzs7QUFBQSxNQU90QkgsS0FQc0IsR0FPRkUsVUFQRSxDQU90QkYsS0FQc0I7QUFBQSxNQU9mQyxRQVBlLEdBT0ZDLFVBUEUsQ0FPZkQsUUFQZTs7QUFTOUIsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDLEVBQUk7QUFDekJGLGlCQUFhLENBQUMsVUFBQUcsY0FBYztBQUFBLDZDQUN2QkEsY0FEdUIsNklBRXpCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFGZ0IsRUFFVEgsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBRkE7QUFBQSxLQUFmLENBQWI7QUFJRCxHQUxEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJSLGNBQVU7QUFDVlMsV0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NWLFVBQXRDO0FBQ0FXLFNBQUssQ0FBQyxZQUFELEVBQWU7QUFDbEJDLFlBQU0sRUFBRSxNQURVO0FBRWxCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixVQUFmLENBRlk7QUFHbEJnQixhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEI7QUFIUyxLQUFmLENBQUwsQ0FLR0MsSUFMSDtBQUFBLGtSQUtRLGlCQUFNQyxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBYVQsT0FBYjtBQUFBO0FBQUEsdUJBQStCUyxHQUFHLENBQUNDLElBQUosRUFBL0I7O0FBQUE7QUFBQTtBQUFBLDZEQUFxQlQsR0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FMUjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFNUyxVQUFBUCxDQUFDO0FBQUEsYUFBSU4sUUFBUSxDQUFDaUIsSUFBSSxDQUFDQyxTQUFMLENBQWVaLENBQWYsRUFBa0IsSUFBbEIsRUFBd0IsQ0FBeEIsQ0FBRCxDQUFaO0FBQUEsS0FOVjtBQU9ELEdBVkQ7O0FBV0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQ0UsZ0JBQVEsRUFBRUQsYUFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsWUFBSSxFQUFDLE9BSFA7QUFJRSxtQkFBVyxFQUFDLE9BSmQ7QUFLRSxhQUFLLEVBQUVKO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFDRSxnQkFBUSxFQUFFSSxhQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLG1CQUFXLEVBQUMsVUFKZDtBQUtFLGFBQUssRUFBRUg7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFlRTtBQUFRLGVBQU8sRUFBRVMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWtCR1osS0FBSyxpQkFBSTtBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQlo7QUFBQSxrQkFERjtBQXNCRDs7R0FoRHVCSixLO1VBQ1BFLHFEOzs7S0FET0YsSyIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSlcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGZvcm1WYWx1ZXNcblxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gZSA9PiB7XG4gICAgc2V0Rm9ybVZhbHVlcyhwcmV2Rm9ybVZhbHVlcyA9PiAoe1xuICAgICAgLi4ucHJldkZvcm1WYWx1ZXMsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pKVxuICB9XG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgIGZvcm1WYWx1ZXNcbiAgICBjb25zb2xlLmxvZygnb25TdWJtaXQgLT4gZm9ybVZhbHVlcycsIGZvcm1WYWx1ZXMpXG4gICAgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1WYWx1ZXMpLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKGFzeW5jIHJlcyA9PiBjb25zb2xlLmxvZyhhd2FpdCByZXMuanNvbigpKSlcbiAgICAgIC5jYXRjaChlID0+IHNldEVycm9yKEpTT04uc3RyaW5naWZ5KGUsIG51bGwsIDQpKSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdlbWFpbCdcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJ1xuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiA8cHJlPntlcnJvcn08L3ByZT59XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ })

})