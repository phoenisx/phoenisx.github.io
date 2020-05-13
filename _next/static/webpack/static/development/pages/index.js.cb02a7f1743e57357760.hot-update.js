webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(_theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    width: '100%'\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold'\n  },\n  buttonWrapper: {\n    display: 'flex'\n  },\n  button: {\n    '&+&': {\n      marginLeft: 16\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.button, props.classes.tw);\n  let allShare = null; // if (props.navigator.share) {\n\n  allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: props.classes.button,\n    onClick: () => shareLink(props),\n    color: \"primary\",\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"ShareRounded\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 20\n      }\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, \"Share\"); // }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    container: true,\n    item: true,\n    xs: 12,\n    md: 6,\n    spacing: 3,\n    justify: \"flex-end\",\n    alignItems: \"center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    className: rootClasses,\n    container: true,\n    justify: \"flex-end\",\n    alignItems: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiX3RoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImNvcHlyaWdodCIsImNvbG9yIiwiZm9udFdlaWdodCIsImJ1dHRvbldyYXBwZXIiLCJidXR0b24iLCJtYXJnaW5MZWZ0IiwiZmIiLCJiYWNrZ3JvdW5kIiwidHciLCJmYWNlYm9va1NoYXJlIiwidXJsIiwid2luZG93Iiwib3BlbiIsInNoYXJlTGluayIsInByb3BzIiwibmF2aWdhdG9yIiwic2hhcmUiLCJ0aXRsZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXJTaGFyZSIsImZiQ2xhc3NlcyIsImN4IiwiY2xhc3NlcyIsInR3Q2xhc3NlcyIsImFsbFNoYXJlIiwiRm9vdGVyIiwicm9vdENsYXNzZXMiLCJjbGFzc05hbWUiLCJfbmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxNQUFELEtBQW9CO0FBQy9DQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLE1BREw7QUFFSkMsa0JBQWMsRUFBRSxlQUZaO0FBR0pDLGdCQUFZLEVBQUUsUUFIVjtBQUlKQyxjQUFVLEVBQUUsUUFKUjtBQUtKQyxhQUFTLEVBQUUsR0FMUDtBQU1KQyxTQUFLLEVBQUU7QUFOSCxHQUR5QztBQVMvQ0MsV0FBUyxFQUFFO0FBQ1RDLFNBQUssRUFBRSxNQURFO0FBRVRDLGNBQVUsRUFBRTtBQUZILEdBVG9DO0FBYS9DQyxlQUFhLEVBQUU7QUFDYlQsV0FBTyxFQUFFO0FBREksR0FiZ0M7QUFnQi9DVSxRQUFNLEVBQUU7QUFDTixXQUFP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O1VBQ0V0QyxTOzs7S0FERnNDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgQnV0dG9uLCBUaGVtZSwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEZhY2Vib29rLCBUd2l0dGVyLCBTaGFyZVJvdW5kZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbnRlcmZhY2UgSUZpeGVkTmF2YmFyUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKF90aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogMTI4LFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGNvbG9yOiAnI2FhYScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBidXR0b25XcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICBidXR0b246IHtcbiAgICAnJismJzoge1xuICAgICAgbWFyZ2luTGVmdDogMTYsXG4gICAgfVxuICB9LFxuICBmYjoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0MzYxYjMnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMyNTQzOTUnLFxuICAgIH0sXG4gIH0sXG4gIHR3OiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzRmYWZlZCcsXG4gICAgJyY6aG92ZXIsICZmb2N1cywgJjphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMxOTFDRicsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgZmFjZWJvb2tTaGFyZSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICB3aW5kb3cub3BlbihcbiAgICBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHt1cmx9YCxcbiAgICAnZmFjZWJvb2stc2hhcmUtZGlhbG9nJyxcbiAgICAnd2lkdGg9NjI2LGhlaWdodD00MzYnXG4gICk7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNoYXJlTGluayA9IGFzeW5jIChwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMgJiB7IG5hdmlnYXRvcjogYW55IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBwcm9wcy5uYXZpZ2F0b3Iuc2hhcmUgJiZcbiAgICAgIChhd2FpdCBwcm9wcy5uYXZpZ2F0b3Iuc2hhcmUoe1xuICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICAgIHRleHQ6IGBDaGVjayBvdXQgJHtwcm9wcy50ZXh0fWAsXG4gICAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgfSkpO1xuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIHNoYXJlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ0Vycm9yIHNoYXJpbmcnLCBlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNoYXJlID0gKFxuICBwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMgJiB7XG4gICAgbmF2aWdhdG9yOiBhbnk7XG4gICAgY2xhc3NlczogUmV0dXJuVHlwZTx0eXBlb2YgdXNlU3R5bGVzPjtcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IGZiQ2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLmZiKTtcbiAgY29uc3QgdHdDbGFzc2VzID0gY3gocHJvcHMuY2xhc3Nlcy5idXR0b24sIHByb3BzLmNsYXNzZXMudHcpO1xuICBsZXQgYWxsU2hhcmUgPSBudWxsO1xuICAvLyBpZiAocHJvcHMubmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgYWxsU2hhcmUgPSAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaGFyZUxpbmsocHJvcHMpfVxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxTaGFyZVJvdW5kZWQgLz59XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9uV3JhcHBlcn0gY29udGFpbmVyIGl0ZW0geHM9ezEyfSBtZD17Nn0gc3BhY2luZz17M30ganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgIHthbGxTaGFyZX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17dHdDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxUd2l0dGVyIC8+fVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwcm9wcy51cmx9IC0gJHtwcm9wcy50aXRsZX1gfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2ZiQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8RmFjZWJvb2sgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGZhY2Vib29rU2hhcmUocHJvcHMudXJsKX1cbiAgICAgID5cbiAgICAgICAgU2hhcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIocHJvcHM6IElGaXhlZE5hdmJhclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IF9uYXZpZ2F0b3IgPSBwcm9jZXNzLmJyb3dzZXIgPyB3aW5kb3cubmF2aWdhdG9yIDoge307XG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNsYXNzTmFtZT17cm9vdENsYXNzZXN9XG4gICAgICBjb250YWluZXJcbiAgICAgIGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29weXJpZ2h0fT5cbiAgICAgICAgwqkgQ29weXJpZ2h0IDIwMjAgU3Vicm90byBCaXN3YXNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtyZW5kZXJTaGFyZSh7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBuYXZpZ2F0b3I6IF9uYXZpZ2F0b3IsXG4gICAgICAgIGNsYXNzZXMsXG4gICAgICB9KX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})