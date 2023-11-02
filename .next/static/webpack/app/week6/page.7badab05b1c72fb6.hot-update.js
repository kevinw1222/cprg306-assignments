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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/week6/item.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ItemList(param) {\n    let { items } = param;\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\");\n    const [isGrouped, setIsGrouped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sortedItems = [\n        ...items\n    ];\n    // const [sortedAndGroupedItems, setSortedAndGroupedItems] = useState(null);\n    const [groupedItems, setGroupedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const renderSortButton = (buttonSortBy, label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n            onClick: ()=>setSortBy(buttonSortBy),\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, this);\n    const toggleGrouping = ()=>{\n        setIsGrouped(!isGrouped);\n        if (isGrouped) {\n            setSortedAndGroupedItems(null);\n            setSortBy(\"name\");\n        } else groupAndSortByCategory();\n    };\n    const groupAndSortByCategory = ()=>{\n        const groupedItems = items.reduce((accumulator, item)=>{\n            const category = item.category;\n            if (!accumulator[category]) accumulator[category] = [];\n            accumulator[category].push(item);\n            return accumulator;\n        }, {});\n        // const groupedItems = items.reduce((grouped, item) => {\n        //   const category = item.category;\n        //   if (!grouped[category]) {\n        //     grouped[category] = [];\n        //   }\n        //   grouped[category].push(item);\n        //   return grouped;\n        // }, {});\n        // const sortedCategories = Object.keys(groupedItems).sort();\n        // const sortedAndGroupedItems = sortedCategories.reduce(\n        //   (sorted, category) => {\n        //     const sortedCategoryItems = groupedItems[category].sort((a, b) => nameCompare(a, b));\n        //     sorted.push({ category, items: sortedCategoryItems });\n        //     return sorted;\n        //   },\n        //   []\n        // );\n        // setSortedAndGroupedItems(sortedAndGroupedItems);\n        setGroupedItems(groupedItems);\n    };\n    const nameCompare = (a, b)=>{\n        if (a.name > b.name) return 1;\n        if (a.name < b.name) return -1;\n        return 0;\n    };\n    const categoryCompare = (a, b)=>{\n        if (a.category > b.category) return 1;\n        if (a.category < b.category) return -1;\n        return 0;\n    };\n    if (sortBy === \"name\") sortedItems.sort((a, b)=>nameCompare(a, b));\n    else if (sortBy === \"category\") sortedItems.sort((a, b)=>categoryCompare(a, b));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    renderSortButton(\"name\", \"Sort by Name\"),\n                    renderSortButton(\"category\", \"Sort by Category\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400\",\n                        onClick: toggleGrouping,\n                        children: isGrouped ? \"Reset\" : \" Group by Category\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week6/item-list.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"0w7SERwXky024jX31BIQPQAcDA0=\");\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNi9pdGVtLWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNQO0FBRVgsU0FBU0UsU0FBUyxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQy9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsY0FBYztXQUFJTDtLQUFNO0lBQzlCLDRFQUE0RTtJQUU1RSxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxELE1BQU1XLG1CQUFtQixDQUFDQyxjQUFjQyxzQkFDdEMsOERBQUNDO1lBQ0NDLFdBQVU7WUFDVkMsU0FBUyxJQUFNWCxVQUFVTztzQkFFeEJDOzs7Ozs7SUFJTCxNQUFNSSxpQkFBaUI7UUFDckJWLGFBQWEsQ0FBQ0Q7UUFFZCxJQUFJQSxXQUFXO1lBQ2JZLHlCQUF5QjtZQUN6QmIsVUFBVTtRQUNaLE9BQU9jO0lBQ1Q7SUFFQSxNQUFNQSx5QkFBeUI7UUFDN0IsTUFBTVYsZUFBZU4sTUFBTWlCLE1BQU0sQ0FBQyxDQUFDQyxhQUFhQztZQUM5QyxNQUFNQyxXQUFXRCxLQUFLQyxRQUFRO1lBRTlCLElBQUksQ0FBQ0YsV0FBVyxDQUFDRSxTQUFTLEVBQUVGLFdBQVcsQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7WUFDdERGLFdBQVcsQ0FBQ0UsU0FBUyxDQUFDQyxJQUFJLENBQUNGO1lBRTNCLE9BQU9EO1FBQ1QsR0FBRyxDQUFDO1FBQ0oseURBQXlEO1FBQ3pELG9DQUFvQztRQUVwQyw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLE1BQU07UUFDTixrQ0FBa0M7UUFDbEMsb0JBQW9CO1FBQ3BCLFVBQVU7UUFFViw2REFBNkQ7UUFFN0QseURBQXlEO1FBQ3pELDRCQUE0QjtRQUM1Qiw0RkFBNEY7UUFDNUYsNkRBQTZEO1FBQzdELHFCQUFxQjtRQUNyQixPQUFPO1FBQ1AsT0FBTztRQUNQLEtBQUs7UUFDTCxtREFBbUQ7UUFFbkRYLGdCQUFnQkQ7SUFDbEI7SUFFQSxNQUFNZ0IsY0FBYyxDQUFDQyxHQUFHQztRQUN0QixJQUFJRCxFQUFFRSxJQUFJLEdBQUdELEVBQUVDLElBQUksRUFBRSxPQUFPO1FBQzVCLElBQUlGLEVBQUVFLElBQUksR0FBR0QsRUFBRUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUM3QixPQUFPO0lBQ1Q7SUFDQSxNQUFNQyxrQkFBa0IsQ0FBQ0gsR0FBR0M7UUFDMUIsSUFBSUQsRUFBRUgsUUFBUSxHQUFHSSxFQUFFSixRQUFRLEVBQUUsT0FBTztRQUNwQyxJQUFJRyxFQUFFSCxRQUFRLEdBQUdJLEVBQUVKLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDckMsT0FBTztJQUNUO0lBRUEsSUFBSW5CLFdBQVcsUUFBUUksWUFBWXNCLElBQUksQ0FBQyxDQUFDSixHQUFHQyxJQUFNRixZQUFZQyxHQUFHQztTQUM1RCxJQUFJdkIsV0FBVyxZQUNsQkksWUFBWXNCLElBQUksQ0FBQyxDQUFDSixHQUFHQyxJQUFNRSxnQkFBZ0JILEdBQUdDO0lBRWhELHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNBOztvQkFDRXBCLGlCQUFpQixRQUFRO29CQUN6QkEsaUJBQWlCLFlBQVk7a0NBRTlCLDhEQUFDRzt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0M7a0NBRVJYLFlBQVksVUFBVTs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQzBCOzs7Ozs7Ozs7OztBQThCUDtHQXhId0I5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd2VlazYvaXRlbS1saXN0LmpzPzk1NGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtTGlzdCh7IGl0ZW1zIH0pIHtcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKFwibmFtZVwiKTtcblxuICBjb25zdCBbaXNHcm91cGVkLCBzZXRJc0dyb3VwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzb3J0ZWRJdGVtcyA9IFsuLi5pdGVtc107XG4gIC8vIGNvbnN0IFtzb3J0ZWRBbmRHcm91cGVkSXRlbXMsIHNldFNvcnRlZEFuZEdyb3VwZWRJdGVtc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbZ3JvdXBlZEl0ZW1zLCBzZXRHcm91cGVkSXRlbXNdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IHJlbmRlclNvcnRCdXR0b24gPSAoYnV0dG9uU29ydEJ5LCBsYWJlbCkgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMiBtbC00IG10LTQgdGV4dC1ibGFjayBiZy1vcmFuZ2UtNTAwIHJvdW5kZWQgaG92ZXI6Ymctb3JhbmdlLTQwMFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0QnkoYnV0dG9uU29ydEJ5KX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlR3JvdXBpbmcgPSAoKSA9PiB7XG4gICAgc2V0SXNHcm91cGVkKCFpc0dyb3VwZWQpO1xuXG4gICAgaWYgKGlzR3JvdXBlZCkge1xuICAgICAgc2V0U29ydGVkQW5kR3JvdXBlZEl0ZW1zKG51bGwpO1xuICAgICAgc2V0U29ydEJ5KFwibmFtZVwiKTtcbiAgICB9IGVsc2UgZ3JvdXBBbmRTb3J0QnlDYXRlZ29yeSgpO1xuICB9O1xuXG4gIGNvbnN0IGdyb3VwQW5kU29ydEJ5Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gaXRlbXMucmVkdWNlKChhY2N1bXVsYXRvciwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBpdGVtLmNhdGVnb3J5O1xuXG4gICAgICBpZiAoIWFjY3VtdWxhdG9yW2NhdGVnb3J5XSkgYWNjdW11bGF0b3JbY2F0ZWdvcnldID0gW107XG4gICAgICBhY2N1bXVsYXRvcltjYXRlZ29yeV0ucHVzaChpdGVtKTtcblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sIHt9KTtcbiAgICAvLyBjb25zdCBncm91cGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGdyb3VwZWQsIGl0ZW0pID0+IHtcbiAgICAvLyAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcblxuICAgIC8vICAgaWYgKCFncm91cGVkW2NhdGVnb3J5XSkge1xuICAgIC8vICAgICBncm91cGVkW2NhdGVnb3J5XSA9IFtdO1xuICAgIC8vICAgfVxuICAgIC8vICAgZ3JvdXBlZFtjYXRlZ29yeV0ucHVzaChpdGVtKTtcbiAgICAvLyAgIHJldHVybiBncm91cGVkO1xuICAgIC8vIH0sIHt9KTtcblxuICAgIC8vIGNvbnN0IHNvcnRlZENhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhncm91cGVkSXRlbXMpLnNvcnQoKTtcblxuICAgIC8vIGNvbnN0IHNvcnRlZEFuZEdyb3VwZWRJdGVtcyA9IHNvcnRlZENhdGVnb3JpZXMucmVkdWNlKFxuICAgIC8vICAgKHNvcnRlZCwgY2F0ZWdvcnkpID0+IHtcbiAgICAvLyAgICAgY29uc3Qgc29ydGVkQ2F0ZWdvcnlJdGVtcyA9IGdyb3VwZWRJdGVtc1tjYXRlZ29yeV0uc29ydCgoYSwgYikgPT4gbmFtZUNvbXBhcmUoYSwgYikpO1xuICAgIC8vICAgICBzb3J0ZWQucHVzaCh7IGNhdGVnb3J5LCBpdGVtczogc29ydGVkQ2F0ZWdvcnlJdGVtcyB9KTtcbiAgICAvLyAgICAgcmV0dXJuIHNvcnRlZDtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBbXVxuICAgIC8vICk7XG4gICAgLy8gc2V0U29ydGVkQW5kR3JvdXBlZEl0ZW1zKHNvcnRlZEFuZEdyb3VwZWRJdGVtcyk7XG5cbiAgICBzZXRHcm91cGVkSXRlbXMoZ3JvdXBlZEl0ZW1zKTtcbiAgfTtcblxuICBjb25zdCBuYW1lQ29tcGFyZSA9IChhLCBiKSA9PiB7XG4gICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiAwO1xuICB9O1xuICBjb25zdCBjYXRlZ29yeUNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSkgcmV0dXJuIDE7XG4gICAgaWYgKGEuY2F0ZWdvcnkgPCBiLmNhdGVnb3J5KSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgaWYgKHNvcnRCeSA9PT0gXCJuYW1lXCIpIHNvcnRlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IG5hbWVDb21wYXJlKGEsIGIpKTtcbiAgZWxzZSBpZiAoc29ydEJ5ID09PSBcImNhdGVnb3J5XCIpXG4gICAgc29ydGVkSXRlbXMuc29ydCgoYSwgYikgPT4gY2F0ZWdvcnlDb21wYXJlKGEsIGIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVuZGVyU29ydEJ1dHRvbihcIm5hbWVcIiwgXCJTb3J0IGJ5IE5hbWVcIil9XG4gICAgICAgIHtyZW5kZXJTb3J0QnV0dG9uKFwiY2F0ZWdvcnlcIiwgXCJTb3J0IGJ5IENhdGVnb3J5XCIpfVxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTIgbWwtNCBtdC00IHRleHQtYmxhY2sgYmctb3JhbmdlLTUwMCByb3VuZGVkIGhvdmVyOmJnLW9yYW5nZS00MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUdyb3VwaW5nfVxuICAgICAgICA+XG4gICAgICAgICAge2lzR3JvdXBlZCA/IFwiUmVzZXRcIiA6IFwiIEdyb3VwIGJ5IENhdGVnb3J5XCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bD48L3VsPlxuXG4gICAgICB7LyogPHVsPlxuICAgICAgICB7c29ydGVkQW5kR3JvdXBlZEl0ZW1zXG4gICAgICAgICAgPyBzb3J0ZWRBbmRHcm91cGVkSXRlbXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5jYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgY2FwaXRhbGl6ZVwiPntjYXRlZ29yeS5jYXRlZ29yeX08L2gyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBzb3J0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L3VsPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkl0ZW0iLCJJdGVtTGlzdCIsIml0ZW1zIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNHcm91cGVkIiwic2V0SXNHcm91cGVkIiwic29ydGVkSXRlbXMiLCJncm91cGVkSXRlbXMiLCJzZXRHcm91cGVkSXRlbXMiLCJyZW5kZXJTb3J0QnV0dG9uIiwiYnV0dG9uU29ydEJ5IiwibGFiZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidG9nZ2xlR3JvdXBpbmciLCJzZXRTb3J0ZWRBbmRHcm91cGVkSXRlbXMiLCJncm91cEFuZFNvcnRCeUNhdGVnb3J5IiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwiY2F0ZWdvcnkiLCJwdXNoIiwibmFtZUNvbXBhcmUiLCJhIiwiYiIsIm5hbWUiLCJjYXRlZ29yeUNvbXBhcmUiLCJzb3J0IiwiZGl2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week6/item-list.js\n"));

/***/ })

});