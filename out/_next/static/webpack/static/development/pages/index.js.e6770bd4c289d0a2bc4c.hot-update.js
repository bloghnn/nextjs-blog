webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./components/container.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingBottom: 30,
      '& img': {
        height: 25,
        verticalAlign: 'middle',
        marginTop: -3
      },
      '& p': {
        marginBottom: 15
      },
      '& a': {
        color: 'black',
        fontWeight: 600
      },
      '& button': {
        fontSize: 13,
        textTransform: 'capitalize'
      }
    }
  };
};

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          style = _this$props.style;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        variant: "body2",
        color: "inherit",
        noWrap: true
      }, "Created by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/maafaishal",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "@maafaishal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/maafaishal",
        target: "_blank",
        rel: "noopener noreferrer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        variant: "contained",
        color: "primary"
      }, "View on Github"))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Footer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Footer));

/***/ })

})
//# sourceMappingURL=index.js.e6770bd4c289d0a2bc4c.hot-update.js.map