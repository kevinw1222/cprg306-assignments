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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week6/item.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ItemList(param) {\n    let { items } = param;\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const [isGrouped, setIsGrouped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sortedItems = [\n        ...items\n    ];\n    const [sortedAndGroupedItems, setSortedAndGroupedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const renderSortButton = (buttonSortBy, label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n            onClick: ()=>setSortBy(buttonSortBy),\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this);\n    const toggleGrouping = ()=>{\n        setIsGrouped(!isGrouped);\n        if (isGrouped) {\n            setSortedAndGroupedItems(null);\n            setSortBy(\"name\");\n        } else groupAndSortByCategory();\n    };\n    const groupAndSortByCategory = ()=>{\n        const groupedItems = items.reduce((grouped, item)=>{\n            const category = item.category;\n            if (!grouped[category]) {\n                grouped[category] = [];\n            }\n            grouped[category].push(item);\n            return grouped;\n        }, {});\n        const sortedCategories = Object.keys(groupedItems).sort();\n        const sortedAndGroupedItems = sortedCategories.reduce((sorted, category)=>{\n            const sortedCategoryItems = groupedItems[category].sort((a, b)=>a.name.localeCompare(b.name));\n            sorted.push({\n                category,\n                items: sortedCategoryItems\n            });\n            return sorted;\n        }, []);\n        setSortedAndGroupedItems(sortedAndGroupedItems);\n    };\n    const nameCompare = (a, b)=>{\n        if (a.name > b.name) return 1;\n        if (a.name < b.name) return -1;\n        return 0;\n    };\n    const categoryCompare = (a, b)=>{\n        if (a.category > b.category) return 1;\n        if (a.category < b.category) return -1;\n        return 0;\n    };\n    if (sortBy === \"name\") sortedItems.sort((a, b)=>nameCompare(a, b));\n    else if (sortBy === \"category\") sortedItems.sort((a, b)=>categoryCompare(a, b));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    renderSortButton(\"name\", \"Sort by Name\"),\n                    renderSortButton(\"category\", \"Sort by Category\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n                        onClick: toggleGrouping,\n                        children: isGrouped ? \"Reset\" : \" Group by Category\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: sortedAndGroupedItems && sortedAndGroupedItems.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg capitalize\",\n                                children: category.category\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 118,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: category.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        name: item.name,\n                                        quantity: item.quantity,\n                                        category: item.category\n                                    }, item.id, false, {\n                                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 23\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 119,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, category.category, true, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"gMVLaQUpydW4MrlY6eird4R82qo=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNQO0FBRVgsU0FBU0UsU0FBVSxLQUFPO1FBQVAsRUFBQ0MsS0FBSyxFQUFDLEdBQVA7O0lBQ2hDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsY0FBYztXQUFJTDtLQUFNO0lBQzlCLE1BQU0sQ0FBQ00sdUJBQXVCQyx5QkFBeUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkUsTUFBTVcsbUJBQW1CLENBQUNDLGNBQWNDLHNCQUN0Qyw4REFBQ0M7WUFDQ0MsV0FBVTtZQUNWQyxTQUFTLElBQU1YLFVBQVVPO3NCQUV4QkM7Ozs7OztJQUlMLE1BQU1JLGlCQUFpQjtRQUNyQlYsYUFBYSxDQUFDRDtRQUVkLElBQUlBLFdBQVc7WUFDYkkseUJBQXlCO1lBQ3pCTCxVQUFVO1FBQ1osT0FBT2E7SUFDVDtJQUVBLE1BQU1BLHlCQUF5QjtRQUM3QixNQUFNQyxlQUFlaEIsTUFBTWlCLE1BQU0sQ0FBQyxDQUFDQyxTQUFTQztZQUUxQyxNQUFNQyxXQUFXRCxLQUFLQyxRQUFRO1lBRTlCLElBQUksQ0FBQ0YsT0FBTyxDQUFDRSxTQUFTLEVBQUU7Z0JBQ3RCRixPQUFPLENBQUNFLFNBQVMsR0FBRyxFQUFFO1lBQ3hCO1lBQ0FGLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxJQUFJLENBQUNGO1lBQ3ZCLE9BQU9EO1FBQ1QsR0FBRyxDQUFDO1FBRUosTUFBTUksbUJBQW1CQyxPQUFPQyxJQUFJLENBQUNSLGNBQWNTLElBQUk7UUFFdkQsTUFBTW5CLHdCQUF3QmdCLGlCQUFpQkwsTUFBTSxDQUNuRCxDQUFDUyxRQUFRTjtZQUNQLE1BQU1PLHNCQUFzQlgsWUFBWSxDQUFDSSxTQUFTLENBQUNLLElBQUksQ0FBQyxDQUFDRyxHQUFHQyxJQUMxREQsRUFBRUUsSUFBSSxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLElBQUk7WUFFN0JKLE9BQU9MLElBQUksQ0FBQztnQkFBRUQ7Z0JBQVVwQixPQUFPMkI7WUFBb0I7WUFDbkQsT0FBT0Q7UUFDVCxHQUNBLEVBQUU7UUFHSm5CLHlCQUF5QkQ7SUFDM0I7SUFFQSxNQUFNMEIsY0FBYyxDQUFDSixHQUFHQztRQUN0QixJQUFJRCxFQUFFRSxJQUFJLEdBQUdELEVBQUVDLElBQUksRUFBRSxPQUFPO1FBQzVCLElBQUlGLEVBQUVFLElBQUksR0FBR0QsRUFBRUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUM3QixPQUFPO0lBQ1Q7SUFDQSxNQUFNRyxrQkFBa0IsQ0FBQ0wsR0FBR0M7UUFDMUIsSUFBSUQsRUFBRVIsUUFBUSxHQUFHUyxFQUFFVCxRQUFRLEVBQUUsT0FBTztRQUNwQyxJQUFJUSxFQUFFUixRQUFRLEdBQUdTLEVBQUVULFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDckMsT0FBTztJQUNUO0lBRUEsSUFBSW5CLFdBQVcsUUFDYkksWUFBWW9CLElBQUksQ0FBRSxDQUFDRyxHQUFHQyxJQUFNRyxZQUFZSixHQUFHQztTQUN4QyxJQUFJNUIsV0FBVyxZQUNsQkksWUFBWW9CLElBQUksQ0FBRSxDQUFDRyxHQUFHQyxJQUFNSSxnQkFBZ0JMLEdBQUdDO0lBRWpELHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNBOztvQkFDRTFCLGlCQUFpQixRQUFRO29CQUN6QkEsaUJBQWlCLFlBQVk7a0NBRTlCLDhEQUFDRzt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0M7a0NBRVJYLFlBQVksVUFBVTs7Ozs7Ozs7Ozs7OzBCQUszQiw4REFBQ2dDOzBCQTBCTzdCLHlCQUNBQSxzQkFBc0I4QixHQUFHLENBQUMsQ0FBQ2hCLHlCQUN6Qiw4REFBQ2lCOzswQ0FDQyw4REFBQ0M7Z0NBQUcxQixXQUFVOzBDQUFzQlEsU0FBU0EsUUFBUTs7Ozs7OzBDQUNyRCw4REFBQ2U7MENBQ0VmLFNBQVNwQixLQUFLLENBQUNvQyxHQUFHLENBQUMsQ0FBQ2pCLHFCQUNuQiw4REFBQ3JCLDZDQUFJQTt3Q0FFSGdDLE1BQU1YLEtBQUtXLElBQUk7d0NBQ2ZTLFVBQVVwQixLQUFLb0IsUUFBUTt3Q0FDdkJuQixVQUFVRCxLQUFLQyxRQUFRO3VDQUhsQkQsS0FBS3FCLEVBQUU7Ozs7Ozs7Ozs7O3VCQUxYcEIsU0FBU0EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQWtCMUM7R0FsSXdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlZWs2L2l0ZW0tbGlzdC5qcz85NTRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbUxpc3QoIHtpdGVtc30gKSB7XG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm5hbWVcIik7XG5cbiAgY29uc3QgW2lzR3JvdXBlZCwgc2V0SXNHcm91cGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc29ydGVkSXRlbXMgPSBbLi4uaXRlbXNdO1xuICBjb25zdCBbc29ydGVkQW5kR3JvdXBlZEl0ZW1zLCBzZXRTb3J0ZWRBbmRHcm91cGVkSXRlbXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgcmVuZGVyU29ydEJ1dHRvbiA9IChidXR0b25Tb3J0QnksIGxhYmVsKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1sLTQgbXQtNCB0ZXh0LWJsYWNrIGJnLW9yYW5nZS01MDAgcm91bmRlZCBob3ZlcjpiZy1vcmFuZ2UtNDAwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNvcnRCeShidXR0b25Tb3J0QnkpfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICBjb25zdCB0b2dnbGVHcm91cGluZyA9ICgpID0+IHtcbiAgICBzZXRJc0dyb3VwZWQoIWlzR3JvdXBlZCk7XG5cbiAgICBpZiAoaXNHcm91cGVkKSB7XG4gICAgICBzZXRTb3J0ZWRBbmRHcm91cGVkSXRlbXMobnVsbCk7XG4gICAgICBzZXRTb3J0QnkoXCJuYW1lXCIpO1xuICAgIH0gZWxzZSBncm91cEFuZFNvcnRCeUNhdGVnb3J5KCk7XG4gIH07XG5cbiAgY29uc3QgZ3JvdXBBbmRTb3J0QnlDYXRlZ29yeSA9ICgpID0+IHtcbiAgICBjb25zdCBncm91cGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGdyb3VwZWQsIGl0ZW0pID0+IHtcblxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBpdGVtLmNhdGVnb3J5O1xuXG4gICAgICBpZiAoIWdyb3VwZWRbY2F0ZWdvcnldKSB7XG4gICAgICAgIGdyb3VwZWRbY2F0ZWdvcnldID0gW107XG4gICAgICB9XG4gICAgICBncm91cGVkW2NhdGVnb3J5XS5wdXNoKGl0ZW0pO1xuICAgICAgcmV0dXJuIGdyb3VwZWQ7XG4gICAgfSwge30pO1xuXG4gICAgY29uc3Qgc29ydGVkQ2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRJdGVtcykuc29ydCgpO1xuXG4gICAgY29uc3Qgc29ydGVkQW5kR3JvdXBlZEl0ZW1zID0gc29ydGVkQ2F0ZWdvcmllcy5yZWR1Y2UoXG4gICAgICAoc29ydGVkLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ZWRDYXRlZ29yeUl0ZW1zID0gZ3JvdXBlZEl0ZW1zW2NhdGVnb3J5XS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcbiAgICAgICAgKTtcbiAgICAgICAgc29ydGVkLnB1c2goeyBjYXRlZ29yeSwgaXRlbXM6IHNvcnRlZENhdGVnb3J5SXRlbXMgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICB9LFxuICAgICAgW11cbiAgICApO1xuXG4gICAgc2V0U29ydGVkQW5kR3JvdXBlZEl0ZW1zKHNvcnRlZEFuZEdyb3VwZWRJdGVtcyk7XG4gIH07XG5cbiAgY29uc3QgbmFtZUNvbXBhcmUgPSAoYSwgYiApID0+IHtcbiAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBjb25zdCBjYXRlZ29yeUNvbXBhcmUgPSAoYSwgYiApID0+IHtcbiAgICBpZiAoYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkpIHJldHVybiAxO1xuICAgIGlmIChhLmNhdGVnb3J5IDwgYi5jYXRlZ29yeSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiAwXG4gIH1cblxuICBpZiAoc29ydEJ5ID09PSBcIm5hbWVcIilcbiAgICBzb3J0ZWRJdGVtcy5zb3J0KCAoYSwgYikgPT4gbmFtZUNvbXBhcmUoYSwgYikgKTtcbiAgZWxzZSBpZiAoc29ydEJ5ID09PSBcImNhdGVnb3J5XCIpXG4gICAgc29ydGVkSXRlbXMuc29ydCggKGEsIGIpID0+IGNhdGVnb3J5Q29tcGFyZShhLCBiKSApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZW5kZXJTb3J0QnV0dG9uKFwibmFtZVwiLCBcIlNvcnQgYnkgTmFtZVwiKX1cbiAgICAgICAge3JlbmRlclNvcnRCdXR0b24oXCJjYXRlZ29yeVwiLCBcIlNvcnQgYnkgQ2F0ZWdvcnlcIil9XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMiBtbC00IG10LTQgdGV4dC1ibGFjayBiZy1vcmFuZ2UtNTAwIHJvdW5kZWQgaG92ZXI6Ymctb3JhbmdlLTQwMFwiXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlR3JvdXBpbmd9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNHcm91cGVkID8gXCJSZXNldFwiIDogXCIgR3JvdXAgYnkgQ2F0ZWdvcnlcIn1cbiAgICAgICAgPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHsvKiB7c29ydGVkQW5kR3JvdXBlZEl0ZW1zXG4gICAgICAgICAgPyBzb3J0ZWRBbmRHcm91cGVkSXRlbXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5jYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgY2FwaXRhbGl6ZVwiPntjYXRlZ29yeS5jYXRlZ29yeX08L2gyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBzb3J0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzb3J0ZWRBbmRHcm91cGVkSXRlbXMgJiYgXG4gICAgICAgICAgICAgIHNvcnRlZEFuZEdyb3VwZWRJdGVtcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuY2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgY2FwaXRhbGl6ZVwiPntjYXRlZ29yeS5jYXRlZ29yeX08L2gyPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSXRlbSIsIkl0ZW1MaXN0IiwiaXRlbXMiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJpc0dyb3VwZWQiLCJzZXRJc0dyb3VwZWQiLCJzb3J0ZWRJdGVtcyIsInNvcnRlZEFuZEdyb3VwZWRJdGVtcyIsInNldFNvcnRlZEFuZEdyb3VwZWRJdGVtcyIsInJlbmRlclNvcnRCdXR0b24iLCJidXR0b25Tb3J0QnkiLCJsYWJlbCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0b2dnbGVHcm91cGluZyIsImdyb3VwQW5kU29ydEJ5Q2F0ZWdvcnkiLCJncm91cGVkSXRlbXMiLCJyZWR1Y2UiLCJncm91cGVkIiwiaXRlbSIsImNhdGVnb3J5IiwicHVzaCIsInNvcnRlZENhdGVnb3JpZXMiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInNvcnRlZCIsInNvcnRlZENhdGVnb3J5SXRlbXMiLCJhIiwiYiIsIm5hbWUiLCJsb2NhbGVDb21wYXJlIiwibmFtZUNvbXBhcmUiLCJjYXRlZ29yeUNvbXBhcmUiLCJkaXYiLCJ1bCIsIm1hcCIsImxpIiwiaDIiLCJxdWFudGl0eSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week6/item-list.js\n"));

/***/ })

});