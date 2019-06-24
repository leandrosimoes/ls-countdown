module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/classes/LsCountdown.ts":
/*!***************************************!*\
  !*** ./src/ts/classes/LsCountdown.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LsCountdownTick_1 = __webpack_require__(/*! ../classes/LsCountdownTick */ \"./src/ts/classes/LsCountdownTick.ts\");\r\nvar LsCountdown = /** @class */ (function () {\r\n    function LsCountdown(options) {\r\n        this.validateTargetDate(options.targetDate);\r\n        this.targetDate = options.targetDate;\r\n        this.onStart = options.onStart;\r\n        this.onStop = options.onStop;\r\n        this.onTick = options.onTick;\r\n        this.sufixes = options.sufixes;\r\n        this.CURRENT_TIME = new LsCountdownTick_1.default({});\r\n    }\r\n    LsCountdown.prototype.validateTargetDate = function (targetDate) {\r\n        if (targetDate <= new Date())\r\n            throw new Error(\"The target date must be a foward date\");\r\n    };\r\n    LsCountdown.prototype.isLeapYear = function (year) {\r\n        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);\r\n    };\r\n    LsCountdown.prototype.doTick = function (callback) {\r\n        var current_date = new Date();\r\n        var current_year = current_date.getFullYear();\r\n        var seconds_left = (this.targetDate.getTime() - current_date.getTime()) / 1000;\r\n        var years, days, hours, minutes, seconds;\r\n        years = Math.floor(seconds_left / 31536000);\r\n        for (var i = 1; i <= years; i++) {\r\n            seconds_left -= this.isLeapYear(current_year - i) ? 31622400 : 31536000;\r\n        }\r\n        days = Math.floor(seconds_left / 86400);\r\n        seconds_left -= days * 86400;\r\n        hours = Math.floor(seconds_left / 3600) % 24;\r\n        seconds_left -= hours * 3600;\r\n        minutes = Math.floor(seconds_left / 60) % 60;\r\n        seconds_left -= minutes * 60;\r\n        seconds = Math.floor(seconds_left % 60);\r\n        years = \"\" + (years > 9 ? years : \"0\" + years) + this.sufixes.years;\r\n        days = \"\" + (days > 9 ? days : \"0\" + days) + this.sufixes.days;\r\n        hours = \"\" + (hours > 9 ? hours : \"0\" + hours) + this.sufixes.hours;\r\n        minutes = \"\" + (minutes > 9 ? minutes : \"0\" + minutes) + this.sufixes.minutes;\r\n        seconds = \"\" + (seconds > 9 ? seconds : \"0\" + seconds) + this.sufixes.seconds;\r\n        this.CURRENT_TIME = new LsCountdownTick_1.default({ years: years, days: days, hours: hours, minutes: minutes, seconds: seconds });\r\n        if (typeof callback === 'function')\r\n            callback(this.CURRENT_TIME);\r\n    };\r\n    LsCountdown.prototype.stop = function () {\r\n        if (!!this.COUNTDOWN_INTERVAL) {\r\n            clearInterval(this.COUNTDOWN_INTERVAL);\r\n            if (typeof this.onStop === 'function')\r\n                this.onStop(__assign({}, this.CURRENT_TIME));\r\n        }\r\n    };\r\n    LsCountdown.prototype.start = function () {\r\n        var _this = this;\r\n        this.doTick(this.onStart);\r\n        this.COUNTDOWN_INTERVAL = setInterval(function () {\r\n            _this.doTick(_this.onTick);\r\n        }, 1000);\r\n    };\r\n    LsCountdown.prototype.changeTargetDate = function (targetDate) {\r\n        if (targetDate === void 0) { targetDate = new Date(); }\r\n        this.validateTargetDate(targetDate);\r\n        this.stop.bind(this).call();\r\n        this.targetDate = targetDate;\r\n        this.start.bind(this).call();\r\n    };\r\n    return LsCountdown;\r\n}());\r\nexports.default = LsCountdown;\r\n\n\n//# sourceURL=webpack:///./src/ts/classes/LsCountdown.ts?");

/***/ }),

/***/ "./src/ts/classes/LsCountdownOptions.ts":
/*!**********************************************!*\
  !*** ./src/ts/classes/LsCountdownOptions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LsCountdownSufixes_1 = __webpack_require__(/*! ./LsCountdownSufixes */ \"./src/ts/classes/LsCountdownSufixes.ts\");\r\nvar LsCountdownOptions = /** @class */ (function () {\r\n    function LsCountdownOptions(_a) {\r\n        var _b = _a === void 0 ? {} : _a, _c = _b.targetDate, targetDate = _c === void 0 ? new Date() : _c, _d = _b.onStart, onStart = _d === void 0 ? (function () { }) : _d, _e = _b.onStop, onStop = _e === void 0 ? (function () { }) : _e, _f = _b.onTick, onTick = _f === void 0 ? (function () { }) : _f, _g = _b.sufixes, sufixes = _g === void 0 ? new LsCountdownSufixes_1.default({}) : _g;\r\n        this.targetDate = targetDate;\r\n        this.onStart = onStart;\r\n        this.onStop = onStop;\r\n        this.onTick = onTick;\r\n        this.sufixes = sufixes;\r\n    }\r\n    return LsCountdownOptions;\r\n}());\r\nexports.default = LsCountdownOptions;\r\n\n\n//# sourceURL=webpack:///./src/ts/classes/LsCountdownOptions.ts?");

/***/ }),

/***/ "./src/ts/classes/LsCountdownSufixes.ts":
/*!**********************************************!*\
  !*** ./src/ts/classes/LsCountdownSufixes.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LsCountdownSufixes = /** @class */ (function () {\r\n    function LsCountdownSufixes(_a) {\r\n        var _b = _a.years, years = _b === void 0 ? 'y' : _b, _c = _a.days, days = _c === void 0 ? 'd' : _c, _d = _a.hours, hours = _d === void 0 ? 'h' : _d, _e = _a.minutes, minutes = _e === void 0 ? 'm' : _e, _f = _a.seconds, seconds = _f === void 0 ? 's' : _f;\r\n        this.years = years;\r\n        this.days = days;\r\n        this.hours = hours;\r\n        this.minutes = minutes;\r\n        this.seconds = seconds;\r\n    }\r\n    return LsCountdownSufixes;\r\n}());\r\nexports.default = LsCountdownSufixes;\r\n\n\n//# sourceURL=webpack:///./src/ts/classes/LsCountdownSufixes.ts?");

/***/ }),

/***/ "./src/ts/classes/LsCountdownTick.ts":
/*!*******************************************!*\
  !*** ./src/ts/classes/LsCountdownTick.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LsCountdownTick = /** @class */ (function () {\r\n    function LsCountdownTick(_a) {\r\n        var _b = _a.years, years = _b === void 0 ? '0' : _b, _c = _a.days, days = _c === void 0 ? '0' : _c, _d = _a.hours, hours = _d === void 0 ? '0' : _d, _e = _a.minutes, minutes = _e === void 0 ? '0' : _e, _f = _a.seconds, seconds = _f === void 0 ? '0' : _f;\r\n        this.years = years;\r\n        this.days = days;\r\n        this.hours = hours;\r\n        this.minutes = minutes;\r\n        this.seconds = seconds;\r\n    }\r\n    return LsCountdownTick;\r\n}());\r\nexports.default = LsCountdownTick;\r\n\n\n//# sourceURL=webpack:///./src/ts/classes/LsCountdownTick.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LsCountdown_1 = __webpack_require__(/*! ./classes/LsCountdown */ \"./src/ts/classes/LsCountdown.ts\");\r\nexports.LsCountdown = LsCountdown_1.default;\r\nvar LsCountdownOptions_1 = __webpack_require__(/*! ./classes/LsCountdownOptions */ \"./src/ts/classes/LsCountdownOptions.ts\");\r\nexports.LsCountdownOptions = LsCountdownOptions_1.default;\r\nvar LsCountdownSufixes_1 = __webpack_require__(/*! ./classes/LsCountdownSufixes */ \"./src/ts/classes/LsCountdownSufixes.ts\");\r\nexports.LsCountdownSufixes = LsCountdownSufixes_1.default;\r\nvar LsCountdownTick_1 = __webpack_require__(/*! ./classes/LsCountdownTick */ \"./src/ts/classes/LsCountdownTick.ts\");\r\nexports.LsCountdownTick = LsCountdownTick_1.default;\r\n(function (window) {\r\n    window.LsCountdown = LsCountdown_1.default;\r\n    window.LsCountdownOptions = LsCountdownOptions_1.default;\r\n    window.LsCountdownSufixes = LsCountdownSufixes_1.default;\r\n    window.LsCountdownTick = LsCountdownTick_1.default;\r\n})(typeof window !== typeof undefined ? window : {});\r\n\n\n//# sourceURL=webpack:///./src/ts/index.ts?");

/***/ })

/******/ });