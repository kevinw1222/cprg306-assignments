"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/week4/page",{

/***/ "(app-pages-browser)/./app/week4/new-item.js":
/*!*******************************!*\
  !*** ./app/week4/new-item.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewEvent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction NewEvent() {\n    _s();\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Produce\");\n    const [eventCreated, setEventCreated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const newEvent = {\n            itemName,\n            quantity,\n            category\n        };\n        console.log(newEvent);\n        setEventCreated(true);\n        setItemName(\"\");\n        setQuantity(1);\n        setCategory(\"Produce\");\n    };\n    const handleItemNameChange = (event)=>{\n        setItemName(event.target.value);\n    };\n    const handleQuantity = (event)=>{\n        setQuantity(event.target.value);\n    };\n    const handleCategory = (event)=>{\n        setCategory(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen bg-blue-gray-100 flex items-center justify-center\",\n            children: [\n                eventCreated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 mt-8 text-2xl text-yellow-400\",\n                    children: \"Event Created\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-md bg-white p-8 rounded-lg shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl text-gray-800 font-bold mb-8\",\n                            children: \"Item Reminder\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-800\",\n                                            children: \"Item Name:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            required: true,\n                                            onChange: handleItemNameChange,\n                                            value: itemName,\n                                            className: \"mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-800\",\n                                            children: \"Quantity:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            required: true,\n                                            onChange: handleQuantity,\n                                            value: quantity,\n                                            className: \"mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-4 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-800\",\n                                            children: \"Category:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            required: true,\n                                            onChange: handleCategory,\n                                            value: category,\n                                            className: \"mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"\",\n                                                    disabled: true,\n                                                    hidden: true,\n                                                    children: \"Select a category\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"produce\",\n                                                    children: \"Produce\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"diary\",\n                                                    children: \"Dairy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"bakery\",\n                                                    children: \"Bakery\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"meat\",\n                                                    children: \"Meat\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"bakery\",\n                                                    children: \"Bakery\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white\",\n                                    children: \"Commit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kevin1222/Desktop/SAIT/202309_Fall/CPRG-306-F_WebDev2/cprg306-assignments/app/week4/new-item.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(NewEvent, \"Cf3ytBRxM1Y+8D5GS0Vu/+Wk4Lg=\");\n_c = NewEvent;\nvar _c;\n$RefreshReg$(_c, \"NewEvent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrNC9uZXctaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsV0FBVztZQUNmWDtZQUNBRTtZQUNBRTtRQUNGO1FBQ0FRLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWkosZ0JBQWdCO1FBRWhCTixZQUFZO1FBQ1pFLFlBQVk7UUFDWkUsWUFBWTtJQUNkO0lBRUEsTUFBTVMsdUJBQXVCLENBQUNMO1FBQzVCUixZQUFZUSxNQUFNTSxNQUFNLENBQUNDLEtBQUs7SUFDaEM7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ1I7UUFDdEJOLFlBQVlNLE1BQU1NLE1BQU0sQ0FBQ0MsS0FBSztJQUNoQztJQUVBLE1BQU1FLGlCQUFpQixDQUFDVDtRQUN0QkosWUFBWUksTUFBTU0sTUFBTSxDQUFDQyxLQUFLO0lBQ2hDO0lBRUEscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVOztnQkFDWmYsOEJBQ0MsOERBQUNjO29CQUFJQyxXQUFVOzhCQUErQzs7Ozs7OzhCQUloRSw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBd0M7Ozs7OztzQ0FHdEQsOERBQUNFOzRCQUFLQyxVQUFVaEI7OzhDQUNkLDhEQUFDaUI7b0NBQU1KLFdBQVU7O3NEQUNmLDhEQUFDSzs0Q0FBS0wsV0FBVTtzREFBZ0I7Ozs7OztzREFDaEMsOERBQUNNOzRDQUNDQyxRQUFROzRDQUNSQyxVQUFVZjs0Q0FDVkUsT0FBT2hCOzRDQUNQcUIsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUlkLDhEQUFDSTtvQ0FBTUosV0FBVTs7c0RBQ2YsOERBQUNLOzRDQUFLTCxXQUFVO3NEQUFnQjs7Ozs7O3NEQUNoQyw4REFBQ007NENBQ0NHLE1BQUs7NENBQ0xGLFFBQVE7NENBQ1JDLFVBQVVaOzRDQUNWRCxPQUFPZDs0Q0FDUG1CLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FJZCw4REFBQ0k7b0NBQU1KLFdBQVU7O3NEQUNmLDhEQUFDSzs0Q0FBS0wsV0FBVTtzREFBZ0I7Ozs7OztzREFDaEMsOERBQUNVOzRDQUNDSCxRQUFROzRDQUNSQyxVQUFVWDs0Q0FDVkYsT0FBT1o7NENBQ1BpQixXQUFVOzs4REFFViw4REFBQ1c7b0RBQU9oQixPQUFNO29EQUFHaUIsUUFBUTtvREFBQ0MsTUFBTTs4REFBQzs7Ozs7OzhEQUdqQyw4REFBQ0Y7b0RBQU9oQixPQUFNOzhEQUFVOzs7Ozs7OERBQ3hCLDhEQUFDZ0I7b0RBQU9oQixPQUFNOzhEQUFROzs7Ozs7OERBQ3RCLDhEQUFDZ0I7b0RBQU9oQixPQUFNOzhEQUFTOzs7Ozs7OERBQ3ZCLDhEQUFDZ0I7b0RBQU9oQixPQUFNOzhEQUFPOzs7Ozs7OERBQ3JCLDhEQUFDZ0I7b0RBQU9oQixPQUFNOzhEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSTNCLDhEQUFDbUI7b0NBQ0NMLE1BQUs7b0NBQ0xULFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FuR3dCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlZWs0L25ldy1pdGVtLmpzP2ZiODciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0V2ZW50KCkge1xuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiUHJvZHVjZVwiKTtcbiAgY29uc3QgW2V2ZW50Q3JlYXRlZCwgc2V0RXZlbnRDcmVhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbmV3RXZlbnQgPSB7XG4gICAgICBpdGVtTmFtZSxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgY2F0ZWdvcnksXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhuZXdFdmVudCk7XG5cbiAgICBzZXRFdmVudENyZWF0ZWQodHJ1ZSk7XG5cbiAgICBzZXRJdGVtTmFtZShcIlwiKTtcbiAgICBzZXRRdWFudGl0eSgxKTtcbiAgICBzZXRDYXRlZ29yeShcIlByb2R1Y2VcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSXRlbU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJdGVtTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVF1YW50aXR5ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UXVhbnRpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeSA9IChldmVudCkgPT4ge1xuICAgIHNldENhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJsdWUtZ3JheS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAge2V2ZW50Q3JlYXRlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBtdC04IHRleHQtMnhsIHRleHQteWVsbG93LTQwMFwiPlxuICAgICAgICAgICAgRXZlbnQgQ3JlYXRlZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgbWItOFwiPlxuICAgICAgICAgICAgSXRlbSBSZW1pbmRlclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwXCI+SXRlbSBOYW1lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSXRlbU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1OYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIHRleHQtYmxhY2sgYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMFwiPlF1YW50aXR5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIHRleHQtYmxhY2sgYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTQgXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDBcIj5DYXRlZ29yeTo8L3NwYW4+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgdGV4dC1ibGFjayBiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgaGlkZGVuPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IGEgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJvZHVjZVwiPlByb2R1Y2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGlhcnlcIj5EYWlyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYWtlcnlcIj5CYWtlcnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVhdFwiPk1lYXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFrZXJ5XCI+QmFrZXJ5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgcHgtNCBiZy1za3ktNjAwIGhvdmVyOmJnLXNreS01MDAgcm91bmRlZC1tZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29tbWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTmV3RXZlbnQiLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJldmVudENyZWF0ZWQiLCJzZXRFdmVudENyZWF0ZWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSXRlbU5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVF1YW50aXR5IiwiaGFuZGxlQ2F0ZWdvcnkiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInNwYW4iLCJpbnB1dCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJ0eXBlIiwic2VsZWN0Iiwib3B0aW9uIiwiZGlzYWJsZWQiLCJoaWRkZW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week4/new-item.js\n"));

/***/ })

});