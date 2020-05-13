webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(_theme => ({\n  main: {\n    flexGrow: 1\n  },\n  root: {\n    // display: 'flex',\n    // justifyContent: 'space-between',\n    // alignContent: 'center',\n    // alignItems: 'center',\n    marginTop: 128 // width: '100%',\n\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold'\n  },\n  buttonWrapper: {// display: 'flex',\n  },\n  button: {// '&+&': {\n    //   marginLeft: 16,\n    // },\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = url => {\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.classes.button, props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.classes.button, props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      size: \"small\",\n      variant: \"contained\",\n      className: props.classes.button,\n      onClick: () => shareLink(props),\n      color: \"primary\",\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"ShareRounded\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 20\n        }\n      }),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    className: props.classes.buttonWrapper,\n    item: true,\n    xs: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }, allShare, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 20\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }, \"Share\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 20\n      }\n    }),\n    onClick: () => facebookShare(props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, \"Share\"));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, props.className);\n\n  const _navigator = true ? window.navigator : undefined;\n\n  return (// <div className={classes.main}>\n    //   <Grid\n    //     container\n    //     item\n    //     xs={12}\n    //     spacing={3}\n    //     className={rootClasses}\n    //   >\n    //     <Grid item xs={12} md={6}>\n    //       <Typography variant=\"body2\" className={classes.copyright}>\n    //         © Copyright 2020 Subroto Biswas\n    //       </Typography>\n    //     </Grid>\n    //     {renderShare({\n    //       ...props,\n    //       navigator: _navigator,\n    //       classes,\n    //     })}\n    //   </Grid>\n    // </div>\n    __jsx(\"div\", {\n      className: classes.root,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 5\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      container: true,\n      spacing: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 12,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 11\n      }\n    }, \"xs=12\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 6,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 11\n      }\n    }, \"xs=6\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 6,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 11\n      }\n    }, \"xs=6\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 11\n      }\n    }, \"xs=3\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 11\n      }\n    }, \"xs=3\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 11\n      }\n    }, \"xs=3\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      xs: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n      className: classes.paper,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 11\n      }\n    }, \"xs=3\"))))\n  );\n}\n\n_s(Footer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiX3RoZW1lIiwibWFpbiIsImZsZXhHcm93Iiwicm9vdCIsIm1hcmdpblRvcCIsImNvcHlyaWdodCIsImNvbG9yIiwiZm9udFdlaWdodCIsImJ1dHRvbldyYXBwZXIiLCJidXR0b24iLCJmYiIsImJhY2tncm91bmQiLCJ0dyIsImZhY2Vib29rU2hhcmUiLCJ1cmwiLCJ3aW5kb3ciLCJvcGVuIiwic2hhcmVMaW5rIiwicHJvcHMiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsInRpdGxlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlbmRlclNoYXJlIiwiZmJDbGFzc2VzIiwiY3giLCJjbGFzc2VzIiwidHdDbGFzc2VzIiwiYWxsU2hhcmUiLCJGb290ZXIiLCJyb290Q2xhc3NlcyIsImNsYXNzTmFtZSIsIl9uYXZpZ2F0b3IiLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLE1BQUQsS0FBb0I7QUFDL0NDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQUR5QztBQUkvQ0MsTUFBSSxFQUFFO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBUyxFQUFFLEdBTFAsQ0FNSjs7QUFOSSxHQUp5QztBQVkvQ0MsV0FBUyxFQUFFO0FBQ1RDLFNBQUssRUFBRSxNQURFO0FBRVRDLGNBQVUsRUFBRTtBQUZILEdBWm9DO0FBZ0IvQ0MsZUFBYSxFQUFFLENBQ2I7QUFEYSxHQWhCZ0M7QUFtQi9DQyxRQUFNLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFITSxHQW5CdUM7QUF3Qi9DQyxJQUFFLEVBQUU7QUFDRkosU0FBSyxFQUFFLE1BREw7QUFFRkssY0FBVSxFQUFFLFNBRlY7QUFHRixpQ0FBNkI7QUFDM0JBLGdC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QWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBTyxlQUFTLEVBQUVQLE9BQU8sQ0FBQ08sS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBbkJGLENBREY7QUFyQkY7QUErQ0Q7O0dBbkRlSixNO1VBQ0VsQyxTOzs7S0FERmtDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgQnV0dG9uLCBUaGVtZSwgVHlwb2dyYXBoeSwgR3JpZCwgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBGYWNlYm9vaywgVHdpdHRlciwgU2hhcmVSb3VuZGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW50ZXJmYWNlIElGaXhlZE5hdmJhclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKChfdGhlbWU6IFRoZW1lKSA9PiAoe1xuICBtYWluOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICAvLyBkaXNwbGF5OiAnZmxleCcsXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAvLyBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIC8vIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogMTI4LFxuICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGNvbG9yOiAnI2FhYScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBidXR0b25XcmFwcGVyOiB7XG4gICAgLy8gZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICBidXR0b246IHtcbiAgICAvLyAnJismJzoge1xuICAgIC8vICAgbWFyZ2luTGVmdDogMTYsXG4gICAgLy8gfSxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDM2MWIzJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjU0Mzk1JyxcbiAgICB9LFxuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0ZmFmZWQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMTkxQ0YnLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IGZhY2Vib29rU2hhcmUgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCBzaGFyZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nJywgZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaGFyZSA9IChcbiAgcHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYge1xuICAgIG5hdmlnYXRvcjogYW55O1xuICAgIGNsYXNzZXM6IFJldHVyblR5cGU8dHlwZW9mIHVzZVN0eWxlcz47XG4gIH1cbikgPT4ge1xuICBjb25zdCBmYkNsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLmJ1dHRvbiwgcHJvcHMuY2xhc3Nlcy5mYik7XG4gIGNvbnN0IHR3Q2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuYnV0dG9uLCBwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hhcmVMaW5rKHByb3BzKX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmVSb3VuZGVkIC8+fVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25XcmFwcGVyfVxuICAgICAgaXRlbVxuICAgICAgeHM9ezEyfVxuICAgICAgbWQ9ezZ9XG4gICAgPlxuICAgICAge2FsbFNoYXJlfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXt0d0NsYXNzZXN9XG4gICAgICAgIHN0YXJ0SWNvbj17PFR3aXR0ZXIgLz59XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3Byb3BzLnVybH0gLSAke3Byb3BzLnRpdGxlfWB9XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17ZmJDbGFzc2VzfVxuICAgICAgICBzdGFydEljb249ezxGYWNlYm9vayAvPn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gZmFjZWJvb2tTaGFyZShwcm9wcy51cmwpfVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb290Q2xhc3NlcyA9IGN4KGNsYXNzZXMucm9vdCwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgY29uc3QgX25hdmlnYXRvciA9IHByb2Nlc3MuYnJvd3NlciA/IHdpbmRvdy5uYXZpZ2F0b3IgOiB7fTtcbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAvLyAgIDxHcmlkXG4gICAgLy8gICAgIGNvbnRhaW5lclxuICAgIC8vICAgICBpdGVtXG4gICAgLy8gICAgIHhzPXsxMn1cbiAgICAvLyAgICAgc3BhY2luZz17M31cbiAgICAvLyAgICAgY2xhc3NOYW1lPXtyb290Q2xhc3Nlc31cbiAgICAvLyAgID5cbiAgICAvLyAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAvLyAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29weXJpZ2h0fT5cbiAgICAvLyAgICAgICAgIMKpIENvcHlyaWdodCAyMDIwIFN1YnJvdG8gQmlzd2FzXG4gICAgLy8gICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIC8vICAgICA8L0dyaWQ+XG4gICAgLy8gICAgIHtyZW5kZXJTaGFyZSh7XG4gICAgLy8gICAgICAgLi4ucHJvcHMsXG4gICAgLy8gICAgICAgbmF2aWdhdG9yOiBfbmF2aWdhdG9yLFxuICAgIC8vICAgICAgIGNsYXNzZXMsXG4gICAgLy8gICAgIH0pfVxuICAgIC8vICAgPC9HcmlkPlxuICAgIC8vIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+eHM9MTI8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTY8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTY8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTM8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTM8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTM8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTM8L1BhcGVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})