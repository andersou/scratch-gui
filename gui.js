var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\r\nbody,\r\n.index_app_2mqDO {\r\n    /* probably unecessary, transitional until layout is refactored */\r\n    width: 100%; \r\n    height: 100%;\r\n    margin: 0;\r\n\r\n    /* Setting min height/width makes the UI scroll below those sizes */\r\n    min-width: 1024px;\r\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\r\n}\r\n\r\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\r\n\r\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\r\n", ""]);

// exports
exports.locals = {
	"app": "index_app_2mqDO"
};

/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! intl */ "./node_modules/intl/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _analytics = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _appStateHoc = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _browserModal = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");

var _browserModal2 = _interopRequireDefault(_browserModal);

var _supportedBrowser = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");

var _supportedBrowser2 = _interopRequireDefault(_supportedBrowser);

var _index = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register "base" page view
// Polyfills
_analytics2.default.pageview("/"); // For Safari 9

var appTarget = document.createElement("div");
appTarget.className = _index2.default.app;
document.body.appendChild(appTarget);
if ((0, _supportedBrowser2.default)()) {
    // require needed here to avoid importing unsupported browser-crashing code
    // at the top level
    __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);
} else {
    _browserModal2.default.setAppElement(appTarget);
    var WrappedBrowserModalComponent = (0, _appStateHoc2.default)(_browserModal2.default, true /* localesOnly */);
    var handleBack = function handleBack() {};
    // eslint-disable-next-line react/jsx-no-bind
    _reactDom2.default.render(_react2.default.createElement(WrappedBrowserModalComponent, { onBack: handleBack }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _appStateHoc = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _gui = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");

var _gui2 = _interopRequireDefault(_gui);

var _hashParserHoc = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");

var _hashParserHoc2 = _interopRequireDefault(_hashParserHoc);

var _titledHoc = __webpack_require__(/*! ../lib/titled-hoc.jsx */ "./src/lib/titled-hoc.jsx");

var _titledHoc2 = _interopRequireDefault(_titledHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */
exports.default = function (appTarget) {
    _gui2.default.setAppElement(appTarget);

    // note that redux's 'compose' function is just being used as a general utility to make
    // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
    // ability to compose reducers.
    var WrappedGui = (0, _redux.compose)(_appStateHoc2.default, _hashParserHoc2.default, _titledHoc2.default)(_gui2.default);

    // TODO a hack for testing the backpack, allow backpack host to be set by url param
    var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
    var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;

    var backpackOptions = {
        visible: true,
        host: backpackHost
    };
    if (false) {}

    _reactDom2.default.render(_react2.default.createElement(WrappedGui, { backpackOptions: backpackOptions }), appTarget);
};

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map