webpackJsonp([1,4],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TickerDirective = (function () {
    function TickerDirective(el, r) {
        this.el = el;
        this.r = r;
    }
    TickerDirective.prototype.onMouseEnter = function () {
        if (this.trigger === 'onMouseEnter') {
            this.initTicker();
        }
    };
    TickerDirective.prototype.onClick = function () {
        if (this.trigger === 'onClick') {
            if (this.idle) {
                this.initTicker();
            }
            else {
                this.reset();
            }
            this.idle = !this.idle;
        }
    };
    TickerDirective.prototype.initTicker = function () {
        if (this.tickerNeeded()) {
            this.margin = 0;
            this.view = [
                this.createTickerNode('<T>', this.text),
                this.createTickerNode('<T>', this.text)
            ];
            this.r.attachViewAfter(this.firstNode, this.view);
            this.moveLeft();
        }
    };
    TickerDirective.prototype.onMouseLeave = function () {
        if (this.tickerNeeded() && this.trigger === 'onMouseEnter') {
            this.reset();
        }
    };
    TickerDirective.prototype.reset = function () {
        clearInterval(this.interval);
        this.r.detachView(this.view);
        this.r.setElementStyle(this.firstNode, 'margin-left', '0');
    };
    TickerDirective.prototype.ngOnInit = function () {
        this.setIgnoredAtts();
        this.textWidth = this.getTextWidth();
        this.firstNode = this.createTickerNode(this.firstNode, this.text);
        if (this.trigger === 'auto' && this.tickerNeeded()) {
            this.initTicker();
        }
    };
    TickerDirective.prototype.setIgnoredAtts = function () {
        if (!this.paddingRight) {
            this.paddingRight = 16;
        }
        if (!this.speed) {
            this.speed = 25;
        }
        if (!this.trigger) {
            this.trigger = 'onMouseEnter';
        }
        if (!this.size) {
            this.size = 16;
        }
        if (!this.text) {
            this.text = 'You need to add the [text] attribute to the "ticker" directive';
        }
        this.idle = true;
    };
    TickerDirective.prototype.createTickerNode = function (self, text) {
        self = this.r.createElement(this.el.nativeElement, 'span');
        this.r.setElementStyle(self, 'padding-right', this.paddingRight + 'px');
        this.r.setElementStyle(self, 'font-size', this.size + 'px');
        // this.r.setText( self, text ); // not working, oddly
        self.innerHTML = this.text; // quick fix
        return self;
    };
    TickerDirective.prototype.moveLeft = function () {
        var _this = this;
        var resetMargin = (this.textWidth + this.paddingRight) * -2;
        this.interval = setInterval(function () {
            _this.r.setElementStyle(_this.firstNode, 'margin-left', _this.margin-- + 'px');
            if (_this.margin < resetMargin) {
                _this.margin = 0;
            }
        }, this.speed);
    };
    TickerDirective.prototype.getTextWidth = function () {
        var t = this.r.createElement(document.getElementById('ghost'), 'div');
        // this.r.setText( t, this.text ); // not working, oddly
        t.innerHTML = this.text; // quick fix
        this.r.setElementStyle(t, 'font-size', this.size + 'px');
        var w = t.offsetWidth;
        t.innerHTML = '';
        return w;
    };
    TickerDirective.prototype.tickerNeeded = function () {
        return this.textWidth > this.el.nativeElement.parentElement.offsetWidth - 2;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('speed'), 
        __metadata('design:type', Number)
    ], TickerDirective.prototype, "speed", void 0);
    __decorate([
        // milliseconds between ticks
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('padding-right'), 
        __metadata('design:type', Number)
    ], TickerDirective.prototype, "paddingRight", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('size'), 
        __metadata('design:type', Number)
    ], TickerDirective.prototype, "size", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('trigger'), 
        __metadata('design:type', String)
    ], TickerDirective.prototype, "trigger", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('text'), 
        __metadata('design:type', String)
    ], TickerDirective.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* HostListener */])('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TickerDirective.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* HostListener */])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TickerDirective.prototype, "onClick", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* HostListener */])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], TickerDirective.prototype, "onMouseLeave", null);
    TickerDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Directive */])({ selector: '[ticker]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer */]) === 'function' && _b) || Object])
    ], TickerDirective);
    return TickerDirective;
    var _a, _b;
}());
//# sourceMappingURL=textticker.directive.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 274;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(381);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textticker_directive__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = "ng2!!";
        this.editMode = false;
        this.editMode = true;
    }
    AppComponent.prototype.handleKeyDown = function ($event) {
        if ($event.keyCode === 27 && !this.editMode) {
            if (this.vc) {
            }
            this.editMode = true;
            this.inp.nativeElement.focus();
        }
        else {
            if ($event.keyCode === 13 && this.editMode) {
                this.startScrolling();
            }
        }
    };
    AppComponent.prototype.startScrolling = function () {
        this.editMode = false;
        if (this.vc) {
            this.vc.initTicker();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__textticker_directive__["a" /* TickerDirective */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__textticker_directive__["a" /* TickerDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__textticker_directive__["a" /* TickerDirective */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "vc", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('input'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "inp", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(437)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textticker_directive__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__textticker_directive__["a" /* TickerDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "<div class=\"tickerContainer myStyles container\" *ngIf=\"!editMode\" (window:keydown)=\"handleKeyDown($event)\">\n  <div ticker [trigger]=\"'auto'\" [text]=\"title\" [speed]=\"20\" [padding-right]=\"40\" [size]=\"600\"></div>\n</div>\n\n<div *ngIf=\"editMode\" class=\"editor container\">\n  <input type=\"text\" [(ngModel)]=\"title\" (window:keydown)=\"handleKeyDown($event)\"><button (click)=\"startScrolling()\">Scroll</button>\n</div>\n\n<div id=\"ghost\"></div>"

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


/***/ })

},[450]);
//# sourceMappingURL=main.bundle.js.map