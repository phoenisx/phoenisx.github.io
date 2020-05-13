webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    padding: '0 16px',\n    [theme.breakpoints.down('xs')]: {\n      flexDirection: 'column'\n    }\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold',\n    [theme.breakpoints.down('xs')]: {\n      marginBottom: 16\n    }\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    [theme.breakpoints.down('xs')]: {\n      flexDirection: 'column'\n    }\n  },\n  button: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    [theme.breakpoints.down('xs')]: {\n      width: '100%',\n      '&+&': {\n        marginTop: 16,\n        marginLeft: 0\n      }\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null; // if (props.navigator.share) {\n\n  allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: props.classes.button,\n    onClick: () => shareLink(props),\n    color: \"primary\",\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareOutlined\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 20\n      }\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, \"Share\"); // }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwiY29weXJpZ2h0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiYnV0dG9uV3JhcHBlciIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImZiIiwiYmFja2dyb3VuZCIsInR3IiwiZmFjZWJvb2tTaGFyZSIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJzaGFyZUxpbmsiLCJwcm9wcyIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVuZGVyU2hhcmUiLCJmYkNsYXNzZXMiLCJjeCIsImNsYXNzZXMiLCJ0d0NsYXNzZXMiLCJhbGxTaGFyZSIsIkZvb3RlciIsInJvb3RDbGFzc2VzIiwiY2xhc3NOYW1lIiwiX25hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFtQjtBQUM5Q0MsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLGtCQUFjLEVBQUUsZUFGWjtBQUdKQyxnQkFBWSxFQUFFLFFBSFY7QUFJSkMsY0FBVSxFQUFFLFFBSlI7QUFLSkMsYUFBUyxFQUFFLEdBTFA7QUFNSkMsV0FBTyxFQUFFLFFBTkw7QUFPSixLQUFDUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJDLG1CQUFhLEVBQUU7QUFEZTtBQVA1QixHQUR3QztBQVk5Q0MsV0FBUyxFQUFFO0FBQ1RDLFNBQUssRUFBRSxNQURFO0FBRVRDLGNBQVUsRUFBRSxNQUZIO0FBR1QsS0FBQ2IsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCSyxrQkFBWSxFQUFFO0FBRGdCO0FBSHZCLEdBWm1DO0FBbUI5Q0MsZUFBYSxFQUFFO0FBQ2JiLFdBQU8sRUFBRSxNQURJO0FBRWJDLGtCQUFjLEVBQUUsVUFGSDtBQUdiRSxjQUFVLEVBQUUsUUFIQztBQUliLEtBQUNMLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsbUJBQWEsRUFBRTtBQURlO0FBSm5CLEdBbkIrQjtBQTJCOUNNLFFBQU0sRUFBRTtBQUNOLFdBQU87QUFDTFYsZUFBUyxFQUFFLENBRE47QUFFTFcsZ0JBQVUsRUFBRTtBQUZQLEtBREQ7QUFLTixLQUFDakIsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCUyxXQUFLLEVBQUUsTUFEdUI7QUFFOUIsYUFBTztBQUNMWixpQkFBUyxFQUFFLEVBRE47QUFFTFcsa0JBQVUsRUFBRTtBQUZQO0FBRnVCO0FBTDFCLEdBM0JzQztBQXdDOUNFLElBQUUsRUFBRTtBQUNGUCxTQUFLLEVBQUUsTUFETDtBQUVGUSxjQUFVLEVBQUUsU0FGVjtBQUdGLGlDQUE2QjtBQUMzQkEsZ0JBQVUsRUFBRTtBQURlO0FBSDNCLEdBeEMwQztBQStDOUNDLElBQUUsRUFBRTtBQUNGVCxTQUFLLEVBQUUsTUFETDtBQUVGUSxjQUFVLEVBQUUsU0FGVjtBQUdGLGlDQUE2QjtBQUMzQkEsZ0JBQVUsRUFBRTtBQURlO0FBSDNCO0FBL0MwQyxDQUFuQixDQUFELENBQTVCOztBQXdEQSxNQUFNRSxhQUFhLEdBQUlDLEdBQUQsSUFBaUI7QUFDckNDLFFBQU0sQ0FBQ0MsSUFBUCxDQUNHLGdEQUErQ0YsR0FBSSxFQUR0RCxFQUVFLHVCQUZGLEVBR0Usc0JBSEY7QUFLQSxTQUFPLEtBQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1HLFNBQVMsR0FBRyxNQUFPQyxLQUFQLElBQXlEO0FBQ3pFLE1BQUk7QUFDRkEsU0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixLQUNHLE1BQU1GLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0I7QUFDM0JDLFdBQUssRUFBRUgsS0FBSyxDQUFDRyxLQURjO0FBRTNCQyxVQUFJLEVBQUcsYUFBWUosS0FBSyxDQUFDSSxJQUFLLEVBRkg7QUFHM0JSLFNBQUcsRUFBRUksS0FBSyxDQUFDSjtBQUhnQixLQUF0QixDQURUO0FBTUFTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsR0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNkRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCQyxLQUE3QjtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSxNQUFNQyxXQUFXLEdBQ2ZSLEtBRGtCLElBS2Y7QUFDSCxRQUFNUyxTQUFTLEdBQUdDLGlEQUFFLENBQUNWLEtBQUssQ0FBQ1csT0FBTixDQUFjdEIsTUFBZixFQUF1QlcsS0FBSyxDQUFDVyxPQUFOLENBQWNuQixFQUFyQyxDQUFwQjtBQUNBLFFBQU1vQixTQUFTLEdBQUdGLGlEQUFFLENBQUNWLEtBQUssQ0FBQ1csT0FBTixDQUFjdEIsTUFBZixFQUF1QlcsS0FBSyxDQUFDVyxPQUFOLENBQWNqQixFQUFyQyxDQUFwQjtBQUNBLE1BQUltQixRQUFRLEdBQUcsSUFBZixDQUhHLENBSUg7O0FBQ0VBLFVBQVEsR0FDTixNQUFDLHdEQUFEO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLGFBQVMsRUFBRWIsS0FBSyxDQUFDVyxPQUFOLENBQWN0QixNQUgzQjtBQUlFLFdBQU8sRUFBRSxNQUFNVSxTQUFTLENBQUNDLEtBQUQsQ0FKMUI7QUFLRSxTQUFLLEVBQUMsU0FMUjtBQU1FLGFBQVMsRUFBRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FMQyxDQWlCSDs7QUFFQSxTQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLEVBQUVBLEtBQUssQ0FBQ1csT0FBTixDQUFjdkIsYUFBL0I7QUFBOEMsTUFBRSxFQUFFLEVBQWxEO0FBQXNELE1BQUUsRUFBRSxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d5QixRQURILEVBRUUsTUFBQyx3REFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxhQUFTLEVBQUVELFNBSGI7QUFJRSxhQUFTLEVBQUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxVQUFNLEVBQUMsUUFMVDtBQU1FLE9BQUcsRUFBQyxxQkFOTjtBQU9FLFFBQUksRUFBRyx5Q0FBd0NaLEtBQUssQ0FBQ0osR0FBSSxNQUFLSSxLQUFLLENBQUNHLEtBQU0sRUFQNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBYUUsTUFBQyx3REFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxhQUFTLEVBQUVNLFNBSGI7QUFJRSxhQUFTLEVBQUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxXQUFPLEVBQUUsTUFBTWQsYUFBYSxDQUFDSyxLQUFLLENBQUNKLEdBQVAsQ0FMOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLENBREY7QUF5QkQsQ0FqREQ7O0FBbURPLFNBQVNrQixNQUFULENBQWdCZCxLQUFoQixFQUEwQztBQUFBOztBQUMvQyxRQUFNVyxPQUFPLEdBQUd4QyxTQUFTLEVBQXpCO0FBQ0EsUUFBTTRDLFdBQVcsR0FBR0wsaURBQUUsQ0FBQ0MsT0FBTyxDQUFDckMsSUFBVCxFQUFlMEIsS0FBSyxDQUFDZ0IsU0FBckIsQ0FBdEI7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE9BQWtCcEIsTUFBTSxDQUFDSSxTQUF6QixHQUFxQyxTQUF4RDs7QUFDQSxTQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsYUFBUyxFQUFFYyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUVKLE9BQU8sQ0FBQzNCLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFJR3dCLFdBQVcsaUNBQ1BSLEtBRE87QUFFVkMsYUFBUyxFQUFFZ0IsVUFGRDtBQUdWTjtBQUhVLEtBSmQsQ0FERjtBQVlEOztHQWhCZUcsTTtVQUNFM0MsUzs7O0tBREYyQyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIEJ1dHRvbiwgVGhlbWUsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBTaGFyZU91dGxpbmVkLCBGYWNlYm9vaywgVHdpdHRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmludGVyZmFjZSBJRml4ZWROYXZiYXJQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Ub3A6IDEyOCxcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGNvbG9yOiAnI2FhYScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICB9LFxuICB9LFxuICBidXR0b25XcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgJyYrJic6IHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDE2LFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgJyYrJic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAxNixcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBmYkNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5mYik7XG4gIGNvbnN0IHR3Q2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgLy8gaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hhcmVMaW5rKHByb3BzKX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVPdXRsaW5lZCAvPn1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgICk7XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25XcmFwcGVyfSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgIHthbGxTaGFyZX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17dHdDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxUd2l0dGVyIC8+fVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwcm9wcy51cmx9IC0gJHtwcm9wcy50aXRsZX1gfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2ZiQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8RmFjZWJvb2sgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGZhY2Vib29rU2hhcmUocHJvcHMudXJsKX1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIocHJvcHM6IElGaXhlZE5hdmJhclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IF9uYXZpZ2F0b3IgPSBwcm9jZXNzLmJyb3dzZXIgPyB3aW5kb3cubmF2aWdhdG9yIDoge307XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e3Jvb3RDbGFzc2VzfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5cmlnaHR9PlxuICAgICAgICDCqSBDb3B5cmlnaHQgMjAyMCBTdWJyb3RvIEJpc3dhc1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3JlbmRlclNoYXJlKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIG5hdmlnYXRvcjogX25hdmlnYXRvcixcbiAgICAgICAgY2xhc3NlcyxcbiAgICAgIH0pfVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})