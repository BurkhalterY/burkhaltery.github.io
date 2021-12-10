(self["webpackChunkburkhalter_cv"] = self["webpackChunkburkhalter_cv"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _pro_module_pro_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pro.module/pro.module */ 3010);
/* harmony import */ var _perso_module_perso_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perso.module/perso.module */ 2716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            _perso_module_perso_module__WEBPACK_IMPORTED_MODULE_3__.PersoModule,
            _pro_module_pro_module__WEBPACK_IMPORTED_MODULE_2__.ProModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _perso_module_perso_module__WEBPACK_IMPORTED_MODULE_3__.PersoModule,
        _pro_module_pro_module__WEBPACK_IMPORTED_MODULE_2__.ProModule] }); })();


/***/ }),

/***/ 1664:
/*!****************************************************************!*\
  !*** ./src/app/perso.module/components/base/base.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 12, vars: 0, consts: [[1, "container", "h-75"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "row", "main", "shadow"], ["href", "", "routerLink", "/yannis"], ["href", "", "routerLink", "/yannis/collection"], ["href", "", "routerLink", "/yannis/cubing"], ["href", "", "routerLink", "/yannis/lang"]], template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "^");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cubing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Langue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content[_ngcontent-%COMP%] {\n\theight: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG5cdGhlaWdodDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 6370:
/*!****************************************************************************!*\
  !*** ./src/app/perso.module/components/collection/collection.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionComponent": () => (/* binding */ CollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CollectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(); };
CollectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["app-collection"]], decls: 2, vars: 0, template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "collection works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2712:
/*!********************************************************************!*\
  !*** ./src/app/perso.module/components/cubing/cubing.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubingComponent": () => (/* binding */ CubingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CubingComponent {
    constructor() { }
    ngOnInit() {
    }
}
CubingComponent.ɵfac = function CubingComponent_Factory(t) { return new (t || CubingComponent)(); };
CubingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CubingComponent, selectors: [["app-cubing"]], decls: 2, vars: 0, template: function CubingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cubing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWJpbmcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 691:
/*!****************************************************************!*\
  !*** ./src/app/perso.module/components/lang/lang.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangComponent": () => (/* binding */ LangComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LangComponent {
    constructor() { }
    ngOnInit() {
    }
}
LangComponent.ɵfac = function LangComponent_Factory(t) { return new (t || LangComponent)(); };
LangComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LangComponent, selectors: [["app-lang"]], decls: 2, vars: 0, template: function LangComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lang works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3734:
/*!********************************************************************!*\
  !*** ./src/app/perso.module/components/yannis/yannis.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YannisComponent": () => (/* binding */ YannisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class YannisComponent {
    constructor() { }
    ngOnInit() {
    }
}
YannisComponent.ɵfac = function YannisComponent_Factory(t) { return new (t || YannisComponent)(); };
YannisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YannisComponent, selectors: [["app-yannis"]], decls: 2, vars: 0, template: function YannisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "yannis works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5YW5uaXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6156:
/*!******************************************************!*\
  !*** ./src/app/perso.module/perso-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersoRoutingModule": () => (/* binding */ PersoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base/base.component */ 1664);
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/collection/collection.component */ 6370);
/* harmony import */ var _components_cubing_cubing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cubing/cubing.component */ 2712);
/* harmony import */ var _components_lang_lang_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lang/lang.component */ 691);
/* harmony import */ var _components_yannis_yannis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/yannis/yannis.component */ 3734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: 'yannis',
        component: _components_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent,
        children: [
            { path: '', component: _components_yannis_yannis_component__WEBPACK_IMPORTED_MODULE_4__.YannisComponent },
            { path: 'collection', component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__.CollectionComponent },
            { path: 'cubing', component: _components_cubing_cubing_component__WEBPACK_IMPORTED_MODULE_2__.CubingComponent },
            { path: 'lang', component: _components_lang_lang_component__WEBPACK_IMPORTED_MODULE_3__.LangComponent }
        ]
    }
];
class PersoRoutingModule {
}
PersoRoutingModule.ɵfac = function PersoRoutingModule_Factory(t) { return new (t || PersoRoutingModule)(); };
PersoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PersoRoutingModule });
PersoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PersoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 2716:
/*!**********************************************!*\
  !*** ./src/app/perso.module/perso.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersoModule": () => (/* binding */ PersoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _perso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perso-routing.module */ 6156);
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/collection/collection.component */ 6370);
/* harmony import */ var _components_cubing_cubing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cubing/cubing.component */ 2712);
/* harmony import */ var _components_lang_lang_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lang/lang.component */ 691);
/* harmony import */ var _components_yannis_yannis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/yannis/yannis.component */ 3734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class PersoModule {
}
PersoModule.ɵfac = function PersoModule_Factory(t) { return new (t || PersoModule)(); };
PersoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PersoModule });
PersoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _perso_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersoRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PersoModule, { declarations: [_components_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__.CollectionComponent,
        _components_cubing_cubing_component__WEBPACK_IMPORTED_MODULE_2__.CubingComponent,
        _components_lang_lang_component__WEBPACK_IMPORTED_MODULE_3__.LangComponent,
        _components_yannis_yannis_component__WEBPACK_IMPORTED_MODULE_4__.YannisComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _perso_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersoRoutingModule] }); })();


/***/ }),

/***/ 4792:
/*!**************************************************************!*\
  !*** ./src/app/pro.module/components/base/base.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ 1900);
/* harmony import */ var _section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section-presentation/section-presentation.component */ 9089);
/* harmony import */ var _section_skills_section_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section-skills/section-skills.component */ 9346);
/* harmony import */ var _section_career_section_career_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section-career/section-career.component */ 1353);
/* harmony import */ var _section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section-projects/section-projects.component */ 4433);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ 7043);







class BaseComponent {
    constructor() {
        this.title = 'BurkhalterCV';
    }
    ngOnInit() {
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 11, vars: 0, consts: [["data-spy", "scroll", "data-target", "#navbar", "data-offset", "60", 1, "content"], ["id", "presentation"], [1, "separator"], ["id", "skills"], ["id", "career"], ["id", "projects"]], template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-section-presentation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-section-skills", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-section-career", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-section-projects", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_1__.SectionPresentationComponent, _section_skills_section_skills_component__WEBPACK_IMPORTED_MODULE_2__.SectionSkillsComponent, _section_career_section_career_component__WEBPACK_IMPORTED_MODULE_3__.SectionCareerComponent, _section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_4__.SectionProjectsComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent], styles: [".content[_ngcontent-%COMP%] {\n\theight: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG5cdGhlaWdodDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 7043:
/*!******************************************************************!*\
  !*** ./src/app/pro.module/components/footer/footer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-6", "col-lg-3", "offset-lg-3"], [1, "col-md-6", "col-lg-3"], ["target", "_blank", "href", "https://www.linkedin.com/in/yannis-burkhalter"], ["target", "_blank", "href", "https://github.com/BurkhalterY"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Yannis Burkhalter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Rue des Jardins 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 1800 Vevey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " T\u00E9l. : 079 647 42 37");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " yannis.burkhalter@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Mon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Mon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n\tpadding-top: 20px;\n\tpadding-bottom: 50px;\n\tcolor: white;\n\tbackground-image: url('/assets/svg/footer.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osK0NBQStDO0FBQ2hEIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zdmcvZm9vdGVyLnN2ZycpO1xufSJdfQ== */"] });


/***/ }),

/***/ 1900:
/*!**************************************************************!*\
  !*** ./src/app/pro.module/components/menu/menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 19, vars: 0, consts: [["id", "navbar", 1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#presentation", 1, "nav-link"], ["href", "#skills", 1, "nav-link"], ["href", "#career", 1, "nav-link"], ["href", "#projects", 1, "nav-link"], [1, "navbar-text"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pr\u00E9sentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mes comp\u00E9tences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mon parcours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quelques projets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A9 Burkhalter Yannis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7926:
/*!********************************************************************!*\
  !*** ./src/app/pro.module/components/project/project.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/skills.service */ 2595);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function ProjectComponent_ng_template_5_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/skills/", skill_r4.Icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", skill_r4.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", skill_r4.Name);
} }
function ProjectComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_ng_template_5_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProjectComponent_ng_template_5_img_13_Template, 1, 3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.project.Url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/projects/", ctx_r1.project.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r1.project.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r1.project.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("innerHTML", ctx_r1.project.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.project.Url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.Url);
} }
class ProjectComponent {
    constructor(_skillsService, _modalService) {
        this._skillsService = _skillsService;
        this._modalService = _modalService;
        this.skills = [];
    }
    ngOnInit() {
        for (let skill of this.project.Skills) {
            this.skills.push(this._skillsService.getByName(skill));
        }
    }
    open(content) {
        this._modalService.open(content, { size: 'lg', centered: true });
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
ProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], inputs: { project: "project" }, decls: 7, vars: 7, consts: [[1, "card-img-top", "pointer", 3, "src", "alt", "title", "click"], [1, "card-body"], [1, "card-title", "text-center"], ["modal", ""], [1, "modal-header", "text-center"], [1, "modal-title", "w-100"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-5"], ["target", "_blank", 3, "href"], [1, "img-fluid", 3, "src", "alt", "title"], [1, "col-lg-7"], [1, "text-justify", 3, "innerHTML"], ["class", "icon", 3, "src", "alt", "title", 4, "ngFor", "ngForOf"], [1, "text-small", "float-right", "d-none", "d-sm-block"], [1, "modal-footer"], [1, "icon", 3, "src", "alt", "title"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectComponent_ng_template_5_Template, 19, 10, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("card ", ctx.project.Favorite ? "border-warning" : "", " my-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/projects/", ctx.project.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.project.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.project.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.Name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["img.icon[_ngcontent-%COMP%] {\n\twidth: 30px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n\tpadding-top: 10px;\n}\n\nh5[_ngcontent-%COMP%] {\n\tmargin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaWNvbiB7XG5cdHdpZHRoOiAzMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcblx0cGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmg1IHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"] });


/***/ }),

/***/ 1353:
/*!**********************************************************************************!*\
  !*** ./src/app/pro.module/components/section-career/section-career.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionCareerComponent": () => (/* binding */ SectionCareerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SectionCareerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionCareerComponent.ɵfac = function SectionCareerComponent_Factory(t) { return new (t || SectionCareerComponent)(); };
SectionCareerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionCareerComponent, selectors: [["app-section-career"]], decls: 76, vars: 0, consts: [[1, "container", "h-75"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "row", "main", "shadow"], [1, "col-lg-12"], [1, "timeline"], [1, "float-right"], ["target", "_blank", "href", "assets/documents/Notes/bulletin-epsic.pdf"], ["src", "assets/misc/info.png", "alt", "Attestation sur demande", "title", "Attestation sur demande"], ["src", "assets/misc/info.png", "alt", "Attestation de stage sur demande", "title", "Attestation de stage sur demande"], ["target", "_blank", "href", "assets/documents/yannis-burkhalter-cv.pdf"]], template: function SectionCareerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mon parcours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Apprentissage Informaticien, EPSIC Lausanne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2018 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Informaticien CFC, orient\u00E9 d\u00E9veloppement d'applications, 4 ans. (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bulletin de notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", moyenne g\u00E9n\u00E9rale : 5.5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Scolarit\u00E9 obligatoire, Vevey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2006 - 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Coll\u00E8ge du Clos, coll\u00E8ge de la Veveyse, coll\u00E8ge Bleu, coll\u00E8ge Kratzer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Emplois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Open Net, Lausanne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2021 - Maintenant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Reprise du contrat d'apprentissage pour la derni\u00E8re ann\u00E9e par Open Net.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Orif, Pomy, Aigle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2017 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pr\u00E9formation d'un an, puis apprentissage jusqu'en 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00E8me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ann\u00E9e avant la reprise par Open Net. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Stages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Quicksite, Vevey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2020 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Stage de 9 mois chez Quicksite, agence web, chez qui j'ai d\u00E9velopp\u00E9 une interface de traduction pour Laravel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Orif SIT, Pr\u00E9verenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Stage de 2 mois au SIT de l'Orif o\u00F9 j'\u00E9tais charg\u00E9 de d\u00E9velopper un logiciel interne.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Creatis Informatique, Pr\u00E9verenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Stage de 5 mois durant lequel j'ai particip\u00E9 au d\u00E9veloppement d'applications Android avec Java ou Kotlin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "T\u00E9l\u00E9charger la version papier de mon CV.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n\tbackground-color: #87ceeb;\n\tbackground-image: url('/assets/svg/career.svg');\n}\n\n@media (max-width: 767px) {\n\t#career[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n\t\ttext-align: left;\n\t}\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n\tfont-weight: bold;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%] {\n\tmargin-left: 10px;\n}\n\n.timeline[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n\n\n\nul.timeline[_ngcontent-%COMP%] {\n\tlist-style-type: none;\n\tposition: relative;\n}\n\nul.timeline[_ngcontent-%COMP%]:before {\n\tcontent: ' ';\n\tbackground: #d4d9df;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tleft: 29px;\n\twidth: 2px;\n\theight: 100%;\n\tz-index: 400;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n\tmargin: 20px 0;\n\tpadding-left: 20px;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n\tcontent: ' ';\n\tbackground: white;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tborder-radius: 50%;\n\tborder: 3px solid #22c0e8;\n\tleft: 20px;\n\twidth: 20px;\n\theight: 20px;\n\tz-index: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tY2FyZWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7Q0FDakI7QUFDRDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFVBQVU7Q0FDVixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7QUFDYiIsImZpbGUiOiJzZWN0aW9uLWNhcmVlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4N2NlZWI7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zdmcvY2FyZWVyLnN2ZycpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblx0I2NhcmVlciAubWFpbiB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxufVxuXG51bC50aW1lbGluZSA+IGxpID4gc3BhbiB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC50aW1lbGluZSA+IGxpID4gc3BhbiAuZmxvYXQtcmlnaHQge1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lIHRyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKioqKlxuU291cmNlczogaHR0cHM6Ly9ib290c25pcHAuY29tL3NuaXBwZXRzL3hyS1hXXG4qL1xuXG51bC50aW1lbGluZSB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG51bC50aW1lbGluZTpiZWZvcmUge1xuXHRjb250ZW50OiAnICc7XG5cdGJhY2tncm91bmQ6ICNkNGQ5ZGY7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAyOXB4O1xuXHR3aWR0aDogMnB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHotaW5kZXg6IDQwMDtcbn1cblxudWwudGltZWxpbmUgPiBsaSB7XG5cdG1hcmdpbjogMjBweCAwO1xuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbnVsLnRpbWVsaW5lID4gbGk6YmVmb3JlIHtcblx0Y29udGVudDogJyAnO1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyOiAzcHggc29saWQgIzIyYzBlODtcblx0bGVmdDogMjBweDtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0ei1pbmRleDogNDAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 9089:
/*!**********************************************************************************************!*\
  !*** ./src/app/pro.module/components/section-presentation/section-presentation.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionPresentationComponent": () => (/* binding */ SectionPresentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SectionPresentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionPresentationComponent.ɵfac = function SectionPresentationComponent_Factory(t) { return new (t || SectionPresentationComponent)(); };
SectionPresentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionPresentationComponent, selectors: [["app-section-presentation"]], decls: 21, vars: 0, consts: [[1, "container", "h-75"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "row", "main", "shadow"], [1, "col-lg-8"], [1, "d-none", "d-md-block"], [1, "title"], [1, "d-block", "d-md-none"], [1, "col-lg-4", "text-center", "text-lg-right"], ["src", "/assets/misc/user.png", "alt", "Ma photo", "id", "photo", 1, "img-fluid", "rounded-circle", 2, "max-height", "320px"]], template: function SectionPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bonjour, je m'appelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yannis Burkhalter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Je suis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "d\u00E9veloppeur d'applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yannis Burkhalter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "d\u00E9veloppeur d'applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n\t\n\tbackground-color: #fff;\n\tbackground-image: url('/assets/svg/presentation.svg');\n\tbackground-attachment: fixed;\n\tbackground-size: cover;\n}\n\nh1[_ngcontent-%COMP%] {\n\tfont-size: 72px;\n}\n\n.title[_ngcontent-%COMP%] {\n\tfont-size: 36px;\n}\n\n@media (max-width: 767px) {\n\th1[_ngcontent-%COMP%] {\n\t\tfont-size: 60px;\n\t}\n}\n\n@media (max-width: 991px) {\n\t#photo[_ngcontent-%COMP%] {\n\t\tmax-width: 50%;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw0Q0FBNEM7Q0FDNUMsc0JBQXNCO0NBQ3RCLHFEQUFxRDtDQUNyRCw0QkFBNEI7Q0FDNUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmO0FBQ0QiLCJmaWxlIjoic2VjdGlvbi1wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuXHQvKiBTb3VyY2UgOiBodHRwczovL3d3dy5zdmdiYWNrZ3JvdW5kcy5jb20gKi9cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3N2Zy9wcmVzZW50YXRpb24uc3ZnJyk7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiA3MnB4O1xufVxuXG4udGl0bGUge1xuXHRmb250LXNpemU6IDM2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiA2MHB4O1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuXHQjcGhvdG8ge1xuXHRcdG1heC13aWR0aDogNTAlO1xuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4433:
/*!**************************************************************************************!*\
  !*** ./src/app/pro.module/components/section-projects/section-projects.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionProjectsComponent": () => (/* binding */ SectionProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/projects.service */ 9094);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/project.component */ 7926);




function SectionProjectsComponent_app_project_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-project", 7);
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r3);
} }
function SectionProjectsComponent_app_project_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-project", 7);
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r4);
} }
function SectionProjectsComponent_app_project_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-project", 7);
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r5);
} }
class SectionProjectsComponent {
    constructor(_projectsService) {
        this._projectsService = _projectsService;
    }
    ngOnInit() {
        this.favorite = this._projectsService.getFavorite().reverse();
        this.private = this._projectsService.getPrivate();
        this.pro = this._projectsService.getPro();
    }
}
SectionProjectsComponent.ɵfac = function SectionProjectsComponent_Factory(t) { return new (t || SectionProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
SectionProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SectionProjectsComponent, selectors: [["app-section-projects"]], decls: 23, vars: 3, consts: [[1, "container", "h-75"], [1, "text-light"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "row", "main", "shadow"], [1, "col-lg-12"], [1, "row"], ["class", "col-lg-3 col-md-6", 3, "project", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", 3, "project"]], template: function SectionProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Quelques projets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "S\u00E9lection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SectionProjectsComponent_app_project_10_Template, 1, 1, "app-project", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Priv\u00E9 et \u00E9cole");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SectionProjectsComponent_app_project_16_Template, 1, 1, "app-project", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Professionnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SectionProjectsComponent_app_project_22_Template, 1, 1, "app-project", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.private);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pro);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _project_project_component__WEBPACK_IMPORTED_MODULE_1__.ProjectComponent], styles: ["section[_ngcontent-%COMP%] {\n\tbackground-color: #321185;\n\tbackground-image: url('/assets/svg/projects.svg');\n\tbackground-attachment: fixed;\n\tbackground-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixpREFBaUQ7Q0FDakQsNEJBQTRCO0NBQzVCLHNCQUFzQjtBQUN2QiIsImZpbGUiOiJzZWN0aW9uLXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyMTE4NTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3N2Zy9wcm9qZWN0cy5zdmcnKTtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9346:
/*!**********************************************************************************!*\
  !*** ./src/app/pro.module/components/section-skills/section-skills.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionSkillsComponent": () => (/* binding */ SectionSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/skills.service */ 2595);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function SectionSkillsComponent_div_8_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("title", "", skill_r3.Note, " \u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", skill_r3.Note, " stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("width: ", skill_r3.Note / 0.05, "%;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", skill_r3.Note, " stars");
} }
function SectionSkillsComponent_div_8_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r3.Level);
} }
function SectionSkillsComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SectionSkillsComponent_div_8_div_4_div_4_Template, 6, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SectionSkillsComponent_div_8_div_4_div_5_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/skills/", skill_r3.Icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", skill_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", skill_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", skill_r3.Note >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", skill_r3.Level != "");
} }
function SectionSkillsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SectionSkillsComponent_div_8_div_4_Template, 6, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("col-lg-", category_r1.Skills.length < 5 ? 6 : 12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r1.Skills);
} }
class SectionSkillsComponent {
    constructor(_skillsService) {
        this._skillsService = _skillsService;
    }
    ngOnInit() {
        this.categories = this._skillsService.getCategories();
    }
}
SectionSkillsComponent.ɵfac = function SectionSkillsComponent_Factory(t) { return new (t || SectionSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService)); };
SectionSkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionSkillsComponent, selectors: [["app-section-skills"]], decls: 9, vars: 1, consts: [[1, "container", "h-75"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "text-light"], [1, "row", "main", "shadow"], [1, "col-lg-12"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [1, "row", "skills", "justify-content-center", "justify-content-md-start"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "mx-1"], [1, "img-fluid", "skill", 3, "src", "alt", "title"], [1, "rating"], [3, "title", 4, "ngIf"], [4, "ngIf"], [3, "title"], [1, "gray-stars"], ["src", "/assets/misc/stars.png", 1, "img-fluid", 3, "alt"], [1, "gold-stars"], [1, "gold-stars-container"], ["src", "/assets/misc/stars.png", 3, "alt"], [1, "level"]], template: function SectionSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mes comp\u00E9tences");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SectionSkillsComponent_div_8_Template, 5, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["section[_ngcontent-%COMP%] {\n\tbackground-color: #98fb98;\n\tbackground-image: url('/assets/svg/skills.svg');\n\tbackground-attachment: fixed;\n\tbackground-size: cover;\n}\n\nh2[_ngcontent-%COMP%] {\n\ttext-shadow: 2px 2px 4px black;\n}\n\n.skill[_ngcontent-%COMP%] {\n\twidth: 75%;\n}\n\n.rating[_ngcontent-%COMP%] {\n\tposition: relative;\n\tmargin-bottom: 50px;\n}\n\n.gold-stars[_ngcontent-%COMP%], .gray-stars[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tleft: 12.5%;\n}\n\n.gold-stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .gray-stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 75px;\n}\n\n.gold-stars-container[_ngcontent-%COMP%] {\n\toverflow: hidden;\n}\n\n.gray-stars[_ngcontent-%COMP%] {\n\tfilter: grayscale(100%);\n}\n\n.level[_ngcontent-%COMP%] {\n\twhite-space: pre-wrap;\n}\n\n@media (max-width: 767px) {\n\t.skills[_ngcontent-%COMP%] {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsK0NBQStDO0NBQy9DLDRCQUE0QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtBQUNEIiwiZmlsZSI6InNlY3Rpb24tc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzk4ZmI5ODtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3N2Zy9za2lsbHMuc3ZnJyk7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmgyIHtcblx0dGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xufVxuXG4uc2tpbGwge1xuXHR3aWR0aDogNzUlO1xufVxuXG4ucmF0aW5nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZ29sZC1zdGFycywgLmdyYXktc3RhcnMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDEyLjUlO1xufVxuXG4uZ29sZC1zdGFycyBpbWcsIC5ncmF5LXN0YXJzIGltZyB7XG5cdHdpZHRoOiA3NXB4O1xufVxuXG4uZ29sZC1zdGFycy1jb250YWluZXIge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ3JheS1zdGFycyB7XG5cdGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4ubGV2ZWwge1xuXHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHQuc2tpbGxzIHtcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdH1cbn0iXX0= */"] });


/***/ }),

/***/ 1527:
/*!**************************************************!*\
  !*** ./src/app/pro.module/pro-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProRoutingModule": () => (/* binding */ ProRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base/base.component */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _components_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent }
];
class ProRoutingModule {
}
ProRoutingModule.ɵfac = function ProRoutingModule_Factory(t) { return new (t || ProRoutingModule)(); };
ProRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProRoutingModule });
ProRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3010:
/*!******************************************!*\
  !*** ./src/app/pro.module/pro.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProModule": () => (/* binding */ ProModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _pro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pro-routing.module */ 1527);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ 1900);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/base/base.component */ 4792);
/* harmony import */ var _components_section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-presentation/section-presentation.component */ 9089);
/* harmony import */ var _components_section_skills_section_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-skills/section-skills.component */ 9346);
/* harmony import */ var _components_section_career_section_career_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section-career/section-career.component */ 1353);
/* harmony import */ var _components_section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/section-projects/section-projects.component */ 4433);
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project/project.component */ 7926);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ 7043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);











class ProModule {
}
ProModule.ɵfac = function ProModule_Factory(t) { return new (t || ProModule)(); };
ProModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ProModule });
ProModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _pro_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProModule, { declarations: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
        _components_section_presentation_section_presentation_component__WEBPACK_IMPORTED_MODULE_3__.SectionPresentationComponent,
        _components_section_skills_section_skills_component__WEBPACK_IMPORTED_MODULE_4__.SectionSkillsComponent,
        _components_section_career_section_career_component__WEBPACK_IMPORTED_MODULE_5__.SectionCareerComponent,
        _components_section_projects_section_projects_component__WEBPACK_IMPORTED_MODULE_6__.SectionProjectsComponent,
        _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__.ProjectComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
        _components_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _pro_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProRoutingModule] }); })();


/***/ }),

/***/ 9094:
/*!*********************************************************!*\
  !*** ./src/app/pro.module/services/projects.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/projects.json */ 2456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class ProjectsService {
    constructor() {
        this.projects = _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    getPrivate() {
        let projects = [];
        for (let project of this.projects) {
            if (!project.Pro) {
                projects.push(project);
            }
        }
        return projects;
    }
    getPro() {
        let projects = [];
        for (let project of this.projects) {
            if (project.Pro) {
                projects.push(project);
            }
        }
        return projects;
    }
    getFavorite() {
        let projects = [];
        for (let project of this.projects) {
            if (project.Favorite) {
                projects.push(project);
            }
        }
        return projects;
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2595:
/*!*******************************************************!*\
  !*** ./src/app/pro.module/services/skills.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsService": () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/skills.json */ 1815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class SkillsService {
    constructor() {
        this.skills = _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    getCategories() {
        let categories = [];
        for (let skill of this.skills) {
            if (skill.Active && categories.filter(e => e.Name == skill.Category).length == 0) {
                let skills = this.getByCategory(skill.Category);
                categories.push({ Name: skill.Category, Skills: skills });
            }
        }
        return categories;
    }
    getByCategory(cat) {
        let skills = [];
        for (let skill of this.skills) {
            if (skill.Active && skill.Category == cat) {
                skills.push(skill);
            }
        }
        return skills;
    }
    getByName(name) {
        for (let skill of this.skills) {
            if (skill.Name == name) {
                return skill;
            }
        }
        return this.getByName("Default");
    }
}
SkillsService.ɵfac = function SkillsService_Factory(t) { return new (t || SkillsService)(); };
SkillsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SkillsService, factory: SkillsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2456:
/*!***************************************!*\
  !*** ./src/assets/data/projects.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"Name":"epsic.burkhalter.dev","Image":"prog-normalux.png","Url":"https://epsic.burkhalter.dev","Skills":["Angular"],"Date":"janv. 2019 – En cours","Pro":false,"Favorite":false,"Description":"Un site qui réexplique les modules d\'informatique que j\'ai vu en première année. Dans le but d\'aider mes collègues. Depuis, chaque classe de première année l\'utilise."},{"Name":"EPSIC Simulator","Image":"epsic-simulator.png","Url":"https://github.com/BurkhalterY/EPSIC-Simulator/releases","Skills":["Unity","C#"],"Date":"janv. – juin 2020","Pro":false,"Favorite":false,"Description":"Un jeu se déroulant à l\'école professionnelle et dont le but est de répondre à des questions afin d\'obtenir des points et des compétences pour pouvoir sortir."},{"Name":"japonais.normalux.ch","Image":"japonais.png","Url":"https://japonais.normalux.ch","Skills":["CodeIgniter"],"Date":"avr. – mai 2020","Pro":false,"Favorite":false,"Description":"Un site de révision de japonais. Il est possible de s\'exercer soit avec des flashcards, soit en traçant directement les caractères."},{"Name":"Bataille navale","Image":"bataille-navale.png","Url":"https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases","Skills":["C#"],"Date":"nov. 2019","Pro":false,"Favorite":true,"Description":"Jeu réalisé dans le cadre de l\'EPSIC. C\'est un jeu de bataille navale classique avec quelques fonctionnalités supplémentaires telles que des sonars et des bombes nucléaires."},{"Name":"Use Your Cheats","Image":"use-your-cheats.png","Url":"https://github.com/BurkhalterY/UseYourCheats/releases","Skills":["Android Studio","Java"],"Date":"août 2019","Pro":false,"Favorite":false,"Description":"Petite application Android qui exploite une faille dans le jeu <a target=\\"_blank\\" href=\\"https://useyourwords.lol\\">Use Your Words</a> et permet quelques tricheries."},{"Name":"TETRIS","Image":"tetris.png","Url":"https://github.com/BurkhalterY/various-projects/releases/download/v1.0/TETRIS.xlsm","Skills":["Excel","VBA"],"Date":"juin 2018","Pro":false,"Favorite":false,"Description":"TETRIS codé en VBA dans Excel pour le challenge. Peut ramer sur certains PC."},{"Name":"PAC-MAN","Image":"pac-man.png","Url":"https://github.com/BurkhalterY/Pacman/releases","Skills":["Java"],"Date":"avr. – mai 2018","Pro":false,"Favorite":false,"Description":"Un PAC-MAN développé from scratch en Java. Contient pas mal d\'options."},{"Name":"Machine à billes","Image":"machine-a-billes.jpg","Url":"https://youtu.be/_vz3g1flqTc","Skills":["Arduino"],"Date":"mars 2018","Pro":false,"Favorite":false,"Description":"Une machine qui trie les billes selon leur couleur (noir, blanc, rouge). Les pièces en bois ont été découpées avec une machine CNC."},{"Name":"Normalux.ch","Image":"normalux.png","Url":"https://www.normalux.ch","Skills":["CodeIgniter"],"Date":"janv. 2018","Pro":false,"Favorite":true,"Description":"Un site de jeu dans lequel il faut reproduire un dessin en 45s selon un modèle (similaire à Pokedraw.net qui est maintenant down). Il y a plusieurs modes de jeu."},{"Name":"Jeux en Just Basic","Image":"just-basic-space-invaders.png","Url":"https://github.com/BurkhalterY/various-projects/releases/download/v1.0/JustBasic.zip","Skills":["Just Basic"],"Date":"sept. 2017","Pro":false,"Favorite":false,"Description":"Quelques jeux comme PONG et Space Invaders programmés en Just Basic, un langage enseigné à l\'Orif pour apprendre la programmation."},{"Name":"Tank","Image":"tank.png","Url":"https://github.com/BurkhalterY/various-projects/releases/download/v1.0/tank.swf","Skills":["Flash"],"Date":"< 2017","Pro":false,"Favorite":false,"Description":"Toujours sur Flash, un jeu de tanks en solo ou à deux. Un seul monde en mode histoire + 4 stages multi."},{"Name":"PONG","Image":"flash-pong.png","Url":"https://github.com/BurkhalterY/various-projects/releases/download/v1.0/pong.exe","Skills":["Flash"],"Date":"sept. 2016","Pro":false,"Favorite":false,"Description":"Parmi mes premiers essais en programmation. Oui c\'est étonnant, j\'ai programmé en ActionScript sur Flash avant de toucher au HTML."},{"Name":"Swiss Emergency Lighting","Image":"els.png","Url":"https://emergencylighting.ch","Skills":["CodeIgniter"],"Date":"Swiss Emergency Lighting Sàrl","Pro":true,"Favorite":true,"Description":"Le site web de l\'entreprise Swiss Emergency Lighting, spécialisée dans l\'éclairage de sécurité."},{"Name":"Stock","Image":"orif-stock.png","Url":"https://stock.sectioninformatique.ch","Skills":["CodeIgniter"],"Date":"Orif de Pomy","Pro":true,"Favorite":false,"Description":"Il s\'agit du gestionnaire de stock de la section informatique de l\'Orif."},{"Name":"Helvetia","Image":"helvetia.png","Url":"https://helvetia.normalux.ch","Skills":["CodeIgniter"],"Date":"Adrex83","Pro":true,"Favorite":false,"Description":"Un site pour présenter le serveur Minecraft d\'un ami."}]');

/***/ }),

/***/ 1815:
/*!*************************************!*\
  !*** ./src/assets/data/skills.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"Name":"HTML 5","Category":"Développement web","Icon":"html.png","Note":5,"Level":"","Active":true},{"Name":"CSS 3","Category":"Développement web","Icon":"css.png","Note":4,"Level":"","Active":true},{"Name":"JavaScript","Category":"Développement web","Icon":"js.png","Note":4.5,"Level":"","Active":true},{"Name":"PHP","Category":"Développement web","Icon":"php.png","Note":5,"Level":"","Active":true},{"Name":"MySQL","Category":"Développement web","Icon":"mysql.png","Note":5,"Level":"","Active":true},{"Name":"Bootstrap","Category":"Frameworks","Icon":"bootstrap.png","Note":4.5,"Level":"","Active":true},{"Name":"jQuery","Category":"Frameworks","Icon":"jquery.png","Note":3.5,"Level":"","Active":true},{"Name":"Angular","Category":"Frameworks","Icon":"angular.png","Note":4,"Level":"","Active":true},{"Name":"CodeIgniter","Category":"Frameworks","Icon":"ci.png","Note":5,"Level":"","Active":true},{"Name":"ASP.NET","Category":"Frameworks","Icon":"aspdotnet.png","Note":2.5,"Level":"","Active":false},{"Name":"WordPress","Category":"CMS","Icon":"wordpress.png","Note":3,"Level":"","Active":false},{"Name":"Joomla!","Category":"CMS","Icon":"joomla.png","Note":2.5,"Level":"","Active":false},{"Name":"PrestaShop","Category":"CMS","Icon":"prestashop.png","Note":3,"Level":"","Active":false},{"Name":"Android Studio","Category":"Applications mobiles","Icon":"android-studio.png","Note":3.5,"Level":"","Active":false},{"Name":"Kotlin","Category":"Applications mobiles","Icon":"kotlin.png","Note":1.5,"Level":"","Active":false},{"Name":"C#","Category":"Autres langages","Icon":"csharp.png","Note":5,"Level":"","Active":true},{"Name":"Java","Category":"Autres langages","Icon":"java.png","Note":4.5,"Level":"","Active":true},{"Name":"Python","Category":"Autres langages","Icon":"python.png","Note":3,"Level":"","Active":true},{"Name":"Just Basic","Category":"Autres langages","Icon":"just-basic.png","Note":4.5,"Level":"","Active":false},{"Name":"Windows","Category":"Systèmes d\'exploitation","Icon":"windows.png","Note":5,"Level":"","Active":true},{"Name":"CLI","Category":"Systèmes d\'exploitation","Icon":"cmd.png","Note":3.5,"Level":"","Active":true},{"Name":"Android","Category":"Systèmes d\'exploitation","Icon":"android.png","Note":4.5,"Level":"","Active":true},{"Name":"Firefox","Category":"Logiciels","Icon":"firefox.png","Note":5,"Level":"","Active":true},{"Name":"Sublime Text","Category":"Logiciels","Icon":"sublimetext.png","Note":5,"Level":"","Active":true},{"Name":"VirtualBox","Category":"Logiciels","Icon":"virtualbox.png","Note":3.5,"Level":"","Active":true},{"Name":"Draw.io","Category":"Logiciels","Icon":"drawio.png","Note":4,"Level":"","Active":true},{"Name":"Word","Category":"Microsoft Office","Icon":"word.png","Note":4.5,"Level":"","Active":true},{"Name":"Excel","Category":"Microsoft Office","Icon":"excel.png","Note":5,"Level":"","Active":true},{"Name":"PowerPoint","Category":"Microsoft Office","Icon":"powerpoint.png","Note":5,"Level":"","Active":true},{"Name":"Publisher","Category":"Microsoft Office","Icon":"publisher.png","Note":4.5,"Level":"","Active":true},{"Name":"Access","Category":"Microsoft Office","Icon":"access.png","Note":4.5,"Level":"","Active":true},{"Name":"VBA","Category":"Microsoft Office","Icon":"vba.png","Note":3,"Level":"","Active":true},{"Name":"Paint.NET","Category":"Image & vidéo","Icon":"pdn.png","Note":4.5,"Level":"","Active":true},{"Name":"Adobe Premiere Pro","Category":"Image & vidéo","Icon":"premierepro.png","Note":3.5,"Level":"","Active":true},{"Name":"Flash","Category":"Image & vidéo","Icon":"flash-mx-2004.png","Note":4,"Level":"","Active":false},{"Name":"GitHub","Category":"Divers","Icon":"github.png","Note":4,"Level":"","Active":true},{"Name":"PhpMyAdmin","Category":"Divers","Icon":"phpmyadmin.png","Note":4,"Level":"","Active":true},{"Name":"PHPUnit","Category":"Divers","Icon":"phpunit.png","Note":2.5,"Level":"","Active":false},{"Name":"Node.js","Category":"Divers","Icon":"nodejs.png","Note":4,"Level":"","Active":false},{"Name":"Unity","Category":"Divers","Icon":"unity.png","Note":3.5,"Level":"","Active":true},{"Name":"Odoo","Category":"Divers","Icon":"odoo.png","Note":2.5,"Level":"","Active":false},{"Name":"Arduino","Category":"Divers","Icon":"arduino.png","Note":3,"Level":"","Active":true},{"Name":"Français","Category":"Langues","Icon":"fr.png","Note":-1,"Level":"Langue\\nmaternelle","Active":true},{"Name":"Anglais","Category":"Langues","Icon":"en_us.png","Note":-1,"Level":"B1","Active":true},{"Name":"Allemand","Category":"Langues","Icon":"de.png","Note":-1,"Level":"A1","Active":false},{"Name":"Record au Rubik\'s Cube 3x3","Category":"Hors informatique","Icon":"rubiks-cube.png","Note":-1,"Level":"~60\'","Active":false},{"Name":"Adobe Photoshop","Category":"Todo","Icon":"photoshop.png","Note":-1,"Level":"","Active":false},{"Name":"Adobe Illustrator","Category":"Todo","Icon":"illustrator.png","Note":-1,"Level":"","Active":false},{"Name":"Default","Category":"None","Icon":"","Note":-1,"Level":"","Active":false}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map