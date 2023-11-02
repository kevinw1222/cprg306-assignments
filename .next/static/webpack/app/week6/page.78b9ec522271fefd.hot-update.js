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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week6/item.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ItemList(param) {\n    let { items } = param;\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const [isGrouped, setIsGrouped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sortedItems = [\n        ...items\n    ];\n    const [sortedAndGroupedItems, setSortedAndGroupedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const renderSortButton = (buttonSortBy, label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n            onClick: ()=>setSortBy(buttonSortBy),\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, this);\n    const toggleGrouping = ()=>{\n        setIsGrouped(!isGrouped);\n        if (isGrouped) {\n            setSortedAndGroupedItems(null);\n            setSortBy(\"name\");\n        } else groupAndSortByCategory();\n    };\n    const groupAndSortByCategory = ()=>{\n        const groupedItems = items.reduce((grouped, item)=>{\n            const category = item.category;\n            if (!grouped[category]) {\n                grouped[category] = [];\n            }\n            grouped[category].push(item);\n            return grouped;\n        }, {});\n        const sortedCategories = Object.keys(groupedItems).sort();\n        const sortedAndGroupedItems = sortedCategories.reduce((sorted, category)=>{\n            const sortedCategoryItems = groupedItems[category].sort((a, b)=>a.name.localeCompare(b.name));\n            sorted.push({\n                category,\n                items: sortedCategoryItems\n            });\n            return sorted;\n        }, []);\n        setSortedAndGroupedItems(sortedAndGroupedItems);\n    };\n    const nameCompare = (a, b)=>{\n        if (a.name > b.name) return 1;\n        if (a.name < b.name) return -1;\n        return 0;\n    };\n    const categoryCompare = (a, b)=>{\n        if (a.category > b.category) return 1;\n        if (a.category < b.category) return -1;\n        return 0;\n    };\n    if (sortBy === \"name\") sortedItems.sort((a, b)=>nameCompare(a, b));\n    else if (sortBy === \"category\") sortedItems.sort((a, b)=>categoryCompare(a, b));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    renderSortButton(\"name\", \"Sort by Name\"),\n                    renderSortButton(\"category\", \"Sort by Category\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n                        onClick: toggleGrouping,\n                        children: isGrouped ? \"Reset\" : \" Group by Category\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: sortedAndGroupedItems ? sortedAndGroupedItems.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg capitalize\",\n                                children: category.category\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: category.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        name: item.name,\n                                        quantity: item.quantity,\n                                        category: item.category\n                                    }, item.id, false, {\n                                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.category, true, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 91,\n                        columnNumber: 15\n                    }, this)) : sortedItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: item.name,\n                        quantity: item.quantity,\n                        category: item.category\n                    }, item.id, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 106,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"gMVLaQUpydW4MrlY6eird4R82qo=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNQO0FBRVgsU0FBU0UsU0FBVSxLQUFPO1FBQVAsRUFBQ0MsS0FBSyxFQUFDLEdBQVA7O0lBQ2hDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsY0FBYztXQUFJTDtLQUFNO0lBQzlCLE1BQU0sQ0FBQ00sdUJBQXVCQyx5QkFBeUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkUsTUFBTVcsbUJBQW1CLENBQUNDLGNBQWNDLHNCQUN0Qyw4REFBQ0M7WUFDQ0MsV0FBVTtZQUNWQyxTQUFTLElBQU1YLFVBQVVPO3NCQUV4QkM7Ozs7OztJQUlMLE1BQU1JLGlCQUFpQjtRQUNyQlYsYUFBYSxDQUFDRDtRQUVkLElBQUlBLFdBQVc7WUFDYkkseUJBQXlCO1lBQ3pCTCxVQUFVO1FBQ1osT0FBT2E7SUFDVDtJQUVBLE1BQU1BLHlCQUF5QjtRQUM3QixNQUFNQyxlQUFlaEIsTUFBTWlCLE1BQU0sQ0FBQyxDQUFDQyxTQUFTQztZQUUxQyxNQUFNQyxXQUFXRCxLQUFLQyxRQUFRO1lBRTlCLElBQUksQ0FBQ0YsT0FBTyxDQUFDRSxTQUFTLEVBQUU7Z0JBQ3RCRixPQUFPLENBQUNFLFNBQVMsR0FBRyxFQUFFO1lBQ3hCO1lBQ0FGLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxJQUFJLENBQUNGO1lBQ3ZCLE9BQU9EO1FBQ1QsR0FBRyxDQUFDO1FBRUosTUFBTUksbUJBQW1CQyxPQUFPQyxJQUFJLENBQUNSLGNBQWNTLElBQUk7UUFFdkQsTUFBTW5CLHdCQUF3QmdCLGlCQUFpQkwsTUFBTSxDQUNuRCxDQUFDUyxRQUFRTjtZQUNQLE1BQU1PLHNCQUFzQlgsWUFBWSxDQUFDSSxTQUFTLENBQUNLLElBQUksQ0FBQyxDQUFDRyxHQUFHQyxJQUMxREQsRUFBRUUsSUFBSSxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLElBQUk7WUFFN0JKLE9BQU9MLElBQUksQ0FBQztnQkFBRUQ7Z0JBQVVwQixPQUFPMkI7WUFBb0I7WUFDbkQsT0FBT0Q7UUFDVCxHQUNBLEVBQUU7UUFFSm5CLHlCQUF5QkQ7SUFDM0I7SUFFQSxNQUFNMEIsY0FBYyxDQUFDSixHQUFHQztRQUN0QixJQUFJRCxFQUFFRSxJQUFJLEdBQUdELEVBQUVDLElBQUksRUFBRSxPQUFPO1FBQzVCLElBQUlGLEVBQUVFLElBQUksR0FBR0QsRUFBRUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUM3QixPQUFPO0lBQ1Q7SUFDQSxNQUFNRyxrQkFBa0IsQ0FBQ0wsR0FBR0M7UUFDMUIsSUFBSUQsRUFBRVIsUUFBUSxHQUFHUyxFQUFFVCxRQUFRLEVBQUUsT0FBTztRQUNwQyxJQUFJUSxFQUFFUixRQUFRLEdBQUdTLEVBQUVULFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDckMsT0FBTztJQUNUO0lBRUEsSUFBSW5CLFdBQVcsUUFDYkksWUFBWW9CLElBQUksQ0FBRSxDQUFDRyxHQUFHQyxJQUFNRyxZQUFZSixHQUFHQztTQUN4QyxJQUFJNUIsV0FBVyxZQUNsQkksWUFBWW9CLElBQUksQ0FBRSxDQUFDRyxHQUFHQyxJQUFNSSxnQkFBZ0JMLEdBQUdDO0lBRWpELHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNBOztvQkFDRTFCLGlCQUFpQixRQUFRO29CQUN6QkEsaUJBQWlCLFlBQVk7a0NBRTlCLDhEQUFDRzt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0M7a0NBRVJYLFlBQVksVUFBVTs7Ozs7Ozs7Ozs7OzBCQUszQiw4REFBQ2dDOzBCQUNFN0Isd0JBQ0dBLHNCQUFzQjhCLEdBQUcsQ0FBQyxDQUFDaEIseUJBQ3pCLDhEQUFDaUI7OzBDQUNDLDhEQUFDQztnQ0FBRzFCLFdBQVU7MENBQXNCUSxTQUFTQSxRQUFROzs7Ozs7MENBQ3JELDhEQUFDZTswQ0FDRWYsU0FBU3BCLEtBQUssQ0FBQ29DLEdBQUcsQ0FBQyxDQUFDakIscUJBQ25CLDhEQUFDckIsNkNBQUlBO3dDQUVIZ0MsTUFBTVgsS0FBS1csSUFBSTt3Q0FDZlMsVUFBVXBCLEtBQUtvQixRQUFRO3dDQUN2Qm5CLFVBQVVELEtBQUtDLFFBQVE7dUNBSGxCRCxLQUFLcUIsRUFBRTs7Ozs7Ozs7Ozs7dUJBTFhwQixTQUFTQSxRQUFROzs7O2dDQWM1QmYsWUFBWStCLEdBQUcsQ0FBQyxDQUFDakIscUJBQ2YsOERBQUNyQiw2Q0FBSUE7d0JBRUhnQyxNQUFNWCxLQUFLVyxJQUFJO3dCQUNmUyxVQUFVcEIsS0FBS29CLFFBQVE7d0JBQ3ZCbkIsVUFBVUQsS0FBS0MsUUFBUTt1QkFIbEJELEtBQUtxQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzVCO0dBL0d3QnpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanM/OTU0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KCB7aXRlbXN9ICkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xuXG4gIGNvbnN0IFtpc0dyb3VwZWQsIHNldElzR3JvdXBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvcnRlZEl0ZW1zID0gWy4uLml0ZW1zXTtcbiAgY29uc3QgW3NvcnRlZEFuZEdyb3VwZWRJdGVtcywgc2V0U29ydGVkQW5kR3JvdXBlZEl0ZW1zXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJlbmRlclNvcnRCdXR0b24gPSAoYnV0dG9uU29ydEJ5LCBsYWJlbCkgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMiBtbC00IG10LTQgdGV4dC1ibGFjayBiZy1vcmFuZ2UtNTAwIHJvdW5kZWQgaG92ZXI6Ymctb3JhbmdlLTQwMFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0QnkoYnV0dG9uU29ydEJ5KX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlR3JvdXBpbmcgPSAoKSA9PiB7XG4gICAgc2V0SXNHcm91cGVkKCFpc0dyb3VwZWQpO1xuXG4gICAgaWYgKGlzR3JvdXBlZCkge1xuICAgICAgc2V0U29ydGVkQW5kR3JvdXBlZEl0ZW1zKG51bGwpO1xuICAgICAgc2V0U29ydEJ5KFwibmFtZVwiKTtcbiAgICB9IGVsc2UgZ3JvdXBBbmRTb3J0QnlDYXRlZ29yeSgpO1xuICB9O1xuXG4gIGNvbnN0IGdyb3VwQW5kU29ydEJ5Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gaXRlbXMucmVkdWNlKChncm91cGVkLCBpdGVtKSA9PiB7XG5cbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcblxuICAgICAgaWYgKCFncm91cGVkW2NhdGVnb3J5XSkge1xuICAgICAgICBncm91cGVkW2NhdGVnb3J5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBlZFtjYXRlZ29yeV0ucHVzaChpdGVtKTtcbiAgICAgIHJldHVybiBncm91cGVkO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IHNvcnRlZENhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhncm91cGVkSXRlbXMpLnNvcnQoKTtcblxuICAgIGNvbnN0IHNvcnRlZEFuZEdyb3VwZWRJdGVtcyA9IHNvcnRlZENhdGVnb3JpZXMucmVkdWNlKFxuICAgICAgKHNvcnRlZCwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkQ2F0ZWdvcnlJdGVtcyA9IGdyb3VwZWRJdGVtc1tjYXRlZ29yeV0uc29ydCgoYSwgYikgPT5cbiAgICAgICAgICBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpXG4gICAgICAgICk7XG4gICAgICAgIHNvcnRlZC5wdXNoKHsgY2F0ZWdvcnksIGl0ZW1zOiBzb3J0ZWRDYXRlZ29yeUl0ZW1zIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkO1xuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKTtcbiAgICBzZXRTb3J0ZWRBbmRHcm91cGVkSXRlbXMoc29ydGVkQW5kR3JvdXBlZEl0ZW1zKTtcbiAgfTtcblxuICBjb25zdCBuYW1lQ29tcGFyZSA9IChhLCBiICkgPT4ge1xuICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHJldHVybiAtMTtcbiAgICByZXR1cm4gMFxuICB9XG4gIGNvbnN0IGNhdGVnb3J5Q29tcGFyZSA9IChhLCBiICkgPT4ge1xuICAgIGlmIChhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSkgcmV0dXJuIDE7XG4gICAgaWYgKGEuY2F0ZWdvcnkgPCBiLmNhdGVnb3J5KSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGlmIChzb3J0QnkgPT09IFwibmFtZVwiKVxuICAgIHNvcnRlZEl0ZW1zLnNvcnQoIChhLCBiKSA9PiBuYW1lQ29tcGFyZShhLCBiKSApO1xuICBlbHNlIGlmIChzb3J0QnkgPT09IFwiY2F0ZWdvcnlcIilcbiAgICBzb3J0ZWRJdGVtcy5zb3J0KCAoYSwgYikgPT4gY2F0ZWdvcnlDb21wYXJlKGEsIGIpICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3JlbmRlclNvcnRCdXR0b24oXCJuYW1lXCIsIFwiU29ydCBieSBOYW1lXCIpfVxuICAgICAgICB7cmVuZGVyU29ydEJ1dHRvbihcImNhdGVnb3J5XCIsIFwiU29ydCBieSBDYXRlZ29yeVwiKX1cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1sLTQgbXQtNCB0ZXh0LWJsYWNrIGJnLW9yYW5nZS01MDAgcm91bmRlZCBob3ZlcjpiZy1vcmFuZ2UtNDAwXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVHcm91cGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0dyb3VwZWQgPyBcIlJlc2V0XCIgOiBcIiBHcm91cCBieSBDYXRlZ29yeVwifVxuICAgICAgICA8L2J1dHRvbj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3NvcnRlZEFuZEdyb3VwZWRJdGVtc1xuICAgICAgICAgID8gc29ydGVkQW5kR3JvdXBlZEl0ZW1zLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuY2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNhcGl0YWxpemVcIj57Y2F0ZWdvcnkuY2F0ZWdvcnl9PC9oMj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eT17aXRlbS5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogc29ydGVkSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBxdWFudGl0eT17aXRlbS5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkl0ZW0iLCJJdGVtTGlzdCIsIml0ZW1zIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNHcm91cGVkIiwic2V0SXNHcm91cGVkIiwic29ydGVkSXRlbXMiLCJzb3J0ZWRBbmRHcm91cGVkSXRlbXMiLCJzZXRTb3J0ZWRBbmRHcm91cGVkSXRlbXMiLCJyZW5kZXJTb3J0QnV0dG9uIiwiYnV0dG9uU29ydEJ5IiwibGFiZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidG9nZ2xlR3JvdXBpbmciLCJncm91cEFuZFNvcnRCeUNhdGVnb3J5IiwiZ3JvdXBlZEl0ZW1zIiwicmVkdWNlIiwiZ3JvdXBlZCIsIml0ZW0iLCJjYXRlZ29yeSIsInB1c2giLCJzb3J0ZWRDYXRlZ29yaWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzb3J0ZWQiLCJzb3J0ZWRDYXRlZ29yeUl0ZW1zIiwiYSIsImIiLCJuYW1lIiwibG9jYWxlQ29tcGFyZSIsIm5hbWVDb21wYXJlIiwiY2F0ZWdvcnlDb21wYXJlIiwiZGl2IiwidWwiLCJtYXAiLCJsaSIsImgyIiwicXVhbnRpdHkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week6/item-list.js\n"));

/***/ })

});