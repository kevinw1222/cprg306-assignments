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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week5/item.js\");\n/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.json */ \"(app-pages-browser)/./app/week5/items.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ItemList() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const sortedItems = [\n        ..._items_json__WEBPACK_IMPORTED_MODULE_3__\n    ];\n    if (sortBy === \"name\") {\n        sortedItems.sort((a, b)=>a.itemName.localeCompare(b.name));\n    } else if (sortBy === \"quantity\") {\n        sortedItems.sort((a, b)=>a.quantity - b.quantity);\n        const handleSortByName = ()=>{\n            setSortBy(\"name\");\n        };\n        const handleSortByCategory = ()=>{\n            setSortBy(\"category\");\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSortByName,\n                            children: \"Sort by Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSortByCategory,\n                            children: \"Sort by Category\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: sortedItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            itemName: _items_json__WEBPACK_IMPORTED_MODULE_3__.itemName,\n                            quantity: _items_json__WEBPACK_IMPORTED_MODULE_3__.quantity,\n                            category: _items_json__WEBPACK_IMPORTED_MODULE_3__.category\n                        }, _items_json__WEBPACK_IMPORTED_MODULE_3__.id, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ItemList, \"aI7yz9bIg1ejNYZlqYjRr4bfSYw=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNS9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDUDtBQUNPO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsTUFBTU0sY0FBYztXQUFJSix3Q0FBS0E7S0FBQztJQUU5QixJQUFJRSxXQUFXLFFBQVE7UUFDckJFLFlBQVlDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxRQUFRLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUcsSUFBSTtJQUM1RCxPQUFPLElBQUlSLFdBQVcsWUFBWTtRQUNoQ0UsWUFBWUMsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVLLFFBQVEsR0FBR0osRUFBRUksUUFBUTtRQUVsRCxNQUFNQyxtQkFBbUI7WUFDdkJULFVBQVU7UUFDWjtRQUVBLE1BQU1VLHVCQUF1QjtZQUMzQlYsVUFBVTtRQUNaO1FBRUEscUJBQ0UsOERBQUNXOzs4QkFDQyw4REFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBT0MsU0FBU0w7c0NBQWtCOzs7Ozs7c0NBQ25DLDhEQUFDSTs0QkFBT0MsU0FBU0o7c0NBQXNCOzs7Ozs7Ozs7Ozs7OEJBR3pDLDhEQUFDSzs4QkFDRWQsWUFBWWUsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQ3JCLDZDQUFJQTs0QkFFSFMsVUFBVVIsd0NBQUtBLENBQUNRLFFBQVE7NEJBQ3hCRyxVQUFVWCx3Q0FBS0EsQ0FBQ1csUUFBUTs0QkFDeEJVLFVBQVVyQix3Q0FBS0EsQ0FBQ3FCLFFBQVE7MkJBSG5CckIsd0NBQUtBLENBQUNzQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0lBU3pCO0FBQ0Y7R0FyQ3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlZWs1L2l0ZW0tbGlzdC5qcz9lZTQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBpdGVtcyBmcm9tIFwiLi9pdGVtcy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KCkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xuICBjb25zdCBzb3J0ZWRJdGVtcyA9IFsuLi5pdGVtc107XG5cbiAgaWYgKHNvcnRCeSA9PT0gXCJuYW1lXCIpIHtcbiAgICBzb3J0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBhLml0ZW1OYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gIH0gZWxzZSBpZiAoc29ydEJ5ID09PSBcInF1YW50aXR5XCIpIHtcbiAgICBzb3J0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBhLnF1YW50aXR5IC0gYi5xdWFudGl0eSk7XG5cbiAgICBjb25zdCBoYW5kbGVTb3J0QnlOYW1lID0gKCkgPT4ge1xuICAgICAgc2V0U29ydEJ5KFwibmFtZVwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU29ydEJ5Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgICBzZXRTb3J0QnkoXCJjYXRlZ29yeVwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU29ydEJ5TmFtZX0+U29ydCBieSBOYW1lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTb3J0QnlDYXRlZ29yeX0+U29ydCBieSBDYXRlZ29yeTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAge3NvcnRlZEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtcy5pZH1cbiAgICAgICAgICAgICAgaXRlbU5hbWU9e2l0ZW1zLml0ZW1OYW1lfVxuICAgICAgICAgICAgICBxdWFudGl0eT17aXRlbXMucXVhbnRpdHl9XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtcy5jYXRlZ29yeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSXRlbSIsIml0ZW1zIiwiSXRlbUxpc3QiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJzb3J0ZWRJdGVtcyIsInNvcnQiLCJhIiwiYiIsIml0ZW1OYW1lIiwibG9jYWxlQ29tcGFyZSIsIm5hbWUiLCJxdWFudGl0eSIsImhhbmRsZVNvcnRCeU5hbWUiLCJoYW5kbGVTb3J0QnlDYXRlZ29yeSIsIm1haW4iLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtIiwiY2F0ZWdvcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week5/item-list.js\n"));

/***/ })

});