"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/week6/page",{

/***/ "(app-pages-browser)/./app/week6/item-list.js":
/*!********************************!*\
  !*** ./app/week6/item-list.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week6/item.js\");\n/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.json */ \"(app-pages-browser)/./app/week6/items.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ItemList(param) {\n    let { items } = param;\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const sortedItems = [\n        ...items\n    ];\n    const [sortedAndGroupedItems, setSortedAndGroupedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    if (sortBy === \"name\") sortedItems.sort((a, b)=>a.name.localeCompare(b.name));\n    else if (sortBy === \"category\") sortedItems.sort((a, b)=>a.category.localeCompare(b.category));\n    const renderSortButton = (buttonSortBy, label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n            onClick: ()=>setSortBy(buttonSortBy),\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, this);\n    const groupAndSortByCategory = ()=>{\n        const groupedItems = items.reduce((grouped, item)=>{\n            const category = item.category;\n            if (!grouped[category]) {\n                grouped[category] = [];\n            }\n            grouped[category].push(item);\n            return grouped;\n        }, {});\n        const sortedCategories = Object.keys(groupedItems).sort();\n        const sortedAndGroupedItems = sortedCategories.reduce((sorted, category)=>{\n            const sortedCategoryItems = groupedItems[category].sort((a, b)=>a.name.localeCompare(b.name));\n            sorted.push({\n                category,\n                items: sortedCategoryItems\n            });\n            return sorted;\n        }, []);\n        setSortedAndGroupedItems(sortedAndGroupedItems);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    renderSortButton(\"name\", \"Sort by Name\"),\n                    renderSortButton(\"category\", \"Sort by Category\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n                        onClick: groupAndSortByCategory,\n                        children: \"Group by Category\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: sortedAndGroupedItems ? sortedAndGroupedItems.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg capitalize\",\n                                children: category.category\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: category.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        name: item.name,\n                                        quantity: item.quantity,\n                                        category: item.category\n                                    }, item.id, false, {\n                                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.category, true, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 65,\n                        columnNumber: 15\n                    }, this)) : sortedItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: item.name,\n                        quantity: item.quantity,\n                        category: item.category\n                    }, item.id, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 80,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"E6ytcmtpErk/rNV21CqMYc99suY=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDUDtBQUNPO0FBRWxCLFNBQVNHLFNBQVMsS0FBUztRQUFULEVBQUVELEtBQUssRUFBRSxHQUFUOztJQUMvQixNQUFNLENBQUNFLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsTUFBTU0sY0FBYztXQUFJSjtLQUFNO0lBQzlCLE1BQU0sQ0FBQ0ssdUJBQXVCQyx5QkFBeUIsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkUsSUFBSUksV0FBVyxRQUNiRSxZQUFZRyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsSUFBSSxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLElBQUk7U0FDbkQsSUFBSVIsV0FBVyxZQUNsQkUsWUFBWUcsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVJLFFBQVEsQ0FBQ0QsYUFBYSxDQUFDRixFQUFFRyxRQUFRO0lBRWhFLE1BQU1DLG1CQUFtQixDQUFDQyxjQUFjQyxzQkFDdEMsOERBQUNDO1lBQ0NDLFdBQVU7WUFDVkMsU0FBUyxJQUFNZixVQUFVVztzQkFFeEJDOzs7Ozs7SUFJTCxNQUFNSSx5QkFBeUI7UUFDN0IsTUFBTUMsZUFBZXBCLE1BQU1xQixNQUFNLENBQUMsQ0FBQ0MsU0FBU0M7WUFDMUMsTUFBTVgsV0FBV1csS0FBS1gsUUFBUTtZQUM5QixJQUFJLENBQUNVLE9BQU8sQ0FBQ1YsU0FBUyxFQUFFO2dCQUN0QlUsT0FBTyxDQUFDVixTQUFTLEdBQUcsRUFBRTtZQUN4QjtZQUNBVSxPQUFPLENBQUNWLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDRDtZQUN2QixPQUFPRDtRQUNULEdBQUcsQ0FBQztRQUVKLE1BQU1HLG1CQUFtQkMsT0FBT0MsSUFBSSxDQUFDUCxjQUFjYixJQUFJO1FBRXZELE1BQU1GLHdCQUF3Qm9CLGlCQUFpQkosTUFBTSxDQUNuRCxDQUFDTyxRQUFRaEI7WUFDUCxNQUFNaUIsc0JBQXNCVCxZQUFZLENBQUNSLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQzFERCxFQUFFRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsSUFBSTtZQUU3QmtCLE9BQU9KLElBQUksQ0FBQztnQkFBRVo7Z0JBQVVaLE9BQU82QjtZQUFvQjtZQUNuRCxPQUFPRDtRQUNULEdBQ0EsRUFBRTtRQUVKdEIseUJBQXlCRDtJQUMzQjtJQUVBLHFCQUNFLDhEQUFDeUI7OzBCQUNDLDhEQUFDQTs7b0JBQ0VqQixpQkFBaUIsUUFBUTtvQkFDekJBLGlCQUFpQixZQUFZO2tDQUM5Qiw4REFBQ0c7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNDO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNZOzBCQUNFMUIsd0JBQ0dBLHNCQUFzQjJCLEdBQUcsQ0FBQyxDQUFDcEIseUJBQ3pCLDhEQUFDcUI7OzBDQUNDLDhEQUFDQztnQ0FBR2pCLFdBQVU7MENBQXNCTCxTQUFTQSxRQUFROzs7Ozs7MENBQ3JELDhEQUFDbUI7MENBQ0VuQixTQUFTWixLQUFLLENBQUNnQyxHQUFHLENBQUMsQ0FBQ1QscUJBQ25CLDhEQUFDeEIsNkNBQUlBO3dDQUVIVyxNQUFNYSxLQUFLYixJQUFJO3dDQUNmeUIsVUFBVVosS0FBS1ksUUFBUTt3Q0FDdkJ2QixVQUFVVyxLQUFLWCxRQUFRO3VDQUhsQlcsS0FBS2EsRUFBRTs7Ozs7Ozs7Ozs7dUJBTFh4QixTQUFTQSxRQUFROzs7O2dDQWM1QlIsWUFBWTRCLEdBQUcsQ0FBQyxDQUFDVCxxQkFDZiw4REFBQ3hCLDZDQUFJQTt3QkFFSFcsTUFBTWEsS0FBS2IsSUFBSTt3QkFDZnlCLFVBQVVaLEtBQUtZLFFBQVE7d0JBQ3ZCdkIsVUFBVVcsS0FBS1gsUUFBUTt1QkFIbEJXLEtBQUthLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTNUI7R0FwRndCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlZWs2L2l0ZW0tbGlzdC5qcz85NTRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBpdGVtcyBmcm9tIFwiLi9pdGVtcy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KHsgaXRlbXMgfSkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xuICBjb25zdCBzb3J0ZWRJdGVtcyA9IFsuLi5pdGVtc107XG4gIGNvbnN0IFtzb3J0ZWRBbmRHcm91cGVkSXRlbXMsIHNldFNvcnRlZEFuZEdyb3VwZWRJdGVtc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAoc29ydEJ5ID09PSBcIm5hbWVcIilcbiAgICBzb3J0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgZWxzZSBpZiAoc29ydEJ5ID09PSBcImNhdGVnb3J5XCIpXG4gICAgc29ydGVkSXRlbXMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeS5sb2NhbGVDb21wYXJlKGIuY2F0ZWdvcnkpKTtcblxuICBjb25zdCByZW5kZXJTb3J0QnV0dG9uID0gKGJ1dHRvblNvcnRCeSwgbGFiZWwpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTIgbWwtNCBtdC00IHRleHQtYmxhY2sgYmctb3JhbmdlLTUwMCByb3VuZGVkIGhvdmVyOmJnLW9yYW5nZS00MDBcIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0U29ydEJ5KGJ1dHRvblNvcnRCeSl9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIGNvbnN0IGdyb3VwQW5kU29ydEJ5Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gaXRlbXMucmVkdWNlKChncm91cGVkLCBpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgICBpZiAoIWdyb3VwZWRbY2F0ZWdvcnldKSB7XG4gICAgICAgIGdyb3VwZWRbY2F0ZWdvcnldID0gW107XG4gICAgICB9XG4gICAgICBncm91cGVkW2NhdGVnb3J5XS5wdXNoKGl0ZW0pO1xuICAgICAgcmV0dXJuIGdyb3VwZWQ7XG4gICAgfSwge30pO1xuXG4gICAgY29uc3Qgc29ydGVkQ2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRJdGVtcykuc29ydCgpO1xuXG4gICAgY29uc3Qgc29ydGVkQW5kR3JvdXBlZEl0ZW1zID0gc29ydGVkQ2F0ZWdvcmllcy5yZWR1Y2UoXG4gICAgICAoc29ydGVkLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ZWRDYXRlZ29yeUl0ZW1zID0gZ3JvdXBlZEl0ZW1zW2NhdGVnb3J5XS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcbiAgICAgICAgKTtcbiAgICAgICAgc29ydGVkLnB1c2goeyBjYXRlZ29yeSwgaXRlbXM6IHNvcnRlZENhdGVnb3J5SXRlbXMgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICB9LFxuICAgICAgW11cbiAgICApO1xuICAgIHNldFNvcnRlZEFuZEdyb3VwZWRJdGVtcyhzb3J0ZWRBbmRHcm91cGVkSXRlbXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZW5kZXJTb3J0QnV0dG9uKFwibmFtZVwiLCBcIlNvcnQgYnkgTmFtZVwiKX1cbiAgICAgICAge3JlbmRlclNvcnRCdXR0b24oXCJjYXRlZ29yeVwiLCBcIlNvcnQgYnkgQ2F0ZWdvcnlcIil9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTIgbWwtNCBtdC00IHRleHQtYmxhY2sgYmctb3JhbmdlLTUwMCByb3VuZGVkIGhvdmVyOmJnLW9yYW5nZS00MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2dyb3VwQW5kU29ydEJ5Q2F0ZWdvcnl9XG4gICAgICAgID5cbiAgICAgICAgICBHcm91cCBieSBDYXRlZ29yeVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7c29ydGVkQW5kR3JvdXBlZEl0ZW1zXG4gICAgICAgICAgPyBzb3J0ZWRBbmRHcm91cGVkSXRlbXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5jYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgY2FwaXRhbGl6ZVwiPntjYXRlZ29yeS5jYXRlZ29yeX08L2gyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBzb3J0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSXRlbSIsIml0ZW1zIiwiSXRlbUxpc3QiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJzb3J0ZWRJdGVtcyIsInNvcnRlZEFuZEdyb3VwZWRJdGVtcyIsInNldFNvcnRlZEFuZEdyb3VwZWRJdGVtcyIsInNvcnQiLCJhIiwiYiIsIm5hbWUiLCJsb2NhbGVDb21wYXJlIiwiY2F0ZWdvcnkiLCJyZW5kZXJTb3J0QnV0dG9uIiwiYnV0dG9uU29ydEJ5IiwibGFiZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZ3JvdXBBbmRTb3J0QnlDYXRlZ29yeSIsImdyb3VwZWRJdGVtcyIsInJlZHVjZSIsImdyb3VwZWQiLCJpdGVtIiwicHVzaCIsInNvcnRlZENhdGVnb3JpZXMiLCJPYmplY3QiLCJrZXlzIiwic29ydGVkIiwic29ydGVkQ2F0ZWdvcnlJdGVtcyIsImRpdiIsInVsIiwibWFwIiwibGkiLCJoMiIsInF1YW50aXR5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week6/item-list.js\n"));

/***/ })

});