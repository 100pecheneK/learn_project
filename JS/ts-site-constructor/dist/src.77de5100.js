// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Element.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyElement = void 0;

var MyElement = /*#__PURE__*/function () {
  function MyElement(_selector) {
    _classCallCheck(this, MyElement);

    this.$el = this.validate(_selector);
  }

  _createClass(MyElement, [{
    key: "validate",
    value: function validate(selector) {
      var el = document.querySelector(selector);

      if (!el) {
        throw new Error("No element with selector \"".concat(selector, "\""));
      }

      return el;
    }
  }]);

  return MyElement;
}();

exports.MyElement = MyElement;
},{}],"templates/htmlGenerators.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = exports.p = exports.h = exports.col = exports.row = void 0;

function row(content, styles) {
  var draggable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var style = styles ? "style=\"".concat(styles, "\"") : '';
  return "<div draggable=\"".concat(draggable, "\" class=\"row\" ").concat(style, ">").concat(content, "</div>");
}

exports.row = row;

function col(content) {
  var draggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<div draggable=\"".concat(draggable, "\" class=\"col-sm\">").concat(content, "</div>");
}

exports.col = col;

function h(content, tag) {
  var draggable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var hs = {
    h1: "<h1 draggable=\"".concat(draggable, "\">").concat(content, "</h1>"),
    h2: "<h2 draggable=\"".concat(draggable, "\">").concat(content, "</h2>"),
    h3: "<h3 draggable=\"".concat(draggable, "\">").concat(content, "</h3>"),
    h4: "<h4 draggable=\"".concat(draggable, "\">").concat(content, "</h4>"),
    h5: "<h5 draggable=\"".concat(draggable, "\">").concat(content, "</h5>"),
    h6: "<h6 draggable=\"".concat(draggable, "\">").concat(content, "</h6>")
  };

  if (typeof tag === 'string') {
    if (hs.hasOwnProperty(tag)) {
      return hs[tag];
    }

    throw new Error("Can`t place ".concat(tag, " as Title: only h1-h6 Titles!"));
  }

  return hs['h1'];
}

exports.h = h;

function p(content) {
  var draggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<p draggable=\"".concat(draggable, "\">").concat(content, "</p>");
}

exports.p = p;

function image(src, alt, styles) {
  var style = styles ? "style=\"".concat(styles, "\"") : '';
  return "<img alt=\"".concat(alt || '', "\" src=\"").concat(src || '', "\" ").concat(style, "/>");
}

exports.image = image;
},{}],"utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

function css(styles) {
  if (!styles) {
    return;
  }

  if (typeof styles === 'string') {
    return styles;
  }

  return Object.keys(styles).map(function (key) {
    return "".concat(key, ":").concat(styles[key]);
  }).join(';');
}

exports.css = css;
},{}],"blocks/Block.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Block = function Block(_type, _value, _options) {
  _classCallCheck(this, Block);

  this.type = _type;
  this.value = _value;
  this.options = _options;
};

exports.default = Block;
},{}],"blocks/TitleBlock.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var htmlGenerators_1 = require("~templates/htmlGenerators");

var _utils_1 = require("~utils");

var Block_1 = __importDefault(require("~blocks/Block"));

var TitleBlock = /*#__PURE__*/function (_Block_1$default) {
  _inherits(TitleBlock, _Block_1$default);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(_value, _options) {
    _classCallCheck(this, TitleBlock);

    TitleBlock.validate(_value);
    return _super.call(this, 'title', _value, _options);
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options, _this$options2;

      var titleContent = htmlGenerators_1.h(this.value, (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.tag);
      return htmlGenerators_1.row(htmlGenerators_1.col(titleContent), _utils_1.css((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.styles), true);
    }
  }], [{
    key: "validate",
    value: function validate(value) {
      if (typeof value !== 'string') {
        throw new Error("Can`t place ".concat(_typeof(value), " in Title!"));
      }
    }
  }]);

  return TitleBlock;
}(Block_1.default);

exports.default = TitleBlock;
},{"~templates/htmlGenerators":"templates/htmlGenerators.ts","~utils":"utils.ts","~blocks/Block":"blocks/Block.ts"}],"blocks/TextBlock.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var htmlGenerators_1 = require("~templates/htmlGenerators");

var _utils_1 = require("~utils");

var Block_1 = __importDefault(require("~blocks/Block"));

var TextBlock = /*#__PURE__*/function (_Block_1$default) {
  _inherits(TextBlock, _Block_1$default);

  var _super = _createSuper(TextBlock);

  function TextBlock(_value, _options) {
    _classCallCheck(this, TextBlock);

    TextBlock.validate(_value);
    return _super.call(this, 'text', _value, _options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options;

      return htmlGenerators_1.row(htmlGenerators_1.col(htmlGenerators_1.p(this.value)), _utils_1.css((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.styles), true);
    }
  }], [{
    key: "validate",
    value: function validate(value) {
      if (typeof value !== 'string') {
        throw new Error("Can`t place ".concat(_typeof(value), " in Text!"));
      }
    }
  }]);

  return TextBlock;
}(Block_1.default);

exports.default = TextBlock;
},{"~templates/htmlGenerators":"templates/htmlGenerators.ts","~utils":"utils.ts","~blocks/Block":"blocks/Block.ts"}],"blocks/ImageBlock.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var htmlGenerators_1 = require("~templates/htmlGenerators");

var _utils_1 = require("~utils");

var Block_1 = __importDefault(require("~blocks/Block"));

var ImageBlock = /*#__PURE__*/function (_Block_1$default) {
  _inherits(ImageBlock, _Block_1$default);

  var _super = _createSuper(ImageBlock);

  function ImageBlock(_value, _options) {
    _classCallCheck(this, ImageBlock);

    ImageBlock.validate(_value, _options);
    return _super.call(this, 'image', _value, _options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options, _this$options2, _this$options3;

      return htmlGenerators_1.row(htmlGenerators_1.image(this.value, (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.alt, _utils_1.css((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.imageStyles)), _utils_1.css((_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.styles));
    }
  }], [{
    key: "validate",
    value: function validate(value, options) {
      if (typeof value !== 'string') {
        throw new Error("Can`t place ".concat(_typeof(value), " in Image`s value!"));
      }

      if (!!(options === null || options === void 0 ? void 0 : options.alt) && typeof (options === null || options === void 0 ? void 0 : options.alt) !== 'string') {
        throw new Error("Can`t place ".concat(_typeof(options.alt), " in Image`s alt!"));
      }
    }
  }]);

  return ImageBlock;
}(Block_1.default);

exports.default = ImageBlock;
},{"~templates/htmlGenerators":"templates/htmlGenerators.ts","~utils":"utils.ts","~blocks/Block":"blocks/Block.ts"}],"blocks/ColumnsBlock.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var htmlGenerators_1 = require("~templates/htmlGenerators");

var _utils_1 = require("~utils");

var Block_1 = __importDefault(require("~blocks/Block"));

var ColumnsBlock = /*#__PURE__*/function (_Block_1$default) {
  _inherits(ColumnsBlock, _Block_1$default);

  var _super = _createSuper(ColumnsBlock);

  function ColumnsBlock(_value, _options) {
    _classCallCheck(this, ColumnsBlock);

    ColumnsBlock.validate(_value);
    return _super.call(this, 'columns', _value, _options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options;

      var html = this.value.map(function (item) {
        return htmlGenerators_1.col(htmlGenerators_1.p(item));
      }).join('');
      return htmlGenerators_1.row(html, _utils_1.css((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.styles), true);
    }
  }], [{
    key: "validate",
    value: function validate(value) {
      if (!Array.isArray(value)) {
        throw new Error("Can`t place ".concat(_typeof(value), " in Columns!"));
      }
    }
  }]);

  return ColumnsBlock;
}(Block_1.default);

exports.default = ColumnsBlock;
},{"~templates/htmlGenerators":"templates/htmlGenerators.ts","~utils":"utils.ts","~blocks/Block":"blocks/Block.ts"}],"blocks/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsBlock = exports.ImageBlock = exports.TextBlock = exports.TitleBlock = void 0;

var TitleBlock_1 = require("~blocks/TitleBlock");

Object.defineProperty(exports, "TitleBlock", {
  enumerable: true,
  get: function get() {
    return __importDefault(TitleBlock_1).default;
  }
});

var TextBlock_1 = require("~blocks/TextBlock");

Object.defineProperty(exports, "TextBlock", {
  enumerable: true,
  get: function get() {
    return __importDefault(TextBlock_1).default;
  }
});

var ImageBlock_1 = require("~blocks/ImageBlock");

Object.defineProperty(exports, "ImageBlock", {
  enumerable: true,
  get: function get() {
    return __importDefault(ImageBlock_1).default;
  }
});

var ColumnsBlock_1 = require("~blocks/ColumnsBlock");

Object.defineProperty(exports, "ColumnsBlock", {
  enumerable: true,
  get: function get() {
    return __importDefault(ColumnsBlock_1).default;
  }
});
},{"~blocks/TitleBlock":"blocks/TitleBlock.ts","~blocks/TextBlock":"blocks/TextBlock.ts","~blocks/ImageBlock":"blocks/ImageBlock.ts","~blocks/ColumnsBlock":"blocks/ColumnsBlock.ts"}],"SideBar.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = void 0;

var _Element_1 = require("~Element");

var index_1 = require("~/blocks/index");

var SideBar = /*#__PURE__*/function (_Element_1$MyElement) {
  _inherits(SideBar, _Element_1$MyElement);

  var _super = _createSuper(SideBar);

  function SideBar(_selector, _onNewBlock) {
    var _this;

    _classCallCheck(this, SideBar);

    _this = _super.call(this, _selector);
    _this.onNewBlock = _onNewBlock;

    _this.init();

    return _this;
  }

  _createClass(SideBar, [{
    key: "init",
    value: function init() {
      this.$el.insertAdjacentHTML('afterbegin', this.template);
      this.$el.addEventListener('submit', this.onSubmit.bind(this));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var type = e.target.name;
      var value = e.target.value.value;
      var styles = e.target.styles.value;
      var newBlock;

      if (type === 'text') {
        newBlock = new index_1.TextBlock(value, {
          styles: styles
        });
      } else if (type === 'title') {
        newBlock = new index_1.TitleBlock(value, {
          styles: styles
        });
      } else if (type === 'columns') {
        newBlock = new index_1.ColumnsBlock(new Array(+value).fill(''), {
          styles: styles
        });
      }

      this.onNewBlock(newBlock);
      e.target.value.value = '';
      e.target.styles.value = '';
    }
  }, {
    key: "getForm",
    value: function getForm(type) {
      return "\n      <form name=\"".concat(type, "\">\n          <h5>").concat(type, "</h5>\n          <div class=\"form-group\">\n              <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n          </div>\n          <div class=\"form-group\">\n              <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n      </form>\n      <hr>\n    ");
    }
  }, {
    key: "template",
    get: function get() {
      return [this.getForm('title'), this.getForm('text'), this.getForm('columns')].join('');
    }
  }]);

  return SideBar;
}(_Element_1.MyElement);

exports.SideBar = SideBar;
},{"~Element":"Element.ts","~/blocks/index":"blocks/index.ts"}],"templates/getTemplate.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplate = void 0;

var index_1 = require("~blocks/index");

var bl = {
  'title': index_1.TitleBlock,
  'text': index_1.TextBlock,
  'columns': index_1.ColumnsBlock
};

function getTemplate(block) {
  return new bl[block.type](block.value, block.options).toHTML();
}

exports.getTemplate = getTemplate;
},{"~blocks/index":"blocks/index.ts"}],"Site.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

var _Element_1 = require("~Element");

var getTemplate_1 = require("~templates/getTemplate");

var Site = /*#__PURE__*/function (_Element_1$MyElement) {
  _inherits(Site, _Element_1$MyElement);

  var _super = _createSuper(Site);

  function Site(_selector) {
    var _this;

    _classCallCheck(this, Site);

    _this = _super.call(this, _selector);

    _this.init();

    return _this;
  }

  _createClass(Site, [{
    key: "init",
    value: function init() {
      // TODO: отрефакторить!!!
      var elem;

      var dragStart = function dragStart(e) {
        setTimeout(function () {
          e.target.classList.add('hide');
          elem = e.target;
        });
      };

      var dragEnd = function dragEnd(e) {
        e.target.classList.remove('hide');
      };

      var dragOver = function dragOver(e) {
        e.preventDefault();
      };

      var dragEnter = function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('hovered');
      };

      var dragLeave = function dragLeave(e) {
        e.target.classList.remove('hovered');
      };

      var dragDrop = function dragDrop(e) {
        e.target.append(elem);
        e.target.classList.remove('hovered');
      };

      this.$el.addEventListener('dragstart', dragStart);
      this.$el.addEventListener('dragend', dragEnd);
      this.$el.addEventListener('dragover', dragOver);
      this.$el.addEventListener('dragenter', dragEnter);
      this.$el.addEventListener('dragleave', dragLeave);
      this.$el.addEventListener('drop', dragDrop);
    }
  }, {
    key: "saveModel",
    value: function saveModel(model) {
      localStorage.setItem('model', JSON.stringify(model));
    }
  }, {
    key: "render",
    value: function render(model) {
      var _this2 = this;

      this.$el.innerHTML = '';
      model.forEach(function (block) {
        try {
          var html = getTemplate_1.getTemplate(block);

          _this2.$el.insertAdjacentHTML('beforeend', html);
        } catch (e) {
          handleError(e, _this2.$el);
        }
      });
      this.saveModel(model);

      function handleError(e, container) {
        var errorHtml = "<p>".concat(e.message, "</p>");
        container.insertAdjacentHTML('beforeend', errorHtml);
      }
    }
  }]);

  return Site;
}(_Element_1.MyElement);

exports.Site = Site;
},{"~Element":"Element.ts","~templates/getTemplate":"templates/getTemplate.ts"}],"app.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _SideBar_1 = require("~SideBar");

var _Site_1 = require("~Site");

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      try {
        this.site = new _Site_1.Site('#site');
        this.site.render(this.model);
        new _SideBar_1.SideBar('#panel', this.onNewBlock.bind(this));
      } catch (e) {
        console.error(e.message);
      }
    }
  }, {
    key: "onNewBlock",
    value: function onNewBlock(newBlock) {
      this.model.push(newBlock);
      this.site.render(this.model);
    }
  }]);

  return App;
}();

exports.App = App;
},{"~SideBar":"SideBar.ts","~Site":"Site.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import {model} from '~model'

require("~styles/main.css");

var _app_1 = require("~app");

var model = JSON.parse(localStorage.getItem('model') || '[]');
new _app_1.App(model).init();
},{"~styles/main.css":"styles/main.css","~app":"app.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57062" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map