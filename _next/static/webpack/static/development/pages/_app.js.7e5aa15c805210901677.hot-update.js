webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ \"./utils/theme.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store */ \"./store/index.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_para__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/para */ \"./components/para.tsx\");\n/* harmony import */ var _components_blockquote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/blockquote */ \"./components/blockquote.tsx\");\n/* harmony import */ var _components_mdx_h1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mdx-h1 */ \"./components/mdx-h1.tsx\");\n/* harmony import */ var _components_mdx_h2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/mdx-h2 */ \"./components/mdx-h2.tsx\");\n/* harmony import */ var _components_mdx_h3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/mdx-h3 */ \"./components/mdx-h3.tsx\");\n/* harmony import */ var _components_mdx_h4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/mdx-h4 */ \"./components/mdx-h4.tsx\");\n/* harmony import */ var _components_code_block__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/code-block */ \"./components/code-block.tsx\");\n/* harmony import */ var _components_inline_code__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/inline-code */ \"./components/inline-code.tsx\");\n/* harmony import */ var _components_code_diff__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/code-diff */ \"./components/code-diff/index.ts\");\n/* harmony import */ var _components_progressive_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/progressive-image */ \"./components/progressive-image.tsx\");\n/* harmony import */ var _components_thematic_break__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/thematic-break */ \"./components/thematic-break.tsx\");\n/* harmony import */ var _components_polka_container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/polka-container */ \"./components/polka-container.tsx\");\n/* harmony import */ var _components_note_subtitle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/note-subtitle */ \"./components/note-subtitle.tsx\");\n/* harmony import */ var _components_mdx_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/mdx-list */ \"./components/mdx-list.tsx\");\n/* harmony import */ var _hoc_palette_mode__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hoc/palette-mode */ \"./hoc/palette-mode.tsx\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\n\n\n\n\n\n\n // Using Redux Store is the only way to use LocalStorage with NextJS app\n// right now, it doesn't support pure static builds\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst mdComponents = {\n  a: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"Link\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    target: \"_blank\"\n  }, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 22\n    }\n  })),\n  h1: props => __jsx(_components_mdx_h1__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 23\n    }\n  })),\n  h2: props => __jsx(_components_mdx_h2__WEBPACK_IMPORTED_MODULE_14__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 23\n    }\n  })),\n  h3: props => __jsx(_components_mdx_h3__WEBPACK_IMPORTED_MODULE_15__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 23\n    }\n  })),\n  h4: props => __jsx(_components_mdx_h4__WEBPACK_IMPORTED_MODULE_16__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 23\n    }\n  })),\n  p: props => __jsx(_components_para__WEBPACK_IMPORTED_MODULE_11__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 22\n    }\n  })),\n  blockquote: props => __jsx(_components_blockquote__WEBPACK_IMPORTED_MODULE_12__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 31\n    }\n  })),\n  code: _components_code_block__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  inlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  thematicBreak: _components_thematic_break__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  hr: _components_thematic_break__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  ol: _components_mdx_list__WEBPACK_IMPORTED_MODULE_24__[\"MDXOL\"],\n  ul: _components_mdx_list__WEBPACK_IMPORTED_MODULE_24__[\"MDXUL\"],\n  li: _components_mdx_list__WEBPACK_IMPORTED_MODULE_24__[\"MDXLI\"],\n  H1: _components_mdx_h1__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  Link: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"Link\"],\n  Button: _material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"Button\"],\n  Blockquote: _components_blockquote__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  Diff: _components_code_diff__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  CodeBlock: _components_code_block__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  // Using codeblock as is gives us more control\n  InlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  Image: _components_progressive_image__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  PolkaContainer: _components_polka_container__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  NoteSubtitle: _components_note_subtitle__WEBPACK_IMPORTED_MODULE_23__[\"default\"]\n};\n\nconst Content = props => {\n  _s();\n\n  const {\n    Component,\n    pageProps\n  } = props;\n  const {\n    darkMode\n  } = Object(_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_25__[\"usePaletteModeStore\"])();\n  const theme = darkMode ? _utils_theme__WEBPACK_IMPORTED_MODULE_2__[\"darkTheme\"] : _utils_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"MDXProvider\"], {\n    components: mdComponents,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_s(Content, \"00eRCAgLWeXUmtpkDVCx/42qvkE=\", false, function () {\n  return [_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_25__[\"usePaletteModeStore\"]];\n});\n\n_c = Content;\nconst WithPaletteModeContent = Object(_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_25__[\"withPaletteModeProvider\"])(Content);\n_c2 = WithPaletteModeContent;\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {\n  componentDidMount() {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles && jssStyles.parentElement) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }\n    }, __jsx(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      name: \"author\",\n      content: \"Subroto Biswas\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"apple-touch-icon\",\n      sizes: \"180x180\",\n      href: \"https://user-images.githubusercontent.com/11786283/81848987-81d1a800-9573-11ea-9b04-2f7bc9a8ee21.png\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: \"https://user-images.githubusercontent.com/11786283/81849133-b80f2780-9573-11ea-87c5-1b91ecdd0786.png\",\n      sizes: \"16x16\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: \"https://user-images.githubusercontent.com/11786283/81849184-cfe6ab80-9573-11ea-8e90-017a74baa812.png\",\n      sizes: \"32x32\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: \"https://user-images.githubusercontent.com/11786283/81849345-06242b00-9574-11ea-9d22-43c549f88e01.png\",\n      sizes: \"192x192\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"/css/main.css\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 11\n      }\n    }), __jsx(\"script\", {\n      async: true,\n      src: \"https://www.googletagmanager.com/gtag/js?id=UA-113155919-1\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 11\n      }\n    }), __jsx(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'UA-113155919-1');\n          `\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 11\n      }\n    })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n      store: store__WEBPACK_IMPORTED_MODULE_9__[\"staticStore\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }\n    }, __jsx(WithPaletteModeContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.props, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 11\n      }\n    }))));\n  }\n\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c2, \"WithPaletteModeContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIm1kQ29tcG9uZW50cyIsImEiLCJwcm9wcyIsImgxIiwiaDIiLCJoMyIsImg0IiwicCIsImJsb2NrcXVvdGUiLCJjb2RlIiwiQ29kZUJsb2NrIiwiaW5saW5lQ29kZSIsIklubGluZUNvZGUiLCJ0aGVtYXRpY0JyZWFrIiwiVGhlbWF0aWNCcmVhayIsImhyIiwib2wiLCJNRFhPTCIsInVsIiwiTURYVUwiLCJsaSIsIk1EWExJIiwiSDEiLCJNRFhIMSIsIkxpbmsiLCJCdXR0b24iLCJCbG9ja3F1b3RlIiwiRGlmZiIsIkNvZGVEaWZmIiwiSW1hZ2UiLCJQb2xrYUNvbnRhaW5lciIsIk5vdGVTdWJ0aXRsZSIsIkNvbnRlbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkYXJrTW9kZSIsInVzZVBhbGV0dGVNb2RlU3RvcmUiLCJ0aGVtZSIsImRhcmtUaGVtZSIsImRlZmF1bHRUaGVtZSIsIldpdGhQYWxldHRlTW9kZUNvbnRlbnQiLCJ3aXRoUGFsZXR0ZU1vZGVQcm92aWRlciIsIk15QXBwIiwiQXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJfX2h0bWwiLCJzdGF0aWNTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxHQUFDLEVBQUdDLEtBQUQsSUFBZ0IsTUFBQyx1REFBRDtBQUFNLFVBQU0sRUFBQztB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QUE7QUFBQSxNQTNCRixFQStCRTtBQUNFLFVBQUksRUFBQywrRUFEUDtBQUVFLFNBQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEvQkYsRUFtQ0U7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUEyQixTQUFHLEVBQUMsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5DRixFQXFDRTtBQUNFLFdBQUssTUFEUDtBQUVFLFNBQUcsRUFBQyw0REFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BckNGLEVBeUNFO0FBQ0UsNkJBQXVCLEVBQUU7QUFDdkJDLGNBQU0sRUFBRzs7Ozs7O0FBRGMsT0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXpDRixDQURGLEVBcURFLE1BQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVDLGlEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzQkFBRCx5RkFBNEIsS0FBS2xELEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQXJERixDQURGO0FBMkREOztBQXJFb0MiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lLCB7IGRhcmtUaGVtZSB9IGZyb20gJ0B1dGlscy90aGVtZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEFwcCwgeyBBcHBJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5cbi8vIFVzaW5nIFJlZHV4IFN0b3JlIGlzIHRoZSBvbmx5IHdheSB0byB1c2UgTG9jYWxTdG9yYWdlIHdpdGggTmV4dEpTIGFwcFxuLy8gcmlnaHQgbm93LCBpdCBkb2Vzbid0IHN1cHBvcnQgcHVyZSBzdGF0aWMgYnVpbGRzXG5pbXBvcnQgeyBzdGF0aWNTdG9yZSB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCB7IEJ1dHRvbiwgTGluayB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBQYXJhIGZyb20gJ0Bjb21wb25lbnRzL3BhcmEnO1xuaW1wb3J0IEJsb2NrcXVvdGUgZnJvbSAnQGNvbXBvbmVudHMvYmxvY2txdW90ZSc7XG5pbXBvcnQgTURYSDEgZnJvbSAnQGNvbXBvbmVudHMvbWR4LWgxJztcbmltcG9ydCBNRFhIMiBmcm9tICdAY29tcG9uZW50cy9tZHgtaDInO1xuaW1wb3J0IE1EWEgzIGZyb20gJ0Bjb21wb25lbnRzL21keC1oMyc7XG5pbXBvcnQgTURYSDQgZnJvbSAnQGNvbXBvbmVudHMvbWR4LWg0JztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnQGNvbXBvbmVudHMvY29kZS1ibG9jayc7XG5pbXBvcnQgSW5saW5lQ29kZSBmcm9tICdAY29tcG9uZW50cy9pbmxpbmUtY29kZSc7XG5pbXBvcnQgQ29kZURpZmYgZnJvbSAnQGNvbXBvbmVudHMvY29kZS1kaWZmJztcbmltcG9ydCBJbWFnZSBmcm9tICdAY29tcG9uZW50cy9wcm9ncmVzc2l2ZS1pbWFnZSc7XG5pbXBvcnQgVGhlbWF0aWNCcmVhayBmcm9tICdAY29tcG9uZW50cy90aGVtYXRpYy1icmVhayc7XG5pbXBvcnQgUG9sa2FDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvcG9sa2EtY29udGFpbmVyJztcbmltcG9ydCBOb3RlU3VidGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvbm90ZS1zdWJ0aXRsZSc7XG5pbXBvcnQgeyBNRFhPTCwgTURYVUwsIE1EWExJIH0gZnJvbSAnQGNvbXBvbmVudHMvbWR4LWxpc3QnO1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUgfSBmcm9tICduZXh0JztcbmltcG9ydCB7XG4gIHdpdGhQYWxldHRlTW9kZVByb3ZpZGVyLFxuICB1c2VQYWxldHRlTW9kZVN0b3JlLFxufSBmcm9tICdAaG9jL3BhbGV0dGUtbW9kZSc7XG5cbmNvbnN0IG1kQ29tcG9uZW50cyA9IHtcbiAgYTogKHByb3BzOiBhbnkpID0+IDxMaW5rIHRhcmdldD1cIl9ibGFua1wiIHsuLi5wcm9wc30gLz4sXG4gIGgxOiAocHJvcHM6IGFueSkgPT4gPE1EWEgxIHsuLi5wcm9wc30gLz4sXG4gIGgyOiAocHJvcHM6IGFueSkgPT4gPE1EWEgyIHsuLi5wcm9wc30gLz4sXG4gIGgzOiAocHJvcHM6IGFueSkgPT4gPE1EWEgzIHsuLi5wcm9wc30gLz4sXG4gIGg0OiAocHJvcHM6IGFueSkgPT4gPE1EWEg0IHsuLi5wcm9wc30gLz4sXG4gIHA6IChwcm9wczogYW55KSA9PiA8UGFyYSB7Li4ucHJvcHN9IC8+LFxuICBibG9ja3F1b3RlOiAocHJvcHM6IGFueSkgPT4gPEJsb2NrcXVvdGUgey4uLnByb3BzfSAvPixcbiAgY29kZTogQ29kZUJsb2NrLFxuICBpbmxpbmVDb2RlOiBJbmxpbmVDb2RlLFxuICB0aGVtYXRpY0JyZWFrOiBUaGVtYXRpY0JyZWFrLFxuICBocjogVGhlbWF0aWNCcmVhayxcbiAgb2w6IE1EWE9MLFxuICB1bDogTURYVUwsXG4gIGxpOiBNRFhMSSxcbiAgSDE6IE1EWEgxLFxuICBMaW5rLFxuICBCdXR0b24sXG4gIEJsb2NrcXVvdGUsXG4gIERpZmY6IENvZGVEaWZmLFxuICBDb2RlQmxvY2ssIC8vIFVzaW5nIGNvZGVibG9jayBhcyBpcyBnaXZlcyB1cyBtb3JlIGNvbnRyb2xcbiAgSW5saW5lQ29kZSxcbiAgSW1hZ2UsXG4gIFBvbGthQ29udGFpbmVyLFxuICBOb3RlU3VidGl0bGUsXG59O1xuXG5jb25zdCBDb250ZW50ID0gKHByb3BzOiBBcHBJbml0aWFsUHJvcHMgJiB7IENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGUgfSkgPT4ge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBkYXJrTW9kZSB9ID0gdXNlUGFsZXR0ZU1vZGVTdG9yZSgpO1xuICBjb25zdCB0aGVtZSA9IGRhcmtNb2RlID8gZGFya1RoZW1lIDogZGVmYXVsdFRoZW1lO1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXttZENvbXBvbmVudHN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L01EWFByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IFdpdGhQYWxldHRlTW9kZUNvbnRlbnQgPSB3aXRoUGFsZXR0ZU1vZGVQcm92aWRlcihDb250ZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50RWxlbWVudCkge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlN1YnJvdG8gQmlzd2FzXCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgxODQ4OTg3LTgxZDFhODAwLTk1NzMtMTFlYS05YjA0LTJmN2JjOWE4ZWUyMS5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMTE3ODYyODMvODE4NDkxMzMtYjgwZjI3ODAtOTU3My0xMWVhLTg3YzUtMWI5MWVjZGQwNzg2LnBuZ1wiXG4gICAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgxODQ5MTg0LWNmZTZhYjgwLTk1NzMtMTFlYS04ZTkwLTAxN2E3NGJhYTgxMi5wbmdcIlxuICAgICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MTg0OTM0NS0wNjI0MmIwMC05NTc0LTExZWEtOWQyMi00M2M1NDlmODhlMDEucG5nXCJcbiAgICAgICAgICAgIHNpemVzPVwiMTkyeDE5MlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw2MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL21haW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgey8qIEdsb2JhbCBzaXRlIHRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzICovfVxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTExMzE1NTkxOS0xXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ1VBLTExMzE1NTkxOS0xJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0YXRpY1N0b3JlfT5cbiAgICAgICAgICA8V2l0aFBhbGV0dGVNb2RlQ29udGVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})