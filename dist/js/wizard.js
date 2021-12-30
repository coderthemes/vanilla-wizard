/*! vanilla-wizard v0.0.3 | © 2021 Coderthemes | undefined */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vanilla-wizard"] = factory();
	else
		root["vanilla-wizard"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Wizard {
    constructor(element, {
        validate = false, buttons = false, progress = false
    }) {
        if (element instanceof HTMLElement) {
            this.wizard = element;
        } else {
            this.wizard = document.querySelector(element);
        }
        this.validate = validate;
        this.buttons = buttons;
        this.progress = progress;

        this.initOptions();
        this.initEventListener();
    }


    //Init Options
    initOptions() {
        this.selectedIndex = 0;
        this.progressBar = this.progress ? this.wizard.querySelector('.tab-content .progress .progress-bar') : null;
        this.navItems = this.wizard.querySelectorAll('ul li.nav-item a');
        this.tabPans = this.wizard.querySelectorAll('.tab-content .tab-pane');
        this.initButtons();

        //Show first selected tab
        this.showTabSelectedTab();
    }

    //Init Buttons
    initButtons() {

        if (this.buttons) {
            this.prevBtn = this.wizard.querySelector('.tab-content .button-previous');
            this.nextBtn = this.wizard.querySelector('.tab-content .button-next');
            this.firstBtn = this.wizard.querySelector('.tab-content .button-first');
            this.lastBtn = this.wizard.querySelector('.tab-content .button-last');
        } else {
            this.prevBtn = this.wizard.querySelector('.tab-content .previous a');
            this.nextBtn = this.wizard.querySelector('.tab-content .next a');
            this.firstBtn = this.wizard.querySelector('.tab-content .first a');
            this.lastBtn = this.wizard.querySelector('.tab-content .last a');
        }
    }


    //Init all button event listener
    initEventListener() {
        const self = this;

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex > 0 && self.validateForm()) {
                    self.selectedIndex--;
                    self.showTabSelectedTab();
                }
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex < self.navItems.length - 1 && self.validateForm()) {
                    self.selectedIndex++;
                    self.showTabSelectedTab();
                }
            });
        }

        if (this.firstBtn) {
            this.firstBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex !== 0 && self.validateForm()) {
                    self.selectedIndex = 0;
                    self.showTabSelectedTab();
                }
            });
        }

        if (this.lastBtn) {
            this.lastBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (self.selectedIndex !== self.navItems.length - 1 && self.validateForm()) {
                    self.selectedIndex = self.navItems.length - 1;
                    self.showTabSelectedTab();
                }
            });
        }

        this.navItems.forEach(function (element, index) {
            element.addEventListener('click', function () {
                self.selectedIndex = index;
                if (self.validateForm()) {
                    self.showTabSelectedTab();
                }
            });
        });

    }

    //Show tab which is selected
    showTabSelectedTab() {
        new bootstrap.Tab(this.navItems[this.selectedIndex]).show();
        if (this.progressBar) {
            this.progressBar.style.width = ((this.selectedIndex + 1) / this.navItems.length * 100).toString() + '%';
        }
        this.changeBtnStyle();
    }

    //Change button style enable to disable and vice-versa
    changeBtnStyle() {

        this.lastBtn.classList.remove('disabled');
        this.firstBtn.classList.remove('disabled');
        this.nextBtn.classList.remove('disabled');
        this.prevBtn.classList.remove('disabled');
        if (this.selectedIndex === 0) {
            this.prevBtn.classList.add('disabled');
            this.firstBtn.classList.add('disabled');
        } else if (this.selectedIndex === this.navItems.length - 1) {
            this.nextBtn.classList.add('disabled');
            this.lastBtn.classList.add('disabled');
        }

    }

    //If form validate is true then validate a form
    validateForm() {
        if (this.validate) {
            const form = this.tabPans[this.selectedIndex].querySelector('form');
            if (form) {
                form.classList.add('was-validated');
                return form.checkValidity();
            }
        }
        return true;
    }

}

/***/ })
/******/ ])["default"];
});