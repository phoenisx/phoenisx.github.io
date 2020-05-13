webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(_theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    width: '100%'\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold'\n  },\n  buttonWrapper: {\n    display: 'flex'\n  },\n  button: {},\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null; // if (props.navigator.share) {\n\n  allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: props.classes.button,\n    onClick: () => shareLink(props),\n    color: \"primary\",\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareRounded\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 20\n      }\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, \"Share\"); // }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    container: true,\n    item: true,\n    xs: 12,\n    md: 6,\n    spacing: 3,\n    justify: \"flex-end\",\n    alignItems: \"center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: rootClasses,\n    container: true,\n    justify: \"flex-end\",\n    alignItems: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiX3RoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImNvcHlyaWdodCIsImNvbG9yIiwiZm9udFdlaWdodCIsImJ1dHRvbldyYXBwZXIiLCJidXR0b24iLCJmYiIsImJhY2tncm91bmQiLCJ0dyIsImZhY2Vib29rU2hhcmUiLCJ1cmwiLCJ3aW5kb3ciLCJvcGVuIiwic2hhcmVMaW5rIiwicHJvcHMiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsInRpdGxlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlbmRlclNoYXJlIiwiZmJDbGFzc2VzIiwiY3giLCJjbGFzc2VzIiwidHdDbGFzc2VzIiwiYWxsU2hhcmUiLCJGb290ZXIiLCJyb290Q2xhc3NlcyIsImNsYXNzTmFtZSIsIl9uYXZpZ2F0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLE1BQUQsS0FBb0I7QUFDL0NDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxrQkFBYyxFQUFFLGVBRlo7QUFHSkMsZ0JBQVksRUFBRSxRQUhWO0FBSUpDLGNBQVUsRUFBRSxRQUpSO0FBS0pDLGFBQVMsRUFBRSxHQUxQO0FBTUpDLFNBQUssRUFBRTtBQU5ILEdBRHlDO0FBUy9DQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFLE1BREU7QUFFVEMsY0FBVSxFQUFFO0FBRkgsR0FUb0M7QUFhL0NDLGVBQWEsRUFBRTtBQUNiVCxXQUFPLEVBQUU7QUFESSxHQWJnQztBQWdCL0NVLFFBQU0sRUFBRSxFQWhCdUM7QUFpQi9DQyxJQUFFLEVB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dHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIEJ1dHRvbiwgVGhlbWUsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBGYWNlYm9vaywgVHdpdHRlciwgU2hhcmVSb3VuZGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW50ZXJmYWNlIElGaXhlZE5hdmJhclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKChfdGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Ub3A6IDEyOCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBjb3B5cmlnaHQ6IHtcbiAgICBjb2xvcjogJyNhYWEnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgYnV0dG9uV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgYnV0dG9uOiB7fSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBmYkNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5mYik7XG4gIGNvbnN0IHR3Q2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgLy8gaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hhcmVMaW5rKHByb3BzKX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVSb3VuZGVkIC8+fVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbldyYXBwZXJ9IGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gbWQ9ezZ9IHNwYWNpbmc9ezN9IGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICB7YWxsU2hhcmV9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3R3Q2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8VHdpdHRlciAvPn1cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7cHJvcHMudXJsfSAtICR7cHJvcHMudGl0bGV9YH1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtmYkNsYXNzZXN9XG4gICAgICAgIHN0YXJ0SWNvbj17PEZhY2Vib29rIC8+fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBmYWNlYm9va1NoYXJlKHByb3BzLnVybCl9XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKHByb3BzOiBJRml4ZWROYXZiYXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJvb3RDbGFzc2VzID0gY3goY2xhc3Nlcy5yb290LCBwcm9wcy5jbGFzc05hbWUpO1xuICBjb25zdCBfbmF2aWdhdG9yID0gcHJvY2Vzcy5icm93c2VyID8gd2luZG93Lm5hdmlnYXRvciA6IHt9O1xuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBjbGFzc05hbWU9e3Jvb3RDbGFzc2VzfVxuICAgICAgY29udGFpbmVyXG4gICAgICBqdXN0aWZ5PVwiZmxleC1lbmRcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+XG4gICAgICAgIMKpIENvcHlyaWdodCAyMDIwIFN1YnJvdG8gQmlzd2FzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7cmVuZGVyU2hhcmUoe1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgbmF2aWdhdG9yOiBfbmF2aWdhdG9yLFxuICAgICAgICBjbGFzc2VzLFxuICAgICAgfSl9XG4gICAgPC9HcmlkPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})