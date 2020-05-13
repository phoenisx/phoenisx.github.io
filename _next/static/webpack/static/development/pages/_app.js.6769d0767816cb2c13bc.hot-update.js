webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  main: {\n    flexGrow: 1\n  },\n  root: {\n    // display: 'flex',\n    // justifyContent: 'space-between',\n    // alignContent: 'center',\n    // alignItems: 'center',\n    marginTop: 128 // width: '100%',\n\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold'\n  },\n  buttonWrapper: {// display: 'flex',\n  },\n  button: {// '&+&': {\n    //   marginLeft: 16,\n    // },\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      size: \"small\",\n      variant: \"contained\",\n      className: props.classes.button,\n      onClick: () => shareLink(props),\n      color: \"primary\",\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareRounded\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 20\n        }\n      }),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    item: true,\n    xs: 12,\n    md: 6,\n    spacing: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(\"div\", {\n    className: classes.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    spacing: 3,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    md: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 11\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\")), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  }))));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYWluIiwiZmxleEdyb3ciLCJyb290IiwibWFyZ2luVG9wIiwiY29weXJpZ2h0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiYnV0dG9uV3JhcHBlciIsImJ1dHRvbiIsImZiIiwiYmFja2dyb3VuZCIsInR3IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiZmFjZWJvb2tTaGFyZSIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJzaGFyZUxpbmsiLCJwcm9wcyIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXJTaGFyZSIsImZiQ2xhc3NlcyIsImN4IiwiY2xhc3NlcyIsInR3Q2xhc3NlcyIsImFsbFNoYXJlIiwiRm9vdGVyIiwicm9vdENsYXNzZXMiLCJjbGFzc05hbWUiLCJfbmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQW1CO0FBQzlDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FEd0M7QUFJOUNDLE1BQUksRUFBRTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVMsRUFBRSxHQUxQLENBTUo7O0FBTkksR0FKd0M7QUFZOUNDLFdBQVMsRUFBRTtBQUNUQyxTQUFLLEVBQUUsTUFERTtBQUVUQyxjQUFVLEVBQUU7QUFGSCxHQVptQztBQWdCOUNDLGVBQWEsRUFBRSxDQUNiO0FBRGEsR0FoQitCO0FBbUI5Q0MsUUFBTSxFQUFFLENBQ047QUFDQTtBQUNBO0FBSE0sR0FuQnNDO0FBd0I5Q0MsSUFBRSxFQUFFO0FB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QUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRUosT0FBTyxDQUFDOUIsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixDQVBGLEVBWUcyQixXQUFXLGlDQUNQUCxLQURPO0FBRVZDLGFBQVMsRUFBRWUsVUFGRDtBQUdWTjtBQUhVLEtBWmQsQ0FERixDQURGO0FBc0JEOztHQTFCZUcsTTtVQUNFeEMsUzs7O0tBREZ3QyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIEJ1dHRvbiwgVGhlbWUsIFR5cG9ncmFwaHksIEdyaWQsIFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRmFjZWJvb2ssIFR3aXR0ZXIsIFNoYXJlUm91bmRlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmludGVyZmFjZSBJRml4ZWROYXZiYXJQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBtYWluOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICAvLyBkaXNwbGF5OiAnZmxleCcsXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAvLyBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIC8vIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogMTI4LFxuICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGNvbG9yOiAnI2FhYScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBidXR0b25XcmFwcGVyOiB7XG4gICAgLy8gZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICBidXR0b246IHtcbiAgICAvLyAnJismJzoge1xuICAgIC8vICAgbWFyZ2luTGVmdDogMTYsXG4gICAgLy8gfSxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG5cbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBmYkNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5mYik7XG4gIGNvbnN0IHR3Q2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hhcmVMaW5rKHByb3BzKX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVSb3VuZGVkIC8+fVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25XcmFwcGVyfVxuICAgICAgaXRlbVxuICAgICAgeHM9ezEyfVxuICAgICAgbWQ9ezZ9XG4gICAgICBzcGFjaW5nPXszfVxuICAgID5cbiAgICAgIHthbGxTaGFyZX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17dHdDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxUd2l0dGVyIC8+fVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwcm9wcy51cmx9IC0gJHtwcm9wcy50aXRsZX1gfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2ZiQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8RmFjZWJvb2sgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGZhY2Vib29rU2hhcmUocHJvcHMudXJsKX1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIocHJvcHM6IElGaXhlZE5hdmJhclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IF9uYXZpZ2F0b3IgPSBwcm9jZXNzLmJyb3dzZXIgPyB3aW5kb3cubmF2aWdhdG9yIDoge307XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICA8R3JpZFxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgaXRlbVxuICAgICAgICB4cz17MTJ9XG4gICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgIGNsYXNzTmFtZT17cm9vdENsYXNzZXN9XG4gICAgICA+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+XG4gICAgICAgICAgICDCqSBDb3B5cmlnaHQgMjAyMCBTdWJyb3RvIEJpc3dhc1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7cmVuZGVyU2hhcmUoe1xuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgIG5hdmlnYXRvcjogX25hdmlnYXRvcixcbiAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})