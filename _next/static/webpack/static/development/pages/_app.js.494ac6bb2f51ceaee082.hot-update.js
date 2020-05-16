webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/word-counter.ts":
/*!*******************************!*\
  !*** ./utils/word-counter.ts ***!
  \*******************************/
/*! exports provided: wordCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordCounter\", function() { return wordCounter; });\nconst regex = new RegExp(/code|inlinecode/i);\n\nfunction countWord(jsxEle) {\n  if (Array.isArray(jsxEle)) {\n    return jsxEle.reduce((count, ele) => {\n      if (ele instanceof String || typeof ele === 'string') {\n        count += countWord(ele);\n      } else {\n        if (!regex.test(ele.props.mdxType)) {\n          count += countWord(ele.props.children);\n        }\n      }\n\n      return count;\n    }, 0);\n  } else if (jsxEle instanceof String || typeof jsxEle === 'string') {\n    if (/\\w+/.test(jsxEle.toString())) {\n      console.log('>>>> String:: ', jsxEle);\n      return jsxEle.split(' ').length;\n    }\n  } else {\n    if (jsxEle) {\n      if (!regex.test(jsxEle.props.mdxType)) {\n        return countWord(jsxEle.props.children);\n      }\n    }\n  }\n\n  return 0;\n}\n\nconst wordCounter = jsx => new Promise(res => {\n  let total = 0;\n\n  if (Array.isArray(jsx)) {\n    total = jsx.reduce((wordCount, jsxEle) => {\n      if (jsxEle.props.mdxType !== 'code') {\n        wordCount += countWord(wordCount, jsxEle.props.children);\n        console.log('>>>> Total:: ', wordCount);\n      }\n\n      return wordCount;\n    }, 0);\n  }\n\n  res(total);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93b3JkLWNvdW50ZXIudHM/M2YzYiJdLCJuYW1lcyI6WyJyZWdleCIsIlJlZ0V4cCIsImNvdW50V29yZCIsImpzeEVsZSIsIkFycmF5IiwiaXNBcnJheSIsInJlZHVjZSIsImNvdW50IiwiZWxlIiwiU3RyaW5nIiwidGVzdCIsInByb3BzIiwibWR4VHlwZSIsImNoaWxkcmVuIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwic3BsaXQiLCJsZW5ndGgiLCJ3b3JkQ291bnRlciIsImpzeCIsIlByb21pc2UiLCJyZXMiLCJ0b3RhbCIsIndvcmRDb3VudCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBLE1BQU1BLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsa0JBQVgsQ0FBZDs7QUFpQkEsU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBcUM7QUFDbkMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLE1BQWQsQ0FBSixFQUEyQjtBQUN6QixXQUFPQSxNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDbkMsVUFBSUEsR0FBRyxZQUFZQyxNQUFmLElBQXlCLE9BQU9ELEdBQVAsS0FBZSxRQUE1QyxFQUFzRDtBQUNwREQsYUFBSyxJQUFJTCxTQUFTLENBQUNNLEdBQUQsQ0FBbEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJLENBQUNSLEtBQUssQ0FBQ1UsSUFBTixDQUFXRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsT0FBckIsQ0FBTCxFQUFvQztBQUNsQ0wsZUFBSyxJQUFJTCxTQUFTLENBQUNNLEdBQUcsQ0FBQ0csS0FBSixDQUFVRSxRQUFYLENBQWxCO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPTixLQUFQO0FBQ0QsS0FUTSxFQVNKLENBVEksQ0FBUDtBQVVELEdBWEQsTUFXTyxJQUFJSixNQUFNLFlBQVlNLE1BQWxCLElBQTRCLE9BQU9OLE1BQVAsS0FBa0IsUUFBbEQsRUFBNEQ7QUFDakUsUUFBSSxNQUFNTyxJQUFOLENBQVdQLE1BQU0sQ0FBQ1csUUFBUCxFQUFYLENBQUosRUFBbUM7QUFDakNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCYixNQUE5QjtBQUNBLGFBQU9BLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLE1BQXpCO0FBQ0Q7QUFDRixHQUxNLE1BS0E7QUFDTCxRQUFJZixNQUFKLEVBQVk7QUFDVixVQUFJLENBQUNILEtBQUssQ0FBQ1UsSUFBTixDQUFXUCxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBeEIsQ0FBTCxFQUF1QztBQUNyQyxlQUFRVixTQUFTLENBQUNDLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhRSxRQUFkLENBQWpCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU8sQ0FBUDtBQUNEOztBQUVNLE1BQU1NLFdBQVcsR0FBSUMsR0FBRCxJQUN6QixJQUFJQyxPQUFKLENBQXFCQyxHQUFELElBQVM7QUFDM0IsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsTUFBSW5CLEtBQUssQ0FBQ0MsT0FBTixDQUFjZSxHQUFkLENBQUosRUFBd0I7QUFDdEJHLFNBQUssR0FBR0gsR0FBRyxDQUFDZCxNQUFKLENBQVcsQ0FBQ2tCLFNBQUQsRUFBWXJCLE1BQVosS0FBdUI7QUFDeEMsVUFBSUEsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE9BQWIsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNZLGlCQUFTLElBQUl0QixTQUFTLENBQUNzQixTQUFELEVBQVlyQixNQUFNLENBQUNRLEtBQVAsQ0FBYUUsUUFBekIsQ0FBdEI7QUFDQUUsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlEsU0FBN0I7QUFDRDs7QUFDRCxhQUFPQSxTQUFQO0FBQ0QsS0FOTyxFQU1MLENBTkssQ0FBUjtBQU9EOztBQUNERixLQUFHLENBQUNDLEtBQUQsQ0FBSDtBQUNELENBWkQsQ0FESyIsImZpbGUiOiIuL3V0aWxzL3dvcmQtY291bnRlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvY29kZXxpbmxpbmVjb2RlL2kpO1xudHlwZSBDaGlsZHJlbiA9IHN0cmluZyB8IElKU1ggfCBBcnJheTxzdHJpbmcgfCBJSlNYPjtcblxuaW50ZXJmYWNlIElKU1hQcm9wcyB7XG4gIGNoaWxkcmVuOiBDaGlsZHJlbjtcbiAgbWR4VHlwZTogc3RyaW5nO1xuICAvLyBUaGVyZSBjb3VsZCBiZSBtb3JlIHByb3BzLCBjb3VsZCBiZSBhbnl0aGluZywgbm90IHRvIHdvcnJ5IGZvciBub3dcbn1cblxuaW50ZXJmYWNlIElKU1gge1xuICAkJHR5cGVvZjogc3ltYm9sO1xuICBrZXk6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJvcHM6IElKU1hQcm9wcztcbiAgcmVmOiBSZWFjdC5SZWY8YW55PjtcbiAgdHlwZTogYW55O1xufVxuXG5mdW5jdGlvbiBjb3VudFdvcmQoanN4RWxlOiBDaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShqc3hFbGUpKSB7XG4gICAgcmV0dXJuIGpzeEVsZS5yZWR1Y2UoKGNvdW50LCBlbGUpID0+IHtcbiAgICAgIGlmIChlbGUgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIGVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY291bnQgKz0gY291bnRXb3JkKGVsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoZWxlLnByb3BzLm1keFR5cGUpKSB7XG4gICAgICAgICAgY291bnQgKz0gY291bnRXb3JkKGVsZS5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9LCAwKTtcbiAgfSBlbHNlIGlmIChqc3hFbGUgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIGpzeEVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoL1xcdysvLnRlc3QoanN4RWxlLnRvU3RyaW5nKCkpKSB7XG4gICAgICBjb25zb2xlLmxvZygnPj4+PiBTdHJpbmc6OiAnLCBqc3hFbGUpO1xuICAgICAgcmV0dXJuIGpzeEVsZS5zcGxpdCgnICcpLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGpzeEVsZSkge1xuICAgICAgaWYgKCFyZWdleC50ZXN0KGpzeEVsZS5wcm9wcy5tZHhUeXBlKSkge1xuICAgICAgICByZXR1cm4gIGNvdW50V29yZChqc3hFbGUucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgY29uc3Qgd29yZENvdW50ZXIgPSAoanN4OiBSZWFjdC5SZWFjdENoaWxkcmVuKSA9PlxuICBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXMpID0+IHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzeCkpIHtcbiAgICAgIHRvdGFsID0ganN4LnJlZHVjZSgod29yZENvdW50LCBqc3hFbGUpID0+IHtcbiAgICAgICAgaWYgKGpzeEVsZS5wcm9wcy5tZHhUeXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICB3b3JkQ291bnQgKz0gY291bnRXb3JkKHdvcmRDb3VudCwganN4RWxlLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPj4+PiBUb3RhbDo6ICcsIHdvcmRDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRDb3VudDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICByZXModG90YWwpO1xuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/word-counter.ts\n");

/***/ })

})