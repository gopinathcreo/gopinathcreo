"use strict";
(self["webpackChunkselfie_project"] = self["webpackChunkselfie_project"] || []).push([["main"],{

/***/ 7053:
/*!****************!*\
  !*** ./env.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ env)
/* harmony export */ });
const env = {
  firebase: {
    apiKey: "AIzaSyDUljp8vm_abh5foyi_wpM2DtlTaPxA7W0",
    authDomain: "selfi-e3c3d.firebaseapp.com",
    projectId: "selfi-e3c3d",
    storageBucket: "selfi-e3c3d.appspot.com",
    messagingSenderId: "174612138830",
    appId: "1:174612138830:web:3cca8883a5a2b0378bac1f",
    measurementId: "G-GWYJ4659XV"
  },
  vapidKey: "",
  firebaseprod: {
    apiKey: "AIzaSyDUljp8vm_abh5foyi_wpM2DtlTaPxA7W0",
    authDomain: "selfi-e3c3d.firebaseapp.com",
    projectId: "selfi-e3c3d",
    storageBucket: "selfi-e3c3d.appspot.com",
    messagingSenderId: "174612138830",
    appId: "1:174612138830:web:3cca8883a5a2b0378bac1f",
    measurementId: "G-GWYJ4659XV"
  }
};

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [
// { path: "login", component: LoginComponent },
{
  path: "",
  redirectTo: "dashboard",
  pathMatch: "full"
},
// {
//   path: "login",
//   loadChildren: () => import("src/app/dashboard-module/dashboard.module").then((m) => m.DashboardModule),
// },
{
  // canActivate: [AuthGuard],
  path: "dashboard",
  // loadChildren: () => import("src/app/view/view.module").then((m) => m.ViewModule),
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! src/app/dashboard-module/dashboard-module.module */ 8481)).then(m => m.DashboardModule)
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'selfie-project';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/app */ 6140);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ 980);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! env */ 7053);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpconfig.interceptor */ 3680);
/* harmony import */ var _dashboard_module_dashboard_module_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-module/dashboard-module.module */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





















// import { LibraryModule } from './library/library.module';
class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: _httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_4__.HttpConfigInterceptor,
    multi: true
  }, {
    provide: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.setPersistence,
    useValue: {
      appVerificationDisabledForTesting: true
    }
  }, {
    provide: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.useDeviceLanguage,
    useValue: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _dashboard_module_dashboard_module_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule,
  // LibraryModule,
  (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.initializeApp)(env__WEBPACK_IMPORTED_MODULE_2__.env.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)()), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.getFirestore)()), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.getStorage)()), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register("ngsw-worker.js", {
    enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
    registrationStrategy: "registerWhenStable:30000"
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _dashboard_module_dashboard_module_module__WEBPACK_IMPORTED_MODULE_5__.DashboardModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_10__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.StorageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 8481:
/*!*************************************************************!*\
  !*** ./src/app/dashboard-module/dashboard-module.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-component/login-component.component */ 4001);
/* harmony import */ var _dashboard_parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.parent */ 6422);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 542);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






// import { LibraryModule } from '../library/library.module';
// import { SharedModule } from '../shared/shared.module';
class DashboardModule {}
_class = DashboardModule;
_class.ɵfac = function DashboardModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _dashboard_parent__WEBPACK_IMPORTED_MODULE_1__.DashboardParent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 542:
/*!**************************************************************!*\
  !*** ./src/app/dashboard-module/dashboard-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-component/login-component.component */ 4001);
/* harmony import */ var _dashboard_parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.parent */ 6422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [
// { path: "", redirectTo: "login", pathMatch: "full" },
{
  path: "",
  component: _dashboard_parent__WEBPACK_IMPORTED_MODULE_1__.DashboardParent,
  children: [{
    path: "login",
    component: _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }]
}];
class DashboardRoutingModule {}
_class = DashboardRoutingModule;
_class.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6422:
/*!******************************************************!*\
  !*** ./src/app/dashboard-module/dashboard.parent.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardParent: () => (/* binding */ DashboardParent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class DashboardParent {
  ngOnInit() {}
}
_class = DashboardParent;
_class.ɵfac = function DashboardParent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dashboard"]],
  decls: 4,
  vars: 0,
  consts: [[1, "p-2"], ["href", "login"]],
  template: function DashboardParent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard hi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4001:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard-module/login-component/login-component.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




function LoginComponent_div_15_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const food_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", food_r7 == null ? null : food_r7.name, " | ", food_r7 == null ? null : food_r7.dial_code, " ");
  }
}
function LoginComponent_div_15_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.inError);
  }
}
function LoginComponent_div_15_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
  }
}
function LoginComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25)(5, "div", 2)(6, "div", 26)(7, "div", 27)(8, "div", 28)(9, "mat-form-field", 29)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginComponent_div_15_Template_mat_select_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.country = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_15_mat_option_19_Template, 2, 3, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 34)(21, "mat-form-field", 35)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_15_div_26_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 38)(28, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginComponent_div_15_span_30_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5)(32, "p")(33, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_15_Template_a_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r10.signInemailCreds.reset();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.showTemplate = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign in with email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.signInCreds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.countrySearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.country == null ? null : ctx_r0.country.name, " | ", ctx_r0.country == null ? null : ctx_r0.country.dial_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.inError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.signInCreds.valid || ctx_r0.apiLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.apiLoad);
  }
}
function LoginComponent_div_16_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid otp. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.OTPError);
  }
}
function LoginComponent_div_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resend code in ", ctx_r14.resend, " seconds");
  }
}
function LoginComponent_div_16_button_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Resend code ", _r11.value, " ");
  }
}
function LoginComponent_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.inError);
  }
}
function LoginComponent_div_16_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function LoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div", 23)(2, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile code verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25)(5, "div", 27)(6, "div", 28)(7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_16_div_11_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_16_div_12_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_16_div_13_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_16_button_14_Template, 2, 1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_16_div_15_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38)(17, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_16_span_19_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.otpCreds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" We have sent you an SMS with a code to ", ctx_r1.phonNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ((tmp_2_0 = ctx_r1.otpCreds.get("otp")) == null ? null : tmp_2_0.errors) && ctx_r1.otpformSubmited));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.otpCreds.get("otp")) == null ? null : tmp_3_0.errors) && ctx_r1.otpformSubmited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.OTPError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.resend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.inError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r11.value.length != 6 || ctx_r1.apiLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiLoad);
  }
}
function LoginComponent_div_17_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.inError);
  }
}
function LoginComponent_div_17_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div", 23)(2, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25)(5, "div", 27)(6, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27)(10, "div", 54)(11, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_17_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r20.showTemplate = 4;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.forgotPasswordSent = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_17_div_18_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 38)(20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_17_span_22_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5)(24, "p")(25, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_17_Template_a_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.showTemplate = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign in with mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.signInemailCreds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ((tmp_1_0 = ctx_r2.signInemailCreds.get("email")) == null ? null : tmp_1_0.errors) && ctx_r2.emailFormSubmited));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ((tmp_2_0 = ctx_r2.signInemailCreds.get("password")) == null ? null : tmp_2_0.errors) && ctx_r2.emailFormSubmited));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.inError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.signInemailCreds.valid || ctx_r2.apiLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.apiLoad);
  }
}
function LoginComponent_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.inError);
  }
}
function LoginComponent_div_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
  }
}
function LoginComponent_div_18_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password link sent to email ", ctx_r25.forgotPasswordSent, ". Tip: check spam/junk folders if not found in inbox. ");
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div", 23)(2, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25)(5, "div", 59)(6, "div", 54)(7, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_18_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r26.signInemailCreds.reset();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.showTemplate = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Back to Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_18_div_14_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38)(16, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_span_18_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_18_div_19_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.signInemailCreds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ((tmp_1_0 = ctx_r3.signInemailCreds.get("email")) == null ? null : tmp_1_0.errors) && ctx_r3.emailFormSubmited));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.inError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !((tmp_3_0 = ctx_r3.signInemailCreds.get("email")) == null ? null : tmp_3_0.valid) || ctx_r3.apiLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.apiLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.forgotPasswordSent);
  }
}
class LoginComponent {
  constructor(fb) {
    this.fb = fb;
    this.is_browser = false;
    this.countryList = [];
    this.emailFormSubmited = false;
    this.forgotPasswordSent = "";
    // @ViewChild("otp", { static: false }) otp: any;
    this.countrySearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    this.showTemplate = 1;
    this.signInCreds = this.fb.group({
      phonno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
    });
    this.signInemailCreds = this.fb.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$")]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
    });
    this.otpCreds = this.fb.group({
      otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)])
    });
    // this.getServerResponse("");
    // this.countrySearch.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((data) => {
    //   this.getServerResponse(data);
    // });
    //   this.otpCreds.get('otp')?.valueChanges.subscribe(res=>{
    //     if((""+res).length>5){
    //       this.otpConform();
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  decls: 25,
  vars: 4,
  consts: [["id", "content", "role", "main", 1, "flex-grow-1"], [1, "container-fluid"], [1, "row"], [1, "col-lg-5", "col-xl-4", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "min-vh-lg-100", "position-relative", 2, "background-color", "#FFFCFB"], [1, "flex-grow-1", "p-5"], [1, "text-center"], [1, "mb-4", "mt-8", "device-mobile", "mx-auto"], ["href", "./", "aria-label", "ibeLogo"], ["src", "./assets/logo.svg", "alt", "ibe Logo", 1, "navbar-brand-logo"], ["src", "./assets/svg/welcome_screen.svg", "alt", "ibe Logo"], [1, "position-absolute", "start-0", "end-0", "bottom-0", "text-center", "p-5"], [1, "row", "justify-content-center"], [1, "col-sm-auto"], [1, "col-lg-7", "col-xl-8", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], ["class", "flex-grow-1 mx-auto", "style", "max-width: 32rem", 4, "ngIf"], ["class", "flex-grow-1 mx-auto", "style", "max-width: 28rem", 4, "ngIf"], [1, "position-absolute", "zi-n1", "d-none", "d-lg-flex", 2, "top", "-35rem", "left", "40rem", "width", "62rem", "height", "62rem"], ["preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 260 260"], ["fill", "#FFFCFB", "opacity", ".7", "cx", "130", "cy", "130", "r", "130"], [1, "position-absolute", "zi-n1", "d-none", "d-lg-flex", 2, "top", "15rem", "left", "70rem", "width", "20rem", "height", "20rem"], ["src", "./assets/svg/components/circled-stripe.svg", "alt", "Image Description", 1, "img-fluid"], ["id", "recaptcha-container", 1, "mb-3"], [1, "flex-grow-1", "mx-auto", 2, "max-width", "32rem"], [1, "text-center", "mb-5", "mb-md-7"], [1, "h2"], ["novalidate", "", "autocomplete", "off", 1, "js-validate", "needs-validation", 3, "formGroup"], [1, "col-5"], [1, "mb-4"], [1, "js-form-message", "form-group"], [1, "width", 2, "width", "100%"], ["disableOptionCentering", "", 3, "value", "valueChange"], [1, "p-2"], ["matInput", "", "placeholder", "Search Country", "aria-label", "Country", 1, "border", "p-2", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "example-form-field"], ["matInput", "", "type", "text", "formControlName", "phonno"], [4, "ngIf"], [1, "d-grid", "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "link", 2, "cursor", "pointer", 3, "click"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "flex-grow-1", "mx-auto", 2, "max-width", "28rem"], ["for", "signinSrEmail", 1, "input-label"], ["type", "number", "min", "0", "id", "otptype", "name", "otp", "formControlName", "otp", "placeholder", "Enter mobile code", 1, "form-control", "form-control-lg", 3, "ngClass"], ["otp", ""], ["class", "invalid-feedback", 4, "ngIf"], ["type", "button", "class", "btn btn-link", 4, "ngIf"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "btn-link"], ["for", "signupModalFormLoginEmail", 1, "form-label"], ["type", "email", "formControlName", "email", "placeholder", "Enter email", 1, "form-control", "form-control-lg", 3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center"], ["for", "signupModalFormLoginPassword", 1, "form-label"], [1, "form-label-link", 2, "cursor", "pointer", 3, "click"], [1, "input-group", "input-group-merge"], ["type", "password", "formControlName", "password", "name", "password", "placeholder", "Enter password", 1, "js-toggle-password", "form-control", "form-control-lg", 3, "ngClass"], [1, "mb-3"], ["for", "signupModalFormResetPasswordEmail", "tabindex", "0", 1, "form-label"], [1, "bi-chevron-left", "small", "ms-1"], ["class", "alert alert-soft-success", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-soft-success"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "figure", 5)(6, "div", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 35, 9, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 20, 12, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 27, 10, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 20, 8, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTemplate == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTemplate == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTemplate == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTemplate == 4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 3680:
/*!*******************************************!*\
  !*** ./src/app/httpconfig.interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpConfigInterceptor: () => (/* binding */ HttpConfigInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;







class HttpConfigInterceptor {
  constructor(router, platformId) {
    this.router = router;
    this.platformId = platformId;
    this.is_browser = false;
    this.is_browser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId) ? true : false;
  }
  intercept(request, next) {
    if (this.is_browser) {
      const token = localStorage.getItem("selfi_dashboard_token");
      if (token) {
        request = request.clone({
          headers: request.headers.set("Authorization", token)
        });
      }
    }
    if (!request.headers.has("file")) {
      if (!request.headers.has("Content-Type")) {
        request = request.clone({
          headers: request.headers.set("Content-Type", "application/json")
        });
      }
    }
    request = request.clone({
      headers: request.headers.set("Accept", "application/json")
    });
    request = request.clone({
      headers: request.headers.set("clienttz", "Asia/Kolkata")
    });
    request = request.clone({
      headers: request.headers.set("X-Timezone-Offset", this.getTimezoneOffset())
    });
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(evt => {
      if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {}
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      let errorMessage = "";
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
        try {
          console.error("HttpErrorResponse", err);
          if (err.status == 401) {
            this.router.navigate(["login"]);
          }
          if (err.status == 403) {
            this.showMessage("Not allowed", err.error.detail);
          }
          errorMessage = "";
          if (err.error instanceof ErrorEvent) {
            errorMessage = `Error: ${err.error.message}`;
          } else {
            errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
          }
          if (err.status > 499) {
            // window.alert(errorMessage);
          }
        } catch (e) {
          console.error("HttpErrorResponse", e);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
    }));
  }
  getTimezoneOffset() {
    return String(new Date().getTimezoneOffset());
  }
  showMessage(title = "urbanut", text = "Success ") {}
}
_class = HttpConfigInterceptor;
_class.ɵfac = function HttpConfigInterceptor_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
var is_localhost = false;
// var newURL =  window.location.host.split(":")[0];
// if (newURL == 'localhost' || newURL == '127.0.0.1') {
//   is_localhost = true;
// }
const environment = {
  production: false,
  baseURL: '',
  is_localhost: is_localhost,
  login: "/api/v1/user/login/",
  scanList: "/api/v1/scan/",
  scanGet: "/api/v1/scan/{id}/",
  scanEdit: "/api/v1/scan/{id}/",
  userList: "/api/v1/user/",
  user: "/api/v1/user/",
  userGet: "/api/v1/user/{id}/",
  userEdit: "/api/v1/user/{id}/",
  scanlatlng: "/api/v1/scan/latlng/",
  scanFromIdsList: "/api/v1/scan/from/ids/",
  scanEvents: '/api/v1/scan/events/',
  scandetail: '/api/v1/scan/{id}/',
  patientList: "/api/v1/user/patient/",
  patientGet: "/api/v1/user/patient/{id}/"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map