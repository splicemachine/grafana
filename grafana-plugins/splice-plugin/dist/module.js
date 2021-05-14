define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","react","rxjs"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_rxjs__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);





var Input = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["LegacyForms"].Input,
    FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["LegacyForms"].FormField,
    SecretFormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["LegacyForms"].SecretFormField;

var SpliceSourceHttpSettings = function SpliceSourceHttpSettings(props) {
  var _a;

  var defaultUrl = props.defaultUrl,
      dataSourceConfig = props.dataSourceConfig,
      onChange = props.onChange;
  var password = dataSourceConfig.secureJsonData ? dataSourceConfig.secureJsonData.basicAuthPassword : '';

  if (typeof dataSourceConfig.url === 'undefined' || dataSourceConfig.url === null || dataSourceConfig.url === '') {
    dataSourceConfig.url = defaultUrl;
  }

  var urlTooltip;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var onSettingsChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (change) {
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig), change));
  }, [dataSourceConfig]);
  urlTooltip = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Your access method is ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", null, "Server"), ", this means the URL needs to be accessible from the grafana backend/server.");
  var isValidUrl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(dataSourceConfig.url);
  var notValidStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    box-shadow: inset 0 0px 5px ", ";\n  "], ["\n    box-shadow: inset 0 0px 5px ", ";\n  "])), theme.palette.red);
  var inputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])((_a = {}, _a["width-20"] = true, _a[notValidStyle] = !isValidUrl, _a));
  var urlInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    className: inputStyle,
    placeholder: defaultUrl,
    value: dataSourceConfig.url,
    onChange: function onChange(event) {
      return onSettingsChange({
        url: event.currentTarget.value
      });
    }
  });

  var onPasswordReset = function onPasswordReset() {
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig), {
      basicAuthPassword: '',
      secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig.secureJsonData), {
        basicAuthPassword: ''
      }),
      secureJsonFields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig.secureJsonFields), {
        basicAuthPassword: false
      })
    }));
  };

  var onPasswordChange = function onPasswordChange(event) {
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig), {
      basicAuth: true,
      withCredentials: true,
      basicAuthPassword: event.currentTarget.value,
      secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig.secureJsonData), {
        basicAuthPassword: event.currentTarget.value
      }),
      jsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig.jsonData), {
        password: event.currentTarget.value
      })
    }));
  };

  var onUserChange = function onUserChange(event) {
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig), {
      basicAuth: true,
      withCredentials: true,
      basicAuthUser: event.currentTarget.value,
      jsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dataSourceConfig.jsonData), {
        user: event.currentTarget.value
      })
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "page-heading"
  }, "HTTP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-group"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    label: "URL",
    labelWidth: 11,
    tooltip: urlTooltip,
    inputEl: urlInput
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormField, {
    label: "User",
    labelWidth: 10,
    inputWidth: 18,
    placeholder: "user",
    value: dataSourceConfig.basicAuthUser,
    onChange: onUserChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecretFormField, {
    isConfigured: false,
    value: password || '',
    inputWidth: 18,
    labelWidth: 10,
    onReset: onPasswordReset,
    onChange: onPasswordChange
  })))));
};

var ConfigEditor = function ConfigEditor(props) {
  var options = props.options,
      onOptionsChange = props.onOptionsChange;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpliceSourceHttpSettings, {
    defaultUrl: 'http://splicedb-splice-http.<NAMESPACE>.svc.cluster.local:1111/',
    dataSourceConfig: options,
    showAccessOptions: true,
    onChange: onOptionsChange
  }));
};
var templateObject_1;

/***/ }),

/***/ "./DataSource.ts":
/*!***********************!*\
  !*** ./DataSource.ts ***!
  \***********************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runStreams */ "./runStreams.ts");





var ExpressionDatasourceID = '__expr__';

var DataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(instanceSettings) {
    var _a, _b;

    var _this = _super.call(this, instanceSettings) || this;

    _this.type = 'splicemachinedb';
    _this.url = (_a = instanceSettings.url, _a !== null && _a !== void 0 ? _a : '');
    _this.username = (_b = instanceSettings.username, _b !== null && _b !== void 0 ? _b : '');
    _this.name = instanceSettings.name;
    _this.database = instanceSettings.database;
    _this.basicAuth = instanceSettings.basicAuth;
    _this.withCredentials = instanceSettings.withCredentials;
    _this.headers = instanceSettings.jsonData;
    return _this;
  }

  DataSource.prototype.testDatasource = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        // Implement a health check for your data source.
        return [2
        /*return*/
        , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
          url: this.url + '/',
          method: 'GET',
          headers: this.headers
        }).then(function (response) {
          if (response.status === 200) {
            return {
              status: 'success',
              message: 'Data source is working',
              title: 'Success'
            };
          }

          return {
            status: 'fail',
            message: response.message
          };
        })];
      });
    });
  };
  /**
   * Ideally final -- any other implementation may not work as expected
   */


  DataSource.prototype.query = function (request) {
    var e_1, _a;

    var _this = this;

    var intervalMs = request.intervalMs,
        maxDataPoints = request.maxDataPoints,
        range = request.range,
        requestId = request.requestId;
    var orgId = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].bootData.user.orgId;
    var streams = [];
    var queries = [];
    var targets = request.targets;

    if (this.filterQuery) {
      targets = targets.filter(function (q) {
        return _this.filterQuery(q);
      });
    }

    try {
      for (var targets_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(targets), targets_1_1 = targets_1.next(); !targets_1_1.done; targets_1_1 = targets_1.next()) {
        var q = targets_1_1.value;

        if (q.format === 'stream') {
          streams.push(Object(_runStreams__WEBPACK_IMPORTED_MODULE_4__["runStream"])(this.myapplyTemplateVariables(q, request.scopedVars), request, this.headers, this.url));
        } else {
          var datasourceId = this.id;

          if (q.datasource === ExpressionDatasourceID) {
            queries.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, q), {
              datasourceId: datasourceId,
              orgId: orgId
            }));
          } else {
            if (q.datasource) {
              var dsName = q.datasource === 'default' ? _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].defaultDatasource : q.datasource;
              var ds = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].datasources[dsName];

              if (!ds) {
                throw new Error('Unknown Datasource: ' + q.datasource);
              }

              datasourceId = ds.id;
            }

            queries.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.myapplyTemplateVariables(q, request.scopedVars)), {
              datasourceId: datasourceId,
              intervalMs: intervalMs,
              maxDataPoints: maxDataPoints,
              orgId: orgId
            }));
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (targets_1_1 && !targets_1_1.done && (_a = targets_1["return"])) _a.call(targets_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    if (queries.length) {
      var body = {
        queries: queries
      };

      if (range) {
        body.range = range;
        body.from = range.from.valueOf().toString();
        body.to = range.to.valueOf().toString();
      } //const req: Promise<DataQueryResponse> = getBackendSrv()


      var stream = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
        url: this.url + '/query',
        method: 'POST',
        data: body,
        headers: this.headers,
        requestId: requestId
      }).then(function (rsp) {
        //const dqs = toDataQueryResponse(rsp);
        //if (this.processResponse) {
        //return this.processResponse(dqs);
        //}
        //return dqs;
        var dqs = {
          data: rsp.data,
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Done
        };
        return dqs;
      })["catch"](function (err) {
        err.isHandled = true; // Avoid extra popup warning

        var dqs = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["toDataQueryResponse"])(err);

        if (_this.processResponse) {
          return _this.processResponse(dqs);
        }

        return dqs;
      });
      streams.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stream));
    }

    return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(streams));
  };
  /**
   * Ideally final -- any other implementation may not work as expected
   */


  DataSource.prototype.variableQuery = function (request) {
    var e_2, _a;

    var _this = this;

    var intervalMs = request.intervalMs,
        maxDataPoints = request.maxDataPoints,
        range = request.range,
        requestId = request.requestId;
    var orgId = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].bootData.user.orgId;
    var streams = [];
    var queries = [];
    var targets = request.targets;

    if (this.filterQuery) {
      targets = targets.filter(function (q) {
        return _this.filterQuery(q);
      });
    }

    try {
      for (var targets_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(targets), targets_2_1 = targets_2.next(); !targets_2_1.done; targets_2_1 = targets_2.next()) {
        var q = targets_2_1.value;

        if (q.format === 'stream') {
          streams.push(Object(_runStreams__WEBPACK_IMPORTED_MODULE_4__["runStream"])(this.myapplyTemplateVariables(q, request.scopedVars), request, this.headers, this.url));
        } else {
          var datasourceId = this.id;

          if (q.datasource === ExpressionDatasourceID) {
            queries.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, q), {
              datasourceId: datasourceId,
              orgId: orgId
            }));
          } else {
            if (q.datasource) {
              var dsName = q.datasource === 'default' ? _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].defaultDatasource : q.datasource;
              var ds = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].datasources[dsName];

              if (!ds) {
                throw new Error('Unknown Datasource: ' + q.datasource);
              }

              datasourceId = ds.id;
            }

            queries.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.myapplyTemplateVariables(q, request.scopedVars)), {
              datasourceId: datasourceId,
              intervalMs: intervalMs,
              maxDataPoints: maxDataPoints,
              orgId: orgId
            }));
          }
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (targets_2_1 && !targets_2_1.done && (_a = targets_2["return"])) _a.call(targets_2);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    if (queries.length) {
      var sqlstmt = queries[0];
      var body = {
        sqlstmt: sqlstmt
      };

      if (range) {
        body.range = range;
        body.from = range.from.valueOf().toString();
        body.to = range.to.valueOf().toString();
      } //const req: Promise<DataQueryResponse> = getBackendSrv()


      var stream = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest({
        url: this.url + '/variablequery',
        method: 'POST',
        data: body,
        headers: this.headers,
        requestId: requestId
      }).then(function (rsp) {
        //const dqs = toDataQueryResponse(rsp);
        //if (this.processResponse) {
        //return this.processResponse(dqs);
        //}
        //return dqs;
        var dqs = {
          data: rsp.data,
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Done
        };
        return dqs;
      })["catch"](function (err) {
        err.isHandled = true; // Avoid extra popup warning

        var dqs = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["toDataQueryResponse"])(err);

        if (_this.processResponse) {
          return _this.processResponse(dqs);
        }

        return dqs;
      });
      streams.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(stream));
    }

    return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(streams));
  };

  DataSource.prototype.myapplyTemplateVariables = function (query, scopedVars) {
    var _a;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      queryText: Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().replace((_a = query.queryText, _a !== null && _a !== void 0 ? _a : ''), scopedVars)
    });
  };

  DataSource.prototype.metricFindQuery = function (query, options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var response, data, dataCols, dataRows;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!query) {
              return [2
              /*return*/
              , []];
            }

            return [4
            /*yield*/
            , this.variableQuery({
              targets: [{
                rawQueryText: query,
                queryText: query,
                timeColumns: []
              }]
            }).toPromise()];

          case 1:
            response = _a.sent();

            if (response.error) {
              throw new Error(response.error.message);
            }

            data = response.data;
            dataCols = data.columns;

            if (data.columns.length !== 1) {
              throw new Error("Received more than one (" + dataCols.length + ") columns");
            }

            dataRows = data.rows;
            return [2
            /*return*/
            , dataRows.flatMap(function (x) {
              return x;
            }).map(function (text) {
              return {
                text: text
              };
            })];
        }
      });
    });
  };

  return DataSource;
}(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["DataSourceWithBackend"]);



/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: QueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditor", function() { return QueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var FORMAT_OPTIONS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}, {
  label: 'Stream',
  value: 'stream'
}];
var defaultTimeseriesQuery = "SELECT\n    <time_column> as time,\n    <value_column> as value\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC";
var defaultTableQuery = '';

var QueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryEditor, _super);

  function QueryEditor(props) {
    var _this = _super.call(this, props) || this;

    _this.onFormatChange = function (option) {
      _this.query.format = option.value;

      if (_this.query.format === 'table' && _this.query.queryText === defaultTimeseriesQuery) {
        _this.query.queryText = defaultTableQuery;
      } else if (_this.query.format === 'time_series' && _this.query.queryText === '') {
        _this.query.queryText = defaultTimeseriesQuery;
      } else if (_this.query.format === 'stream' && _this.query.queryText === '') {
        _this.query.queryText = defaultTimeseriesQuery;
      }

      _this.setState({
        formatOption: option
      }, _this.onRunQuery);
    };

    _this.onQueryTextChange = function (event) {
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query;
      _this.query.queryText = event.target.value;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        queryText: event.target.value
      }));
    };

    _this.onQueryTextKeyDown = function (event) {
      var keyboardEvent = event;

      if (keyboardEvent.keyCode === 13 && keyboardEvent.shiftKey || keyboardEvent.key === 'Tab') {
        keyboardEvent.preventDefault();

        _this.onRunQuery();

        return;
      }
    };

    _this.onRunQuery = function () {
      var query = _this.query;

      _this.props.onChange(query);

      _this.props.onRunQuery();
    }; // Use default query to prevent undefined input values
    //const defaultQuery: Partial<SpliceQuery> = {};


    var defaultQuery = {
      format: 'time_series',
      queryText: defaultTimeseriesQuery
    };
    var query = Object.assign({}, defaultQuery, props.query);
    _this.query = query; // Query target properties that are fully controlled inputs

    _this.state = {
      // Select options
      formatOption: FORMAT_OPTIONS.find(function (option) {
        return option.value === query.format;
      }) || FORMAT_OPTIONS[0]
    };

    _this.props.onChange(query);

    return _this;
  }

  QueryEditor.prototype.render = function () {
    var formatOption = this.state.formatOption;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      rows: 9,
      className: "gf-form-input",
      placeholder: "Enter a splice machine query (run with Shift+Enter)",
      "data-min-length": 0,
      "data-items": 100,
      value: this.query.queryText,
      onKeyDown: this.onQueryTextKeyDown,
      onChange: this.onQueryTextChange,
      spellCheck: false
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-label width-7"
    }, "Format"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      width: 16,
      isSearchable: false,
      options: FORMAT_OPTIONS,
      onChange: this.onFormatChange,
      value: formatOption
    }))));
  };

  return QueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataSource */ "./DataSource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_DataSource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__["ConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["QueryEditor"]);

/***/ }),

/***/ "./runStreams.ts":
/*!***********************!*\
  !*** ./runStreams.ts ***!
  \***********************/
/*! exports provided: runStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runStream", function() { return runStream; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__);




function runStream(target, req, headerinfo, queryurl) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
    var streamId = "signal-" + req.panelId + "-" + target.refId;
    var intervalMs = req.intervalMs,
        requestId = req.requestId,
        range = req.range;
    var speed = intervalMs || 5000;
    var maxDataPoints = req.maxDataPoints || 750;
    var data = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__["CircularDataFrame"]({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Fetch ' + target.refId;
    data.addField({
      name: 'time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].time
    });
    data.addField({
      name: 'value',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number
    });
    var timeoutId = null;
    var prevTime = 0;
    var lag = 0;
    var prevAddRowDone = true;

    var addNextRow = function addNextRow(fromtime, totime) {
      //fetch data for time
      var queries = [];
      var curRange = {
        from: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["toUtc"])(fromtime),
        to: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["toUtc"])(totime)
      };
      queries.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), {
        maxDataPoints: maxDataPoints,
        speed: speed,
        totime: totime
      }));
      var body = {
        queries: queries
      };
      body.range = curRange;
      body.from = curRange.from.valueOf().toString();
      body.to = curRange.to.valueOf().toString();
      Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest({
        url: queryurl + '/query',
        method: 'POST',
        data: body,
        headers: headerinfo,
        requestId: requestId
      }).then(function (rsp) {
        var e_1, _a;

        if (rsp.data && rsp.data[0]) {
          try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(rsp.data[0].rows), _c = _b.next(); !_c.done; _c = _b.next()) {
              var row = _c.value;
              data.fields[0].values.add(row[0]);
              data.fields[1].values.add(row[1]);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
      })["catch"](function (err) {
        err.isHandled = true; // Avoid extra popup warning
      });
      prevAddRowDone = true;
      prevTime = totime;
    }; // Fill the buffer on init


    if (true) {
      var initFromTime = Date.now() - maxDataPoints * speed;
      var initToTime = Date.now();

      if (range) {
        initFromTime = range.from.valueOf();
        initToTime = range.to.valueOf();
        lag = Date.now() - initToTime;
      }

      prevAddRowDone = false;
      addNextRow(initFromTime, initToTime);
    }

    var pushNextEvent = function pushNextEvent() {
      if (prevAddRowDone) {
        prevAddRowDone = false;
        addNextRow(prevTime, Date.now() - lag);
        subscriber.next({
          data: [data],
          key: streamId
        });
      }

      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, speed);
    return function () {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map