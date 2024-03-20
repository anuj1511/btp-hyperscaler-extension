"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/dashboard/page",{

/***/ "(app-pages-browser)/./app/_lib/data.tsx":
/*!***************************!*\
  !*** ./app/_lib/data.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewData: function() { return /* binding */ addNewData; },\n/* harmony export */   deleteData: function() { return /* binding */ deleteData; },\n/* harmony export */   editData: function() { return /* binding */ editData; },\n/* harmony export */   fetchTableData: function() { return /* binding */ fetchTableData; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst baseUrl = \"https://crud-app-backend.c-6826c17.kyma.ondemand.com\";\n// function to get data\nconst fetchTableData = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(baseUrl, \"/messages\"), {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const contentType = response.headers[\"content-type\"];\n        if (contentType && contentType.includes(\"application/json\")) {\n            const data = response.data;\n            console.log(\"fetched data\", data);\n            return data;\n        } else {\n            console.log(\"Response is not JSON, it's:\", response);\n            return [];\n        }\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n        return [];\n    }\n};\n// function to add new data\nconst addNewData = async (body)=>{\n    try {\n        console.log(\"this is the input body\", body);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(baseUrl, \"/messages\"), body, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        console.log(\"response: \", response);\n        if (response.status !== 200) {\n            throw new Error(\"Network response was not ok\");\n        } else {\n            console.log(\"Data added successfully!\");\n        }\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n    }\n};\n// function to edit data\nconst editData = async (body)=>{\n    try {\n        const { id, updatedMessage } = body;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"\".concat(baseUrl, \"/edit-message/\").concat(id), updatedMessage, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        console.log(\"response: \", response);\n        if (response.status !== 200) {\n            throw new Error(\"Network response was not ok\");\n        } else {\n            console.log(\"Data edited successfully!\");\n        }\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n    }\n};\n// function to delete data\nconst deleteData = async (body)=>{\n    try {\n        const response = await fetch(\"\".concat(baseUrl, \"/delete-message\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                body\n            })\n        });\n        console.log(\"response: \", response);\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        } else {\n            console.log(\"Data deleted successfully!\");\n        }\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yi9kYXRhLnRzeD82NmFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldGFpbHMgfSBmcm9tIFwiLi9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IHsgdW5zdGFibGVfbm9TdG9yZSBhcyBub1N0b3JlIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vY3J1ZC1hcHAtYmFja2VuZC5jLTY4MjZjMTcua3ltYS5vbmRlbWFuZC5jb21cIjtcblxuLy8gZnVuY3Rpb24gdG8gZ2V0IGRhdGFcbmV4cG9ydCBjb25zdCBmZXRjaFRhYmxlRGF0YSA9IGFzeW5jICgpOiBQcm9taXNlPERldGFpbHNbXT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L21lc3NhZ2VzYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddO1xuICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmNsdWRlcygnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGVkIGRhdGEnLCBkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgaXMgbm90IEpTT04sIGl0XFwnczonLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBuZXcgZGF0YVxuZXhwb3J0IGNvbnN0IGFkZE5ld0RhdGEgPSBhc3luYyAoYm9keTogRGV0YWlscykgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW5wdXQgYm9keVwiLCBib2R5KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9tZXNzYWdlc2AsIGJvZHksIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBhZGRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgfVxufTtcblxuLy8gZnVuY3Rpb24gdG8gZWRpdCBkYXRhXG5leHBvcnQgY29uc3QgZWRpdERhdGEgPSBhc3luYyAoYm9keToge1xuICBpZDogc3RyaW5nO1xuICB1cGRhdGVkTWVzc2FnZTogRGV0YWlscztcbn0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkLCB1cGRhdGVkTWVzc2FnZSB9ID0gYm9keTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke2Jhc2VVcmx9L2VkaXQtbWVzc2FnZS8ke2lkfWAsIHVwZGF0ZWRNZXNzYWdlLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZWRpdGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjpcIiwgZXJyb3IpO1xuICB9XG59O1xuXG4vLyBmdW5jdGlvbiB0byBkZWxldGUgZGF0YVxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAoYm9keTogYW55KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtiYXNlVXJsfS9kZWxldGUtbWVzc2FnZWAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBib2R5IH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZGVsZXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImJhc2VVcmwiLCJmZXRjaFRhYmxlRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsInN0YXR1cyIsIkVycm9yIiwiY29udGVudFR5cGUiLCJpbmNsdWRlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGROZXdEYXRhIiwiYm9keSIsInBvc3QiLCJlZGl0RGF0YSIsImlkIiwidXBkYXRlZE1lc3NhZ2UiLCJwdXQiLCJkZWxldGVEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_lib/data.tsx\n"));

/***/ })

});