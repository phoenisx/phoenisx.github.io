webpackHotUpdate("static/development/pages/gfx-hal-initials.js",{

/***/ "./constants/gfx-hal-archive-list.ts":
/*!*******************************************!*\
  !*** ./constants/gfx-hal-archive-list.ts ***!
  \*******************************************/
/*! exports provided: halArchiveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"halArchiveRecord\", function() { return halArchiveRecord; });\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./constants/tags.ts\");\n\nconst halArchiveRecord = {\n  'display-window': {\n    key: 'display-window',\n    link: '/gfx-hal-initials/display-window',\n    title: 'Setup & Display Blank Window',\n    description: 'Learn Displaying a Blank Window using winit and bind it to gfx-hal surface instance',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST],\n    createdAt: new Date('2020/04/25 17:00:00'),\n    updatedAt: new Date('2020/05/09 23:50:00'),\n    isPublished: true\n  },\n  'physical-logical-devices': {\n    key: 'physical-logical-devices',\n    link: '/gfx-hal-initials/physical-logical-devices',\n    title: 'Adapters & Physical/Logical Devices & Device Queues',\n    description: 'Learn to Instantiate Vulkan Physical/Logical Devices and get Device Queue from gfx-hal adapters',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].GFX_HAL],\n    createdAt: new Date('2020/05/16 8:45:00'),\n    updatedAt: new Date('2020/05/16 19:30:00'),\n    isPublished: true\n  },\n  'command-buffers': {\n    key: 'command-buffers',\n    link: '/gfx-hal-initials/command-buffers',\n    title: 'Command Buffers & Pool',\n    description: 'Understanding Command Pools and Command Buffers in Vulkan and gfx-hal',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].GFX_HAL],\n    createdAt: new Date('2020/05/16 21:45:00'),\n    updatedAt: new Date('2020/05/16 21:45:00'),\n    isPublished: true\n  },\n  'swap-chain': {\n    key: 'swap-chain',\n    link: '/gfx-hal-initials/swap-chain',\n    title: 'SwapChain in gfx-hal',\n    description: 'Learning about Swapchain & Double Buffering. Understanding the implementation of SwapChain in gfx-hal',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].GFX_HAL],\n    createdAt: new Date('2020/05/22 10:20:00'),\n    updatedAt: new Date('2020/05/23 14:30:00'),\n    isPublished: true\n  },\n  shaders: {\n    key: 'shaders',\n    link: '/gfx-hal-initials/shaders',\n    title: 'Shaders',\n    description: 'Understanding Shaders & writing minimal Shader using GLSL Shading language',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82640938-22396380-9c29-11ea-9ee5-9a7fc01920da.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].GFX_HAL],\n    createdAt: new Date('2020/05/23 19:30:00'),\n    updatedAt: new Date('2020/05/23 19:35:00'),\n    isPublished: true\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvZ2Z4LWhhbC1hcmNoaXZlLWxpc3QudHM/Y2MwMCJdLCJuYW1lcyI6WyJoYWxBcmNoaXZlUmVjb3JkIiwia2V5IiwibGluayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvZ0ltYWdlIiwidGFncyIsIlRhZ3MiLCJSVVNUIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInVwZGF0ZWRBdCIsImlzUHVibGlzaGVkIiwiVFVUT1JJQUwiLCJHRlhfSEFMIiwic2hhZGVycyJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxnQkFBOEMsR0FBRztBQUM1RCxvQkFBa0I7QUFDaEJDLE9BQUcsRUFBRSxnQkFEVztBQUVoQkMsUUFBSSxFQUFFLGtDQUZVO0FBR2hCQyxTQUFLLEVBQUUsOEJBSFM7QUFJaEJDLGVBQVcsRUFDVCxxRkFMYztBQU1oQkMsV0FBTyxFQUNMLHNHQVBjO0FBUWhCQyxRQUFJLEVBQUUsQ0FBQ0MsMENBQUksQ0FBQ0MsSUFBTixDQVJVO0FBU2hCQyxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLHFCQUFULENBVEs7QUFVaEJDLGFBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMscUJBQVQsQ0FWSztBQVdoQkUsZUFBVyxFQUFFO0FBWEcsR0FEMEM7QUFjNUQsOEJBQTRCO0FBQzFCWCxPQUFHLEVBQUUsMEJBRHFCO0FBRTFCQyxRQUFJLEVBQUUsNENBRm9CO0FBRzFCQyxTQUFLLEVBQUUscURBSG1CO0FBSTFCQyxlQUFXLEVBQ1QsaUdBTHdCO0FBTTFCQyxXQUFPLEVBQ0wsc0dBUHdCO0FBUTFCQyxRQUFJLEVBQUUsQ0FBQ0MsMENBQUksQ0FBQ00sUUFBTixFQUFnQk4sMENBQUksQ0FBQ0MsSUFBckIsRUFBMkJELDBDQUFJLENBQUNPLE9BQWhDLENBUm9CO0FBUzFCTCxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLG9CQUFULENBVGU7QUFVMUJDLGFBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMscUJBQVQsQ0FWZTtBQVcxQkUsZUFBVyxFQUFFO0FBWGEsR0FkZ0M7QUEyQjVELHFCQUFtQjtBQUNqQlgsT0FBRyxFQUFFLGlCQURZO0FBRWpCQyxRQUFJLEVBQUUsbUNBRlc7QUFHakJDLFNBQUssRUFBRSx3QkFIVTtBQUlqQkMsZUFBVyxFQUNULHVFQUxlO0FBTWpCQyxXQUFPLEVBQ0wsc0dBUGU7QUFRakJDLFFBQUksRUFBRSxDQUFDQywwQ0FBSSxDQUFDTSxRQUFOLEVBQWdCTiwwQ0FBSSxDQUFDQyxJQUFyQixFQUEyQkQsMENBQUksQ0FBQ08sT0FBaEMsQ0FSVztBQVNqQkwsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxxQkFBVCxDQVRNO0FBVWpCQyxhQUFTLEVBQUUsSUFBSUQsSUFBSixDQUFTLHFCQUFULENBVk07QUFXakJFLGVBQVcsRUFBRTtBQVhJLEdBM0J5QztBQXdDNUQsZ0JBQWM7QUFDWlgsT0FBRyxFQUFFLFlBRE87QUFFWkMsUUFBSSxFQUFFLDhCQUZNO0FBR1pDLFNBQUssRUFBRSxzQkFISztBQUlaQyxlQUFXLEVBQ1QsdUdBTFU7QUFNWkMsV0FBTyxFQUNMLHNHQVBVO0FBUVpDLFFBQUksRUFBRSxDQUFDQywwQ0FBSSxDQUFDTSxRQUFOLEVBQWdCTiwwQ0FBSSxDQUFDQyxJQUFyQixFQUEyQkQsMENBQUksQ0FBQ08sT0FBaEMsQ0FSTTtBQVNaTCxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLHFCQUFULENBVEM7QUFVWkMsYUFBUyxFQUFFLElBQUlELElBQUosQ0FBUyxxQkFBVCxDQVZDO0FBV1pFLGVBQVcsRUFBRTtBQVhELEdBeEM4QztBQXFENURHLFNBQU8sRUFBRTtBQUNQZCxPQUFHLEVBQUUsU0FERTtBQUVQQyxRQUFJLEVBQUUsMkJBRkM7QUFHUEMsU0FBSyxFQUFFLFNBSEE7QUFJUEMsZUFBVyxFQUNULDRFQUxLO0FBTVBDLFdBQU8sRUFDTCxzR0FQSztBQVFQQyxRQUFJLEVBQUUsQ0FBQ0MsMENBQUksQ0FBQ00sUUFBTixFQUFnQk4sMENBQUksQ0FBQ0MsSUFBckIsRUFBMkJELDBDQUFJLENBQUNPLE9BQWhDLENBUkM7QUFTUEwsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxxQkFBVCxDQVRKO0FBVVBDLGFBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMscUJBQVQsQ0FWSjtBQVdQRSxlQUFXLEVBQUU7QUFYTjtBQXJEbUQsQ0FBdkQiLCJmaWxlIjoiLi9jb25zdGFudHMvZ2Z4LWhhbC1hcmNoaXZlLWxpc3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXJjaGl2ZUl0ZW0gfSBmcm9tICdAY29uc3RhbnRzL2FyY2hpdmUtbGlzdCc7XG5pbXBvcnQgeyBUYWdzIH0gZnJvbSAnQGNvbnN0YW50cy90YWdzJztcblxuZXhwb3J0IGNvbnN0IGhhbEFyY2hpdmVSZWNvcmQ6IFJlY29yZDxzdHJpbmcsIElBcmNoaXZlSXRlbT4gPSB7XG4gICdkaXNwbGF5LXdpbmRvdyc6IHtcbiAgICBrZXk6ICdkaXNwbGF5LXdpbmRvdycsXG4gICAgbGluazogJy9nZngtaGFsLWluaXRpYWxzL2Rpc3BsYXktd2luZG93JyxcbiAgICB0aXRsZTogJ1NldHVwICYgRGlzcGxheSBCbGFuayBXaW5kb3cnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xlYXJuIERpc3BsYXlpbmcgYSBCbGFuayBXaW5kb3cgdXNpbmcgd2luaXQgYW5kIGJpbmQgaXQgdG8gZ2Z4LWhhbCBzdXJmYWNlIGluc3RhbmNlJyxcbiAgICBvZ0ltYWdlOlxuICAgICAgJ2h0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgyMTA5OTk3LTk4ODUyNDAwLTk3NTgtMTFlYS04NGEwLWFhMzk5NmM2N2Y4Ni5qcGcnLFxuICAgIHRhZ3M6IFtUYWdzLlJVU1RdLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDQvMjUgMTc6MDA6MDAnKSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzA5IDIzOjUwOjAwJyksXG4gICAgaXNQdWJsaXNoZWQ6IHRydWUsXG4gIH0sXG4gICdwaHlzaWNhbC1sb2dpY2FsLWRldmljZXMnOiB7XG4gICAga2V5OiAncGh5c2ljYWwtbG9naWNhbC1kZXZpY2VzJyxcbiAgICBsaW5rOiAnL2dmeC1oYWwtaW5pdGlhbHMvcGh5c2ljYWwtbG9naWNhbC1kZXZpY2VzJyxcbiAgICB0aXRsZTogJ0FkYXB0ZXJzICYgUGh5c2ljYWwvTG9naWNhbCBEZXZpY2VzICYgRGV2aWNlIFF1ZXVlcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTGVhcm4gdG8gSW5zdGFudGlhdGUgVnVsa2FuIFBoeXNpY2FsL0xvZ2ljYWwgRGV2aWNlcyBhbmQgZ2V0IERldmljZSBRdWV1ZSBmcm9tIGdmeC1oYWwgYWRhcHRlcnMnLFxuICAgIG9nSW1hZ2U6XG4gICAgICAnaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMTE3ODYyODMvODIxMTEyMzEtNDg1ZThmODAtOTc2MS0xMWVhLTlmMjEtODg0M2Q0YTY2NzUyLmpwZycsXG4gICAgdGFnczogW1RhZ3MuVFVUT1JJQUwsIFRhZ3MuUlVTVCwgVGFncy5HRlhfSEFMXSxcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzE2IDg6NDU6MDAnKSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzE2IDE5OjMwOjAwJyksXG4gICAgaXNQdWJsaXNoZWQ6IHRydWUsXG4gIH0sXG4gICdjb21tYW5kLWJ1ZmZlcnMnOiB7XG4gICAga2V5OiAnY29tbWFuZC1idWZmZXJzJyxcbiAgICBsaW5rOiAnL2dmeC1oYWwtaW5pdGlhbHMvY29tbWFuZC1idWZmZXJzJyxcbiAgICB0aXRsZTogJ0NvbW1hbmQgQnVmZmVycyAmIFBvb2wnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1VuZGVyc3RhbmRpbmcgQ29tbWFuZCBQb29scyBhbmQgQ29tbWFuZCBCdWZmZXJzIGluIFZ1bGthbiBhbmQgZ2Z4LWhhbCcsXG4gICAgb2dJbWFnZTpcbiAgICAgICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MjEyNDc5NC1mMDU2NzYwMC05N2JlLTExZWEtOTAyMy1lYTE0NjdhNmI3MzQuanBnJyxcbiAgICB0YWdzOiBbVGFncy5UVVRPUklBTCwgVGFncy5SVVNULCBUYWdzLkdGWF9IQUxdLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDUvMTYgMjE6NDU6MDAnKSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzE2IDIxOjQ1OjAwJyksXG4gICAgaXNQdWJsaXNoZWQ6IHRydWUsXG4gIH0sXG4gICdzd2FwLWNoYWluJzoge1xuICAgIGtleTogJ3N3YXAtY2hhaW4nLFxuICAgIGxpbms6ICcvZ2Z4LWhhbC1pbml0aWFscy9zd2FwLWNoYWluJyxcbiAgICB0aXRsZTogJ1N3YXBDaGFpbiBpbiBnZngtaGFsJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMZWFybmluZyBhYm91dCBTd2FwY2hhaW4gJiBEb3VibGUgQnVmZmVyaW5nLiBVbmRlcnN0YW5kaW5nIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBTd2FwQ2hhaW4gaW4gZ2Z4LWhhbCcsXG4gICAgb2dJbWFnZTpcbiAgICAgICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MjY0MDkzOC0yMjM5NjM4MC05YzI5LTExZWEtOWVlNS05YTdmYzAxOTIwZGEuanBnJyxcbiAgICB0YWdzOiBbVGFncy5UVVRPUklBTCwgVGFncy5SVVNULCBUYWdzLkdGWF9IQUxdLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDUvMjIgMTA6MjA6MDAnKSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzIzIDE0OjMwOjAwJyksXG4gICAgaXNQdWJsaXNoZWQ6IHRydWUsXG4gIH0sXG4gIHNoYWRlcnM6IHtcbiAgICBrZXk6ICdzaGFkZXJzJyxcbiAgICBsaW5rOiAnL2dmeC1oYWwtaW5pdGlhbHMvc2hhZGVycycsXG4gICAgdGl0bGU6ICdTaGFkZXJzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdVbmRlcnN0YW5kaW5nIFNoYWRlcnMgJiB3cml0aW5nIG1pbmltYWwgU2hhZGVyIHVzaW5nIEdMU0wgU2hhZGluZyBsYW5ndWFnZScsXG4gICAgb2dJbWFnZTpcbiAgICAgICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MjY0MDkzOC0yMjM5NjM4MC05YzI5LTExZWEtOWVlNS05YTdmYzAxOTIwZGEuanBnJyxcbiAgICB0YWdzOiBbVGFncy5UVVRPUklBTCwgVGFncy5SVVNULCBUYWdzLkdGWF9IQUxdLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDUvMjMgMTk6MzA6MDAnKSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzIzIDE5OjM1OjAwJyksXG4gICAgaXNQdWJsaXNoZWQ6IHRydWUsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/gfx-hal-archive-list.ts\n");

/***/ })

})