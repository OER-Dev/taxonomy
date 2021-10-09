"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/topix";
exports.ids = ["pages/api/topix"];
exports.modules = {

/***/ "./pages/api/topix/index.js":
/*!**********************************!*\
  !*** ./pages/api/topix/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _topix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../topix */ \"./topix.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_topix__WEBPACK_IMPORTED_MODULE_0__.topix);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9waXgvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN0Q0EsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLHlDQUFyQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3RvcGl4L2luZGV4LmpzPzQwYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9waXggfSBmcm9tICcuLi8uLi8uLi90b3BpeCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvcGl4KVxufSJdLCJuYW1lcyI6WyJ0b3BpeCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/topix/index.js\n");

/***/ }),

/***/ "./topix.js":
/*!******************!*\
  !*** ./topix.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"topix\": () => (/* binding */ topix)\n/* harmony export */ });\nconst topix = [{\n  \"language\": \"en\",\n  \"order\": 0,\n  \"mainTopic\": \"math\",\n  \"mainTopicTitle\": \"Early Math\",\n  \"topic\": \"counting\",\n  \"topicTitle\": \"Counting\",\n  \"illustration\": \"url\",\n  \"badge\": \"url\",\n  \"points\": 100,\n  \"levelUp\": \"https://obione.io/game/counting-10/?play=1\"\n}, {\n  \"language\": \"en\",\n  \"order\": 1,\n  \"mainTopic\": \"math\",\n  \"mainTopicTitle\": \"Early Math\",\n  \"topic\": \"counting-in-order\",\n  \"topicTitle\": \"Counting in order\",\n  \"illustration\": \"url\",\n  \"badge\": \"url\",\n  \"points\": 100,\n  \"levelUp\": \"https://digitallibrary.io/game/count-in-order/?play=1\"\n}, {\n  \"language\": \"en\",\n  \"order\": 2,\n  \"mainTopic\": \"math\",\n  \"mainTopicTitle\": \"Early Math\",\n  \"topic\": \"0-120\",\n  \"topicTitle\": \"Numbers 0 - 120\",\n  \"illustration\": \"url\",\n  \"badge\": \"url\",\n  \"points\": 100,\n  \"levelUp\": \"https://digitallibrary.io/game/missing-numbers-to-120/\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90b3BpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFDZCxjQUFZLElBREU7QUFFZCxXQUFTLENBRks7QUFHZCxlQUFhLE1BSEM7QUFJZCxvQkFBa0IsWUFKSjtBQUtkLFdBQVMsVUFMSztBQU1kLGdCQUFjLFVBTkE7QUFPZCxrQkFBZ0IsS0FQRjtBQVFkLFdBQVMsS0FSSztBQVNkLFlBQVUsR0FUSTtBQVVkLGFBQVc7QUFWRyxDQUFELEVBWWpCO0FBQ0ksY0FBWSxJQURoQjtBQUVJLFdBQVMsQ0FGYjtBQUdJLGVBQWEsTUFIakI7QUFJSSxvQkFBa0IsWUFKdEI7QUFLSSxXQUFTLG1CQUxiO0FBTUksZ0JBQWMsbUJBTmxCO0FBT0ksa0JBQWdCLEtBUHBCO0FBUUksV0FBUyxLQVJiO0FBU0ksWUFBVSxHQVRkO0FBVUksYUFBVztBQVZmLENBWmlCLEVBd0JqQjtBQUNJLGNBQVksSUFEaEI7QUFFSSxXQUFTLENBRmI7QUFHSSxlQUFhLE1BSGpCO0FBSUksb0JBQWtCLFlBSnRCO0FBS0ksV0FBUyxPQUxiO0FBTUksZ0JBQWMsaUJBTmxCO0FBT0ksa0JBQWdCLEtBUHBCO0FBUUksV0FBUyxLQVJiO0FBU0ksWUFBVSxHQVRkO0FBVUksYUFBVztBQVZmLENBeEJpQixDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9waXguanM/ODQxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9waXggPSBbe1xuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJvcmRlclwiOiAwLFxuICAgICAgICBcIm1haW5Ub3BpY1wiOiBcIm1hdGhcIixcbiAgICAgICAgXCJtYWluVG9waWNUaXRsZVwiOiBcIkVhcmx5IE1hdGhcIixcbiAgICAgICAgXCJ0b3BpY1wiOiBcImNvdW50aW5nXCIsXG4gICAgICAgIFwidG9waWNUaXRsZVwiOiBcIkNvdW50aW5nXCIsXG4gICAgICAgIFwiaWxsdXN0cmF0aW9uXCI6IFwidXJsXCIsXG4gICAgICAgIFwiYmFkZ2VcIjogXCJ1cmxcIixcbiAgICAgICAgXCJwb2ludHNcIjogMTAwLFxuICAgICAgICBcImxldmVsVXBcIjogXCJodHRwczovL29iaW9uZS5pby9nYW1lL2NvdW50aW5nLTEwLz9wbGF5PTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgICAgXCJvcmRlclwiOiAxLFxuICAgICAgICBcIm1haW5Ub3BpY1wiOiBcIm1hdGhcIixcbiAgICAgICAgXCJtYWluVG9waWNUaXRsZVwiOiBcIkVhcmx5IE1hdGhcIixcbiAgICAgICAgXCJ0b3BpY1wiOiBcImNvdW50aW5nLWluLW9yZGVyXCIsXG4gICAgICAgIFwidG9waWNUaXRsZVwiOiBcIkNvdW50aW5nIGluIG9yZGVyXCIsXG4gICAgICAgIFwiaWxsdXN0cmF0aW9uXCI6IFwidXJsXCIsXG4gICAgICAgIFwiYmFkZ2VcIjogXCJ1cmxcIixcbiAgICAgICAgXCJwb2ludHNcIjogMTAwLFxuICAgICAgICBcImxldmVsVXBcIjogXCJodHRwczovL2RpZ2l0YWxsaWJyYXJ5LmlvL2dhbWUvY291bnQtaW4tb3JkZXIvP3BsYXk9MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgICBcIm9yZGVyXCI6IDIsXG4gICAgICAgIFwibWFpblRvcGljXCI6IFwibWF0aFwiLFxuICAgICAgICBcIm1haW5Ub3BpY1RpdGxlXCI6IFwiRWFybHkgTWF0aFwiLFxuICAgICAgICBcInRvcGljXCI6IFwiMC0xMjBcIixcbiAgICAgICAgXCJ0b3BpY1RpdGxlXCI6IFwiTnVtYmVycyAwIC0gMTIwXCIsXG4gICAgICAgIFwiaWxsdXN0cmF0aW9uXCI6IFwidXJsXCIsXG4gICAgICAgIFwiYmFkZ2VcIjogXCJ1cmxcIixcbiAgICAgICAgXCJwb2ludHNcIjogMTAwLFxuICAgICAgICBcImxldmVsVXBcIjogXCJodHRwczovL2RpZ2l0YWxsaWJyYXJ5LmlvL2dhbWUvbWlzc2luZy1udW1iZXJzLXRvLTEyMC9cIlxuICAgIH1cbl0iXSwibmFtZXMiOlsidG9waXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./topix.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/topix/index.js"));
module.exports = __webpack_exports__;

})();