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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week5/item.js\");\n/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.json */ \"(app-pages-browser)/./app/week5/items.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ItemList() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const sortedItems = [\n        ..._items_json__WEBPACK_IMPORTED_MODULE_3__\n    ];\n    console.log(sortedItems);\n    console.log(\"safasfasfs\");\n    if (sortBy === \"name\") {\n        sortedItems.sort((a, b)=>a.name.localeCompare(b.name));\n    } else if (sortBy === \"quantity\") {\n        sortedItems.sort((a, b)=>a.quantity - b.quantity);\n        const handleSortByName = ()=>{\n            setSortBy(\"name\");\n        };\n        const handleSortByCategory = ()=>{\n            setSortBy(\"category\");\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSortByName,\n                            children: \"Sort by Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSortByCategory,\n                            children: \"Sort by Category\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: sortedItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemList, {\n                            itemName: _items_json__WEBPACK_IMPORTED_MODULE_3__.name,\n                            quantity: _items_json__WEBPACK_IMPORTED_MODULE_3__.quantity,\n                            category: _items_json__WEBPACK_IMPORTED_MODULE_3__.category\n                        }, _items_json__WEBPACK_IMPORTED_MODULE_3__.id, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week5/item-list.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ItemList, \"aI7yz9bIg1ejNYZlqYjRr4bfSYw=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNS9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDUDtBQUNPO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsTUFBTU0sY0FBYztXQUFJSix3Q0FBS0E7S0FBQztJQUU5QkssUUFBUUMsR0FBRyxDQUFDRjtJQUNaQyxRQUFRQyxHQUFHLENBQUM7SUFFWixJQUFJSixXQUFXLFFBQVE7UUFDckJFLFlBQVlHLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsSUFBSTtJQUN4RCxPQUFPLElBQUlSLFdBQVcsWUFBWTtRQUNoQ0UsWUFBWUcsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVJLFFBQVEsR0FBR0gsRUFBRUcsUUFBUTtRQUVsRCxNQUFNQyxtQkFBbUI7WUFDdkJWLFVBQVU7UUFDWjtRQUVBLE1BQU1XLHVCQUF1QjtZQUMzQlgsVUFBVTtRQUNaO1FBRUEscUJBQ0UsOERBQUNZOzs4QkFDQyw4REFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBT0MsU0FBU0w7c0NBQWtCOzs7Ozs7c0NBQ25DLDhEQUFDSTs0QkFBT0MsU0FBU0o7c0NBQXNCOzs7Ozs7Ozs7Ozs7OEJBR3pDLDhEQUFDSzs4QkFDRWYsWUFBWWdCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNwQjs0QkFFQ3FCLFVBQVV0Qix3Q0FBS0EsQ0FBQ1UsSUFBSTs0QkFDcEJFLFVBQVVaLHdDQUFLQSxDQUFDWSxRQUFROzRCQUN4QlcsVUFBVXZCLHdDQUFLQSxDQUFDdUIsUUFBUTsyQkFIbkJ2Qix3Q0FBS0EsQ0FBQ3dCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTekI7QUFDRjtHQXhDd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd2VlazUvaXRlbS1saXN0LmpzP2VlNDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IGl0ZW1zIGZyb20gXCIuL2l0ZW1zLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbUxpc3QoKSB7XG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5hbWVcIik7XG4gIGNvbnN0IHNvcnRlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICBjb25zb2xlLmxvZyhzb3J0ZWRJdGVtcyk7XG4gIGNvbnNvbGUubG9nKFwic2FmYXNmYXNmc1wiKTtcblxuICBpZiAoc29ydEJ5ID09PSBcIm5hbWVcIikge1xuICAgIHNvcnRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xuICB9IGVsc2UgaWYgKHNvcnRCeSA9PT0gXCJxdWFudGl0eVwiKSB7XG4gICAgc29ydGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5xdWFudGl0eSAtIGIucXVhbnRpdHkpO1xuXG4gICAgY29uc3QgaGFuZGxlU29ydEJ5TmFtZSA9ICgpID0+IHtcbiAgICAgIHNldFNvcnRCeShcIm5hbWVcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNvcnRCeUNhdGVnb3J5ID0gKCkgPT4ge1xuICAgICAgc2V0U29ydEJ5KFwiY2F0ZWdvcnlcIik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNvcnRCeU5hbWV9PlNvcnQgYnkgTmFtZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU29ydEJ5Q2F0ZWdvcnl9PlNvcnQgYnkgQ2F0ZWdvcnk8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzb3J0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICBrZXk9e2l0ZW1zLmlkfVxuICAgICAgICAgICAgICBpdGVtTmFtZT17aXRlbXMubmFtZX1cbiAgICAgICAgICAgICAgcXVhbnRpdHk9e2l0ZW1zLnF1YW50aXR5fVxuICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbXMuY2F0ZWdvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkl0ZW0iLCJpdGVtcyIsIkl0ZW1MaXN0Iiwic29ydEJ5Iiwic2V0U29ydEJ5Iiwic29ydGVkSXRlbXMiLCJjb25zb2xlIiwibG9nIiwic29ydCIsImEiLCJiIiwibmFtZSIsImxvY2FsZUNvbXBhcmUiLCJxdWFudGl0eSIsImhhbmRsZVNvcnRCeU5hbWUiLCJoYW5kbGVTb3J0QnlDYXRlZ29yeSIsIm1haW4iLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtIiwiaXRlbU5hbWUiLCJjYXRlZ29yeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week5/item-list.js\n"));

/***/ })

});