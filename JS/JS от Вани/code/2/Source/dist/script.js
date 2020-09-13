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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/js/modules/index.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["modals"])();
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["sliders"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["sliders"])('.main-slider-item', 'vertical');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["forms"])();
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["mask"])('[name="phone"]');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["checkTextInputs"])('[name="name"]');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["checkTextInputs"])('[name="message"]');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["showMoreStyles"])('.button-styles', '#styles .row');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["calc"])('#size', '#material', '#options', '.promocode', '.calc-price');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["filter"])();
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["picture"])('.sizes-block');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["accordion"])('.accordion-heading');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["burger"])('.burger-menu', '.burger');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["scroll"])('.pageup');
  Object(_modules__WEBPACK_IMPORTED_MODULE_0__["drop"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector); // blocks = document.querySelectorAll(itemsSelector)
  // сопоб 2

  const setMaxHeight0 = elem => elem.style.maxHeight = '0px';

  const setMaxHeightMax = elem => elem.style.maxHeight = `${elem.scrollHeight + 80}px`;

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const sibling = this.nextElementSibling;

      if (!this.classList.contains('active-style')) {
        btns.forEach(btn => {
          btn.classList.remove('active-style');
          btn.nextElementSibling.classList.remove('active-content');
          setMaxHeight0(btn.nextElementSibling);
        });
      }

      this.classList.toggle('active-style');
      sibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        setMaxHeightMax(sibling);
      } else {
        setMaxHeight0(sibling);
      }
    });
  }); // способ 1
  // blocks.forEach(block => {
  //     block.classList.add('animated', 'fadeInDown')
  // })
  // btns.forEach(btn => {
  //     btn.addEventListener('click', function () {
  //         if (!this.classList.contains('active')) {
  //             btns.forEach(btn => {
  //                 btn.classList.remove('active', 'active-style')
  //             })
  //             this.classList.add('active', 'active-style')
  //         }
  //     })
  // })
});

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.innerWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

/* harmony default export */ __webpack_exports__["default"] = ((size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  let sum = 0;

  const updateSelect = (data, element) => {
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.value;
      option.textContent = item.text;
      element.append(option);
    });
  };

  const updateCalc = () => {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getData"])('http://localhost:3000/calc').then(data => {
      updateSelect(data.size, sizeBlock);
      updateSelect(data.material, materialBlock);
      updateSelect(data.options, optionsBlock);
    });
  };

  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = "Для расчета нужно выбрать размер картины и материал картины";
    } else if (promocodeBlock.value === 'PROMO') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  updateCalc();
  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
});

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[a-z]/ig, '');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  const allDropEvents = ['dragenter', 'dragleave', 'dragover', 'drop'];
  const inDropEvents = ['dragenter', 'dragover'];
  const outDropEnevts = ['dragleave', 'drop'];

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = "5px solid red";
    item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0,0.7)";
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = "none";
    item.closest('.file_upload').style.backgroundColor = "#ededed";
  }

  allDropEvents.forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  inDropEvents.forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  outDropEnevts.forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('.drop', e => {
      input.files = e.dataTransfer.files;
      const dots = arr[0].length > 6 ? "..." : '.';
      const arr = input.files[0].name.split('.');
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
});

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');
  const selectors = [{
    'btn': '.all',
    'mark': '.all'
  }, {
    'btn': '.lovers',
    'mark': '.lovers'
  }, {
    'btn': '.chef',
    'mark': '.chef'
  }, {
    'btn': '.girl',
    'mark': '.girl'
  }, {
    'btn': '.guy',
    'mark': '.guy'
  }, {
    'btn': '.grandmother',
    'mark': ''
  }, {
    'btn': '.granddad',
    'mark': ''
  }];

  const typeFilter = markType => {
    markAll.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(item => {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  const bindBtn = () => {
    selectors.forEach(({
      btn,
      mark
    }) => {
      const menuItem = menu.querySelector(btn);

      if (mark == '') {
        menuItem.addEventListener('click', () => typeFilter());
      } else {
        const markItem = wrapper.querySelectorAll(mark);
        menuItem.addEventListener('click', () => typeFilter(markItem));
      }
    });
  };

  bindBtn();
  menu.addEventListener('click', e => {
    const target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });
});

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  console.log('Случайно удалил формы');
});

/***/ }),

/***/ "./src/js/modules/index.js":
/*!*********************************!*\
  !*** ./src/js/modules/index.js ***!
  \*********************************/
/*! exports provided: modals, sliders, forms, mask, checkTextInputs, showMoreStyles, calc, filter, picture, accordion, burger, scroll, drop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/js/modules/modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modals", function() { return _modals__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sliders */ "./src/js/modules/sliders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sliders", function() { return _sliders__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/js/modules/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forms", function() { return _forms__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask */ "./src/js/modules/mask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return _mask__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkTextInputs", function() { return _checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMoreStyles", function() { return _showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc */ "./src/js/modules/calc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return _calc__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter */ "./src/js/modules/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picture */ "./src/js/modules/picture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "picture", function() { return _picture__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accordion */ "./src/js/modules/accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./burger */ "./src/js/modules/burger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "burger", function() { return _burger__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scroll */ "./src/js/modules/scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drop */ "./src/js/modules/drop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _drop__WEBPACK_IMPORTED_MODULE_12__["default"]; });
















/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  const setCursorPosition = (pos, elem) => {
    console.log(pos);
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    // console.log('value', this.value)
    const matrix = '(___) ___-__-__';
    const def = matrix.replace(/\D/g, '');
    let i = 0;
    let val = this.value.replace(/[+7\D]/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    console.log('def', def);
    console.log('val', val);
    this.value = '+7 ' + matrix.replace(/./g, symbol => {
      if (/[_\d]/.test(symbol) && i < val.length) {
        return val.charAt(i++);
      } else if (i >= val.length) {
        return '';
      } else {
        return symbol;
      } // return /[_\d]/.test(symbol) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : symbol

    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  const inputs = document.querySelectorAll(selector);
  inputs.forEach(item => {
    item.addEventListener('input', createMask);
    item.addEventListener('focus', createMask);
    item.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed;

  const bindModal = (triggerSelector, modalSelector, closeSelector, destroy = false) => {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = True;
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  };

  const calcScroll = () => {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };

  const openByScroll = selector => {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  };

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 100000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/picture.js":
/*!***********************************!*\
  !*** ./src/js/modules/picture.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);

  const showImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => p.style.display = 'none');
  };

  const hideImg = block => {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => p.style.display = 'block');
  };

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => showImg(block));
    block.addEventListener('mouseout', () => hideImg(block));
  });
});

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  }); // Сопсоб 2

  const links = document.querySelectorAll('[href^="#"]'),
        speed = 0.1;
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  }); // Способ 1
  // const element = document.documentElement,
  //     body = document.body
  // const calcScroll = () => {
  //     upElem.addEventListener('click', function (e) {
  //         const scrollTop = Math.round(body.scrollTop || element.scrollTop)
  //         if (this.hash !== '') {
  //             e.preventDefault()
  //             let hashElement = document.querySelector(this.hash),
  //                 hashElementTop = 0
  //             while (hashElement.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop
  //                 hashElement = hashElement.offsetParent
  //             }
  //             hashElementTop = Math.round(hashElementTop)
  //             smoothScroll(scrollTop, hashElementTop, this.hash)
  //         }
  //     })
  // }
  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed
  //     if (to > from) {
  //         speed = 30
  //     } else {
  //         speed = -30
  //     }
  //     const move = setInterval(function () {
  //         const scrollTop = Math.round(body.scrollTop || element.scrollTop)
  //         if (prevScrollTop === scrollTop ||
  //             to > from && scrollTop >= to ||
  //             to < from && scrollTop <= to
  //         ) {
  //             clearInterval(move)
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
  //         } else {
  //             body.scrollTop += speed
  //             element.scrollTop += speed
  //             prevScrollTop = scrollTop
  //         }
  //     }, timeInterval)
  // }
  // calcScroll()
});

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

/* harmony default export */ __webpack_exports__["default"] = ((trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  const createCards = res => {
    res.forEach(({
      src,
      title,
      link
    }) => {
      const card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                 <div class="styles-block">
                     <img src="${src}" alt>
                     <h4>${title}</h4>
                     <a href="${link}">Подробнее</a>
                 </div>
            `;
      document.querySelector(wrapper).append(card);
    });
  };

  btn.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getData"])('http://localhost:3000/styles').then(res => {
      createCards(res);
      this.remove();
    }).catch(err => {
      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', 'assets/img/fail.png');
      this.innerHTML = '';
      this.append(statusImg);
    });
  });
});

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
      paused = false;
  const items = document.querySelectorAll(slides);

  const showSlides = n => {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  };

  showSlides(slideIndex);

  const changeSlides = n => showSlides(slideIndex += n);

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}

  const activateAnimation = () => {
    if (dir === 'vertical') {
      paused = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 2000);
    } else {
      paused = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.add('slideInRight');
      }, 2000);
    }
  };

  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};
const getData = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Could not fetch: ' + url + 'status: ' + res.status);
  }

  return await res.json();
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map