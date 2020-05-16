webpackHotUpdate("static/development/pages/gfx-hal-initials/physical-logical-devices.js",{

/***/ "./pages/gfx-hal-initials/physical-logical-devices.md":
/*!************************************************************!*\
  !*** ./pages/gfx-hal-initials/physical-logical-devices.md ***!
  \************************************************************/
/*! exports provided: record, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"record\", function() { return record; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _constants_gfx_hal_archive_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/gfx-hal-archive-list */ \"./constants/gfx-hal-archive-list.ts\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/pages/gfx-hal-initials/physical-logical-devices.md\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* @jsx mdx */\n\n\nconst record = _constants_gfx_hal_archive_list__WEBPACK_IMPORTED_MODULE_4__[\"halArchiveRecord\"]['physical-logical-devices'];\n\nconst makeShortcode = name => function MDXDefaultShortcode(props) {\n  console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }));\n};\n\nconst PolkaContainer = makeShortcode(\"PolkaContainer\");\n_c = PolkaContainer;\nconst H1 = makeShortcode(\"H1\");\n_c2 = H1;\nconst Image = makeShortcode(\"Image\");\n_c3 = Image;\nconst layoutProps = {\n  record\n};\nconst MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(PolkaContainer, {\n    pageTitle: record.title,\n    pageDescription: record.description,\n    keywords: ['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'Physical Device', 'Logical Device', 'gfx-hal'],\n    publishDate: record.createdAt,\n    ogImage: record.ogImage,\n    mdxType: \"PolkaContainer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(H1, {\n    updatedAt: record.updatedAt,\n    wordCount: 520,\n    mdxType: \"H1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, record.title), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(Image, {\n    alt: \"Physical to Logical Devices\",\n    src: \"https://user-images.githubusercontent.com/11786283/82109324-a8016e80-9752-11ea-89ba-677880ada6b1.png\",\n    placeholder: \"https://user-images.githubusercontent.com/11786283/82109811-ac2f8b00-9756-11ea-88db-3cbc70ee1350.png\",\n    mdxType: \"Image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, `What is a Device`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, `Physical Device - denotes to the actual Hardware device present in your Computer. It gives\na vector, that has Device details as elements. Each item pointing to the GPU hardware you have.\nSo, if you have Single NVidia GPU, you will get a single item vector, having details on that device.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, `Logical Device - Basically it is a representation of Physical device, that the application will use\nto compute their logic. In `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 30\n    }\n  }, `gfx-hal`), ` to get logical device, you need to open `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 127\n    }\n  }, `physical_device`), `.\n(Details discussed at the end).`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, `What details does a device has`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-js\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 12\n    }\n  }), `// Adapter Info\n{\n  name: \"GeForce GTX 1060 6GB\",\n  vendor: 4310,\n  device: 7114,\n  // Enum - { Other = 0, IntegratedGpu = 1, DiscreteGpu = 2, VirtualGpu = 3, Cpu = 4 }\n  device_type: DiscreteGpu,\n}\n\n// Physical Device, used to fetch details on gpu memory etc.\n\n// Queue Families\n[\n  {\n    properties: {\n      queue_flags: GRAPHICS | COMPUTE | TRANSFER | SPARSE_BINDING,\n      queue_count: 16,\n      timestamp_valid_bits: 64,\n      min_image_transfer_granularity: {\n        width: 1,\n        height: 1,\n        depth: 1,\n      },\n    },\n    device: 0x00005622e6d7d271,\n    index: 0,\n  },\n  {\n    properties: {\n      queue_flags: TRANSFER,\n      queue_count: 1,\n      timestamp_valid_bits: 64,\n      min_image_transfer_granularity: {\n        width: 1,\n        height: 1,\n        depth: 1,\n      },\n    },\n    device: 0x00005622e6d7d270,\n    index: 1,\n  }\n]\n`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, `Info is self-explanatory.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, `Physical Device - (To be Explored)`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, `QueueFamilies - consist of multiple queue details a Device supports. A queue excepts Command buffers\nto operate on, but only for a specific type. Each queue detail in queue families, has Queue Flags,\nwhich determines what type of command-buffers a queue can to pass on to GPU.\nSo, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, `queue_flags: GRAPHICS`), ` can accept only graphics related operations in Command Buffer.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, `For an ellaborated explanation, see this `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://stackoverflow.com/a/55273688/2849127\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 75\n    }\n  }), `thread`)))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, `Logical Devices`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"img\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    parentName: \"p\"\n  }, {\n    \"src\": \"https://user-images.githubusercontent.com/11786283/77247969-01ba5080-6c5c-11ea-8202-3c83e1a25b51.png\",\n    \"alt\": \"Logical-Device\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 10\n    }\n  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-rs\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 12\n    }\n  }), `let mut gpu = unsafe {\n  adapter\n    .physical_device\n    .open(&[(&adapter.queue_families[0], &[1.0])], gfx_hal::Features::empty())\n    .unwrap()\n};\n\n// Logical Device\nprintln!(\"Logical Device: {:#?}\", gpu.device);\n`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, `We will be using Logical Devices to create Command Pools and Buffer to pass onto GPU.`)));\n}\n_c4 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"PolkaContainer\");\n$RefreshReg$(_c2, \"H1\");\n$RefreshReg$(_c3, \"Image\");\n$RefreshReg$(_c4, \"MDXContent\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZngtaGFsLWluaXRpYWxzL3BoeXNpY2FsLWxvZ2ljYWwtZGV2aWNlcy5tZD9lZGNlIl0sIm5hbWVzIjpbInJlY29yZCIsImhhbEFyY2hpdmVSZWNvcmQiLCJtYWtlU2hvcnRjb2RlIiwibmFtZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiUG9sa2FDb250YWluZXIiLCJIMSIsIkltYWdlIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkQXQiLCJvZ0ltYWdlIiwidXBkYXRlZEF0IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDTyxNQUFNQSxNQUFNLEdBQUdDLGdGQUFnQixDQUFDLDBCQUFELENBQS9COztBQUNQLE1BQU1DLGFBQWEsR0FBR0MsSUFBSSxJQUFJLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNoRUMsU0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZUosSUFBZixHQUFzQix5RUFBbkM7QUFDQSxTQUFPLHdKQUFTRSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNELENBSEQ7O0FBSUEsTUFBTUcsY0FBYyxHQUFHTixhQUFhLENBQUMsZ0JBQUQsQ0FBcEM7S0FBTU0sYztBQUNOLE1BQU1DLEVBQUUsR0FBR1AsYUFBYSxDQUFDLElBQUQsQ0FBeEI7TUFBTU8sRTtBQUNOLE1BQU1DLEtBQUssR0FBR1IsYUFBYSxDQUFDLE9BQUQsQ0FBM0I7TUFBTVEsSztBQUNOLE1BQU1DLFdBQVcsR0FBRztBQUNsQlg7QUFEa0IsQ0FBcEI7QUFHQSxNQUFNWSxTQUFTLEdBQUcsU0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUhnQztBQUNqQ0M7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Q0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL3BhZ2VzL2dmeC1oYWwtaW5pdGlhbHMvcGh5c2ljYWwtbG9naWNhbC1kZXZpY2VzLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IHsgaGFsQXJjaGl2ZVJlY29yZCB9IGZyb20gJ0Bjb25zdGFudHMvZ2Z4LWhhbC1hcmNoaXZlLWxpc3QnO1xuZXhwb3J0IGNvbnN0IHJlY29yZCA9IGhhbEFyY2hpdmVSZWNvcmRbJ3BoeXNpY2FsLWxvZ2ljYWwtZGV2aWNlcyddO1xuY29uc3QgbWFrZVNob3J0Y29kZSA9IG5hbWUgPT4gZnVuY3Rpb24gTURYRGVmYXVsdFNob3J0Y29kZShwcm9wcykge1xuICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9Lz5cbn07XG5jb25zdCBQb2xrYUNvbnRhaW5lciA9IG1ha2VTaG9ydGNvZGUoXCJQb2xrYUNvbnRhaW5lclwiKTtcbmNvbnN0IEgxID0gbWFrZVNob3J0Y29kZShcIkgxXCIpO1xuY29uc3QgSW1hZ2UgPSBtYWtlU2hvcnRjb2RlKFwiSW1hZ2VcIik7XG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgcmVjb3JkXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8UG9sa2FDb250YWluZXIgcGFnZVRpdGxlPXtyZWNvcmQudGl0bGV9IHBhZ2VEZXNjcmlwdGlvbj17cmVjb3JkLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17WydWdWxrYW4nLCAnQmFzaWNzJywgJ0Z1bmRhbWVudGFsJywgJ0JlZ2lubmVyJywgJ1BoeXNpY2FsIERldmljZScsICdMb2dpY2FsIERldmljZScsICdnZngtaGFsJ119IHB1Ymxpc2hEYXRlPXtyZWNvcmQuY3JlYXRlZEF0fSBvZ0ltYWdlPXtyZWNvcmQub2dJbWFnZX0gbWR4VHlwZT1cIlBvbGthQ29udGFpbmVyXCI+XG4gICAgICA8SDEgdXBkYXRlZEF0PXtyZWNvcmQudXBkYXRlZEF0fSB3b3JkQ291bnQ9ezUyMH0gbWR4VHlwZT1cIkgxXCI+XG4gIHtyZWNvcmQudGl0bGV9XG4gICAgICA8L0gxPlxuICAgICAgPEltYWdlIGFsdD1cIlBoeXNpY2FsIHRvIExvZ2ljYWwgRGV2aWNlc1wiIHNyYz1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgyMTA5MzI0LWE4MDE2ZTgwLTk3NTItMTFlYS04OWJhLTY3Nzg4MGFkYTZiMS5wbmdcIiBwbGFjZWhvbGRlcj1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgyMTA5ODExLWFjMmY4YjAwLTk3NTYtMTFlYS04OGRiLTNjYmM3MGVlMTM1MC5wbmdcIiBtZHhUeXBlPVwiSW1hZ2VcIiAvPlxuICAgICAge1xuICAgICAgICAvKiBodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My83NzI0NDkyNS04YmY0YmI4MC02YzQwLTExZWEtODVmNC0xYTBmODMzY2U4MzQucG5nICovXG4gICAgICB9XG4gICAgICA8aDI+e2BXaGF0IGlzIGEgRGV2aWNlYH08L2gyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BQaHlzaWNhbCBEZXZpY2UgLSBkZW5vdGVzIHRvIHRoZSBhY3R1YWwgSGFyZHdhcmUgZGV2aWNlIHByZXNlbnQgaW4geW91ciBDb21wdXRlci4gSXQgZ2l2ZXNcbmEgdmVjdG9yLCB0aGF0IGhhcyBEZXZpY2UgZGV0YWlscyBhcyBlbGVtZW50cy4gRWFjaCBpdGVtIHBvaW50aW5nIHRvIHRoZSBHUFUgaGFyZHdhcmUgeW91IGhhdmUuXG5TbywgaWYgeW91IGhhdmUgU2luZ2xlIE5WaWRpYSBHUFUsIHlvdSB3aWxsIGdldCBhIHNpbmdsZSBpdGVtIHZlY3RvciwgaGF2aW5nIGRldGFpbHMgb24gdGhhdCBkZXZpY2UuYH08L2xpPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BMb2dpY2FsIERldmljZSAtIEJhc2ljYWxseSBpdCBpcyBhIHJlcHJlc2VudGF0aW9uIG9mIFBoeXNpY2FsIGRldmljZSwgdGhhdCB0aGUgYXBwbGljYXRpb24gd2lsbCB1c2VcbnRvIGNvbXB1dGUgdGhlaXIgbG9naWMuIEluIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BnZngtaGFsYH08L2lubGluZUNvZGU+e2AgdG8gZ2V0IGxvZ2ljYWwgZGV2aWNlLCB5b3UgbmVlZCB0byBvcGVuIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BwaHlzaWNhbF9kZXZpY2VgfTwvaW5saW5lQ29kZT57YC5cbihEZXRhaWxzIGRpc2N1c3NlZCBhdCB0aGUgZW5kKS5gfTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGgyPntgV2hhdCBkZXRhaWxzIGRvZXMgYSBkZXZpY2UgaGFzYH08L2gyPlxuICAgICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+e2AvLyBBZGFwdGVyIEluZm9cbntcbiAgbmFtZTogXCJHZUZvcmNlIEdUWCAxMDYwIDZHQlwiLFxuICB2ZW5kb3I6IDQzMTAsXG4gIGRldmljZTogNzExNCxcbiAgLy8gRW51bSAtIHsgT3RoZXIgPSAwLCBJbnRlZ3JhdGVkR3B1ID0gMSwgRGlzY3JldGVHcHUgPSAyLCBWaXJ0dWFsR3B1ID0gMywgQ3B1ID0gNCB9XG4gIGRldmljZV90eXBlOiBEaXNjcmV0ZUdwdSxcbn1cblxuLy8gUGh5c2ljYWwgRGV2aWNlLCB1c2VkIHRvIGZldGNoIGRldGFpbHMgb24gZ3B1IG1lbW9yeSBldGMuXG5cbi8vIFF1ZXVlIEZhbWlsaWVzXG5bXG4gIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBxdWV1ZV9mbGFnczogR1JBUEhJQ1MgfCBDT01QVVRFIHwgVFJBTlNGRVIgfCBTUEFSU0VfQklORElORyxcbiAgICAgIHF1ZXVlX2NvdW50OiAxNixcbiAgICAgIHRpbWVzdGFtcF92YWxpZF9iaXRzOiA2NCxcbiAgICAgIG1pbl9pbWFnZV90cmFuc2Zlcl9ncmFudWxhcml0eToge1xuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICBkZXB0aDogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXZpY2U6IDB4MDAwMDU2MjJlNmQ3ZDI3MSxcbiAgICBpbmRleDogMCxcbiAgfSxcbiAge1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHF1ZXVlX2ZsYWdzOiBUUkFOU0ZFUixcbiAgICAgIHF1ZXVlX2NvdW50OiAxLFxuICAgICAgdGltZXN0YW1wX3ZhbGlkX2JpdHM6IDY0LFxuICAgICAgbWluX2ltYWdlX3RyYW5zZmVyX2dyYW51bGFyaXR5OiB7XG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIGRlcHRoOiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRldmljZTogMHgwMDAwNTYyMmU2ZDdkMjcwLFxuICAgIGluZGV4OiAxLFxuICB9XG5dXG5gfTwvY29kZT48L3ByZT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPlxuICAgICAgICAgIDxwIHBhcmVudE5hbWU9XCJsaVwiPntgSW5mbyBpcyBzZWxmLWV4cGxhbmF0b3J5LmB9PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2BQaHlzaWNhbCBEZXZpY2UgLSAoVG8gYmUgRXhwbG9yZWQpYH08L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj57YFF1ZXVlRmFtaWxpZXMgLSBjb25zaXN0IG9mIG11bHRpcGxlIHF1ZXVlIGRldGFpbHMgYSBEZXZpY2Ugc3VwcG9ydHMuIEEgcXVldWUgZXhjZXB0cyBDb21tYW5kIGJ1ZmZlcnNcbnRvIG9wZXJhdGUgb24sIGJ1dCBvbmx5IGZvciBhIHNwZWNpZmljIHR5cGUuIEVhY2ggcXVldWUgZGV0YWlsIGluIHF1ZXVlIGZhbWlsaWVzLCBoYXMgUXVldWUgRmxhZ3MsXG53aGljaCBkZXRlcm1pbmVzIHdoYXQgdHlwZSBvZiBjb21tYW5kLWJ1ZmZlcnMgYSBxdWV1ZSBjYW4gdG8gcGFzcyBvbiB0byBHUFUuXG5TbywgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcXVldWVfZmxhZ3M6IEdSQVBISUNTYH08L2lubGluZUNvZGU+e2AgY2FuIGFjY2VwdCBvbmx5IGdyYXBoaWNzIHJlbGF0ZWQgb3BlcmF0aW9ucyBpbiBDb21tYW5kIEJ1ZmZlci5gfTwvcD5cbiAgICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj57YEZvciBhbiBlbGxhYm9yYXRlZCBleHBsYW5hdGlvbiwgc2VlIHRoaXMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NTI3MzY4OC8yODQ5MTI3XCJcbiAgICAgICAgICAgIH19PntgdGhyZWFkYH08L2E+PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoMj57YExvZ2ljYWwgRGV2aWNlc2B9PC9oMj5cbiAgICAgIDxwPjxpbWcgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMTE3ODYyODMvNzcyNDc5NjktMDFiYTUwODAtNmM1Yy0xMWVhLTgyMDItM2M4M2UxYTI1YjUxLnBuZ1wiLFxuICAgICAgICAgIFwiYWx0XCI6IFwiTG9naWNhbC1EZXZpY2VcIlxuICAgICAgICB9fT48L2ltZz48L3A+XG4gICAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtcnNcIlxuICAgICAgICB9fT57YGxldCBtdXQgZ3B1ID0gdW5zYWZlIHtcbiAgYWRhcHRlclxuICAgIC5waHlzaWNhbF9kZXZpY2VcbiAgICAub3BlbigmWygmYWRhcHRlci5xdWV1ZV9mYW1pbGllc1swXSwgJlsxLjBdKV0sIGdmeF9oYWw6OkZlYXR1cmVzOjplbXB0eSgpKVxuICAgIC51bndyYXAoKVxufTtcblxuLy8gTG9naWNhbCBEZXZpY2VcbnByaW50bG4hKFwiTG9naWNhbCBEZXZpY2U6IHs6Iz99XCIsIGdwdS5kZXZpY2UpO1xuYH08L2NvZGU+PC9wcmU+XG4gICAgICA8cD57YFdlIHdpbGwgYmUgdXNpbmcgTG9naWNhbCBEZXZpY2VzIHRvIGNyZWF0ZSBDb21tYW5kIFBvb2xzIGFuZCBCdWZmZXIgdG8gcGFzcyBvbnRvIEdQVS5gfTwvcD5cbiAgICA8L1BvbGthQ29udGFpbmVyPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gfx-hal-initials/physical-logical-devices.md\n");

/***/ })

})