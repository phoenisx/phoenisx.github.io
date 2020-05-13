webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    padding: '0 16px',\n    [theme.breakpoints.down('xs')]: {\n      flexDirection: 'column'\n    }\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold',\n    [theme.breakpoints.down('xs')]: {\n      marginBottom: 16\n    }\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    flexWrap: 'wrap'\n  },\n  button: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    display: 'inline-flex',\n    flex: 1,\n    maxWidth: 100\n  },\n  share: {\n    color: '#fff',\n    background: '#444',\n    '&:hover, &focus, &:active': {\n      background: '#333'\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const shareClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.share);\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null; // if (props.navigator.share) {\n\n  allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: shareClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Share\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => shareLink(props),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }, \"Share\"); // }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    className: props.classes.buttonWrapper,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwiY29weXJpZ2h0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiYnV0dG9uV3JhcHBlciIsImZsZXhXcmFwIiwiYnV0dG9uIiwibWFyZ2luTGVmdCIsImZsZXgiLCJtYXhXaWR0aCIsInNoYXJlIiwiYmFja2dyb3VuZCIsImZiIiwidHciLCJmYWNlYm9va1NoYXJlIiwidXJsIiwid2luZG93Iiwib3BlbiIsInNoYXJlTGluayIsInByb3BzIiwibmF2aWdhdG9yIiwidGl0bGUiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVuZGVyU2hhcmUiLCJzaGFyZUNsYXNzZXMiLCJjeCIsImNsYXNzZXMiLCJmYkNsYXNzZXMiLCJ0d0NsYXNzZXMiLCJhbGxTaGFyZSIsIkZvb3RlciIsInJvb3RDbGFzc2VzIiwiY2xhc3NOYW1lIiwiX25hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFtQjtBQUM5Q0MsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLGtCQUFjLEVBQUUsZUFGWjtBQUdKQyxnQkFBWSxFQUFFLFFBSFY7QUFJSkMsY0FBVSxFQUFFLFFBSlI7QUFLSkMsYUFBUyxFQUFFLEdBTFA7QUFNSkMsV0FBTyxFQUFFLFFBTkw7QUFPSixLQUFDUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVC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aEIsRUFBMEM7QUFBQTs7QUFDL0MsUUFBTVUsT0FBTyxHQUFHMUMsU0FBUyxFQUF6QjtBQUNBLFFBQU0rQyxXQUFXLEdBQUdOLGlEQUFFLENBQUNDLE9BQU8sQ0FBQ3ZDLElBQVQsRUFBZTZCLEtBQUssQ0FBQ2dCLFNBQXJCLENBQXRCOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxPQUFrQnBCLE1BQU0sQ0FBQ0ksU0FBekIsR0FBcUMsU0FBeEQ7O0FBQ0EsU0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLGFBQVMsRUFBRWMsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFFTCxPQUFPLENBQUM3QixTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBSUcwQixXQUFXLGlDQUNQUCxLQURPO0FBRVZDLGFBQVMsRUFBRWdCLFVBRkQ7QUFHVlA7QUFIVSxLQUpkLENBREY7QUFZRDs7R0FoQmVJLE07VUFDRTlDLFM7OztLQURGOEMsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBCdXR0b24sIFRoZW1lLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmUsIEZhY2Vib29rLCBUd2l0dGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW50ZXJmYWNlIElGaXhlZE5hdmJhclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogMTI4LFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgfSxcbiAgY29weXJpZ2h0OiB7XG4gICAgY29sb3I6ICcjYWFhJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbldyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgJyYrJic6IHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDE2LFxuICAgIH0sXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmbGV4OiAxLFxuICAgIG1heFdpZHRoOiAxMDAsXG4gIH0sXG4gIHNoYXJlOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzQ0NCcsXG4gICAgJyY6aG92ZXIsICZmb2N1cywgJjphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMzMycsXG4gICAgfSxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBzaGFyZUNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5zaGFyZSk7XG4gIGNvbnN0IGZiQ2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLmZiKTtcbiAgY29uc3QgdHdDbGFzc2VzID0gY3gocHJvcHMuY2xhc3Nlcy5idXR0b24sIHByb3BzLmNsYXNzZXMudHcpO1xuICBsZXQgYWxsU2hhcmUgPSBudWxsO1xuICAvLyBpZiAocHJvcHMubmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgYWxsU2hhcmUgPSAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3NoYXJlQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmUgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNoYXJlTGluayhwcm9wcyl9XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25XcmFwcGVyfSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgIHthbGxTaGFyZX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17dHdDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxUd2l0dGVyIC8+fVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwcm9wcy51cmx9IC0gJHtwcm9wcy50aXRsZX1gfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2ZiQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8RmFjZWJvb2sgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGZhY2Vib29rU2hhcmUocHJvcHMudXJsKX1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIocHJvcHM6IElGaXhlZE5hdmJhclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IF9uYXZpZ2F0b3IgPSBwcm9jZXNzLmJyb3dzZXIgPyB3aW5kb3cubmF2aWdhdG9yIDoge307XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e3Jvb3RDbGFzc2VzfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5cmlnaHR9PlxuICAgICAgICDCqSBDb3B5cmlnaHQgMjAyMCBTdWJyb3RvIEJpc3dhc1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3JlbmRlclNoYXJlKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIG5hdmlnYXRvcjogX25hdmlnYXRvcixcbiAgICAgICAgY2xhc3NlcyxcbiAgICAgIH0pfVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})