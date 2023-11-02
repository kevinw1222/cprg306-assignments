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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week6/item.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ItemList(param) {\n    let { items } = param;\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const [isGrouped, setIsGrouped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sortedItems = [\n        ...items\n    ];\n    // const [sortedAndGroupedItems, setSortedAndGroupedItems] = useState(null);\n    const [groupedItems, setGroupedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const renderSortButton = (buttonSortBy, label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n            onClick: ()=>setSortBy(buttonSortBy),\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, this);\n    // useEffect(() => {\n    //   groupAndSortByCategory();\n    // }, [items]);\n    if (isGrouped) groupAndSortByCategory();\n    const toggleGrouping = ()=>{\n        setIsGrouped(!isGrouped);\n        if (isGrouped) {\n            setGroupedItems(null);\n            setSortBy(\"name\");\n        } else groupAndSortByCategory();\n    };\n    const groupAndSortByCategory = ()=>{\n        const groupedItems = items.reduce((accumulator, item)=>{\n            const category = item.category;\n            if (!accumulator[category]) accumulator[category] = [];\n            accumulator[category].push(item);\n            return accumulator;\n        }, {});\n        // const groupedItems = items.reduce((grouped, item) => {\n        //   const category = item.category;\n        //   if (!grouped[category]) {\n        //     grouped[category] = [];\n        //   }\n        //   grouped[category].push(item);\n        //   return grouped;\n        // }, {});\n        // const sortedCategories = Object.keys(groupedItems).sort();\n        // const sortedAndGroupedItems = sortedCategories.reduce(\n        //   (sorted, category) => {\n        //     const sortedCategoryItems = groupedItems[category].sort((a, b) => nameCompare(a, b));\n        //     sorted.push({ category, items: sortedCategoryItems });\n        //     return sorted;\n        //   },\n        //   []\n        // );\n        // setSortedAndGroupedItems(sortedAndGroupedItems);\n        setGroupedItems(groupedItems);\n    };\n    const nameCompare = (a, b)=>{\n        if (a.name > b.name) return 1;\n        if (a.name < b.name) return -1;\n        return 0;\n    };\n    const categoryCompare = (a, b)=>{\n        if (a.category > b.category) return 1;\n        if (a.category < b.category) return -1;\n        return 0;\n    };\n    if (sortBy === \"name\") sortedItems.sort((a, b)=>nameCompare(a, b));\n    else if (sortBy === \"category\") sortedItems.sort((a, b)=>categoryCompare(a, b));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    renderSortButton(\"name\", \"Sort by Name\"),\n                    renderSortButton(\"category\", \"Sort by Category\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n                        onClick: toggleGrouping,\n                        children: isGrouped ? \"Reset\" : \" Group by Category\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: isGrouped ? Object.keys(groupedItems).sort().map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg capitalize\",\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 107,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: groupedItems[category].sort((a, b)=>nameCompare(a, b)).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        name: item.name,\n                                        quantity: item.quantity,\n                                        category: item.category\n                                    }, item.id, false, {\n                                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 25\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                                lineNumber: 108,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, category, true, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this)) : sortedItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: item.name,\n                        quantity: item.quantity,\n                        category: item.category\n                    }, item.id, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 123,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"0w7SERwXky024jX31BIQPQAcDA0=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNQO0FBRVgsU0FBU0UsU0FBUyxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQy9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsY0FBYztXQUFJTDtLQUFNO0lBQzlCLDRFQUE0RTtJQUU1RSxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxELE1BQU1XLG1CQUFtQixDQUFDQyxjQUFjQyxzQkFDdEMsOERBQUNDO1lBQ0NDLFdBQVU7WUFDVkMsU0FBUyxJQUFNWCxVQUFVTztzQkFFeEJDOzs7Ozs7SUFJTCxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGVBQWU7SUFFZixJQUFJUCxXQUFXVztJQUVmLE1BQU1DLGlCQUFpQjtRQUNyQlgsYUFBYSxDQUFDRDtRQUVkLElBQUlBLFdBQVc7WUFDYkksZ0JBQWdCO1lBQ2hCTCxVQUFVO1FBQ1osT0FBT1k7SUFDVDtJQUVBLE1BQU1BLHlCQUF5QjtRQUM3QixNQUFNUixlQUFlTixNQUFNZ0IsTUFBTSxDQUFDLENBQUNDLGFBQWFDO1lBQzlDLE1BQU1DLFdBQVdELEtBQUtDLFFBQVE7WUFFOUIsSUFBSSxDQUFDRixXQUFXLENBQUNFLFNBQVMsRUFBRUYsV0FBVyxDQUFDRSxTQUFTLEdBQUcsRUFBRTtZQUN0REYsV0FBVyxDQUFDRSxTQUFTLENBQUNDLElBQUksQ0FBQ0Y7WUFFM0IsT0FBT0Q7UUFDVCxHQUFHLENBQUM7UUFDSix5REFBeUQ7UUFDekQsb0NBQW9DO1FBRXBDLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsTUFBTTtRQUNOLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIsVUFBVTtRQUVWLDZEQUE2RDtRQUU3RCx5REFBeUQ7UUFDekQsNEJBQTRCO1FBQzVCLDRGQUE0RjtRQUM1Riw2REFBNkQ7UUFDN0QscUJBQXFCO1FBQ3JCLE9BQU87UUFDUCxPQUFPO1FBQ1AsS0FBSztRQUNMLG1EQUFtRDtRQUVuRFYsZ0JBQWdCRDtJQUNsQjtJQUVBLE1BQU1lLGNBQWMsQ0FBQ0MsR0FBR0M7UUFDdEIsSUFBSUQsRUFBRUUsSUFBSSxHQUFHRCxFQUFFQyxJQUFJLEVBQUUsT0FBTztRQUM1QixJQUFJRixFQUFFRSxJQUFJLEdBQUdELEVBQUVDLElBQUksRUFBRSxPQUFPLENBQUM7UUFDN0IsT0FBTztJQUNUO0lBQ0EsTUFBTUMsa0JBQWtCLENBQUNILEdBQUdDO1FBQzFCLElBQUlELEVBQUVILFFBQVEsR0FBR0ksRUFBRUosUUFBUSxFQUFFLE9BQU87UUFDcEMsSUFBSUcsRUFBRUgsUUFBUSxHQUFHSSxFQUFFSixRQUFRLEVBQUUsT0FBTyxDQUFDO1FBQ3JDLE9BQU87SUFDVDtJQUVBLElBQUlsQixXQUFXLFFBQVFJLFlBQVlxQixJQUFJLENBQUMsQ0FBQ0osR0FBR0MsSUFBTUYsWUFBWUMsR0FBR0M7U0FDNUQsSUFBSXRCLFdBQVcsWUFDbEJJLFlBQVlxQixJQUFJLENBQUMsQ0FBQ0osR0FBR0MsSUFBTUUsZ0JBQWdCSCxHQUFHQztJQUVoRCxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQTs7b0JBQ0VuQixpQkFBaUIsUUFBUTtvQkFDekJBLGlCQUFpQixZQUFZO2tDQUU5Qiw4REFBQ0c7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNFO2tDQUVSWixZQUFZLFVBQVU7Ozs7Ozs7Ozs7OzswQkFJM0IsOERBQUN5QjswQkFDRXpCLFlBQ0cwQixPQUFPQyxJQUFJLENBQUN4QixjQUNUb0IsSUFBSSxHQUNKSyxHQUFHLENBQUMsQ0FBQ1oseUJBQ0osOERBQUNhOzswQ0FDQyw4REFBQ0M7Z0NBQUdyQixXQUFVOzBDQUFzQk87Ozs7OzswQ0FDcEMsOERBQUNTOzBDQUNFdEIsWUFBWSxDQUFDYSxTQUFTLENBQ3BCTyxJQUFJLENBQUMsQ0FBQ0osR0FBR0MsSUFBTUYsWUFBWUMsR0FBR0MsSUFDOUJRLEdBQUcsQ0FBQyxDQUFDYixxQkFDSiw4REFBQ3BCLDZDQUFJQTt3Q0FFSDBCLE1BQU1OLEtBQUtNLElBQUk7d0NBQ2ZVLFVBQVVoQixLQUFLZ0IsUUFBUTt3Q0FDdkJmLFVBQVVELEtBQUtDLFFBQVE7dUNBSGxCRCxLQUFLaUIsRUFBRTs7Ozs7Ozs7Ozs7dUJBUGJoQjs7OztnQ0FnQmJkLFlBQVkwQixHQUFHLENBQUMsQ0FBQ2IscUJBQ2YsOERBQUNwQiw2Q0FBSUE7d0JBRUgwQixNQUFNTixLQUFLTSxJQUFJO3dCQUNmVSxVQUFVaEIsS0FBS2dCLFFBQVE7d0JBQ3ZCZixVQUFVRCxLQUFLQyxRQUFRO3VCQUhsQkQsS0FBS2lCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQzVCO0dBM0p3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanM/OTU0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KHsgaXRlbXMgfSkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJuYW1lXCIpO1xuXG4gIGNvbnN0IFtpc0dyb3VwZWQsIHNldElzR3JvdXBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNvcnRlZEl0ZW1zID0gWy4uLml0ZW1zXTtcbiAgLy8gY29uc3QgW3NvcnRlZEFuZEdyb3VwZWRJdGVtcywgc2V0U29ydGVkQW5kR3JvdXBlZEl0ZW1zXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtncm91cGVkSXRlbXMsIHNldEdyb3VwZWRJdGVtc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgcmVuZGVyU29ydEJ1dHRvbiA9IChidXR0b25Tb3J0QnksIGxhYmVsKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1sLTQgbXQtNCB0ZXh0LWJsYWNrIGJnLW9yYW5nZS01MDAgcm91bmRlZCBob3ZlcjpiZy1vcmFuZ2UtNDAwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNvcnRCeShidXR0b25Tb3J0QnkpfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdyb3VwQW5kU29ydEJ5Q2F0ZWdvcnkoKTtcbiAgLy8gfSwgW2l0ZW1zXSk7XG5cbiAgaWYgKGlzR3JvdXBlZCkgZ3JvdXBBbmRTb3J0QnlDYXRlZ29yeSgpO1xuXG4gIGNvbnN0IHRvZ2dsZUdyb3VwaW5nID0gKCkgPT4ge1xuICAgIHNldElzR3JvdXBlZCghaXNHcm91cGVkKTtcblxuICAgIGlmIChpc0dyb3VwZWQpIHtcbiAgICAgIHNldEdyb3VwZWRJdGVtcyhudWxsKTtcbiAgICAgIHNldFNvcnRCeShcIm5hbWVcIik7XG4gICAgfSBlbHNlIGdyb3VwQW5kU29ydEJ5Q2F0ZWdvcnkoKTtcbiAgfTtcblxuICBjb25zdCBncm91cEFuZFNvcnRCeUNhdGVnb3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwZWRJdGVtcyA9IGl0ZW1zLnJlZHVjZSgoYWNjdW11bGF0b3IsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcblxuICAgICAgaWYgKCFhY2N1bXVsYXRvcltjYXRlZ29yeV0pIGFjY3VtdWxhdG9yW2NhdGVnb3J5XSA9IFtdO1xuICAgICAgYWNjdW11bGF0b3JbY2F0ZWdvcnldLnB1c2goaXRlbSk7XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCB7fSk7XG4gICAgLy8gY29uc3QgZ3JvdXBlZEl0ZW1zID0gaXRlbXMucmVkdWNlKChncm91cGVkLCBpdGVtKSA9PiB7XG4gICAgLy8gICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG5cbiAgICAvLyAgIGlmICghZ3JvdXBlZFtjYXRlZ29yeV0pIHtcbiAgICAvLyAgICAgZ3JvdXBlZFtjYXRlZ29yeV0gPSBbXTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGdyb3VwZWRbY2F0ZWdvcnldLnB1c2goaXRlbSk7XG4gICAgLy8gICByZXR1cm4gZ3JvdXBlZDtcbiAgICAvLyB9LCB7fSk7XG5cbiAgICAvLyBjb25zdCBzb3J0ZWRDYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZEl0ZW1zKS5zb3J0KCk7XG5cbiAgICAvLyBjb25zdCBzb3J0ZWRBbmRHcm91cGVkSXRlbXMgPSBzb3J0ZWRDYXRlZ29yaWVzLnJlZHVjZShcbiAgICAvLyAgIChzb3J0ZWQsIGNhdGVnb3J5KSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHNvcnRlZENhdGVnb3J5SXRlbXMgPSBncm91cGVkSXRlbXNbY2F0ZWdvcnldLnNvcnQoKGEsIGIpID0+IG5hbWVDb21wYXJlKGEsIGIpKTtcbiAgICAvLyAgICAgc29ydGVkLnB1c2goeyBjYXRlZ29yeSwgaXRlbXM6IHNvcnRlZENhdGVnb3J5SXRlbXMgfSk7XG4gICAgLy8gICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgLy8gICB9LFxuICAgIC8vICAgW11cbiAgICAvLyApO1xuICAgIC8vIHNldFNvcnRlZEFuZEdyb3VwZWRJdGVtcyhzb3J0ZWRBbmRHcm91cGVkSXRlbXMpO1xuXG4gICAgc2V0R3JvdXBlZEl0ZW1zKGdyb3VwZWRJdGVtcyk7XG4gIH07XG5cbiAgY29uc3QgbmFtZUNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHJldHVybiAtMTtcbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgY2F0ZWdvcnlDb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICBpZiAoYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkpIHJldHVybiAxO1xuICAgIGlmIChhLmNhdGVnb3J5IDwgYi5jYXRlZ29yeSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGlmIChzb3J0QnkgPT09IFwibmFtZVwiKSBzb3J0ZWRJdGVtcy5zb3J0KChhLCBiKSA9PiBuYW1lQ29tcGFyZShhLCBiKSk7XG4gIGVsc2UgaWYgKHNvcnRCeSA9PT0gXCJjYXRlZ29yeVwiKVxuICAgIHNvcnRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGNhdGVnb3J5Q29tcGFyZShhLCBiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3JlbmRlclNvcnRCdXR0b24oXCJuYW1lXCIsIFwiU29ydCBieSBOYW1lXCIpfVxuICAgICAgICB7cmVuZGVyU29ydEJ1dHRvbihcImNhdGVnb3J5XCIsIFwiU29ydCBieSBDYXRlZ29yeVwiKX1cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1sLTQgbXQtNCB0ZXh0LWJsYWNrIGJnLW9yYW5nZS01MDAgcm91bmRlZCBob3ZlcjpiZy1vcmFuZ2UtNDAwXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVHcm91cGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0dyb3VwZWQgPyBcIlJlc2V0XCIgOiBcIiBHcm91cCBieSBDYXRlZ29yeVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dWw+XG4gICAgICAgIHtpc0dyb3VwZWRcbiAgICAgICAgICA/IE9iamVjdC5rZXlzKGdyb3VwZWRJdGVtcylcbiAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGNhcGl0YWxpemVcIj57Y2F0ZWdvcnl9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2dyb3VwZWRJdGVtc1tjYXRlZ29yeV1cbiAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gbmFtZUNvbXBhcmUoYSwgYikpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBzb3J0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICB7LyogPHVsPlxuICAgICAgICB7c29ydGVkQW5kR3JvdXBlZEl0ZW1zXG4gICAgICAgICAgPyBzb3J0ZWRBbmRHcm91cGVkSXRlbXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5jYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgY2FwaXRhbGl6ZVwiPntjYXRlZ29yeS5jYXRlZ29yeX08L2gyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBzb3J0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L3VsPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkl0ZW0iLCJJdGVtTGlzdCIsIml0ZW1zIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNHcm91cGVkIiwic2V0SXNHcm91cGVkIiwic29ydGVkSXRlbXMiLCJncm91cGVkSXRlbXMiLCJzZXRHcm91cGVkSXRlbXMiLCJyZW5kZXJTb3J0QnV0dG9uIiwiYnV0dG9uU29ydEJ5IiwibGFiZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZ3JvdXBBbmRTb3J0QnlDYXRlZ29yeSIsInRvZ2dsZUdyb3VwaW5nIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwiY2F0ZWdvcnkiLCJwdXNoIiwibmFtZUNvbXBhcmUiLCJhIiwiYiIsIm5hbWUiLCJjYXRlZ29yeUNvbXBhcmUiLCJzb3J0IiwiZGl2IiwidWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGkiLCJoMiIsInF1YW50aXR5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week6/item-list.js\n"));

/***/ })

});