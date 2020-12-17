/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n      //alterative working also in older browser\n      //this.element.parentElement.removeChild(this.element)\n    }\n  }\n\n  attach() {\n    //document.body.append(this.element);\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/App/Component.js?");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.js */ \"./src/App/Tooltip.js\");\n\n\n\n//to convert the element lists in to an object\nclass ProjectItem {\n  //hasActiveTooltip = false;\n\n  //to be able to use the method switchProject from the ProjectList class I need to pass it as parameter\n  constructor(id, updateProjectListFunction, type) {\n    this.id = id;\n    this.hasActiveTooltip = false;\n    this.updateProjectListHandler = updateProjectListFunction;\n    this.connectSwitchButton(type);\n    this.connectMoreInfoButton();\n    this.connectSwitchButton();\n    this.connectDrag();\n  }\n\n  showMoreInfoHandler() {\n    if (this.hasActiveTooltip) {\n      return;\n    }\n    const projectElement = document.getElementById(this.id);\n    const tooltipText = projectElement.dataset.extraInfo;\n    const tooltip = new _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"](\n      () => {\n        this.hasActiveTooltip = false;\n      },\n      tooltipText,\n      this.id\n    );\n    tooltip.attach();\n    this.hasActiveTooltip = true;\n  }\n\n  connectDrag() {\n    document.getElementById(this.id).addEventListener(\"dragstart\", (event) => {\n      event.dataTransfer.setData(\"text/plain\", this.id);\n      event.dataTransfer.effectAllowed = \"move\";\n    });\n  }\n\n  connectMoreInfoButton() {\n    const projectItemElement = document.getElementById(this.id);\n    const moreInfoBtn = projectItemElement.querySelector(\n      \"button:first-of-type\"\n    );\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\n  }\n\n  connectSwitchButton(type) {\n    //since I have available the id of the item I can get all li element by id\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\n    switchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\n    //when pressing switchBtn I want to remove the il from one list and add it to the other\n    switchBtn.addEventListener(\n      \"click\",\n      this.updateProjectListHandler.bind(null, this.id)\n    );\n  }\n\n  update(updateProjectListsFn, type) {\n    this.updateProjectListHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/App/ProjectItem.js?");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n\n\nclass ProjectList {\n  //projects = [];\n  constructor(type) {\n    this.type = type;\n    this.projects = [];\n    //parse all elements in the type of list I need\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type)\n      );\n    }\n    this.connectDroppable();\n  }\n\n  connectDroppable() {\n    const list = document.querySelector(`#${this.type}-projects ul`);\n\n    list.addEventListener(\"dragenter\", (event) => {\n      if (event.dataTransfer.types[0] === \"text/plain\") {\n        event.preventDefault();\n        list.parentElement.classList.add(\"droppable\");\n      }\n    });\n\n    list.addEventListener(\"dragover\", (event) => {\n      if (event.dataTransfer.types[0] === \"text/plain\") {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener(\"dragleave\", (event) => {\n      //to remove the highlight only when the element leave completly its parent\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove(\"droppable\");\n      }\n    });\n\n    list.addEventListener(\"drop\", (event) => {\n      const prjId = event.dataTransfer.getData(\"text/plain\");\n      if (this.projects.find((p) => p.id === prjId)) {\n        return;\n      }\n      //at this point I will have to manage the other instance not the project instance I am currently in\n      //but this is little complicated and because we already handle this issue,\n      //here simply I call the event of click button to switch the drag proget to an instance to another\n      document\n        .getElementById(prjId)\n        .querySelector(\"button:last-of-type\")\n        .click();\n      list.parentElement.classList.remove(\"droppable\");\n      //event.preventDefault(); //not mandatory\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project) {\n    //1 add the project received as argumet to the array\n    this.projects.push(project);\n    //2 add the new project to the DOM\n    //could be add here below but for practice purpose create a new class\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"DOMHelper\"].moveElement(project.id, `#${this.type}-projects ul`);\n    //after the switch I need to update the button with the new section Id and caption\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId) {\n    //1 add the project to the other instance of ProjectList\n    this.switchHandler(this.projects.find((elem) => elem.id === projectId));\n    //2 remove the element from the projects array\n    // const projectIndex = this.projects.indexOf(elem => {elem.id === projectId})\n    // this.projects.splice(projectIndex, 1)\n    this.projects = this.projects.filter((elem) => elem.id !== projectId);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/App/ProjectList.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\n\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(closeNotifierFunction, text, hostElement) {\n    super(hostElement);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    //to close the tooltip\n    //use arrow function here as alternative to use the .bind method\n    //to pass the right this element\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement(\"div\");\n    tooltipElement.className = \"card\";\n    const tooltipTemplate = document.getElementById(\"tooltip\");\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector(\"p\").textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    // tooltipElement.textContent = this.text;\n    //console.log(this.hostElement.getBoundingClientRect());\n    //To position exactly the tooltip I need the hostElement top-left corner\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    //and its height\n    const hostElHeight = this.hostElement.offsetHeight;\n    //to get the scrollTop move to the parent element which is the one with the scrolling bar\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    //with this position I can position the tooltip\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n    tooltipElement.style.position = \"absolute\";\n    tooltipElement.style.left = x + \"px\";\n    tooltipElement.style.top = y + \"px\";\n\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/App/Tooltip.js?");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\nclass DOMHelper {\n  static clearEventListeners(element) {\n    const clonedElement = element.cloneNode(true);\n    element.replaceWith(clonedElement);\n    return clonedElement;\n  }\n\n  static moveElement(elementId, newDestinationSelector) {\n    const element = document.getElementById(elementId);\n    const destinationElement = document.querySelector(newDestinationSelector);\n    destinationElement.append(element);\n    element.scrollIntoView({ behaviour: \"smooth\" });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\n\n//create an App object to use to start the program\nclass App {\n  static init() {\n    const activeProjectList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"](\"active\");\n    const finishedProjectList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"](\"finished\");\n    //here I want to call the addProject function but of the other instance\n    //for this reason I need to bind to the function the right parameter\n    activeProjectList.setSwitchHandlerFunction(\n      finishedProjectList.addProject.bind(finishedProjectList)\n    );\n\n    finishedProjectList.setSwitchHandlerFunction(\n      activeProjectList.addProject.bind(activeProjectList)\n    );\n  }\n}\n\n//call App to start code execution\nApp.init();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });