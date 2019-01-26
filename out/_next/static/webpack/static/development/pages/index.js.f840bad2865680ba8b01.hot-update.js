webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/blogList.js":
/*!********************************!*\
  !*** ./components/blogList.js ***!
  \********************************/
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
      padding: '25px 0',
      '& .image': {
        width: '100%'
      },
      '& .title': {
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 10,
        lineHeight: 1.2,
        transition: 'color 0.3s ease',
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
      '& .description': {
        fontSize: 15,
        fontWeight: 400
      }
    }
  };
};

var BlogList =
/*#__PURE__*/
function (_Component) {
  _inherits(BlogList, _Component);

  function BlogList() {
    _classCallCheck(this, BlogList);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogList).apply(this, arguments));
  }

  _createClass(BlogList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          style = _this$props.style,
          data = _this$props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        md: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/detail/".concat(data.slug)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "image",
        src: data.image,
        alt: "".concat(data.title, " image")
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        md: 7
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/detail/".concat(data.slug)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: "title",
        variant: "h2",
        gutterBottom: true
      }, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: "description",
        variant: "body2",
        gutterBottom: true
      }, data.description))));
    }
  }]);

  return BlogList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BlogList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(BlogList));

/***/ })

})
//# sourceMappingURL=index.js.f840bad2865680ba8b01.hot-update.js.map