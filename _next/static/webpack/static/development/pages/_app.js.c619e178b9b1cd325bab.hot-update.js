webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/progressive-image.tsx":
/*!******************************************!*\
  !*** ./components/progressive-image.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-progressive-image */ "./node_modules/react-progressive-image/dist.js");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/progressive-image.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    filter: 'blur(0)',
    transition: 'filter 0.3s ease-out'
  },
  blur: {
    filter: 'blur(3)'
  }
});
function Image(props) {
  const classes = useStyles();
  return __jsx(react_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: props.src,
    placeholder: props.placeholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, (src, loading) => {
    const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, {
      [classes.blur]: loading
    });
    return __jsx("img", {
      className: rootClasses,
      src: src,
      alt: props.alt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 16
      }
    });
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.c619e178b9b1cd325bab.hot-update.js.map