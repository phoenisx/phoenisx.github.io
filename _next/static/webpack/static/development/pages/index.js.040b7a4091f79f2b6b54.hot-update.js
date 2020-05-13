webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    [theme.breakpoints.down('sm')]: {\n      flexDirection: 'column'\n    }\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold',\n    [theme.breakpoints.down('sm')]: {\n      marginBottom: 16\n    }\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    [theme.breakpoints.down('sm')]: {\n      flexDirection: 'column'\n    }\n  },\n  button: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    [theme.breakpoints.down('sm')]: {\n      '&+&': {\n        marginTop: 16,\n        marginLeft: 0\n      }\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      size: \"small\",\n      variant: \"contained\",\n      className: props.classes.button,\n      onClick: () => shareLink(props),\n      color: \"primary\",\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareRounded\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 20\n        }\n      }),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJjb3B5cmlnaHQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJidXR0b25XcmFwcGVyIiwiYnV0dG9uIiwibWFyZ2luTGVmdCIsImZiIiwiYmFja2dyb3VuZCIsInR3IiwiZmFjZWJvb2tTaGFyZSIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJzaGFyZUxpbmsiLCJwcm9wcyIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVuZGVyU2hhcmUiLCJmYkNsYXNzZXMiLCJjeCIsImNsYXNzZXMiLCJ0d0NsYXNzZXMiLCJhbGxTaGFyZSIsIkZvb3RlciIsInJvb3RDbGFzc2VzIiwiY2xhc3NOYW1lIiwiX25hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFtQjtBQUM5Q0MsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLGtCQUFjLEVBQUUsZUFGWjtBQUdKQyxnQkFBWSxFQUFFLFFBSFY7QUFJSkMsY0FBVSxFQUFFLFFBSlI7QUFLSkMsYUFBUyxFQUFFLEdBTFA7QUFNSixLQUFDTixLQUFLLENBQUNPLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJDLG1CQUFhLEVBQUU7QUFEZTtBQU41QixHQUR3QztBQVc5Q0MsV0FBUyxFQUFFO0FBQ1RD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QUNuQyxJQUFULEVBQWV3QixLQUFLLENBQUNnQixTQUFyQixDQUF0Qjs7QUFDQSxRQUFNQyxVQUFVLEdBQUcsT0FBa0JwQixNQUFNLENBQUNJLFNBQXpCLEdBQXFDLFNBQXhEOztBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixhQUFTLEVBQUVjLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRUosT0FBTyxDQUFDMUIsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixFQUlHdUIsV0FBVyxpQ0FDUFIsS0FETztBQUVWQyxhQUFTLEVBQUVnQixVQUZEO0FBR1ZOO0FBSFUsS0FKZCxDQURGO0FBWUQ7O0dBaEJlRyxNO1VBQ0V6QyxTOzs7S0FERnlDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgQnV0dG9uLCBUaGVtZSwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEZhY2Vib29rLCBUd2l0dGVyLCBTaGFyZVJvdW5kZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbnRlcmZhY2UgSUZpeGVkTmF2YmFyUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiAxMjgsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICB9LFxuICBjb3B5cmlnaHQ6IHtcbiAgICBjb2xvcjogJyNhYWEnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgICcmKyYnOiB7XG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAxNixcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgJyYrJic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAxNixcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBmYkNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5mYik7XG4gIGNvbnN0IHR3Q2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hhcmVMaW5rKHByb3BzKX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVSb3VuZGVkIC8+fVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbldyYXBwZXJ9IHhzPXsxMn0gc209ezZ9PlxuICAgICAge2FsbFNoYXJlfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXt0d0NsYXNzZXN9XG4gICAgICAgIHN0YXJ0SWNvbj17PFR3aXR0ZXIgLz59XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3Byb3BzLnVybH0gLSAke3Byb3BzLnRpdGxlfWB9XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17ZmJDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxGYWNlYm9vayAvPn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gZmFjZWJvb2tTaGFyZShwcm9wcy51cmwpfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb290Q2xhc3NlcyA9IGN4KGNsYXNzZXMucm9vdCwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgY29uc3QgX25hdmlnYXRvciA9IHByb2Nlc3MuYnJvd3NlciA/IHdpbmRvdy5uYXZpZ2F0b3IgOiB7fTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17cm9vdENsYXNzZXN9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+XG4gICAgICAgIMKpIENvcHlyaWdodCAyMDIwIFN1YnJvdG8gQmlzd2FzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7cmVuZGVyU2hhcmUoe1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgbmF2aWdhdG9yOiBfbmF2aWdhdG9yLFxuICAgICAgICBjbGFzc2VzLFxuICAgICAgfSl9XG4gICAgPC9HcmlkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})