/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Animal.js":
/*!***********************!*\
  !*** ./src/Animal.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal),\n/* harmony export */   Cat: () => (/* binding */ Cat),\n/* harmony export */   Elephant: () => (/* binding */ Elephant),\n/* harmony export */   Girraffe: () => (/* binding */ Girraffe),\n/* harmony export */   Lion: () => (/* binding */ Lion),\n/* harmony export */   Snake: () => (/* binding */ Snake)\n/* harmony export */ });\nclass Animal{\n    constructor(name,age,gender){\n        this.name = name\n        this.age = age\n        this.gender = gender\n    }\n\n    getName() { \n        return this.name\n    }\n}\n\n//sub class\n\n//instances of each Animal-elephant\nclass Elephant extends Animal{\n    constructor(name,age,gender,trunk){\n        super(name, age, gender)\n        this.trunk = trunk\n    }\n\n    hasTrunk() {\n        return true\n    }\n}\n\n \nconst myElephant = new Elephant('Olie', 30, 'female', true)  \n\nclass Lion extends Animal { \n    constructor(name,age,gender,species){\n        super(name, age, gender)\n        this.species = species\n    }\n\n    makesSound() { \n       return 'roar'\n    }\n}\n\nconst myLion = new Lion('Linda', 30, 'female', 'mammal')\nconsole.log(myLion.species);\n\n//snake\n\nclass Snake extends Animal{\n    constructor(name,age,gender,legs){\n        super(name, age, gender)\n        this.legs = legs\n    }\nhasLegs(){\n    {\n    return false\n      }\n    \n    }\n}\n\nconst mySnake = new Snake('cobra', 2, 'male', false)\nconsole.log(mySnake.gender);\n\n//giraffe\nclass Girraffe extends Animal{\n    constructor(name,age,gender,horns){\n        super(name, age, gender)\n        this.horns = horns\n    }\n\n    hasHorns(){\n        return true\n    }\n}\n\nconst myGiraffe = new Girraffe('giraffe', 6, 'female', true)\nconsole.log(myGiraffe.gender);\n\n//cat\n\nclass Cat extends Animal{\n    constructor(name,age,gender,domesticated){\n    super(name, age, gender)\n     this.domesticated=domesticated\n}\n    makesSound(){\n        return 'Meow'\n    }\n}\n\nconst myCat = new Cat('Kitty', 4, 'female', true)\nconsole.log(myCat.makesSound());\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQW5pbWFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idW5kbGluZy8uL3NyYy9BbmltYWwuanM/NjQ3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW5pbWFse1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsYWdlLGdlbmRlcil7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2VcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBnZW5kZXJcbiAgICB9XG5cbiAgICBnZXROYW1lKCkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbn1cblxuLy9zdWIgY2xhc3NcblxuLy9pbnN0YW5jZXMgb2YgZWFjaCBBbmltYWwtZWxlcGhhbnRcbmV4cG9ydCBjbGFzcyBFbGVwaGFudCBleHRlbmRzIEFuaW1hbHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGFnZSxnZW5kZXIsdHJ1bmspe1xuICAgICAgICBzdXBlcihuYW1lLCBhZ2UsIGdlbmRlcilcbiAgICAgICAgdGhpcy50cnVuayA9IHRydW5rXG4gICAgfVxuXG4gICAgaGFzVHJ1bmsoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuXG4gXG5jb25zdCBteUVsZXBoYW50ID0gbmV3IEVsZXBoYW50KCdPbGllJywgMzAsICdmZW1hbGUnLCB0cnVlKSAgXG5cbmV4cG9ydCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHsgXG4gICAgY29uc3RydWN0b3IobmFtZSxhZ2UsZ2VuZGVyLHNwZWNpZXMpe1xuICAgICAgICBzdXBlcihuYW1lLCBhZ2UsIGdlbmRlcilcbiAgICAgICAgdGhpcy5zcGVjaWVzID0gc3BlY2llc1xuICAgIH1cblxuICAgIG1ha2VzU291bmQoKSB7IFxuICAgICAgIHJldHVybiAncm9hcidcbiAgICB9XG59XG5cbmNvbnN0IG15TGlvbiA9IG5ldyBMaW9uKCdMaW5kYScsIDMwLCAnZmVtYWxlJywgJ21hbW1hbCcpXG5jb25zb2xlLmxvZyhteUxpb24uc3BlY2llcyk7XG5cbi8vc25ha2VcblxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQW5pbWFse1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsYWdlLGdlbmRlcixsZWdzKXtcbiAgICAgICAgc3VwZXIobmFtZSwgYWdlLCBnZW5kZXIpXG4gICAgICAgIHRoaXMubGVncyA9IGxlZ3NcbiAgICB9XG5oYXNMZWdzKCl7XG4gICAge1xuICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIFxuICAgIH1cbn1cblxuY29uc3QgbXlTbmFrZSA9IG5ldyBTbmFrZSgnY29icmEnLCAyLCAnbWFsZScsIGZhbHNlKVxuY29uc29sZS5sb2cobXlTbmFrZS5nZW5kZXIpO1xuXG4vL2dpcmFmZmVcbmV4cG9ydCBjbGFzcyBHaXJyYWZmZSBleHRlbmRzIEFuaW1hbHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGFnZSxnZW5kZXIsaG9ybnMpe1xuICAgICAgICBzdXBlcihuYW1lLCBhZ2UsIGdlbmRlcilcbiAgICAgICAgdGhpcy5ob3JucyA9IGhvcm5zXG4gICAgfVxuXG4gICAgaGFzSG9ybnMoKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbmNvbnN0IG15R2lyYWZmZSA9IG5ldyBHaXJyYWZmZSgnZ2lyYWZmZScsIDYsICdmZW1hbGUnLCB0cnVlKVxuY29uc29sZS5sb2cobXlHaXJhZmZlLmdlbmRlcik7XG5cbi8vY2F0XG5cbmV4cG9ydCBjbGFzcyBDYXQgZXh0ZW5kcyBBbmltYWx7XG4gICAgY29uc3RydWN0b3IobmFtZSxhZ2UsZ2VuZGVyLGRvbWVzdGljYXRlZCl7XG4gICAgc3VwZXIobmFtZSwgYWdlLCBnZW5kZXIpXG4gICAgIHRoaXMuZG9tZXN0aWNhdGVkPWRvbWVzdGljYXRlZFxufVxuICAgIG1ha2VzU291bmQoKXtcbiAgICAgICAgcmV0dXJuICdNZW93J1xuICAgIH1cbn1cblxuY29uc3QgbXlDYXQgPSBuZXcgQ2F0KCdLaXR0eScsIDQsICdmZW1hbGUnLCB0cnVlKVxuY29uc29sZS5sb2cobXlDYXQubWFrZXNTb3VuZCgpKTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Animal.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal.js */ \"./src/Animal.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idW5kbGluZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydHsgQW5pbWFsLExpb24sR2lycmFmZmUsQ2F0LFNuYWtlLEVsZXBoYW50fSBmcm9tICcuL0FuaW1hbC5qcydcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;