"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/week5/page",{

/***/ "(app-pages-browser)/./app/week5/item-list.js":
/*!********************************!*\
  !*** ./app/week5/item-list.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ItemList() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const onClick = ()=>{\n        setSortBy(\"name\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    class: \"gap-5\",\n                    type: \"button\",\n                    onClick: onClick,\n                    children: [\n                        \"Sort by \",\n                        sortBy\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>setSortBy(\"quantity\"),\n                    children: \"Sort by quantity\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"aI7yz9bIg1ejNYZlqYjRr4bfSYw=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNS9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2lDO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFFckMsTUFBTUksVUFBVTtRQUNkRCxVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0U7a0JBQ0MsNEVBQUNDOzs4QkFDQyw4REFBQ0M7b0JBQU9DLE9BQU07b0JBQVFDLE1BQUs7b0JBQVNMLFNBQVNBOzt3QkFBUzt3QkFDM0NGOzs7Ozs7OzhCQUdYLDhEQUFDSztvQkFBT0UsTUFBSztvQkFBU0wsU0FBUyxJQUFNRCxVQUFVOzhCQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRTtHQXBCd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93ZWVrNS9pdGVtLWxpc3QuanM/ZWU0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KCkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U29ydEJ5KFwibmFtZVwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdhcC01XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIFNvcnQgYnkge3NvcnRCeX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U29ydEJ5KFwicXVhbnRpdHlcIil9PlxuICAgICAgICAgIFNvcnQgYnkgcXVhbnRpdHlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJdGVtTGlzdCIsInNvcnRCeSIsInNldFNvcnRCeSIsIm9uQ2xpY2siLCJtYWluIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3MiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week5/item-list.js\n"));

/***/ })

});