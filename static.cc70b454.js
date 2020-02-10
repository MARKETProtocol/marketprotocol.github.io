(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		14: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./templates/" + ({"0":"src/containers/Team","1":"src/containers/Join","2":"src/containers/Video","3":"src/containers/Subscribe","4":"src/containers/Home","5":"src/containers/Partners","6":"src/containers/Jobs","7":"src/containers/About","8":"src/containers/TokenInterest","9":"src/containers/TokenThanks","10":"src/containers/Thanks","11":"src/containers/404","12":"src/components/Terms","13":"src/components/Privacy"}[chunkId]||chunkId) + "." + {"0":"284b3744","1":"c76db9e7","2":"585d5008","3":"223c642c","4":"f908dc72","5":"9aa4a8bb","6":"9a69882b","7":"3babf519","8":"dab8b26a","9":"9ab92be0","10":"6357fe70","11":"90a5de7c","12":"9e7b1549","13":"e13c935c"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var size = exports.size = {
    desktop: '2560px',
    desktopL: '3840px',
    desktopM: '1920px',
    desktopS: '1600px',
    laptop: '1024px',
    laptopL: '1440px',
    laptopM: '1280px',
    mobileL: '425px',
    mobileM: '375px',
    mobileS: '320px',
    tablet: '768px',
    tabletL: '991px'
};
var device = exports.device = {
    desktop: '(min-width: ' + size.desktop + ')',
    desktopL: '(min-width: ' + size.desktopL + ')',
    desktopM: '(min-width: ' + size.desktopM + ')',
    desktopS: '(min-width: ' + size.desktopS + ')',
    laptop: '(min-width: ' + size.laptop + ')',
    laptopL: '(min-width: ' + size.laptopL + ')',
    laptopM: '(min-width: ' + size.laptopM + ')',
    mobileL: '(min-width: ' + size.mobileL + ')',
    mobileM: '(min-width: ' + size.mobileM + ')',
    mobileS: '(min-width: ' + size.mobileS + ')',
    tablet: '(min-width: ' + size.tablet + ')',
    tabletL: '(min-width: ' + size.tabletL + ')'
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EnvironmentConstant = {
    ENVIRONMENTS: {
        PRODUCTION: 'production',
        TEST: 'test'
    },
    MAIL_LISTER_API: process.env.MAIL_LISTER_API || 'http://localhost:3210',
    PROD: {
        GOOGLE_TAG_MANAGER: 'GTM-TN3ZVBH',
        URL: 'marketprotocol.io'
    },
    STAGING: {
        GOOGLE_TAG_MANAGER: 'GTM-WDMKD33',
        URL: 'dev.website.marketprotocol.io'
    },
    getNodeEnv: function getNodeEnv() {
        return "production";
    }
};
exports.default = EnvironmentConstant;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EmailConstant = {
    PARTNERS_EMAIL: {
        body: 'Please%20explain%20your%20company%20and%20your%20interest%20' + 'in%20the%20protocol%20as%20well%20as%20any%20other%20helpful%20details.',
        email: 'partnerships@marketprotocol.io',
        subject: 'Partnership%20with%20MARKET%20Protocol'
    }
};
exports.default = EmailConstant;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo_light.4ffa06c4.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjMgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibWFya2V0LXNpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NTYuMDAwMDAwLCAtNjY5My4wMDAwMDApIiBmaWxsPSIjMTgxRTI2Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTk2My4wNjU5NTEsNjcwMy41NDYzMSBMOTY0LjY3NTg3OSw2NzA4LjgwODI3IEw5NjUuMDM0MDA2LDY3MDUuNDc2MTggQzk2NS4wMzQwMDYsNjcwNS40NzYxOCA5NzEuMjQ4NjYsNjY5OS45MTc4MiA5NzQuNzk1NDMyLDY2OTYuNzUwMjEgQzk3NC44OTcyODQsNjY5Ni42NTczOCA5NzQuOTEwNDI3LDY2OTYuNTAxMDQgOTc0LjgyNTAwMiw2Njk2LjM5MTkyIEM5NzQuNzM5NTc3LDY2OTYuMjgyODEgOTc0LjU4MTg3LDY2OTYuMjU2NzUgOTc0LjQ2NTIzMiw2Njk2LjMzMTY3IEM5NzAuMzU4MjcxLDY2OTguOTMwODkgOTYzLjA2NTk1MSw2NzAzLjU0NjMxIDk2My4wNjU5NTEsNjcwMy41NDYzMSBNOTc1LjM3MjA0OSw2NzExLjEyOTAxIEM5NzUuMjkzMTk1LDY3MTEuNDkzODEgOTc1LjAzMTk5Myw2NzExLjc5NTEgOTc0LjY3ODc5NCw2NzExLjkyODY1IEM5NzQuMzI1NTk1LDY3MTIuMDYwNTYgOTczLjkyNjM5OSw2NzEyLjAwNjgyIDk3My42MTc1NTUsNjcxMS43OTAyMiBDOTcxLjY3NTc4NCw2NzEwLjQxODk1IDk2OC4yNTIyMjEsNjcwNy45MzIwOSA5NjguMjUyMjIxLDY3MDcuOTMyMDkgQzk2OC4yNTIyMjEsNjcwNy45MzIwOSA5NjYuNDUxNzI5LDY3MDkuNjE3NjggOTY1LjI4Njk5NSw2NzEwLjcwNzIxIEM5NjUuMDgwMDA0LDY3MTAuOTAxMDEgOTY0Ljc4NTk0Niw2NzEwLjk3NTkyIDk2NC41MDgzMTUsNjcxMC45MDQyNiBDOTY0LjIzMjMyOCw2NzEwLjgzMjYxIDk2NC4wMjIwNTEsNjcxMC42MjQxNSA5NjMuOTMwMDU1LDY3MTAuMzU3MDYgQzk2My4yMDU1ODcsNjcwOC4yMzk5IDk2MS44MTQxNDksNjcwNC4wNzM5NyA5NjEuODE0MTQ5LDY3MDQuMDczOTcgQzk2MS44MTQxNDksNjcwNC4wNzM5NyA5NTguODM3NDIzLDY3MDMuMTM3NTMgOTU2LjU2ODczOCw2NzAyLjQ2NDkzIEM5NTYuMjQwMTgxLDY3MDIuMzY3MjEgOTU2LjAxMTgzNCw2NzAyLjA3NTY5IDk1Ni4wMDAzMzUsNjcwMS43NDAyIEM5NTUuOTkwNDc4LDY3MDEuNDAzMDkgOTU2LjE5OTExMiw2NzAxLjA5ODU0IDk1Ni41MTk0NTUsNjcwMC45Nzk2NSBDOTYxLjU3NzU4OCw2Njk5LjEyNDY5IDk3My45NTI2ODMsNjY5NC41MjIzMSA5NzcuOTcwOTM0LDY2OTMuMDQ2ODEgQzk3OC4yMzA0OTQsNjY5Mi45NTIzNSA5NzguNTIyOTEsNjY5My4wMDI4NCA5NzguNzM0ODI5LDY2OTMuMTgwMzUgQzk3OC45NDUxMDUsNjY5My4zNTc4NyA5NzkuMDQyMDMsNjY5My42MzQ3MyA5NzguOTgyODg5LDY2OTMuOTAxODIgQzk3OC4yMjcyMDgsNjY5Ny40MjkzMyA5NzYuMjA0OTQxLDY3MDcuMjQ5NzEgOTc1LjM3MjA0OSw2NzExLjEyOTAxIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyBulletList = exports.HeroDescription = exports.HeroHeader = exports.UseCaseIllustration = exports.SecondaryDescription = exports.SecondaryHeader = exports.Description = exports.SectionHeader = exports.ContainerWrapper = exports.Section = exports.MarketButton = exports.ContentWrapper = exports.TextWrapper = exports.MarketDescriptionWrapper = exports.MarketDescriptionText = exports.SectionWrapper = exports.BioModalContentWrap = exports.HeroText = exports.MarketText = exports.MarketHeader = exports.MarketList = undefined;

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _templateObject = _taggedTemplateLiteral(['\n.bio-wrap {\n  visibility: hidden;\n  opacity: 0;\n  transition: 250ms;\n\n  &.visible {\n    visibility: visible;\n    opacity: 1;\n    transition: 250ms;\n  }\n}\n\n.become-opaque-on-hover {\n  opacity: 1;\n  transition: 250ms;\n\n  &:hover {\n    opacity: 0.75;\n    transition: 250ms;\n  }\n}\n\n\niframe {\n  width: 100%;\n  height: 80rem;\n  border: 0px;\n  margin-top: 2rem;\n}\n\n.orange-link {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 700;\n  background-color: #0E121A;\n  padding: 7px 12px;\n  border-radius: 100px;\n}\n\n.orange-link:hover {\n  color: #fff;\n  background-color: #232C38;\n}\n\n#market .ant-message-notice-content {\n  background: white;\n  color: black;\n}\n\n.ant-select-dropdown-menu-item:hover {\n  background-color: #e6f7ff !important;\n}\n.ant-select-dropdown-menu-item-disabled:hover {\n  background-color: #fff !important;\n}\n.ant-select-dropdown-menu-item-selected,\n.ant-select-dropdown-menu-item-selected:hover {\n  background-color: #fafafa !important;\n}\n.ant-select-dropdown-menu-item-active {\n  background-color: #e6f7ff !important;\n\n.explainer-modal .ant-modal-close-x {\n  color: white;\n}\n'], ['\n.bio-wrap {\n  visibility: hidden;\n  opacity: 0;\n  transition: 250ms;\n\n  &.visible {\n    visibility: visible;\n    opacity: 1;\n    transition: 250ms;\n  }\n}\n\n.become-opaque-on-hover {\n  opacity: 1;\n  transition: 250ms;\n\n  &:hover {\n    opacity: 0.75;\n    transition: 250ms;\n  }\n}\n\n\niframe {\n  width: 100%;\n  height: 80rem;\n  border: 0px;\n  margin-top: 2rem;\n}\n\n.orange-link {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 700;\n  background-color: #0E121A;\n  padding: 7px 12px;\n  border-radius: 100px;\n}\n\n.orange-link:hover {\n  color: #fff;\n  background-color: #232C38;\n}\n\n#market .ant-message-notice-content {\n  background: white;\n  color: black;\n}\n\n.ant-select-dropdown-menu-item:hover {\n  background-color: #e6f7ff !important;\n}\n.ant-select-dropdown-menu-item-disabled:hover {\n  background-color: #fff !important;\n}\n.ant-select-dropdown-menu-item-selected,\n.ant-select-dropdown-menu-item-selected:hover {\n  background-color: #fafafa !important;\n}\n.ant-select-dropdown-menu-item-active {\n  background-color: #e6f7ff !important;\n\n.explainer-modal .ant-modal-close-x {\n  color: white;\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 36px;\n  font-weight: 500;\n  line-height: 1.1;\n  text-align: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 26px;\n  }\n\n  @media ', ' and (max-width: 1120px) {\n    font-size: 28px;\n  }\n'], ['\n  font-size: 36px;\n  font-weight: 500;\n  line-height: 1.1;\n  text-align: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 26px;\n  }\n\n  @media ', ' and (max-width: 1120px) {\n    font-size: 28px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 18px;\n  font-weight: 300;\n\n  @media (max-width: ', ') {\n    font-size: 14px;\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n'], ['\n  font-size: 18px;\n  font-weight: 300;\n\n  @media (max-width: ', ') {\n    font-size: 14px;\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 5px 0;\n  list-style: none;\n  font-weight: 300;\n  margin-left: 30px;\n  font-size: 16px;\n  :before {\n    content: \'\';\n    line-height: 1em;\n    width: 10px;\n    height: 10px;\n    background-color: #00e2c1;\n    float: left;\n    margin-top: 6px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-left: -20px;\n  }\n'], ['\n  padding: 5px 0;\n  list-style: none;\n  font-weight: 300;\n  margin-left: 30px;\n  font-size: 16px;\n  :before {\n    content: \'\';\n    line-height: 1em;\n    width: 10px;\n    height: 10px;\n    background-color: #00e2c1;\n    float: left;\n    margin-top: 6px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-left: -20px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 18px;\n  padding: 10px 0;\n  list-style: none;\n  font-weight: 300;\n  margin-left: 20px;\n  :before {\n    content: \'\';\n    line-height: 1em;\n    width: 10px;\n    height: 10px;\n    background-color: #00e2c1;\n    float: left;\n    margin-top: 10px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-left: -20px;\n  }\n  @media (max-width: ', ') {\n    font-size: 14px;\n    :before {\n      margin-top: 5px;\n    }\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n'], ['\n  font-size: 18px;\n  padding: 10px 0;\n  list-style: none;\n  font-weight: 300;\n  margin-left: 20px;\n  :before {\n    content: \'\';\n    line-height: 1em;\n    width: 10px;\n    height: 10px;\n    background-color: #00e2c1;\n    float: left;\n    margin-top: 10px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-left: -20px;\n  }\n  @media (max-width: ', ') {\n    font-size: 14px;\n    :before {\n      margin-top: 5px;\n    }\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 25px;\n\n  @media ', ' {\n    font-size: 16px;\n  }\n  @media ', ' {\n    font-size: 22px;\n  }\n'], ['\n  font-size: 25px;\n\n  @media ', ' {\n    font-size: 16px;\n  }\n  @media ', ' {\n    font-size: 22px;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding: 50px;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 70px;\n  }\n\n  @media ', ' {\n    padding: 100px;\n  }\n\n  @media ', ' {\n    padding: 100px 150px;\n  }\n\n  @media ', ' {\n    padding: 150px 350px;\n  }\n'], ['\n  padding: 50px;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 70px;\n  }\n\n  @media ', ' {\n    padding: 100px;\n  }\n\n  @media ', ' {\n    padding: 100px 150px;\n  }\n\n  @media ', ' {\n    padding: 150px 350px;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  width: 515px;\n\n  @media (max-width: ', ') {\n    width: 350px;\n  }\n'], ['\n  width: 515px;\n\n  @media (max-width: ', ') {\n    width: 350px;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  padding: 70px;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 0px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    padding: 50px;\n  }\n\n  @media ', ' {\n    padding: 100px 150px;\n  }\n\n  @media ', ' {\n    padding: 100px 250px;\n  }\n'], ['\n  padding: 70px;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 0px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    padding: 50px;\n  }\n\n  @media ', ' {\n    padding: 100px 150px;\n  }\n\n  @media ', ' {\n    padding: 100px 250px;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  color: #f0f0f0;\n  font-size: 50px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  line-height: 1.2;\n\n  @media ', ' {\n    font-size: 28px;\n    margin-bottom: 0px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    font-size: 38px;\n    margin-bottom: 0px;\n  }\n\n  @media ', ' {\n    font-size: 38px;\n    margin-bottom: 30px;\n  }\n\n  @media ', ' {\n    font-size: 60px;\n  }\n'], ['\n  color: #f0f0f0;\n  font-size: 50px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  line-height: 1.2;\n\n  @media ', ' {\n    font-size: 28px;\n    margin-bottom: 0px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    font-size: 38px;\n    margin-bottom: 0px;\n  }\n\n  @media ', ' {\n    font-size: 38px;\n    margin-bottom: 30px;\n  }\n\n  @media ', ' {\n    font-size: 60px;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  padding: 0 60px 70px 60px;\n\n  @media (max-width: ', ') {\n    padding: 0 20px 50px 20px;\n  }\n'], ['\n  padding: 0 60px 70px 60px;\n\n  @media (max-width: ', ') {\n    padding: 0 20px 50px 20px;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n    font-size: 16px\n    font-weight: 300;\n    line-height: 1.5rem;\n    text-align: justify;\n'], ['\n    font-size: 16px\n    font-weight: 300;\n    line-height: 1.5rem;\n    text-align: justify;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  && {\n    min-width: 140px;\n    font-weight: 800\n    font-size: 20px;\n    padding: 0 30px;\n    background-color: ', ';\n    color: ', ';\n    border: none;\n  }\n\n  &&:hover {\n    opacity: 0.8;\n  }\n'], ['\n  && {\n    min-width: 140px;\n    font-weight: 800\n    font-size: 20px;\n    padding: 0 30px;\n    background-color: ', ';\n    color: ', ';\n    border: none;\n  }\n\n  &&:hover {\n    opacity: 0.8;\n  }\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  background: ', ';\n  height: ', 'px;\n  padding: 55px 0 70px 0;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    padding: 50px 25px;\n  }\n'], ['\n  background: ', ';\n  height: ', 'px;\n  padding: 55px 0 70px 0;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    padding: 50px 25px;\n  }\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  margin: auto;\n  height: inherit;\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media ', ' {\n    max-width: 720px;\n  }\n\n  @media ', ' {\n    max-width: 960px;\n  }\n\n  @media ', ' {\n    max-width: 1120px;\n  }\n'], ['\n  margin: auto;\n  height: inherit;\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media ', ' {\n    max-width: 720px;\n  }\n\n  @media ', ' {\n    max-width: 960px;\n  }\n\n  @media ', ' {\n    max-width: 1120px;\n  }\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  font-size: 36px;\n  color: ', ';\n  letter-spacing: -0.45px;\n  line-height: 38px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 30px;\n\n    @media (max-width: 1024px) {\n      font-size: 32px;\n    }\n  }\n'], ['\n  font-size: 36px;\n  color: ', ';\n  letter-spacing: -0.45px;\n  line-height: 38px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 30px;\n\n    @media (max-width: 1024px) {\n      font-size: 32px;\n    }\n  }\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  font-size: 20px;\n  color: ', ';\n  margin-bottom: 0;\n  font-weight: 400;\n\n  @media (max-width: 1024px) {\n    font-size: 16px;\n  }\n'], ['\n  font-size: 20px;\n  color: ', ';\n  margin-bottom: 0;\n  font-weight: 400;\n\n  @media (max-width: 1024px) {\n    font-size: 16px;\n  }\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 28px;\n'], ['\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 28px;\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  color: #181e26;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 22px;\n  font-weight: 400;\n'], ['\n  font-size: 16px;\n  color: #181e26;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 22px;\n  font-weight: 400;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  background: #00e2c1;\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 100%;\n  }\n\n  span {\n    position: absolute;\n    top: 0px;\n    left: 15px;\n    background: black;\n    color: white;\n    padding: 5px 10px;\n    font-weight: 700;\n  }\n\n  @media (max-width: 991px) {\n    img {\n      width: 250px;\n    }\n  }\n'], ['\n  background: #00e2c1;\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 100%;\n  }\n\n  span {\n    position: absolute;\n    top: 0px;\n    left: 15px;\n    background: black;\n    color: white;\n    padding: 5px 10px;\n    font-weight: 700;\n  }\n\n  @media (max-width: 991px) {\n    img {\n      width: 250px;\n    }\n  }\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n  font-size: 42px;\n  font-weight: 800;\n  color: white;\n  line-height: 44px;\n  margin-bottom: 15px;\n\n  @media (max-width: 1024px) {\n    font-size: 36px;\n    letter-spacing: -0.5px;\n  }\n'], ['\n  font-size: 42px;\n  font-weight: 800;\n  color: white;\n  line-height: 44px;\n  margin-bottom: 15px;\n\n  @media (max-width: 1024px) {\n    font-size: 36px;\n    letter-spacing: -0.5px;\n  }\n']),
    _templateObject22 = _taggedTemplateLiteral(['\n  font-size: 20px;\n  font-weight: 300;\n  color: #fff;\n  margin-bottom: 35px;\n  line-height: 28px;\n\n  @media (max-width: 1024px) {\n    font-size: 18px;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 16px;\n    line-height: 22px;\n  }\n'], ['\n  font-size: 20px;\n  font-weight: 300;\n  color: #fff;\n  margin-bottom: 35px;\n  line-height: 28px;\n\n  @media (max-width: 1024px) {\n    font-size: 18px;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 16px;\n    line-height: 22px;\n  }\n']);

__webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoints = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);
var MarketHeader = (0, _styledComponents2.default)('h2')(_templateObject2, function (props) {
  return props.align || '';
}, _breakpoints.size.laptop, _breakpoints.device.laptop);
var MarketText = _styledComponents2.default.p(_templateObject3, _breakpoints.size.laptop, _breakpoints.device.desktopS);
var PrivacyBulletList = _styledComponents2.default.li(_templateObject4);
var MarketList = _styledComponents2.default.li(_templateObject5, _breakpoints.size.laptop, _breakpoints.device.desktopS);
var MarketDescriptionText = MarketText.extend(_templateObject6, _breakpoints.device.mobileS, _breakpoints.device.tablet);
var MarketDescriptionWrapper = _styledComponents2.default.section(_templateObject7, _breakpoints.device.mobileL, _breakpoints.size.tablet, _breakpoints.device.tablet, _breakpoints.device.laptopL, _breakpoints.device.desktopS);
var BioModalContentWrap = _styledComponents2.default.div(_templateObject8, _breakpoints.size.tablet);
var SectionWrapper = _styledComponents2.default.section(_templateObject9, _breakpoints.device.mobileS, _breakpoints.size.mobileL, _breakpoints.device.mobileL, _breakpoints.size.laptop, _breakpoints.device.desktopS, _breakpoints.device.desktopM);
var HeroText = _styledComponents2.default.div(_templateObject10, _breakpoints.device.mobileS, _breakpoints.size.mobileS, _breakpoints.size.tablet, _breakpoints.device.tablet, _breakpoints.device.laptop);
var TextWrapper = _styledComponents2.default.div(_templateObject11, _breakpoints.size.mobileL);
var ContentWrapper = _styledComponents2.default.p(_templateObject12);
var MarketButton = (0, _styledComponents2.default)(_button2.default)(_templateObject13, function (props) {
  return props.bg;
}, function (props) {
  return props.color;
});
var Section = (0, _styledComponents2.default)('section')(_templateObject14, function (props) {
  return props.bg;
}, function (props) {
  return props.height;
});
var ContainerWrapper = _styledComponents2.default.div(_templateObject15, _breakpoints.device.tablet, _breakpoints.device.laptop, _breakpoints.device.laptopM);
var SectionHeader = (0, _styledComponents2.default)('h2')(_templateObject16, function (props) {
  return props.color || '#000';
});
var Description = (0, _styledComponents2.default)('p')(_templateObject17, function (props) {
  return props.color || '#000';
});
var SecondaryHeader = _styledComponents2.default.h2(_templateObject18);
var SecondaryDescription = _styledComponents2.default.p(_templateObject19);
var UseCaseIllustration = _styledComponents2.default.div(_templateObject20);
var HeroHeader = _styledComponents2.default.h1(_templateObject21);
var HeroDescription = _styledComponents2.default.p(_templateObject22);
exports.MarketList = MarketList;
exports.MarketHeader = MarketHeader;
exports.MarketText = MarketText;
exports.HeroText = HeroText;
exports.BioModalContentWrap = BioModalContentWrap;
exports.SectionWrapper = SectionWrapper;
exports.MarketDescriptionText = MarketDescriptionText;
exports.MarketDescriptionWrapper = MarketDescriptionWrapper;
exports.TextWrapper = TextWrapper;
exports.ContentWrapper = ContentWrapper;
exports.MarketButton = MarketButton;
exports.Section = Section;
exports.ContainerWrapper = ContainerWrapper;
exports.SectionHeader = SectionHeader;
exports.Description = Description;
exports.SecondaryHeader = SecondaryHeader;
exports.SecondaryDescription = SecondaryDescription;
exports.UseCaseIllustration = UseCaseIllustration;
exports.HeroHeader = HeroHeader;
exports.HeroDescription = HeroDescription;
exports.PrivacyBulletList = PrivacyBulletList;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailLink = exports.CtaMarketButton = exports.SectionWrapper = undefined;

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _modal = __webpack_require__(18);

var _modal2 = _interopRequireDefault(_modal);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(13);

var _icon2 = _interopRequireDefault(_icon);

var _col = __webpack_require__(11);

var _col2 = _interopRequireDefault(_col);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: #f0f0f0;\n  padding: 70px 70px;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 70px 30px 0px 30px;\n  }\n'], ['\n  background: #f0f0f0;\n  padding: 70px 70px;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 70px 30px 0px 30px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 90%;\n  margin: 0 auto;\n\n  @media ', ' and (max-width: ', ') {\n    width: 90%;\n    padding: 0px;\n    margin-bottom: 70px;\n  }\n'], ['\n  width: 90%;\n  margin: 0 auto;\n\n  @media ', ' and (max-width: ', ') {\n    width: 90%;\n    padding: 0px;\n    margin-bottom: 70px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  && {\n    width: 100%;\n    text-align: left;\n    font-weight: 500;\n    font-size: 18px;\n  }\n'], ['\n  && {\n    width: 100%;\n    text-align: left;\n    font-weight: 500;\n    font-size: 18px;\n  }\n']);

__webpack_require__(10);

__webpack_require__(19);

__webpack_require__(4);

__webpack_require__(14);

__webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MarketSubscriberForm = __webpack_require__(60);

var _MarketSubscriberForm2 = _interopRequireDefault(_MarketSubscriberForm);

var _Styles = __webpack_require__(23);

var _breakpoints = __webpack_require__(5);

var _email = __webpack_require__(20);

var _email2 = _interopRequireDefault(_email);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionWrapper = exports.SectionWrapper = _styledComponents2.default.section(_templateObject, _breakpoints.device.mobileS, _breakpoints.size.tablet);
var ButtonContainer = (0, _styledComponents2.default)(_col2.default)(_templateObject2, _breakpoints.device.mobileS, _breakpoints.size.tablet);
var CtaMarketButton = exports.CtaMarketButton = _Styles.MarketButton.extend(_templateObject3);
var emailLink = exports.emailLink = 'mailto:' + _email2.default.PARTNERS_EMAIL.email + '?subject=' + _email2.default.PARTNERS_EMAIL.subject + '&body=' + _email2.default.PARTNERS_EMAIL.body;

var Cta = function (_React$Component) {
  _inherits(Cta, _React$Component);

  function Cta(props) {
    _classCallCheck(this, Cta);

    var _this = _possibleConstructorReturn(this, (Cta.__proto__ || Object.getPrototypeOf(Cta)).call(this, props));

    _this.handleCancel = function () {
      _this.setState({
        explainerPopUpVisible: false
      });
    };
    _this.getExplainerModalHeight = function () {
      if (window.innerWidth > 800) {
        return (window.innerWidth - 350) / 1.77 + 'px';
      }
      return window.innerWidth + 'px';
    };
    _this.getExplainerModalWidth = function () {
      if (window.innerWidth > 800) {
        return window.innerWidth - 350;
      }
      return window.innerWidth - 100;
    };
    _this.state = {
      explainerPopUpVisible: false,
      subscriptionPopUpVisible: !!_this.props.subscriptionPopUpVisible
    };
    return _this;
  }

  _createClass(Cta, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          subscriptionPopUpVisible = _state.subscriptionPopUpVisible,
          explainerPopUpVisible = _state.explainerPopUpVisible;
      var _props = this.props,
          bg = _props.bg,
          _props$beforeIcon = _props.beforeIcon,
          beforeIcon = _props$beforeIcon === undefined ? '' : _props$beforeIcon,
          onlyShowSubscribeButton = _props.onlyShowSubscribeButton,
          showTeamButton = _props.showTeamButton,
          showExplainerAndNewsLetter = _props.showExplainerAndNewsLetter,
          text = _props.text,
          _props$afterIcon = _props.afterIcon,
          afterIcon = _props$afterIcon === undefined ? true : _props$afterIcon;

      if (onlyShowSubscribeButton) {
        return _react2.default.createElement(
          'div',
          { style: { width: '100%', height: '100%' } },
          _react2.default.createElement(
            _button2.default,
            { onClick: function onClick() {
                return _this2.setState({ subscriptionPopUpVisible: true });
              }, type: 'primary', id: 'subscribe-button', style: {
                alignItems: 'center',
                display: 'flex',
                justifyContent: afterIcon ? 'space-between' : 'center',
                padding: afterIcon || beforeIcon ? '' : '0 4rem',
                width: afterIcon || beforeIcon ? '100%' : ''
              } },
            !!beforeIcon && _react2.default.createElement('img', { alt: 'join mailing list', src: beforeIcon, style: { marginRight: '10px', width: '19px' } }),
            text || 'Join our Newsletter' + ' ',
            afterIcon && _react2.default.createElement(_icon2.default, { type: 'arrow-right', style: { position: 'absolute', top: '35%', right: '15px' } })
          ),
          _react2.default.createElement(_MarketSubscriberForm2.default, { onCancel: function onCancel() {
              return _this2.setState({ subscriptionPopUpVisible: false });
            }, visible: subscriptionPopUpVisible })
        );
      }
      if (showExplainerAndNewsLetter) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _button2.default,
            { onClick: function onClick() {
                return _this2.setState({ explainerPopUpVisible: true });
              }, type: 'primary', style: {
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: '20px',
                textAlign: 'left',
                width: '180px'
              } },
            'Watch Video',
            _react2.default.createElement(_icon2.default, { type: 'play-circle' })
          ),
          _react2.default.createElement(
            _modal2.default,
            { className: 'explainer-modal', width: this.getExplainerModalWidth(), visible: explainerPopUpVisible, footer: null, onCancel: this.handleCancel, destroyOnClose: true, style: {
                height: this.getExplainerModalHeight(),
                padding: '0'
              }, bodyStyle: {
                backgroundColor: 'transparent',
                height: this.getExplainerModalHeight(),
                padding: '0'
              } },
            _react2.default.createElement('iframe', { width: '100%', height: '100%', src: 'https://www.youtube.com/embed/s0uDfsWt474?rel=0&showinfo=0&autoplay=1', frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true })
          ),
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this2.setState({ subscriptionPopUpVisible: true });
              }, id: 'subscribe-button', style: {
                alignItems: 'center',
                display: 'flex',
                marginLeft: '5px',
                marginTop: '20px',
                textAlign: 'left'
              } },
            text || 'Join our Newsletter' + ' ',
            _react2.default.createElement(_icon2.default, { style: { marginLeft: '10px' }, type: 'arrow-right' })
          ),
          _react2.default.createElement(_MarketSubscriberForm2.default, { onCancel: function onCancel() {
              return _this2.setState({ subscriptionPopUpVisible: false });
            }, visible: subscriptionPopUpVisible })
        );
      }
      return _react2.default.createElement(
        SectionWrapper,
        { id: 'subscribe', style: {
            background: bg
          } },
        _react2.default.createElement(_MarketSubscriberForm2.default, { onCancel: function onCancel() {
            return _this2.setState({ subscriptionPopUpVisible: false });
          }, visible: subscriptionPopUpVisible }),
        _react2.default.createElement(
          _row2.default,
          { type: 'flex', justify: 'center' },
          _react2.default.createElement(
            _col2.default,
            { xs: 24, md: 12, lg: 9, xl: 6 },
            _react2.default.createElement(
              ButtonContainer,
              null,
              _react2.default.createElement(
                _Styles.SectionHeader,
                { style: { fontSize: '24px', marginBottom: '30px' } },
                'Join our Newsletter'
              ),
              _react2.default.createElement(
                CtaMarketButton,
                { onClick: function onClick() {
                    return _this2.setState({ subscriptionPopUpVisible: true });
                  }, id: 'subscribe-button', type: 'primary' },
                'Click To Subscribe',
                ' ',
                _react2.default.createElement(_icon2.default, { type: 'arrow-right', style: { position: 'absolute', top: '35%', right: '15px' } })
              )
            )
          ),
          showTeamButton ? _react2.default.createElement(
            _col2.default,
            { xs: 24, md: 12, lg: 9, xl: 6 },
            _react2.default.createElement(
              ButtonContainer,
              null,
              _react2.default.createElement(
                _Styles.SectionHeader,
                { style: { fontSize: '24px', marginBottom: '30px' } },
                'About our team'
              ),
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/team', style: { color: 'inherit', textDecoration: 'none' } },
                _react2.default.createElement(
                  CtaMarketButton,
                  { id: 'email-button', type: 'primary' },
                  'Click to know more',
                  _react2.default.createElement(_icon2.default, { type: 'arrow-right', style: {
                      position: 'absolute',
                      right: '15px',
                      top: '35%'
                    } })
                )
              )
            )
          ) : _react2.default.createElement(
            _col2.default,
            { xs: 24, md: 12, lg: 9, xl: 6 },
            _react2.default.createElement(
              ButtonContainer,
              null,
              _react2.default.createElement(
                _Styles.SectionHeader,
                { style: { fontSize: '24px', marginBottom: '30px' } },
                'Become a Partner'
              ),
              _react2.default.createElement(
                CtaMarketButton,
                { href: emailLink, id: 'email-button', type: 'primary' },
                'Email Us',
                ' ',
                _react2.default.createElement(_icon2.default, { type: 'arrow-right', style: { position: 'absolute', top: '35%', right: '15px' } })
              )
            )
          )
        )
      );
    }
  }]);

  return Cta;
}(_react2.default.Component);

exports.default = Cta;

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(48);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(49);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;
// Render your app

// Your top level component

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };
    // Render!
    render(_App2.default);
}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layout = __webpack_require__(7);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  #root {\n    min-width: 100%;\n    min-height: 100%;\n    display: flex;\n  }\n'], ['\n  #root {\n    min-width: 100%;\n    min-height: 100%;\n    display: flex;\n  }\n']);

__webpack_require__(8);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactHelmet = __webpack_require__(30);

var _styledComponents = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(50);

var _reactStaticRoutes = __webpack_require__(51);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Footer = __webpack_require__(61);

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = __webpack_require__(66);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Popup = __webpack_require__(73);

var _Popup2 = _interopRequireDefault(_Popup);

var _url = __webpack_require__(75);

var _environment = __webpack_require__(15);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);
var Content = _layout2.default.Content;

var isClient = typeof window !== 'undefined';
var isProduction = _environment2.default.getNodeEnv() === _environment2.default.ENVIRONMENTS.PRODUCTION;
var getGtmId = function getGtmId() {
    var origin = (0, _url.getLocationOrigin)();
    if (origin.indexOf(_environment2.default.STAGING.URL) !== -1) {
        return _environment2.default.STAGING.GOOGLE_TAG_MANAGER;
    } else if (origin.indexOf(_environment2.default.PROD.URL) !== -1) {
        return _environment2.default.PROD.GOOGLE_TAG_MANAGER;
    }
    return '';
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (isClient && isProduction) {
                var noscript = document.createElement('noscript');
                noscript.innerHTML = '<iframe ' + 'src="https://www.googletagmanager.com/ns.html?id=' + getGtmId() + '" ' + 'height="0" width="0" style="display: none; visibility: hidden">' + '</iframe>';
                document.body.insertBefore(noscript, document.body.firstChild);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactStatic.Router,
                null,
                _react2.default.createElement(
                    _layout2.default,
                    { style: { width: '100%' } },
                    _react2.default.createElement(
                        _reactHelmet.Helmet,
                        null,
                        _react2.default.createElement(
                            'title',
                            null,
                            'MARKET Protocol - Decentralized trading on the Ethereum blockchain - cryptocurrency derivatives, futures, and hedging'
                        ),
                        _react2.default.createElement('meta', { name: 'keywords', content: 'trustless trading, decentralized derivatives, decentralized futures, cryptocurrency derivatives, cryptocurrency futures, crypto shorting, crypto hedging, altcoin, bitcoin, ethereum, market protocol ico' }),
                        _react2.default.createElement('meta', { name: 'description', content: 'MARKET Protocol provides a secure, flexible, open source foundation for decentralized trading on the Ethereum blockchain' }),
                        isClient && isProduction && _react2.default.createElement(
                            'script',
                            { type: 'text/javascript' },
                            '\n                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n                new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n                j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n                \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n                })(window,document,\'script\',\'dataLayer\',\'' + getGtmId() + '\');\n              '
                        )
                    ),
                    _react2.default.createElement(_Navbar2.default, null),
                    _react2.default.createElement(
                        Content,
                        { style: { background: '#FFFFFF', width: '100%' } },
                        _react2.default.createElement(_reactStaticRoutes2.default, null)
                    ),
                    _react2.default.createElement(_Popup2.default, null),
                    _react2.default.createElement(_Footer2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(52);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(53);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(54);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(55);

var _reactUniversalComponent = __webpack_require__(56);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();
var universalOptions = {
    loading: function loading() {
        return null;
    },
    error: function error(props) {
        console.error(props.error);
        return _react2.default.createElement(
            'div',
            null,
            'An error occurred loading this page\'s template. More information is available in the console.'
        );
    }
};
var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Home',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/containers/Home', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Home');
    },
    resolve: function resolve() {
        return /*require.resolve*/(25);
    },
    chunkName: function chunkName() {
        return 'src/containers/Home';
    }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Video',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 34)), (0, _importCss3.default)('src/containers/Video', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Video');
    },
    resolve: function resolve() {
        return /*require.resolve*/(34);
    },
    chunkName: function chunkName() {
        return 'src/containers/Video';
    }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Team',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 35)), (0, _importCss3.default)('src/containers/Team', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Team');
    },
    resolve: function resolve() {
        return /*require.resolve*/(35);
    },
    chunkName: function chunkName() {
        return 'src/containers/Team';
    }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/About',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 36)), (0, _importCss3.default)('src/containers/About', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/About');
    },
    resolve: function resolve() {
        return /*require.resolve*/(36);
    },
    chunkName: function chunkName() {
        return 'src/containers/About';
    }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Partners',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 37)), (0, _importCss3.default)('src/containers/Partners', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Partners');
    },
    resolve: function resolve() {
        return /*require.resolve*/(37);
    },
    chunkName: function chunkName() {
        return 'src/containers/Partners';
    }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Jobs',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 38)), (0, _importCss3.default)('src/containers/Jobs', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Jobs');
    },
    resolve: function resolve() {
        return /*require.resolve*/(38);
    },
    chunkName: function chunkName() {
        return 'src/containers/Jobs';
    }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/TokenInterest',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 39)), (0, _importCss3.default)('src/containers/TokenInterest', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/TokenInterest');
    },
    resolve: function resolve() {
        return /*require.resolve*/(39);
    },
    chunkName: function chunkName() {
        return 'src/containers/TokenInterest';
    }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Subscribe',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 40)), (0, _importCss3.default)('src/containers/Subscribe', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Subscribe');
    },
    resolve: function resolve() {
        return /*require.resolve*/(40);
    },
    chunkName: function chunkName() {
        return 'src/containers/Subscribe';
    }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Thanks',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 41)), (0, _importCss3.default)('src/containers/Thanks', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Thanks');
    },
    resolve: function resolve() {
        return /*require.resolve*/(41);
    },
    chunkName: function chunkName() {
        return 'src/containers/Thanks';
    }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/TokenThanks',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 42)), (0, _importCss3.default)('src/containers/TokenThanks', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/TokenThanks');
    },
    resolve: function resolve() {
        return /*require.resolve*/(42);
    },
    chunkName: function chunkName() {
        return 'src/containers/TokenThanks';
    }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Join',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 43)), (0, _importCss3.default)('src/containers/Join', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Join');
    },
    resolve: function resolve() {
        return /*require.resolve*/(43);
    },
    chunkName: function chunkName() {
        return 'src/containers/Join';
    }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/components/Privacy',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 44)), (0, _importCss3.default)('src/components/Privacy', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/components/Privacy');
    },
    resolve: function resolve() {
        return /*require.resolve*/(44);
    },
    chunkName: function chunkName() {
        return 'src/components/Privacy';
    }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/components/Terms',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 45)), (0, _importCss3.default)('src/components/Terms', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/components/Terms');
    },
    resolve: function resolve() {
        return /*require.resolve*/(45);
    },
    chunkName: function chunkName() {
        return 'src/components/Terms';
    }
}), universalOptions);
var t_13 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/404',
    file: '/home/dan/market/website/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 46)), (0, _importCss3.default)('src/containers/404', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/404');
    },
    resolve: function resolve() {
        return /*require.resolve*/(46);
    },
    chunkName: function chunkName() {
        return 'src/containers/404';
    }
}), universalOptions);
// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13];
// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
    '404': 13
};
// Get template for given path
var getComponentForPath = function getComponentForPath(path) {
    path = (0, _reactStatic.cleanPath)(path);
    return global.componentsByTemplateID[global.templateIDsByPath[path]];
};
global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
    global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Comp = _props.component,
                render = _props.render,
                children = _props.children;

            var getFullComponentForPath = function getFullComponentForPath(path) {
                var Comp = getComponentForPath(path);
                var is404 = path === '404';
                if (!Comp) {
                    is404 = true;
                    Comp = getComponentForPath('404');
                }
                return function (newProps) {
                    return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
                };
            };
            var renderProps = {
                componentsByTemplateID: global.componentsByTemplateID,
                templateIDsByPath: global.templateIDsByPath,
                getComponentForPath: getFullComponentForPath
            };
            if (Comp) {
                return _react2.default.createElement(Comp, renderProps);
            }
            if (render || children) {
                return (render || children)(renderProps);
            }
            // This is the default auto-routing renderer
            return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
                    var Comp = getFullComponentForPath(props.location.pathname);
                    // If Comp is used as a component here, it triggers React to re-mount the entire
                    // component tree underneath during reconciliation, losing all internal state.
                    // By unwrapping it here we keep the real, static component exposed directly to React.
                    return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
                } });
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(57);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(58);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(59);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(16);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(18);

var _modal2 = _interopRequireDefault(_modal);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(26);

var _input2 = _interopRequireDefault(_input);

var _message2 = __webpack_require__(31);

var _message3 = _interopRequireDefault(_message2);

var _form = __webpack_require__(27);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 9px;\n  margin-top: 2rem;\n  opacity: 0.6;\n'], ['\n  font-size: 9px;\n  margin-top: 2rem;\n  opacity: 0.6;\n']);

__webpack_require__(19);

__webpack_require__(4);

__webpack_require__(28);

__webpack_require__(32);

__webpack_require__(29);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _isomorphicFetch = __webpack_require__(33);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _environment = __webpack_require__(15);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormItem = _form2.default.Item;
/**
 * Simple subscription form to subscribing to different GetResponse Lists.
 * Just specify the campaignToken for the list and it should work out of the box
 *
 */
var style = {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '1.2rem'
};
var DisclaimerText = (0, _styledComponents2.default)('small')(_templateObject);

var SubscriptionPopUp = function (_React$Component) {
    _inherits(SubscriptionPopUp, _React$Component);

    function SubscriptionPopUp(props) {
        _classCallCheck(this, SubscriptionPopUp);

        var _this = _possibleConstructorReturn(this, (SubscriptionPopUp.__proto__ || Object.getPrototypeOf(SubscriptionPopUp)).call(this, props));

        _this.state = {
            submitLoader: false
        };
        return _this;
    }

    _createClass(SubscriptionPopUp, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                visible = _props.visible,
                onCancel = _props.onCancel,
                form = _props.form;

            return _react2.default.createElement(
                _modal2.default,
                { bodyStyle: style, visible: visible, footer: null, width: '30rem', onCancel: onCancel },
                _react2.default.createElement(
                    _form2.default,
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();
                            _this2.setState({ submitLoader: true });
                            var errorHandler = function errorHandler(err) {
                                _message3.default.error('We\'re sorry but something has gone wrong.');
                                _this2.setState({ submitLoader: false });
                                console.error(err);
                            };
                            form.validateFields(function (errors, values) {
                                values.listId = 5326022;
                                if (!errors) {
                                    (0, _isomorphicFetch2.default)(_environment2.default.MAIL_LISTER_API, {
                                        body: JSON.stringify(values),
                                        method: 'post'
                                    }).then(function (response) {
                                        if (response.status === 200) {
                                            _message3.default.success('You are now subscribed!');
                                            form.resetFields();
                                            _this2.setState({ submitLoader: false });
                                            onCancel();
                                        } else {
                                            errorHandler(response);
                                        }
                                    }).catch(errorHandler);
                                } else {
                                    _this2.setState({ submitLoader: false });
                                }
                            });
                        }, style: { textAlign: 'center' }, acceptCharset: 'utf-8', method: 'post' },
                    _react2.default.createElement(
                        'h2',
                        { style: { textAlign: 'center', margin: '1rem 0  2rem 0' } },
                        'Join Our Newsletter'
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        form.getFieldDecorator('firstName', {
                            rules: [{
                                message: 'Please input your first name!',
                                required: true,
                                whitespace: true
                            }]
                        })(_react2.default.createElement(_input2.default, { name: 'firstName', type: 'text', placeholder: 'First name', style: {
                                backgroundColor: '#f6f6f6',
                                marginTop: '10px'
                            } }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        form.getFieldDecorator('lastName', {
                            rules: [{
                                message: 'Please input your last name!',
                                required: true,
                                whitespace: true
                            }]
                        })(_react2.default.createElement(_input2.default, { name: 'lastName', type: 'text', placeholder: 'Last name', style: {
                                backgroundColor: '#f6f6f6'
                            } }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        form.getFieldDecorator('email', {
                            rules: [{
                                message: 'Please input an Email!',
                                required: true
                            }, {
                                message: 'Please input a correct Email',
                                type: 'email'
                            }]
                        })(_react2.default.createElement(_input2.default, { name: 'email', placeholder: 'Your email', style: {
                                backgroundColor: '#f6f6f6'
                            } }))
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', htmlType: 'submit', style: {
                                marginTop: '1rem',
                                width: '10rem'
                            }, loading: this.state.submitLoader },
                        'Submit'
                    )
                ),
                _react2.default.createElement(
                    DisclaimerText,
                    null,
                    'You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at',
                    ' ',
                    _react2.default.createElement(
                        'a',
                        { href: 'info@marketprotocol.io' },
                        'info@marketprotocol.io'
                    ),
                    '. We will treat your information with respect. By clicking above, you agree that we may process your information in accordance with these terms.'
                )
            );
        }
    }]);

    return SubscriptionPopUp;
}(_react2.default.Component);

exports.default = _form2.default.create()(SubscriptionPopUp);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(11);

var _col2 = _interopRequireDefault(_col);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _layout = __webpack_require__(7);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 35px;\n\n  @media ', ' {\n    padding-right: 100px;\n  }\n'], ['\n  margin-top: 35px;\n\n  @media ', ' {\n    padding-right: 100px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #fff;\n  font-size: 14px;\n'], ['\n  color: #fff;\n  font-size: 14px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 22px 0;\n  font-weight: 300;\n\n  :hover {\n    color: #00e2c1;\n  }\n'], ['\n  margin: 22px 0;\n  font-weight: 300;\n\n  :hover {\n    color: #00e2c1;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 70px 25px 0 25px;\n'], ['\n  padding: 70px 25px 0 25px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin-right: 10px;\n  height: 40px !important;\n  width: 40px;\n'], ['\n  margin-right: 10px;\n  height: 40px !important;\n  width: 40px;\n']);

__webpack_require__(10);

__webpack_require__(12);

__webpack_require__(4);

__webpack_require__(8);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _logo_light = __webpack_require__(21);

var _logo_light2 = _interopRequireDefault(_logo_light);

var _telegram = __webpack_require__(22);

var _telegram2 = _interopRequireDefault(_telegram);

var _twitter = __webpack_require__(62);

var _twitter2 = _interopRequireDefault(_twitter);

var _medium = __webpack_require__(63);

var _medium2 = _interopRequireDefault(_medium);

var _github = __webpack_require__(64);

var _github2 = _interopRequireDefault(_github);

var _youtube = __webpack_require__(65);

var _youtube2 = _interopRequireDefault(_youtube);

var _breakpoints = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//
var Footer = _layout2.default.Footer;

var AboutMarketText = _styledComponents2.default.div(_templateObject, _breakpoints.device.tablet);
var HeaderText = _styledComponents2.default.h2(_templateObject2);
var FooterLink = _styledComponents2.default.div(_templateObject3);
var FooterWrapper = _styledComponents2.default.div(_templateObject4);
var SocialButtons = (0, _styledComponents2.default)(_button2.default)(_templateObject5);

var MarketFooter = function (_React$Component) {
  _inherits(MarketFooter, _React$Component);

  function MarketFooter() {
    _classCallCheck(this, MarketFooter);

    return _possibleConstructorReturn(this, (MarketFooter.__proto__ || Object.getPrototypeOf(MarketFooter)).apply(this, arguments));
  }

  _createClass(MarketFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Footer,
        { style: { color: '#fff', height: '460px', padding: '0px', zIndex: 2 } },
        _react2.default.createElement(
          FooterWrapper,
          null,
          _react2.default.createElement(
            _row2.default,
            { type: 'flex', align: 'top', gutter: 24 },
            _react2.default.createElement(
              _col2.default,
              { xs: 24, sm: 24, md: 12, lg: 12, xl: 12, style: { marginBottom: '50px' } },
              _react2.default.createElement('img', { alt: 'MARKET Protocol logo', src: _logo_light2.default }),
              _react2.default.createElement(
                AboutMarketText,
                null,
                'MARKET Protocol provides the open source building blocks powering decentralized derivatives trading and exchanges on the Ethereum blockchain.'
              ),
              _react2.default.createElement(
                'div',
                { style: { marginTop: '35px' } },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://t.me/Market_Protocol_Chat', target: '_blank' },
                  _react2.default.createElement(
                    SocialButtons,
                    { size: 'small', type: 'primary' },
                    _react2.default.createElement('img', { alt: 'crypto derivatives telegram', src: _telegram2.default, width: '80%' })
                  )
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://twitter.com/MarketProtocol/', target: '_blank' },
                  _react2.default.createElement(
                    SocialButtons,
                    { size: 'small', type: 'primary' },
                    _react2.default.createElement('img', { alt: 'decentralized exchange twitter', src: _twitter2.default, width: '80%' })
                  )
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://medium.com/market-protocol', target: '_blank' },
                  _react2.default.createElement(
                    SocialButtons,
                    { size: 'small', type: 'primary' },
                    _react2.default.createElement('img', { alt: 'ethereum derivatives medium', src: _medium2.default, width: '80%' })
                  )
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://github.com/MARKETProtocol/', target: '_blank' },
                  _react2.default.createElement(
                    SocialButtons,
                    { size: 'small', type: 'primary' },
                    _react2.default.createElement('img', { alt: 'open source ethereum dApp', src: _github2.default, width: '80%' })
                  )
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://www.youtube.com/c/MARKETProtocol', target: '_blank' },
                  _react2.default.createElement(
                    SocialButtons,
                    { size: 'small', type: 'primary' },
                    _react2.default.createElement('img', { alt: 'trading any assets youtube', src: _youtube2.default, width: '80%' })
                  )
                )
              ),
              _react2.default.createElement(
                AboutMarketText,
                null,
                _react2.default.createElement(
                  'p',
                  { style: { marginTop: '35px', display: 'block' } },
                  '\xA92018 Market Protocol, LLC'
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  '4450 Arapahoe Ave, Suite 100 Boulder, CO 80303'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'mailto:info@marketprotocol.io', style: {
                      color: 'inherit',
                      textDecoration: 'none',
                      wordBreak: 'break-all'
                    } },
                  'info@marketprotocol.io'
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 12, sm: 8, md: 4, lg: 4, xl: 4 },
              _react2.default.createElement(
                HeaderText,
                null,
                'Documentation'
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://marketprotocol.io/assets/MARKET_Protocol-Whitepaper.pdf', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Whitepaper'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://github.com/MARKETProtocol', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Github'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://docs.marketprotocol.io/', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Technical Docs'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://docs.marketprotocol.io/#faq-general', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'FAQ'
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 12, sm: 8, md: 4, lg: 4, xl: 4 },
              _react2.default.createElement(
                HeaderText,
                null,
                'Community'
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://t.me/Market_Protocol_Chat', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Telegram'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://twitter.com/MarketProtocol', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Twitter'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://medium.com/market-protocol', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Medium'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://discordapp.com/invite/qN8MCbq', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
                  'Discord'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: 'https://cms.marketprotocol.io/press', style: { color: 'inherit', textDecoration: 'none' } },
                  'Press'
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 8, sm: 8, md: 4, lg: 4, xl: 4 },
              _react2.default.createElement(
                HeaderText,
                null,
                'Organization'
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/partners', style: { color: 'inherit', textDecoration: 'none' } },
                  'Partners'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/privacy', style: { color: 'inherit', textDecoration: 'none' } },
                  'Privacy Policy'
                )
              ),
              _react2.default.createElement(
                FooterLink,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/terms', style: { color: 'inherit', textDecoration: 'none' } },
                  'Terms & Conditions'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MarketFooter;
}(_react2.default.Component);

exports.default = MarketFooter;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjMgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibWFya2V0LXNpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDE4LjAwMDAwMCwgLTY2OTMuMDAwMDAwKSIgZmlsbD0iIzE4MUUyNiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDM4LjY0NTYyLDY2OTcuNzMzNzIgQzEwMzguOTQ2MjgsNjcwNC40Nzk0OCAxMDMzLjk5Niw2NzEyIDEwMjUuMjMwNzMsNjcxMiBDMTAyMi41NjU4Myw2NzEyIDEwMjAuMDg4MjIsNjcxMS4yMDUyIDEwMTgsNjcwOS44NDQzNiBDMTAyMC41MDM4OSw2NzEwLjE0NDkyIDEwMjMuMDAyODYsNjcwOS40MzY5NSAxMDI0Ljk4NTkzLDY3MDcuODU5MDQgQzEwMjIuOTIyMzUsNjcwNy44MjA2MyAxMDIxLjE3OTE2LDY3MDYuNDMzMDggMTAyMC41NzQ1NCw2NzA0LjUyNzkgQzEwMjEuMzE3MTcsNjcwNC42NzE1IDEwMjIuMDQ1LDY3MDQuNjI5NzYgMTAyMi43MDg3Niw2NzA0LjQ0NjA4IEMxMDIwLjQzODE3LDY3MDMuOTgxOSAxMDE4Ljg3MDc4LDY3MDEuOTA0NzQgMTAxOC45MjMzNSw2Njk5LjY4MjMxIEMxMDE5LjU2MDgzLDY3MDAuMDQxMyAxMDIwLjI4NzAyLDY3MDAuMjU2NyAxMDIxLjA1OTIyLDY3MDAuMjgxNzUgQzEwMTguOTU5NSw2Njk4Ljg1NDEyIDEwMTguMzY0NzQsNjY5Ni4wMzM5MiAxMDE5LjYwMDI2LDY2OTMuODc4MjggQzEwMjEuOTI2NzEsNjY5Ni43ODAzIDEwMjUuNDAzMjQsNjY5OC42ODg4MSAxMDI5LjMyNjY3LDY2OTguODg5MTggQzEwMjguNjM4MjYsNjY5NS44OTAzMiAxMDMwLjg3NTk5LDY2OTMgMTAzMy45MjUzNSw2NjkzIEMxMDM1LjI3OTE2LDY2OTMgMTAzNi41MDY0Niw2NjkzLjU4Mjc0IDEwMzcuMzY5MDMsNjY5NC41MTQ0NiBDMTAzOC40NDM1Myw2Njk0LjMwMDczIDEwMzkuNDUzOTYsNjY5My44OTk5OSAxMDQwLjM2NTgxLDY2OTMuMzUwNjUgQzEwNDAuMDEyNTcsNjY5NC40NzEwNCAxMDM5LjI2NTAyLDY2OTUuNDA5NDQgMTAzOC4yODkwOSw2Njk2LjAwMzg3IEMxMDM5LjI0MzY2LDY2OTUuODg2OTggMTA0MC4xNTU1MSw2Njk1LjYyOTg0IDEwNDEsNjY5NS4yNDc0NyBDMTA0MC4zNjkxLDY2OTYuMjEyNTggMTAzOS41Njg5Nyw2Njk3LjA1NzQ3IDEwMzguNjQ1NjIsNjY5Ny43MzM3MiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjMgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibWFya2V0LXNpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDc3LjAwMDAwMCwgLTY2OTMuMDAwMDAwKSIgZmlsbD0iIzE4MUUyNiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTAwLDY2OTMuNDAxNzUgTDEwOTguMTYzMjksNjY5NS4yMzQzOSBDMTA5OC4wMDU1Nyw2Njk1LjM2MDkgMTA5Ny45MjY3MSw2Njk1LjU2NjA0IDEwOTcuOTU5NTcsNjY5NS43Njk0OCBMMTA5Ny45NTk1Nyw2NzA5LjIzMjIzIEMxMDk3LjkyNjcxLDY3MDkuNDMzOTYgMTA5OC4wMDU1Nyw2NzA5LjY0MDgxIDEwOTguMTYzMjksNjcwOS43NjU2MSBMMTA5OS45NTcyOSw2NzExLjU5OTk2IEwxMDk5Ljk1NzI5LDY3MTIgTDEwOTAuOTM4LDY3MTIgTDEwOTAuOTM4LDY3MTEuNTk5OTYgTDEwOTIuNzk0NDMsNjcwOS43MjExNiBDMTA5Mi45NzY3OSw2NzA5LjUzMzExIDEwOTIuOTc2NzksNjcwOS40NzY3IDEwOTIuOTc2NzksNjcwOS4xODYwNyBMMTA5Mi45NzY3OSw2Njk4LjMwNDc1IEwxMDg3LjgxMzI5LDY3MTEuOTU3MjYgTDEwODcuMTE1MDcsNjcxMS45NTcyNiBMMTA4MS4xMDIyMSw2Njk4LjMwNDc1IEwxMDgxLjEwMjIxLDY3MDcuNDU2IEMxMDgxLjA1MTI5LDY3MDcuODM4OTQgMTA4MS4xNzQ1LDY3MDguMjI1MyAxMDgxLjQzNDA3LDY3MDguNTAzOTYgTDEwODMuODUwNzEsNjcxMS41NTM4MSBMMTA4My44NTA3MSw2NzExLjk1NzI2IEwxMDc3LDY3MTEuOTU3MjYgTDEwNzcsNjcxMS41NTM4MSBMMTA3OS40MTY2NCw2NzA4LjUwMzk2IEMxMDc5LjY3NDU3LDY3MDguMjI1MyAxMDc5Ljc4OTU3LDY3MDcuODM1NTIgMTA3OS43MjcxNCw2NzA3LjQ1NiBMMTA3OS43MjcxNCw2Njk2Ljg3NTU2IEMxMDc5Ljc1NjcxLDY2OTYuNTgxNTIgMTA3OS42NDgyOSw2Njk2LjI5MDg5IDEwNzkuNDM4LDY2OTYuMDk0MyBMMTA3Ny4yODkxNCw2NjkzLjQwMTc1IEwxMDc3LjI4OTE0LDY2OTMgTDEwODMuOTU3NSw2NjkzIEwxMDg5LjExMjc5LDY3MDQuNzYzNDUgTDEwOTMuNjQzNzksNjY5MyBMMTEwMCw2NjkzIEwxMTAwLDY2OTMuNDAxNzUgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMjYgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibWFya2V0LXNpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTM2LjAwMDAwMCwgLTY2OTAuMDAwMDAwKSIgZmlsbD0iIzE4MUUyNiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTQ5LDY2OTAgQzExNDEuODIxODMsNjY5MCAxMTM2LDY2OTUuNzM4MzcgMTEzNiw2NzAyLjgxNiBDMTEzNiw2NzA4LjQ3ODU0IDExMzkuNzI0NSw2NzEzLjI4MjQxIDExNDQuODkwOTIsNjcxNC45NzczMiBDMTE0NS41Mzk4Myw2NzE1LjA5NTg3IDExNDUuNzUsNjcxNC42OTg1OCAxMTQ1Ljc1LDY3MTQuMzYxMDkgTDExNDUuNzUsNjcxMS45NzUxNyBDMTE0Mi4xMzM4Myw2NzEyLjc1MDU0IDExNDEuMzgwOTIsNjcxMC40NjI4OSAxMTQxLjM4MDkyLDY3MTAuNDYyODkgQzExNDAuNzg5NDIsNjcwOC45ODE1NyAxMTM5LjkzNjgzLDY3MDguNTg3NDggMTEzOS45MzY4Myw2NzA4LjU4NzQ4IEMxMTM4Ljc1NzA4LDY3MDcuNzkxODIgMTE0MC4wMjY3NSw2NzA3LjgwODkxIDExNDAuMDI2NzUsNjcwNy44MDg5MSBDMTE0MS4zMzIxNyw2NzA3Ljg5ODYyIDExNDIuMDE5LDY3MDkuMTMwMDIgMTE0Mi4wMTksNjcwOS4xMzAwMiBDMTE0My4xNzgxNyw2NzExLjA4ODczIDExNDUuMDU5OTIsNjcxMC41MjI2OSAxMTQ1LjgwMiw2NzEwLjE5NDgyIEMxMTQ1LjkxNzkyLDY3MDkuMzY3MTIgMTE0Ni4yNTQ4Myw2NzA4LjgwMTA4IDExNDYuNjI3NSw2NzA4LjQ4MTc1IEMxMTQzLjc0MDQyLDY3MDguMTU2MDEgMTE0MC43MDQ5Miw2NzA3LjA1NzAzIDExNDAuNzA0OTIsNjcwMi4xNDc0NCBDMTE0MC43MDQ5Miw2NzAwLjc0NzI5IDExNDEuMjEzLDY2OTkuNjA0NTMgMTE0Mi4wNDM5Miw2Njk4LjcwNzQxIEMxMTQxLjkwOTU4LDY2OTguMzgzOCAxMTQxLjQ2NDMzLDY2OTcuMDc5NzcgMTE0Mi4xNzA2Nyw2Njk1LjMxNTQ0IEMxMTQyLjE3MDY3LDY2OTUuMzE1NDQgMTE0My4yNjI2Nyw2Njk0Ljk3MTU0IDExNDUuNzQ2NzUsNjY5Ni42MjkwOCBDMTE0Ni43ODM1LDY2OTYuMzQ0OTkgMTE0Ny44OTUsNjY5Ni4yMDI5NSAxMTQ5LDY2OTYuMTk3NjEgQzExNTAuMTA1LDY2OTYuMjAyOTUgMTE1MS4yMTc1OCw2Njk2LjM0NDk5IDExNTIuMjU2NSw2Njk2LjYyOTA4IEMxMTU0LjczODQyLDY2OTQuOTcxNTQgMTE1NS44MjgyNSw2Njk1LjMxNTQ0IDExNTUuODI4MjUsNjY5NS4zMTU0NCBDMTE1Ni41MzU2Nyw2Njk3LjA4MDg0IDExNTYuMDkwNDIsNjY5OC4zODQ4NyAxMTU1Ljk1NjA4LDY2OTguNzA3NDEgQzExNTYuNzkwMjUsNjY5OS42MDQ1MyAxMTU3LjI5NCw2NzAwLjc0ODM2IDExNTcuMjk0LDY3MDIuMTQ3NDQgQzExNTcuMjk0LDY3MDcuMDY5ODUgMTE1NC4yNTMwOCw2NzA4LjE1Mzg3IDExNTEuMzU4NDIsNjcwOC40NzEwNyBDMTE1MS44MjQyNSw2NzA4Ljg2ODM2IDExNTIuMjUsNjcwOS42NDggMTE1Mi4yNSw2NzEwLjg0NDE2IEwxMTUyLjI1LDY3MTQuMzYxMDkgQzExNTIuMjUsNjcxNC43MDE3OCAxMTUyLjQ1OCw2NzE1LjEwMjI4IDExNTMuMTE3NzUsNjcxNC45NzYyNiBDMTE1OC4yNzk4Myw2NzEzLjI3OTIgMTE2Miw2NzA4LjQ3NjQxIDExNjIsNjcwMi44MTYgQzExNjIsNjY5NS43MzgzNyAxMTU2LjE3OTI1LDY2OTAgMTE0OSw2NjkwIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMzAgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYXJrZXQtc2l0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOTYuMDAwMDAwLCAtNjY5Mi4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0ieW91dHViZS1wbGF5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTk1LjAwMDAwMCwgNjY5Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi45MDI5MDIsMTUuMDc1ODkzIEwyMS4wMDU1OCwxMC44OTA2MjUgTDEyLjkwMjkwMiw2LjY1NTEzNCBMMTIuOTAyOTAyLDE1LjA3NTg5MyBaIE0xNiwwLjY0NTA4OSBDMTcuODc1LDAuNjQ1MDg5IDE5LjY4NTgyNiwwLjY3MDIwMSAyMS40MzI0NzgsMC43MjA0MjQgQzIzLjE3OTEyOSwwLjc3MDY0NyAyNC40NTk4MjEsMC44MjM2NjEgMjUuMjc0NTU0LDAuODc5NDY0IEwyNi40OTY2NTIsMC45NDY0MjkgQzI2LjUwNzgxMiwwLjk0NjQyOSAyNi42MDI2NzksMC45NTQ3OTkgMjYuNzgxMjUsMC45NzE1NCBDMjYuOTU5ODIxLDAuOTg4MjgxIDI3LjA4ODE3LDEuMDA1MDIyIDI3LjE2NjI5NSwxLjAyMTc2MyBDMjcuMjQ0NDIsMS4wMzg1MDQgMjcuMzc1NTU4LDEuMDYzNjE2IDI3LjU1OTcxLDEuMDk3MDk4IEMyNy43NDM4NjIsMS4xMzA1OCAyNy45MDI5MDIsMS4xNzUyMjMgMjguMDM2ODMsMS4yMzEwMjcgQzI4LjE3MDc1OSwxLjI4NjgzIDI4LjMyNzAwOSwxLjM1OTM3NSAyOC41MDU1OCwxLjQ0ODY2MSBDMjguNjg0MTUyLDEuNTM3OTQ2IDI4Ljg1NzE0MywxLjY0Njc2MyAyOS4wMjQ1NTQsMS43NzUxMTIgQzI5LjE5MTk2NCwxLjkwMzQ2IDI5LjM1Mzc5NSwyLjA1MTMzOSAyOS41MTAwNDUsMi4yMTg3NSBDMjkuNTc3MDA5LDIuMjg1NzE0IDI5LjY2MzUwNCwyLjM4ODk1MSAyOS43Njk1MzEsMi41Mjg0NiBDMjkuODc1NTU4LDIuNjY3OTY5IDMwLjAzNzM4OCwyLjk5NDQyIDMwLjI1NTAyMiwzLjUwNzgxMiBDMzAuNDcyNjU2LDQuMDIxMjA1IDMwLjYyMDUzNiw0LjU4NDgyMSAzMC42OTg2NjEsNS4xOTg2NjEgQzMwLjc4Nzk0Niw1LjkxMjk0NiAzMC44NTc3MDEsNi42NzQ2NjUgMzAuOTA3OTI0LDcuNDgzODE3IEMzMC45NTgxNDcsOC4yOTI5NjkgMzAuOTg4ODM5LDguOTI2MzM5IDMxLDkuMzgzOTI5IEwzMSwxMC4wNTM1NzEgTDMxLDEyLjMzMDM1NyBDMzEuMDExMTYxLDEzLjk0ODY2MSAzMC45MTA3MTQsMTUuNTY2OTY0IDMwLjY5ODY2MSwxNy4xODUyNjggQzMwLjYyMDUzNiwxNy43OTkxMDcgMzAuNDgxMDI3LDE4LjM1NDM1MyAzMC4yODAxMzQsMTguODUxMDA0IEMzMC4wNzkyNDEsMTkuMzQ3NjU2IDI5LjkwMDY3LDE5LjY5MDg0OCAyOS43NDQ0MiwxOS44ODA1OCBMMjkuNTEwMDQ1LDIwLjE2NTE3OSBDMjkuMzUzNzk1LDIwLjMzMjU4OSAyOS4xOTE5NjQsMjAuNDgwNDY5IDI5LjAyNDU1NCwyMC42MDg4MTcgQzI4Ljg1NzE0MywyMC43MzcxNjUgMjguNjg0MTUyLDIwLjg0MzE5MiAyOC41MDU1OCwyMC45MjY4OTcgQzI4LjMyNzAwOSwyMS4wMTA2MDMgMjguMTcwNzU5LDIxLjA4MDM1NyAyOC4wMzY4MywyMS4xMzYxNjEgQzI3LjkwMjkwMiwyMS4xOTE5NjQgMjcuNzQzODYyLDIxLjIzNjYwNyAyNy41NTk3MSwyMS4yNzAwODkgQzI3LjM3NTU1OCwyMS4zMDM1NzEgMjcuMjQxNjI5LDIxLjMyODY4MyAyNy4xNTc5MjQsMjEuMzQ1NDI0IEMyNy4wNzQyMTksMjEuMzYyMTY1IDI2Ljk0NTg3MSwyMS4zNzg5MDYgMjYuNzcyODc5LDIxLjM5NTY0NyBDMjYuNTk5ODg4LDIxLjQxMjM4OCAyNi41MDc4MTIsMjEuNDIwNzU5IDI2LjQ5NjY1MiwyMS40MjA3NTkgQzIzLjY5NTMxMiwyMS42MzI4MTIgMjAuMTk2NDI5LDIxLjczODgzOSAxNiwyMS43Mzg4MzkgQzEzLjY4OTczMiwyMS43MTY1MTggMTEuNjgzNTk0LDIxLjY4MDI0NiA5Ljk4MTU4NSwyMS42MzAwMjIgQzguMjc5NTc2LDIxLjU3OTc5OSA3LjE2MDcxNCwyMS41Mzc5NDYgNi42MjUsMjEuNTA0NDY0IEw1LjgwNDY4OCwyMS40Mzc1IEw1LjIwMjAwOSwyMS4zNzA1MzYgQzQuODAwMjIzLDIxLjMxNDczMiA0LjQ5NjA5NCwyMS4yNTg5MjkgNC4yODk2MjEsMjEuMjAzMTI1IEM0LjA4MzE0NywyMS4xNDczMjEgMy43OTg1NDksMjEuMDMwMTM0IDMuNDM1ODI2LDIwLjg1MTU2MiBDMy4wNzMxMDMsMjAuNjcyOTkxIDIuNzU3ODEyLDIwLjQ0NDE5NiAyLjQ4OTk1NSwyMC4xNjUxNzkgQzIuNDIyOTkxLDIwLjA5ODIxNCAyLjMzNjQ5NiwxOS45OTQ5NzggMi4yMzA0NjksMTkuODU1NDY5IEMyLjEyNDQ0MiwxOS43MTU5NiAxLjk2MjYxMiwxOS4zODk1MDkgMS43NDQ5NzgsMTguODc2MTE2IEMxLjUyNzM0NCwxOC4zNjI3MjMgMS4zNzk0NjQsMTcuNzk5MTA3IDEuMzAxMzM5LDE3LjE4NTI2OCBDMS4yMTIwNTQsMTYuNDcwOTgyIDEuMTQyMjk5LDE1LjcwOTI2MyAxLjA5MjA3NiwxNC45MDAxMTIgQzEuMDQxODUzLDE0LjA5MDk2IDEuMDExMTYxLDEzLjQ1NzU4OSAxLDEzIEwxLDEyLjMzMDM1NyBMMSwxMC4wNTM1NzEgQzAuOTg4ODM5LDguNDM1MjY4IDEuMDg5Mjg2LDYuODE2OTY0IDEuMzAxMzM5LDUuMTk4NjYxIEMxLjM3OTQ2NCw0LjU4NDgyMSAxLjUxODk3Myw0LjAyOTU3NiAxLjcxOTg2NiwzLjUzMjkyNCBDMS45MjA3NTksMy4wMzYyNzIgMi4wOTkzMywyLjY5MzA4IDIuMjU1NTgsMi41MDMzNDggTDIuNDg5OTU1LDIuMjE4NzUgQzIuNjQ2MjA1LDIuMDUxMzM5IDIuODA4MDM2LDEuOTAzNDYgMi45NzU0NDYsMS43NzUxMTIgQzMuMTQyODU3LDEuNjQ2NzYzIDMuMzE1ODQ4LDEuNTM3OTQ2IDMuNDk0NDIsMS40NDg2NjEgQzMuNjcyOTkxLDEuMzU5Mzc1IDMuODI5MjQxLDEuMjg2ODMgMy45NjMxNywxLjIzMTAyNyBDNC4wOTcwOTgsMS4xNzUyMjMgNC4yNTYxMzgsMS4xMzA1OCA0LjQ0MDI5LDEuMDk3MDk4IEM0LjYyNDQ0MiwxLjA2MzYxNiA0Ljc1NTU4LDEuMDM4NTA0IDQuODMzNzA1LDEuMDIxNzYzIEM0LjkxMTgzLDEuMDA1MDIyIDUuMDQwMTc5LDAuOTg4MjgxIDUuMjE4NzUsMC45NzE1NCBDNS4zOTczMjEsMC45NTQ3OTkgNS40OTIxODgsMC45NDY0MjkgNS41MDMzNDgsMC45NDY0MjkgQzguMzA0Njg4LDAuNzQ1NTM2IDExLjgwMzU3MSwwLjY0NTA4OSAxNiwwLjY0NTA4OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMenu = exports.Logo = undefined;

var _affix = __webpack_require__(67);

var _affix2 = _interopRequireDefault(_affix);

var _popover = __webpack_require__(68);

var _popover2 = _interopRequireDefault(_popover);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _menu = __webpack_require__(69);

var _menu2 = _interopRequireDefault(_menu);

var _layout = __webpack_require__(7);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  line-height: 64px;\n  margin: 0;\n  float: left;\n  @media (max-width: ', ') {\n    max-width: 200px;\n  }\n'], ['\n  line-height: 64px;\n  margin: 0;\n  float: left;\n  @media (max-width: ', ') {\n    max-width: 200px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  .ant-dropdown-menu {\n    background: #fff;\n    padding: 10px;\n  }\n  .ant-dropdown-menu-item {\n    padding: 10px;\n    &:hover {\n      background-color: #fff;\n      color: #00e2c1;\n    }\n  }\n  @media (max-width: ', ') {\n    &.ant-menu-dark {\n      display: none;\n    }\n    &.ant-menu-light.ant-menu-inline {\n      display: block;\n      background: #fff;\n      border-right: 0;\n      .ant-menu-item-selected {\n        background-color: #f1f1f1;\n        color: #00ad94;\n      }\n    }\n  }\n\n  @media (min-width: ', ') and (max-width: ', ') {\n    &.ant-menu {\n      .ant-menu-item {\n        padding: 0 15px;\n      }\n    }\n  }\n'], ['\n  .ant-dropdown-menu {\n    background: #fff;\n    padding: 10px;\n  }\n  .ant-dropdown-menu-item {\n    padding: 10px;\n    &:hover {\n      background-color: #fff;\n      color: #00e2c1;\n    }\n  }\n  @media (max-width: ', ') {\n    &.ant-menu-dark {\n      display: none;\n    }\n    &.ant-menu-light.ant-menu-inline {\n      display: block;\n      background: #fff;\n      border-right: 0;\n      .ant-menu-item-selected {\n        background-color: #f1f1f1;\n        color: #00ad94;\n      }\n    }\n  }\n\n  @media (min-width: ', ') and (max-width: ', ') {\n    &.ant-menu {\n      .ant-menu-item {\n        padding: 0 15px;\n      }\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  &.ant-btn {\n    display: none;\n    cursor: pointer;\n    float: right;\n    margin-top: 13px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n  }\n  i {\n    font-size: 20px;\n    color: #fff;\n  }\n  @media (max-width: ', ') {\n    &.ant-btn {\n      display: block;\n    }\n  }\n  @media (max-width: ', ') {\n    &.ant-btn {\n      margin-left: 5px;\n      width: 32px;\n      height: 32px;\n      margin-top: 17px;\n      line-height: 32px;\n      i {\n        font-size: 16px;\n      }\n    }\n  }\n'], ['\n  &.ant-btn {\n    display: none;\n    cursor: pointer;\n    float: right;\n    margin-top: 13px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n  }\n  i {\n    font-size: 20px;\n    color: #fff;\n  }\n  @media (max-width: ', ') {\n    &.ant-btn {\n      display: block;\n    }\n  }\n  @media (max-width: ', ') {\n    &.ant-btn {\n      margin-left: 5px;\n      width: 32px;\n      height: 32px;\n      margin-top: 17px;\n      line-height: 32px;\n      i {\n        font-size: 16px;\n      }\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background-color: rgb(24, 30, 38);\n  z-index: 9999;\n  overflow: hidden;\n\n  .ant-layout-header {\n    padding: 0 25px;\n  }\n  .ant-menu {\n    background: transparent;\n    border-bottom: none;\n  }\n  .ant-affix {\n    background-color: rgb(24, 30, 38);\n  }\n  .ant-popover-arrow {\n    top: -4px;\n  }\n  .ant-popover-inner-content {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n'], ['\n  background-color: rgb(24, 30, 38);\n  z-index: 9999;\n  overflow: hidden;\n\n  .ant-layout-header {\n    padding: 0 25px;\n  }\n  .ant-menu {\n    background: transparent;\n    border-bottom: none;\n  }\n  .ant-affix {\n    background-color: rgb(24, 30, 38);\n  }\n  .ant-popover-arrow {\n    top: -4px;\n  }\n  .ant-popover-inner-content {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  color: #fff;\n  float: left;\n  &:hover {\n    color: #00e2c1;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n  @media (max-width: ', ') {\n    color: #000;\n    display: none;\n    float: none;\n    padding: 0 16px;\n    line-height: 40px;\n    height: 40px;\n  }\n'], ['\n  color: #fff;\n  float: left;\n  &:hover {\n    color: #00e2c1;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n  @media (max-width: ', ') {\n    color: #000;\n    display: none;\n    float: none;\n    padding: 0 16px;\n    line-height: 40px;\n    height: 40px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: none;\n  background: #fff;\n  .ant-menu {\n    background-color: #fff;\n    border-right: 0;\n  }\n  .ant-menu-item:hover,\n  .ant-menu-item-active,\n  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,\n  .ant-menu-submenu-active,\n  .ant-menu-submenu-title:hover {\n    border: 0;\n  }\n  @media (max-width: ', ') {\n    display: block;\n  }\n'], ['\n  display: none;\n  background: #fff;\n  .ant-menu {\n    background-color: #fff;\n    border-right: 0;\n  }\n  .ant-menu-item:hover,\n  .ant-menu-item-active,\n  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,\n  .ant-menu-submenu-active,\n  .ant-menu-submenu-title:hover {\n    border: 0;\n  }\n  @media (max-width: ', ') {\n    display: block;\n  }\n']);

__webpack_require__(70);

__webpack_require__(71);

__webpack_require__(4);

__webpack_require__(72);

__webpack_require__(8);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _breakpoints = __webpack_require__(5);

var _logo_light = __webpack_require__(21);

var _logo_light2 = _interopRequireDefault(_logo_light);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _layout2.default.Header;
var SubMenu = _menu2.default.SubMenu;

var externalLinks = ['/whitepaper', '/faq', '/telegram'];
var Logo = exports.Logo = _styledComponents2.default.div(_templateObject, _breakpoints.size.mobileL);
var StyledMenu = exports.StyledMenu = (0, _styledComponents2.default)(_menu2.default)(_templateObject2, _breakpoints.size.tabletL, _breakpoints.size.tablet, _breakpoints.size.tabletL);
var MobileMenuToggle = (0, _styledComponents2.default)(_button2.default)(_templateObject3, _breakpoints.size.tabletL, _breakpoints.size.mobileM);
var HeaderWrapper = _styledComponents2.default.div(_templateObject4);
var DropdownTrigger = _styledComponents2.default.a(_templateObject5, _breakpoints.size.tabletL);
var StyledSubMenu = (0, _styledComponents2.default)(SubMenu)(_templateObject6, _breakpoints.size.tabletL);

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));

    _this.state = {
      current: ''
    };
    _this.handleClick = function (e) {
      var path = e.key || e;
      if (!externalLinks.includes(path)) {
        _this.setState({
          current: path
        });
      }
      var resolvedHash = path.substring(path.indexOf('#') + 1);
      if (path === location.pathname + location.hash) {
        var element = document.getElementById(resolvedHash);
        if (element !== null) {
          (0, _reactStatic.scrollTo)(element);
        }
      }
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!externalLinks.includes(location.pathname)) {
        // fix an issue where 'Blog' isn't highlighted in navbar while reading
        // a blog post
        var current = location.pathname;
        var currPageIsABlogPost = location.pathname !== '/blog' && location.pathname.includes('/blog');
        if (currPageIsABlogPost) {
          current = '/blog';
        }
        this.setState({
          current: current
        });
      }
    }
  }, {
    key: 'renderMenuMarkup',
    value: function renderMenuMarkup(breakpoint) {
      return _react2.default.createElement(
        StyledMenu,
        { theme: breakpoint === 'desktop' ? 'dark' : 'light', mode: breakpoint === 'desktop' ? 'horizontal' : 'inline', style: {
            float: breakpoint === 'desktop' ? 'right' : 'none',
            lineHeight: '64px'
          }, onClick: this.handleClick, selectedKeys: [this.state.current] },
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '/about' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/about', style: { color: 'inherit', textDecoration: 'none' } },
            'About'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '/whitepaper' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: 'https://marketprotocol.io/assets/MARKET_Protocol-Whitepaper.pdf', target: '_blank', style: { color: 'inherit', textDecoration: 'none' } },
            'Whitepaper'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '/faq' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: 'https://docs.marketprotocol.io/#faq-general', style: { color: 'inherit', textDecoration: 'none' }, target: '_blank' },
            'FAQs'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '/partners' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/partners', style: { color: 'inherit', textDecoration: 'none' } },
            'Partners'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '/blog' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: 'https://cms.marketprotocol.io/blog', style: { color: 'inherit', textDecoration: 'none' } },
            'Blog'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _affix2.default,
        null,
        _react2.default.createElement(
          HeaderWrapper,
          null,
          _react2.default.createElement(
            Header,
            null,
            _react2.default.createElement(
              Logo,
              null,
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/', style: { color: 'inherit', textDecoration: 'none' }, onClick: function onClick() {
                    return _this2.handleClick('/');
                  } },
                _react2.default.createElement('img', { alt: 'Decentralized derivatives and exchange', width: '100%', src: _logo_light2.default })
              )
            ),
            this.renderMenuMarkup('desktop'),
            _react2.default.createElement(
              _popover2.default,
              { getPopupContainer: function getPopupContainer(triggerNode) {
                  return triggerNode.parentNode;
                }, content: this.renderMenuMarkup('mobile'), trigger: 'click', placement: 'topRight', arrowPointAtCenter: true },
              _react2.default.createElement(MobileMenuToggle, { shape: 'circle', icon: 'bars' })
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix/style");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover/style");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailLink = exports.CtaWrapper = exports.PopupClose = exports.PopupButtonText = exports.PopupButton = exports.PopupText = exports.PopupArt = undefined;

var _icon = __webpack_require__(13);

var _icon2 = _interopRequireDefault(_icon);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  /*layout*/\n  background-color: #fff;\n  font-size: 1rem;\n  width: 18rem;\n  text-align: center;\n\n  /*positioning*/\n  bottom: 1.5rem;\n  right: 1.5rem;\n  padding: 30px;\n  position: fixed;\n\n  /*material*/\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  z-index: 10;\n'], ['\n  /*layout*/\n  background-color: #fff;\n  font-size: 1rem;\n  width: 18rem;\n  text-align: center;\n\n  /*positioning*/\n  bottom: 1.5rem;\n  right: 1.5rem;\n  padding: 30px;\n  position: fixed;\n\n  /*material*/\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  z-index: 10;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #000000;\n  margin-bottom: 15px;\n  font-weight: 600;\n'], ['\n  color: #000000;\n  margin-bottom: 15px;\n  font-weight: 600;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 14rem;\n'], ['\n  width: 14rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: #212121;\n  padding: 0.3rem;\n  img {\n    fill: #fefefe;\n  }\n'], ['\n  color: #212121;\n  padding: 0.3rem;\n  img {\n    fill: #fefefe;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0.9rem;\n  right: 1rem;\n  cursor: pointer;\n  &:hover {\n    color: #26e1c1;\n  }\n'], ['\n  position: absolute;\n  top: 0.9rem;\n  right: 1rem;\n  cursor: pointer;\n  &:hover {\n    color: #26e1c1;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  width: 14rem;\n  margin: 0 auto;\n  margin-top: 10px;\n\n  @media ', ' and (max-width: 767px) {\n    display: none;\n  }\n'], ['\n  width: 14rem;\n  margin: 0 auto;\n  margin-top: 10px;\n\n  @media ', ' and (max-width: 767px) {\n    display: none;\n  }\n']);

__webpack_require__(14);

__webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _email = __webpack_require__(20);

var _email2 = _interopRequireDefault(_email);

var _telegram = __webpack_require__(22);

var _telegram2 = _interopRequireDefault(_telegram);

var _mail = __webpack_require__(74);

var _mail2 = _interopRequireDefault(_mail);

var _Cta = __webpack_require__(24);

var _Cta2 = _interopRequireDefault(_Cta);

var _breakpoints = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var PopupArt = exports.PopupArt = _styledComponents2.default.div(_templateObject);
/*text stuff*/
var PopupText = exports.PopupText = _styledComponents2.default.div(_templateObject2);
var PopupButton = exports.PopupButton = (0, _styledComponents2.default)(_button2.default)(_templateObject3);
var PopupButtonText = exports.PopupButtonText = _styledComponents2.default.div(_templateObject4);
var PopupClose = exports.PopupClose = (0, _styledComponents2.default)(_icon2.default)(_templateObject5);
var CtaWrapper = exports.CtaWrapper = _styledComponents2.default.div(_templateObject6, _breakpoints.device.mobileS);
var emailLink = exports.emailLink = 'mailto:' + _email2.default.PARTNERS_EMAIL.email + '?subject=' + _email2.default.PARTNERS_EMAIL.subject + '&body=' + _email2.default.PARTNERS_EMAIL.body;

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.state = {
      popupDisplay: false
    };
    _this.closePopupDisplay = _this.closePopupDisplay.bind(_this);
    return _this;
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          popupDisplay: false
        });
      }.bind(this), 1000);
    }
  }, {
    key: 'closePopupDisplay',
    value: function closePopupDisplay() {
      this.setState({
        popupDisplay: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.popupDisplay) {
        return _react2.default.createElement(
          PopupArt,
          null,
          _react2.default.createElement(
            PopupText,
            null,
            'Chat with us'
          ),
          _react2.default.createElement(
            _reactStatic.Link,
            { to: 'https://t.me/Market_Protocol_Chat', target: '_blank' },
            _react2.default.createElement(
              PopupButton,
              { type: 'primary' },
              _react2.default.createElement(
                PopupButtonText,
                null,
                _react2.default.createElement('img', { alt: 'crypto trading telegram', src: _telegram2.default, height: '100%', style: { marginRight: '15px' } }),
                'Join our Telegram'
              )
            )
          ),
          _react2.default.createElement(
            CtaWrapper,
            null,
            _react2.default.createElement(_Cta2.default, { beforeIcon: _mail2.default, onlyShowSubscribeButton: true, text: 'Join Our Email List', afterIcon: false })
          ),
          _react2.default.createElement(PopupClose, { type: 'close', onClick: this.closePopupDisplay })
        );
      }
      return null;
    }
  }]);

  return Popup;
}(_react2.default.Component);

exports.default = Popup;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS44MyAxLjgyMkwxMS42NjEgNy41M2MuMzY0LjE5LjgzNS4yODEgMS4zMS4yODEuNDczIDAgLjk0NC0uMDkgMS4zMDgtLjI4MWwxMC44MzMtNS43MDhDMjUuODIgMS40NDkgMjYuNDg3IDAgMjUuMTkxIDBILjc1M0MtLjU0MyAwIC4xMjQgMS40NS44MjkgMS44MjJ6bTI0LjYxMSAzLjEyTDE0LjI4IDEwLjY0OWMtLjQ5MS4yNTItLjgzNS4yODItMS4zMDkuMjgycy0uODE3LS4wMy0xLjMwOS0uMjgyQzExLjE3MiAxMC4zOTYgMS4zNiA1LjM1LjU1OCA0Ljk0Yy0uNTY0LS4yODktLjU1OC4wNS0uNTU4LjMxdjEwLjMzMkMwIDE2LjE3OC44MTggMTcgMS40NDQgMTdoMjMuMTEyYy42MjYgMCAxLjQ0NC0uODIyIDEuNDQ0LTEuNDE3VjUuMjUzYzAtLjI2LjAwNi0uNi0uNTU5LS4zMXoiIGZpbGw9IiMxODFFMjYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getLocationOrigin = exports.getLocationOrigin = function getLocationOrigin() {
  return window.location.origin;
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox/style");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio/style");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.cc70b454.js.map