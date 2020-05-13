webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  main: {\n    flexGrow: 1\n  },\n  root: {\n    // display: 'flex',\n    // justifyContent: 'space-between',\n    // alignContent: 'center',\n    // alignItems: 'center',\n    marginTop: 128 // width: '100%',\n\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold'\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    [theme.breakpoints.down('md')]: {\n      flexDirection: 'column'\n    }\n  },\n  button: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    [theme.breakpoints.down('md')]: {\n      '&+&': {\n        marginTop: 16,\n        marginLeft: 0\n      }\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      size: \"small\",\n      variant: \"contained\",\n      className: props.classes.button,\n      onClick: () => shareLink(props),\n      color: \"primary\",\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareRounded\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 20\n        }\n      }),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    item: true,\n    xs: 12,\n    md: 6,\n    spacing: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(\"div\", {\n    className: classes.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    spacing: 3,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    md: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 11\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\")), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  }))));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYWluIiwiZmxleEdyb3ciLCJyb290IiwibWFyZ2luVG9wIiwiY29weXJpZ2h0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiYnV0dG9uV3JhcHBlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwiYnV0dG9uIiwibWFyZ2luTGVmdCIsImZiIiwiYmFja2dyb3VuZCIsInR3IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiZmFjZWJvb2tTaGFyZSIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJzaGFyZUxpbmsiLCJwcm9wcyIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXJTaGFyZSIsImZiQ2xhc3NlcyIsImN4IiwiY2xhc3NlcyIsInR3Q2xhc3NlcyIsImFsbFNoYXJlIiwiRm9vdGVyIiwicm9vdENsYXNzZXMiLCJjbGFzc05hbWUiLCJfbmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQW1CO0FBQzlDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FEd0M7QUFJOUNDLE1BQUksRUFBRTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVMsRUFBRSxHQUxQLENBTUo7O0FBTkksR0FKd0M7QUFZOUNDLFdBQVMsRUFBRTtBQUNUQyxTQUFLLEVBQUUsTUFERTtBQUVUQyxjQUFVLEVBQUU7QUFGSCxHQVptQztBQWdCOUNDLGVB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ekI7QUFDQSxRQUFNZ0QsV0FBVyxHQUFHTCxpREFBRSxDQUFDQyxPQUFPLENBQUN2QyxJQUFULEVBQWU2QixLQUFLLENBQUNlLFNBQXJCLENBQXRCOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxPQUFrQm5CLE1BQU0sQ0FBQ0ksU0FBekIsR0FBcUMsU0FBeEQ7O0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRVMsT0FBTyxDQUFDekMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxRQUFJLE1BRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLFdBQU8sRUFBRSxDQUpYO0FBS0UsYUFBUyxFQUFFNkMsV0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUVKLE9BQU8sQ0FBQ3JDLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsQ0FQRixFQVlHa0MsV0FBVyxpQ0FDUFAsS0FETztBQUVWQyxhQUFTLEVBQUVlLFVBRkQ7QUFHVk47QUFIVSxLQVpkLENBREYsQ0FERjtBQXNCRDs7R0ExQmVHLE07VUFDRS9DLFM7OztLQURGK0MsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBCdXR0b24sIFRoZW1lLCBUeXBvZ3JhcGh5LCBHcmlkLCBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEZhY2Vib29rLCBUd2l0dGVyLCBTaGFyZVJvdW5kZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbnRlcmZhY2UgSUZpeGVkTmF2YmFyUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgbWFpbjoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICByb290OiB7XG4gICAgLy8gZGlzcGxheTogJ2ZsZXgnLFxuICAgIC8vIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgLy8gYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAvLyBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Ub3A6IDEyOCxcbiAgICAvLyB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBjb3B5cmlnaHQ6IHtcbiAgICBjb2xvcjogJyNhYWEnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgYnV0dG9uV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgICcmKyYnOiB7XG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAxNixcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgJyYrJic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAxNixcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG5cbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBmYkNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5mYik7XG4gIGNvbnN0IHR3Q2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hhcmVMaW5rKHByb3BzKX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVSb3VuZGVkIC8+fVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25XcmFwcGVyfVxuICAgICAgaXRlbVxuICAgICAgeHM9ezEyfVxuICAgICAgbWQ9ezZ9XG4gICAgICBzcGFjaW5nPXszfVxuICAgID5cbiAgICAgIHthbGxTaGFyZX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17dHdDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxUd2l0dGVyIC8+fVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwcm9wcy51cmx9IC0gJHtwcm9wcy50aXRsZX1gfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2ZiQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8RmFjZWJvb2sgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGZhY2Vib29rU2hhcmUocHJvcHMudXJsKX1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIocHJvcHM6IElGaXhlZE5hdmJhclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IF9uYXZpZ2F0b3IgPSBwcm9jZXNzLmJyb3dzZXIgPyB3aW5kb3cubmF2aWdhdG9yIDoge307XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICA8R3JpZFxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgaXRlbVxuICAgICAgICB4cz17MTJ9XG4gICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgIGNsYXNzTmFtZT17cm9vdENsYXNzZXN9XG4gICAgICA+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+XG4gICAgICAgICAgICDCqSBDb3B5cmlnaHQgMjAyMCBTdWJyb3RvIEJpc3dhc1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7cmVuZGVyU2hhcmUoe1xuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgIG5hdmlnYXRvcjogX25hdmlnYXRvcixcbiAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})