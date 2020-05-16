webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/word-counter.ts":
/*!*******************************!*\
  !*** ./utils/word-counter.ts ***!
  \*******************************/
/*! exports provided: wordCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordCounter\", function() { return wordCounter; });\nconst regex = new RegExp(/code|inlinecode/i);\n\nfunction countWord(wordCount, jsxEle) {\n  let _wordCount = wordCount;\n\n  if (Array.isArray(jsxEle)) {\n    _wordCount += jsxEle.reduce((count, ele) => {\n      if (ele instanceof String || typeof ele === 'string') {\n        count += countWord(count, ele);\n      } else {\n        if (!regex.test(ele.props.mdxType)) {\n          console.log('>>>>> Type:: <<<<<', ele.props.mdxType);\n          count += countWord(count, ele.props.children);\n        }\n      }\n\n      return count;\n    }, wordCount);\n  } else if (jsxEle instanceof String || typeof jsxEle === 'string') {\n    if (/\\w+/.test(jsxEle)) {\n      // console.log('>>>>> String:: <<<<<', jsxEle);\n      _wordCount += jsxEle.split(' ').length;\n    }\n  } else {\n    if (jsxEle) {\n      if (!regex.test(jsxEle.props.mdxType)) {\n        _wordCount += countWord(_wordCount, jsxEle.props.children);\n      }\n    }\n  }\n\n  return _wordCount;\n}\n\nconst wordCounter = jsx => new Promise(res => {\n  let total = 0;\n\n  if (Array.isArray(jsx)) {\n    total = jsx.reduce((wordCount, jsxEle) => {\n      if (jsxEle.props.mdxType !== 'code') {\n        wordCount += countWord(wordCount, jsxEle.props.children);\n      }\n\n      return wordCount;\n    }, 0);\n  }\n\n  res(total);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93b3JkLWNvdW50ZXIudHM/M2YzYiJdLCJuYW1lcyI6WyJyZWdleCIsIlJlZ0V4cCIsImNvdW50V29yZCIsIndvcmRDb3VudCIsImpzeEVsZSIsIl93b3JkQ291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJjb3VudCIsImVsZSIsIlN0cmluZyIsInRlc3QiLCJwcm9wcyIsIm1keFR5cGUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJzcGxpdCIsImxlbmd0aCIsIndvcmRDb3VudGVyIiwianN4IiwiUHJvbWlzZSIsInJlcyIsInRvdGFsIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxrQkFBWCxDQUFkOztBQWlCQSxTQUFTQyxTQUFULENBQW1CQyxTQUFuQixFQUFzQ0MsTUFBdEMsRUFBd0Q7QUFDdEQsTUFBSUMsVUFBVSxHQUFHRixTQUFqQjs7QUFDQSxNQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCQyxjQUFVLElBQUlELE1BQU0sQ0FBQ0ksTUFBUCxDQUFjLENBQUNDLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUMxQyxVQUFJQSxHQUFHLFlBQVlDLE1BQWYsSUFBeUIsT0FBT0QsR0FBUCxLQUFlLFFBQTVDLEVBQXNEO0FBQ3BERCxhQUFLLElBQUlQLFNBQVMsQ0FBQ08sS0FBRCxFQUFRQyxHQUFSLENBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxDQUFDVixLQUFLLENBQUNZLElBQU4sQ0FBV0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLE9BQXJCLENBQUwsRUFBb0M7QUFDbENDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ04sR0FBRyxDQUFDRyxLQUFKLENBQVVDLE9BQTVDO0FBQ0FMLGVBQUssSUFBSVAsU0FBUyxDQUFDTyxLQUFELEVBQVFDLEdBQUcsQ0FBQ0csS0FBSixDQUFVSSxRQUFsQixDQUFsQjtBQUNEO0FBQ0Y7O0FBQ0QsYUFBT1IsS0FBUDtBQUNELEtBVmEsRUFVWE4sU0FWVyxDQUFkO0FBV0QsR0FaRCxNQVlPLElBQUlDLE1BQU0sWUFBWU8sTUFBbEIsSUFBNEIsT0FBT1AsTUFBUCxLQUFrQixRQUFsRCxFQUE0RDtBQUNqRSxRQUFJLE1BQU1RLElBQU4sQ0FBV1IsTUFBWCxDQUFKLEVBQXdCO0FBQ3RCO0FBQ0FDLGdCQUFVLElBQUlELE1BQU0sQ0FBQ2MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLE1BQWhDO0FBQ0Q7QUFDRixHQUxNLE1BS0E7QUFDTCxRQUFJZixNQUFKLEVBQVk7QUFDVixVQUFJLENBQUNKLEtBQUssQ0FBQ1ksSUFBTixDQUFXUixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsT0FBeEIsQ0FBTCxFQUF1QztBQUNyQ1Qsa0JBQVUsSUFBSUgsU0FBUyxDQUFDRyxVQUFELEVBQWFELE1BQU0sQ0FBQ1MsS0FBUCxDQUFhSSxRQUExQixDQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPWixVQUFQO0FBQ0Q7O0FBRU0sTUFBTWUsV0FBVyxHQUFJQyxHQUFELElBQ3pCLElBQUlDLE9BQUosQ0FBcUJDLEdBQUQsSUFBUztBQUMzQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxNQUFJbEIsS0FBSyxDQUFDQyxPQUFOLENBQWNjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QkcsU0FBSyxHQUFHSCxHQUFHLENBQUNiLE1BQUosQ0FBVyxDQUFDTCxTQUFELEVBQVlDLE1BQVosS0FBdUI7QUFDeEMsVUFBSUEsTUFBTSxDQUFDUyxLQUFQLENBQWFDLE9BQWIsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNYLGlCQUFTLElBQUlELFNBQVMsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFNLENBQUNTLEtBQVAsQ0FBYUksUUFBekIsQ0FBdEI7QUFDRDs7QUFDRCxhQUFPZCxTQUFQO0FBQ0QsS0FMTyxFQUtMLENBTEssQ0FBUjtBQU1EOztBQUNEb0IsS0FBRyxDQUFDQyxLQUFELENBQUg7QUFDRCxDQVhELENBREsiLCJmaWxlIjoiLi91dGlscy93b3JkLWNvdW50ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCByZWdleCA9IG5ldyBSZWdFeHAoL2NvZGV8aW5saW5lY29kZS9pKTtcbnR5cGUgQ2hpbGRyZW4gPSBzdHJpbmcgfCBJSlNYIHwgQXJyYXk8c3RyaW5nIHwgSUpTWD47XG5cbmludGVyZmFjZSBJSlNYUHJvcHMge1xuICBjaGlsZHJlbjogQ2hpbGRyZW47XG4gIG1keFR5cGU6IHN0cmluZztcbiAgLy8gVGhlcmUgY291bGQgYmUgbW9yZSBwcm9wcywgY291bGQgYmUgYW55dGhpbmcsIG5vdCB0byB3b3JyeSBmb3Igbm93XG59XG5cbmludGVyZmFjZSBJSlNYIHtcbiAgJCR0eXBlb2Y6IHN5bWJvbDtcbiAga2V5OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByb3BzOiBJSlNYUHJvcHM7XG4gIHJlZjogUmVhY3QuUmVmPGFueT47XG4gIHR5cGU6IGFueTtcbn1cblxuZnVuY3Rpb24gY291bnRXb3JkKHdvcmRDb3VudDogbnVtYmVyLCBqc3hFbGU6IENoaWxkcmVuKSB7XG4gIGxldCBfd29yZENvdW50ID0gd29yZENvdW50O1xuICBpZiAoQXJyYXkuaXNBcnJheShqc3hFbGUpKSB7XG4gICAgX3dvcmRDb3VudCArPSBqc3hFbGUucmVkdWNlKChjb3VudCwgZWxlKSA9PiB7XG4gICAgICBpZiAoZWxlIGluc3RhbmNlb2YgU3RyaW5nIHx8IHR5cGVvZiBlbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvdW50ICs9IGNvdW50V29yZChjb3VudCwgZWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcmVnZXgudGVzdChlbGUucHJvcHMubWR4VHlwZSkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4gVHlwZTo6IDw8PDw8JywgZWxlLnByb3BzLm1keFR5cGUpO1xuICAgICAgICAgIGNvdW50ICs9IGNvdW50V29yZChjb3VudCwgZWxlLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0sIHdvcmRDb3VudCk7XG4gIH0gZWxzZSBpZiAoanN4RWxlIGluc3RhbmNlb2YgU3RyaW5nIHx8IHR5cGVvZiBqc3hFbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKC9cXHcrLy50ZXN0KGpzeEVsZSkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+PiBTdHJpbmc6OiA8PDw8PCcsIGpzeEVsZSk7XG4gICAgICBfd29yZENvdW50ICs9IGpzeEVsZS5zcGxpdCgnICcpLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGpzeEVsZSkge1xuICAgICAgaWYgKCFyZWdleC50ZXN0KGpzeEVsZS5wcm9wcy5tZHhUeXBlKSkge1xuICAgICAgICBfd29yZENvdW50ICs9IGNvdW50V29yZChfd29yZENvdW50LCBqc3hFbGUucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfd29yZENvdW50O1xufVxuXG5leHBvcnQgY29uc3Qgd29yZENvdW50ZXIgPSAoanN4OiBSZWFjdC5SZWFjdENoaWxkcmVuKSA9PlxuICBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXMpID0+IHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzeCkpIHtcbiAgICAgIHRvdGFsID0ganN4LnJlZHVjZSgod29yZENvdW50LCBqc3hFbGUpID0+IHtcbiAgICAgICAgaWYgKGpzeEVsZS5wcm9wcy5tZHhUeXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICB3b3JkQ291bnQgKz0gY291bnRXb3JkKHdvcmRDb3VudCwganN4RWxlLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd29yZENvdW50O1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHJlcyh0b3RhbCk7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/word-counter.ts\n");

/***/ })

})