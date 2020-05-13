webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    [theme.breakpoints.down('sm')]: {\n      flexDirection: 'column'\n    }\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold',\n    [theme.breakpoints.down('sm')]: {\n      marginBottom: 16\n    }\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    [theme.breakpoints.down('sm')]: {\n      width: '100%',\n      flexDirection: 'column'\n    }\n  },\n  button: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    [theme.breakpoints.down('sm')]: {\n      width: '100%',\n      '&+&': {\n        marginTop: 16,\n        marginLeft: 0\n      }\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      size: \"small\",\n      variant: \"contained\",\n      className: props.classes.button,\n      onClick: () => shareLink(props),\n      color: \"primary\",\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareRounded\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 20\n        }\n      }),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJjb3B5cmlnaHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJidXR0b25XcmFwcGVyIiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5MZWZ0IiwiZmIiLCJiYWNrZ3JvdW5kIiwidHciLCJmYWNlYm9va1NoYXJlIiwidXJsIiwid2luZG93Iiwib3BlbiIsInNoYXJlTGluayIsInByb3BzIiwibmF2aWdhdG9yIiwic2hhcmUiLCJ0aXRsZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXJTaGFyZSIsImZiQ2xhc3NlcyIsImN4IiwiY2xhc3NlcyIsInR3Q2xhc3NlcyIsImFsbFNoYXJlIiwiRm9vdGVyIiwicm9vdENsYXNzZXMiLCJjbGFzc05hbWUiLCJfbmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQW1CO0FBQzlDQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLE1BREw7QUFFSkMsa0JBQWMsRUFBRSxlQUZaO0FBR0pDLGdCQUFZLEVBQUUsUUFIVjtBQUlKQyxjQUFVLEVBQUUsUUFKUjtBQUtKQyxhQUFTLEVBQUUsR0FMUDtBQU1KLEtBQUNOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsbUJBQWEsRUFBRTtBQURlO0FBTjVCLEdBRHdDO0FBVzlDQyxXQUFTLEVB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LFNBQVMsRUFBekI7QUFDQSxRQUFNMkMsV0FBVyxHQUFHTCxpREFBRSxDQUFDQyxPQUFPLENBQUNwQyxJQUFULEVBQWV5QixLQUFLLENBQUNnQixTQUFyQixDQUF0Qjs7QUFDQSxRQUFNQyxVQUFVLEdBQUcsT0FBa0JwQixNQUFNLENBQUNJLFNBQXpCLEdBQXFDLFNBQXhEOztBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixhQUFTLEVBQUVjLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRUosT0FBTyxDQUFDM0IsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixFQUlHd0IsV0FBVyxpQ0FDUFIsS0FETztBQUVWQyxhQUFTLEVBQUVnQixVQUZEO0FBR1ZOO0FBSFUsS0FKZCxDQURGO0FBWUQ7O0dBaEJlRyxNO1VBQ0UxQyxTOzs7S0FERjBDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgQnV0dG9uLCBUaGVtZSwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEZhY2Vib29rLCBUd2l0dGVyLCBTaGFyZVJvdW5kZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbnRlcmZhY2UgSUZpeGVkTmF2YmFyUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiAxMjgsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICB9LFxuICBjb3B5cmlnaHQ6IHtcbiAgICBjb2xvcjogJyNhYWEnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICAnJismJzoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luTGVmdDogMTYsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnJismJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IDE2LFxuICAgICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmYjoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0MzYxYjMnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMyNTQzOTUnLFxuICAgIH0sXG4gIH0sXG4gIHR3OiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzRmYWZlZCcsXG4gICAgJyY6aG92ZXIsICZmb2N1cywgJjphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMxOTFDRicsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgZmFjZWJvb2tTaGFyZSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICB3aW5kb3cub3BlbihcbiAgICBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHt1cmx9YCxcbiAgICAnZmFjZWJvb2stc2hhcmUtZGlhbG9nJyxcbiAgICAnd2lkdGg9NjI2LGhlaWdodD00MzYnXG4gICk7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNoYXJlTGluayA9IGFzeW5jIChwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMgJiB7IG5hdmlnYXRvcjogYW55IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBwcm9wcy5uYXZpZ2F0b3Iuc2hhcmUgJiZcbiAgICAgIChhd2FpdCBwcm9wcy5uYXZpZ2F0b3Iuc2hhcmUoe1xuICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICAgIHRleHQ6IGBDaGVjayBvdXQgJHtwcm9wcy50ZXh0fWAsXG4gICAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgfSkpO1xuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIHNoYXJlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ0Vycm9yIHNoYXJpbmcnLCBlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNoYXJlID0gKFxuICBwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMgJiB7XG4gICAgbmF2aWdhdG9yOiBhbnk7XG4gICAgY2xhc3NlczogUmV0dXJuVHlwZTx0eXBlb2YgdXNlU3R5bGVzPjtcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IGZiQ2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLmZiKTtcbiAgY29uc3QgdHdDbGFzc2VzID0gY3gocHJvcHMuY2xhc3Nlcy5idXR0b24sIHByb3BzLmNsYXNzZXMudHcpO1xuICBsZXQgYWxsU2hhcmUgPSBudWxsO1xuICBpZiAocHJvcHMubmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgYWxsU2hhcmUgPSAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaGFyZUxpbmsocHJvcHMpfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxTaGFyZVJvdW5kZWQgLz59XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9uV3JhcHBlcn0geHM9ezEyfSBzbT17Nn0+XG4gICAgICB7YWxsU2hhcmV9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3R3Q2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8VHdpdHRlciAvPn1cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7cHJvcHMudXJsfSAtICR7cHJvcHMudGl0bGV9YH1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtmYkNsYXNzZXN9XG4gICAgICAgIHN0YXJ0SWNvbj17PEZhY2Vib29rIC8+fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBmYWNlYm9va1NoYXJlKHByb3BzLnVybCl9XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKHByb3BzOiBJRml4ZWROYXZiYXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJvb3RDbGFzc2VzID0gY3goY2xhc3Nlcy5yb290LCBwcm9wcy5jbGFzc05hbWUpO1xuICBjb25zdCBfbmF2aWdhdG9yID0gcHJvY2Vzcy5icm93c2VyID8gd2luZG93Lm5hdmlnYXRvciA6IHt9O1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtyb290Q2xhc3Nlc30+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29weXJpZ2h0fT5cbiAgICAgICAgwqkgQ29weXJpZ2h0IDIwMjAgU3Vicm90byBCaXN3YXNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtyZW5kZXJTaGFyZSh7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBuYXZpZ2F0b3I6IF9uYXZpZ2F0b3IsXG4gICAgICAgIGNsYXNzZXMsXG4gICAgICB9KX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})