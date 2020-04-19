function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./management/auth-guard.service */
    "./src/app/management/auth-guard.service.ts");
    /* harmony import */


    var _management_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./management/management.component */
    "./src/app/management/management.component.ts");
    /* harmony import */


    var _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./management/management-login/management-login.component */
    "./src/app/management/management-login/management-login.component.ts");
    /* harmony import */


    var _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./management/management-home/management-home.component */
    "./src/app/management/management-home/management-home.component.ts");
    /* harmony import */


    var _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./management/management-register/management-register.component */
    "./src/app/management/management-register/management-register.component.ts");
    /* harmony import */


    var _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./management/management-suppliers/management-suppliers.component */
    "./src/app/management/management-suppliers/management-suppliers.component.ts");
    /* harmony import */


    var _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./management/management-distributors/management-distributors.component */
    "./src/app/management/management-distributors/management-distributors.component.ts");
    /* harmony import */


    var _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./management/management-sales/management-sales.component */
    "./src/app/management/management-sales/management-sales.component.ts");
    /* harmony import */


    var _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./management/management-products/management-products.component */
    "./src/app/management/management-products/management-products.component.ts");
    /* harmony import */


    var _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./management/management-passwordchange/management-passwordchange.component */
    "./src/app/management/management-passwordchange/management-passwordchange.component.ts");

    var routes = [{
      path: 'management',
      component: _management_management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"],
      children: [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_4__["ManagementLoginComponent"]
      }, {
        path: 'home',
        component: _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_5__["ManagementHomeComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'register',
        component: _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_6__["ManagementRegisterComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'suppliers',
        component: _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_7__["ManagementSuppliersComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'distributors',
        component: _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_8__["ManagementDistributorsComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'sales',
        component: _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_9__["ManagementSalesComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'products',
        component: _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_10__["ManagementProductsComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'passwordchange',
        component: _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_11__["ManagementPasswordchangeComponent"],
        canActivate: [_management_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'cutie-plushie';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@font-face {\r\n    font-family: poppins;\r\n    src: url('Poppins-Regular.ttf');\r\n  }\r\n\r\n@font-face {\r\n  font-family: poppins-bold;\r\n  src: url('Poppins-Bold.ttf');\r\n}\r\n\r\ndiv[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], input[_ngcontent-%COMP%], label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n    font-family: poppins;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiwrQkFBNkM7RUFDL0M7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTBDO0FBQzVDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XHJcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XHJcbiAgfVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMtYm9sZDtcclxuICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUG9wcGlucy1Cb2xkLnR0Zik7XHJcbn1cclxuXHJcbmRpdixoMSxoMixoMyxoNCxoNSxoNixpbnB1dCxsYWJlbCxwe1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _management_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./management/management.component */
    "./src/app/management/management.component.ts");
    /* harmony import */


    var _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./management/management-home/management-home.component */
    "./src/app/management/management-home/management-home.component.ts");
    /* harmony import */


    var _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./management/management-register/management-register.component */
    "./src/app/management/management-register/management-register.component.ts");
    /* harmony import */


    var _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./management/management-suppliers/management-suppliers.component */
    "./src/app/management/management-suppliers/management-suppliers.component.ts");
    /* harmony import */


    var _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./management/management-distributors/management-distributors.component */
    "./src/app/management/management-distributors/management-distributors.component.ts");
    /* harmony import */


    var _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./management/management-sales/management-sales.component */
    "./src/app/management/management-sales/management-sales.component.ts");
    /* harmony import */


    var _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./management/management-products/management-products.component */
    "./src/app/management/management-products/management-products.component.ts");
    /* harmony import */


    var _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./management/management-login/management-login.component */
    "./src/app/management/management-login/management-login.component.ts");
    /* harmony import */


    var _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./management/management-passwordchange/management-passwordchange.component */
    "./src/app/management/management-passwordchange/management-passwordchange.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _management_management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"], _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_13__["ManagementLoginComponent"], _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_7__["ManagementHomeComponent"], _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_8__["ManagementRegisterComponent"], _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_9__["ManagementSuppliersComponent"], _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_10__["ManagementDistributorsComponent"], _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_11__["ManagementSalesComponent"], _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_12__["ManagementProductsComponent"], _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_14__["ManagementPasswordchangeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _management_management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"], _management_management_login_management_login_component__WEBPACK_IMPORTED_MODULE_13__["ManagementLoginComponent"], _management_management_home_management_home_component__WEBPACK_IMPORTED_MODULE_7__["ManagementHomeComponent"], _management_management_register_management_register_component__WEBPACK_IMPORTED_MODULE_8__["ManagementRegisterComponent"], _management_management_suppliers_management_suppliers_component__WEBPACK_IMPORTED_MODULE_9__["ManagementSuppliersComponent"], _management_management_distributors_management_distributors_component__WEBPACK_IMPORTED_MODULE_10__["ManagementDistributorsComponent"], _management_management_sales_management_sales_component__WEBPACK_IMPORTED_MODULE_11__["ManagementSalesComponent"], _management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_12__["ManagementProductsComponent"], _management_management_passwordchange_management_passwordchange_component__WEBPACK_IMPORTED_MODULE_14__["ManagementPasswordchangeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/auth-guard.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/management/auth-guard.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppManagementAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/management/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(authService, router) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isAuthenticated()) {
            return true;
          }

          this.router.navigate(['management/login']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/auth.service.ts":
  /*!********************************************!*\
    !*** ./src/app/management/auth.service.ts ***!
    \********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppManagementAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService() {
        _classCallCheck(this, AuthService);
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = localStorage.getItem('cutie-plushie-token');

          if (token != null && token != '') {
            return true;
          }

          return false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-distributors/management-distributors.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/management/management-distributors/management-distributors.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ManagementDistributorsComponent */

  /***/
  function srcAppManagementManagementDistributorsManagementDistributorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementDistributorsComponent", function () {
      return ManagementDistributorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManagementDistributorsComponent =
    /*#__PURE__*/
    function () {
      function ManagementDistributorsComponent() {
        _classCallCheck(this, ManagementDistributorsComponent);
      }

      _createClass(ManagementDistributorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagementDistributorsComponent;
    }();

    ManagementDistributorsComponent.ɵfac = function ManagementDistributorsComponent_Factory(t) {
      return new (t || ManagementDistributorsComponent)();
    };

    ManagementDistributorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementDistributorsComponent,
      selectors: [["app-management-distributors"]],
      decls: 2,
      vars: 0,
      template: function ManagementDistributorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-distributors works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LWRpc3RyaWJ1dG9ycy9tYW5hZ2VtZW50LWRpc3RyaWJ1dG9ycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementDistributorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management-distributors',
          templateUrl: './management-distributors.component.html',
          styleUrls: ['./management-distributors.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-home/management-home.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/management/management-home/management-home.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ManagementHomeComponent */

  /***/
  function srcAppManagementManagementHomeManagementHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementHomeComponent", function () {
      return ManagementHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManagementHomeComponent =
    /*#__PURE__*/
    function () {
      function ManagementHomeComponent() {
        _classCallCheck(this, ManagementHomeComponent);
      }

      _createClass(ManagementHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagementHomeComponent;
    }();

    ManagementHomeComponent.ɵfac = function ManagementHomeComponent_Factory(t) {
      return new (t || ManagementHomeComponent)();
    };

    ManagementHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementHomeComponent,
      selectors: [["app-management-home"]],
      decls: 2,
      vars: 0,
      template: function ManagementHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LWhvbWUvbWFuYWdlbWVudC1ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management-home',
          templateUrl: './management-home.component.html',
          styleUrls: ['./management-home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-login/management-login.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/management/management-login/management-login.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ManagementLoginComponent */

  /***/
  function srcAppManagementManagementLoginManagementLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementLoginComponent", function () {
      return ManagementLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagementLoginComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese una clave de usuario");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementLoginComponent_div_10_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Su clave de usuario debe tener 9 caracteres alfanum\xE9ricos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementLoginComponent_div_10_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Su clave de usuario debe tener 9 caracteres alfanum\xE9ricos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementLoginComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementLoginComponent_div_10_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementLoginComponent_div_10_div_2_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManagementLoginComponent_div_10_div_3_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.submitted && ctx_r21.loginForm.controls.user.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.submitted && ctx_r21.loginForm.controls.user.errors.maxlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.submitted && ctx_r21.loginForm.controls.user.errors.minlength);
      }
    }

    function ManagementLoginComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingrese su contrase\xF1a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementLoginComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementLoginComponent_div_15_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.submitted && ctx_r22.loginForm.controls.password.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ManagementLoginComponent =
    /*#__PURE__*/
    function () {
      function ManagementLoginComponent(http, router, formBuilder) {
        _classCallCheck(this, ManagementLoginComponent);

        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        var token = localStorage.getItem('cutie-plushie-token');

        if (token != null) {
          this.router.navigate(['management/home']);
        }

        this.loginForm = this.formBuilder.group({
          user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(ManagementLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var res, body, bodyJson, user, token;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.submitted = true; // Stop here if form is invalid

                    if (!this.loginForm.invalid) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    _context.next = 5;
                    return this.validate(this.loginForm.controls.user.value, this.loginForm.controls.password.value);

                  case 5:
                    res = _context.sent;

                    if (res.status == 200) {
                      body = res.body;
                      bodyJson = JSON.parse(JSON.stringify(body));
                      user = {
                        userKey: bodyJson.userKey,
                        userName: bodyJson.userName,
                        userLastName: bodyJson.userLastName,
                        userGroup: bodyJson.userGroup
                      };
                      token = bodyJson.token;
                      localStorage.setItem('cutie-plushie-token', token);
                      localStorage.setItem('user-details', JSON.stringify(user));
                      this.router.navigate(['management/home']);
                    } else if (res.status == 401) {
                      alert("Usuario y/o contraseña incorrectos.");
                    }

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "validate",
        value: function validate(key, password) {
          password = btoa(password);
          return this.http.post('/api/v1/management/login', {
            'key': key,
            'pwd': password
          }, {
            observe: 'response',
            responseType: 'json'
          }).toPromise();
        }
      }]);

      return ManagementLoginComponent;
    }();

    ManagementLoginComponent.ɵfac = function ManagementLoginComponent_Factory(t) {
      return new (t || ManagementLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ManagementLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ManagementLoginComponent,
      selectors: [["app-management-login"]],
      decls: 19,
      vars: 9,
      consts: [[1, "login-component"], [1, "form-container"], ["height", "120px", "alt", "Logo", "src", "assets/images/cutie_plushie_logo.png"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "user"], ["type", "text", "formControlName", "user", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn-login"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function ManagementLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bienvenido a Cutie Plushie!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ManagementLoginComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Clave de usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManagementLoginComponent_div_10_Template, 4, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManagementLoginComponent_div_15_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Iniciar sesi\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.loginForm.controls.user.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.controls.user.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.loginForm.controls.password.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.controls.password.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["button[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n} \r\n\r\n.btn-login[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  height:50px;\r\n  display:block;\r\n  position:relative;\r\n  z-index:1;\r\n  border-radius:25px;\r\n  overflow:hidden;\r\n  margin:0 auto;\r\n  display:-webkit-box;\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n  -webkit-box-pack:center;\r\n          justify-content:center;\r\n  padding-top:13px;\r\n  font-family: poppins-bold;\r\n  font-size:15px;\r\n  font-style: bold;\r\n  line-height:1.2;\r\n  text-transform:uppercase;\r\n  -webkit-box-align:center;\r\n          align-items:center;\r\n  padding:0 20px;\r\n  background-color: #C4E6FF;\r\n} \r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n  width:390px;\r\n  background:#fff;\r\n  border-radius:10px;\r\n  overflow:hidden;\r\n  padding:77px 55px 33px;\r\n  text-align: center;\r\n  box-shadow:0 5px 10px 0 rgba(0,0,0,.1);\r\n  margin-top: 5%;\r\n} \r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n  border-bottom:2px solid #adadad;\r\n  margin-bottom:10px;\r\n  font-size:20px;\r\n  color:#555;\r\n  line-height:1.2;\r\n  display:block;\r\n  width:100%;\r\n  height:45px;\r\n  background:0 0;\r\n  padding:0 5px\r\n} \r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n  margin-bottom:30px;\r\n} \r\n\r\n.invalid-feedback[_ngcontent-%COMP%]{\r\n  margin-bottom:10px;\r\n  color:#ff88ac;\r\n} \r\n\r\n.login-component[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 15px;\r\n  font-family: poppins;\r\n} \r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form)  {\r\n  border-left: 5px solid #ff88ac; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtbG9naW4vbWFuYWdlbWVudC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQVk7RUFBWixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsd0JBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUMiLCJmaWxlIjoiYXBwL21hbmFnZW1lbnQvbWFuYWdlbWVudC1sb2dpbi9tYW5hZ2VtZW50LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG5cclxuLmJ0bi1sb2dpbntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDoxO1xyXG4gIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgbWFyZ2luOjAgYXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDoxM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC1zdHlsZTogYm9sZDtcclxuICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBwYWRkaW5nOjAgMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFNkZGO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgd2lkdGg6MzkwcHg7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcGFkZGluZzo3N3B4IDU1cHggMzNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzowIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2FkYWRhZDtcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgY29sb3I6IzU1NTtcclxuICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDo0NXB4O1xyXG4gIGJhY2tncm91bmQ6MCAwO1xyXG4gIHBhZGRpbmc6MCA1cHhcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgY29sb3I6I2ZmODhhYztcclxufVxyXG5cclxuLmxvZ2luLWNvbXBvbmVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZjg4YWM7IC8qIHJlZCAqL1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagementLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-management-login',
          templateUrl: './management-login.component.html',
          styleUrls: ['./management-login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-passwordchange/management-passwordchange.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/management/management-passwordchange/management-passwordchange.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ManagementPasswordchangeComponent */

  /***/
  function srcAppManagementManagementPasswordchangeManagementPasswordchangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementPasswordchangeComponent", function () {
      return ManagementPasswordchangeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagementPasswordchangeComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor ingrese su contrase\xF1a anterior ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementPasswordchangeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementPasswordchangeComponent_div_9_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.submitted && ctx_r27.passwordChangeForm.controls.oldPassword.errors.required);
      }
    }

    function ManagementPasswordchangeComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor ingrese su nueva contrase\xF1a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementPasswordchangeComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementPasswordchangeComponent_div_14_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.submitted && ctx_r28.passwordChangeForm.controls.newPassword.errors.required);
      }
    }

    function ManagementPasswordchangeComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor confirme su nueva contrase\xF1a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementPasswordchangeComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\xF1a no coincide con su nueva contrase\xF1a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ManagementPasswordchangeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagementPasswordchangeComponent_div_19_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementPasswordchangeComponent_div_19_div_2_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.submitted && ctx_r29.passwordChangeForm.controls.confirmPassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.submitted && ctx_r29.passwordChangeForm.controls.confirmPassword.errors.pattern);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ManagementPasswordchangeComponent =
    /*#__PURE__*/
    function () {
      function ManagementPasswordchangeComponent(http, router, formBuilder) {
        _classCallCheck(this, ManagementPasswordchangeComponent);

        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.passwordChangeForm = this.formBuilder.group({
          oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^$")])
        });
      }

      _createClass(ManagementPasswordchangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var value, res, body, bodyJson, token;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.submitted = true;
                    value = this.passwordChangeForm.controls.confirmPassword.value;
                    this.passwordChangeForm.removeControl("confirmPassword");
                    this.passwordChangeForm.addControl("confirmPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](value, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^" + this.passwordChangeForm.controls.newPassword.value + "$")])); // Stop here if form is invalid

                    if (!this.passwordChangeForm.invalid) {
                      _context2.next = 6;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 6:
                    _context2.prev = 6;
                    _context2.next = 9;
                    return this.changePassword(this.passwordChangeForm.controls.oldPassword.value, this.passwordChangeForm.controls.newPassword.value);

                  case 9:
                    res = _context2.sent;
                    _context2.next = 18;
                    break;

                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](6);
                    alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
                    localStorage.removeItem('cutie-plushie-token');
                    localStorage.getItem('user-details');
                    this.router.navigate(['management/login']);

                  case 18:
                    if (res.status == 200) {
                      body = res.body;
                      bodyJson = JSON.parse(JSON.stringify(body));
                      token = bodyJson.token;
                      localStorage.setItem('cutie-plushie-token', token);
                      alert('Su contraseña se ha cambiado con éxito!');
                    } else if (res.status == 401) {
                      alert("Su contraseña anterior no coincide con los registros. Por favor intente de nuevo.");
                    }

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[6, 12]]);
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword(pwdOld, pwdNew) {
          var user = JSON.parse(localStorage.getItem('user-details')).userKey;
          var token = localStorage.getItem('cutie-plushie-token');
          pwdOld = btoa(pwdOld);
          pwdNew = btoa(pwdNew);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "Bearer " + token);
          return this.http.put('/api/v1/management/users/' + user, {
            'pwdOld': pwdOld,
            'pwdNew': pwdNew
          }, {
            headers: headers,
            observe: 'response',
            responseType: 'json'
          }).toPromise();
        }
      }]);

      return ManagementPasswordchangeComponent;
    }();

    ManagementPasswordchangeComponent.ɵfac = function ManagementPasswordchangeComponent_Factory(t) {
      return new (t || ManagementPasswordchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    ManagementPasswordchangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ManagementPasswordchangeComponent,
      selectors: [["app-management-passwordchange"]],
      decls: 23,
      vars: 13,
      consts: [[1, "passwordchange-component"], [1, "form-container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "oldPassword"], ["type", "password", "formControlName", "oldPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "btn-passwordchange"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function ManagementPasswordchangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cambiar contrase\xF1a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ManagementPasswordchangeComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Contrase\xF1a anterior");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ManagementPasswordchangeComponent_div_9_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Contrase\xF1a nueva");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ManagementPasswordchangeComponent_div_14_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Confirmar contrase\xF1a nueva");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ManagementPasswordchangeComponent_div_19_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Cambiar mi contrase\xF1a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passwordChangeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.passwordChangeForm.controls.oldPassword.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passwordChangeForm.controls.oldPassword.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.passwordChangeForm.controls.newPassword.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passwordChangeForm.controls.newPassword.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.passwordChangeForm.controls.confirmPassword.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passwordChangeForm.controls.confirmPassword.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["h1[_ngcontent-%COMP%]{\r\n    margin-bottom: 5%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    width: 250px;\r\n    margin: 20px;\r\n}\r\n\r\n.btn-passwordchange[_ngcontent-%COMP%]{\r\n    width:25%;\r\n    height:50px;\r\n    display:block;\r\n    position:relative;\r\n    z-index:1;\r\n    border-radius:25px;\r\n    overflow:hidden;\r\n    margin:0 15%;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding-top:13px;\r\n    font-family: poppins-bold;\r\n    font-size:15px;\r\n    font-style: bold;\r\n    line-height:1.2;\r\n    text-transform:uppercase;\r\n    -webkit-box-align:center;\r\n            align-items:center;\r\n    background-color: #C4E6FF;\r\n  }\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    background:#fff;\r\n    border-radius:10px;\r\n    overflow:hidden;\r\n    padding:20px 45px;\r\n    text-align: left;\r\n    margin-top: 2%;\r\n    margin-left: 20%;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    border-bottom:2px solid #adadad;\r\n    margin-bottom:10px;\r\n    font-size:20px;\r\n    color:#555;\r\n    width:30%;\r\n    height:35px;\r\n    background:0 0;\r\n    padding: 5px;\r\n    align-self: flex-end;\r\n    align-content: flex-end;\r\n  }\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n    padding-left: 5%;\r\n    margin: 25px;\r\n    vertical-align: middle;\r\n    display: -webkit-box;\r\n    display: flex; \r\n    -webkit-box-align: center; \r\n            align-items: center;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%]{\r\n    margin-left:10px;\r\n    color:#ff88ac;\r\n  }\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form)  {\r\n    border-left: 5px solid #ff88ac; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcGFzc3dvcmRjaGFuZ2UvbWFuYWdlbWVudC1wYXNzd29yZGNoYW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBWTtJQUFaLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix3QkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7QUFFRjtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBR0Y7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDIiwiZmlsZSI6ImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcGFzc3dvcmRjaGFuZ2UvbWFuYWdlbWVudC1wYXNzd29yZGNoYW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmJ0bi1wYXNzd29yZGNoYW5nZXtcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyNXB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgbWFyZ2luOjAgMTUlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6MTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFNkZGO1xyXG4gIH1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBhZGRpbmc6MjBweCA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGNvbG9yOiM1NTU7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuICAgIGJhY2tncm91bmQ6MCAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBjb2xvcjojZmY4OGFjO1xyXG4gIH1cclxuICBcclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmY4OGFjOyAvKiByZWQgKi9cclxufVxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagementPasswordchangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-management-passwordchange',
          templateUrl: './management-passwordchange.component.html',
          styleUrls: ['./management-passwordchange.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-products/management-products.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/management/management-products/management-products.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ManagementProductsComponent */

  /***/
  function srcAppManagementManagementProductsManagementProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementProductsComponent", function () {
      return ManagementProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManagementProductsComponent =
    /*#__PURE__*/
    function () {
      function ManagementProductsComponent() {
        _classCallCheck(this, ManagementProductsComponent);
      }

      _createClass(ManagementProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagementProductsComponent;
    }();

    ManagementProductsComponent.ɵfac = function ManagementProductsComponent_Factory(t) {
      return new (t || ManagementProductsComponent)();
    };

    ManagementProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementProductsComponent,
      selectors: [["app-management-products"]],
      decls: 2,
      vars: 0,
      template: function ManagementProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-products works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXByb2R1Y3RzL21hbmFnZW1lbnQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management-products',
          templateUrl: './management-products.component.html',
          styleUrls: ['./management-products.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-register/management-register.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/management/management-register/management-register.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ManagementRegisterComponent */

  /***/
  function srcAppManagementManagementRegisterManagementRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementRegisterComponent", function () {
      return ManagementRegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManagementRegisterComponent =
    /*#__PURE__*/
    function () {
      function ManagementRegisterComponent() {
        _classCallCheck(this, ManagementRegisterComponent);
      }

      _createClass(ManagementRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagementRegisterComponent;
    }();

    ManagementRegisterComponent.ɵfac = function ManagementRegisterComponent_Factory(t) {
      return new (t || ManagementRegisterComponent)();
    };

    ManagementRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementRegisterComponent,
      selectors: [["app-management-register"]],
      decls: 2,
      vars: 0,
      template: function ManagementRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-register works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXJlZ2lzdGVyL21hbmFnZW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management-register',
          templateUrl: './management-register.component.html',
          styleUrls: ['./management-register.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-sales/management-sales.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/management/management-sales/management-sales.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ManagementSalesComponent */

  /***/
  function srcAppManagementManagementSalesManagementSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementSalesComponent", function () {
      return ManagementSalesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManagementSalesComponent =
    /*#__PURE__*/
    function () {
      function ManagementSalesComponent() {
        _classCallCheck(this, ManagementSalesComponent);
      }

      _createClass(ManagementSalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagementSalesComponent;
    }();

    ManagementSalesComponent.ɵfac = function ManagementSalesComponent_Factory(t) {
      return new (t || ManagementSalesComponent)();
    };

    ManagementSalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementSalesComponent,
      selectors: [["app-management-sales"]],
      decls: 2,
      vars: 0,
      template: function ManagementSalesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-sales works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXNhbGVzL21hbmFnZW1lbnQtc2FsZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementSalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management-sales',
          templateUrl: './management-sales.component.html',
          styleUrls: ['./management-sales.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management-suppliers/management-suppliers.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/management/management-suppliers/management-suppliers.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ManagementSuppliersComponent */

  /***/
  function srcAppManagementManagementSuppliersManagementSuppliersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementSuppliersComponent", function () {
      return ManagementSuppliersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManagementSuppliersComponent =
    /*#__PURE__*/
    function () {
      function ManagementSuppliersComponent() {
        _classCallCheck(this, ManagementSuppliersComponent);
      }

      _createClass(ManagementSuppliersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagementSuppliersComponent;
    }();

    ManagementSuppliersComponent.ɵfac = function ManagementSuppliersComponent_Factory(t) {
      return new (t || ManagementSuppliersComponent)();
    };

    ManagementSuppliersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementSuppliersComponent,
      selectors: [["app-management-suppliers"]],
      decls: 2,
      vars: 0,
      template: function ManagementSuppliersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management-suppliers works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LXN1cHBsaWVycy9tYW5hZ2VtZW50LXN1cHBsaWVycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementSuppliersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management-suppliers',
          templateUrl: './management-suppliers.component.html',
          styleUrls: ['./management-suppliers.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/management/management.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/management/management.component.ts ***!
    \****************************************************/

  /*! exports provided: ManagementComponent */

  /***/
  function srcAppManagementManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagementComponent", function () {
      return ManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagementComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_2_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.goTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ventas ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagementComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_3_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.goTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Productos ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagementComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_4_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.goTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Proveedores ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagementComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_5_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.goTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Distribuidores ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagementComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_6_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.goTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Registro de usuario ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagementComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_7_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.goTo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cambiar contrase\xF1a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagementComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_div_8_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cerrar sesi\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ManagementComponent =
    /*#__PURE__*/
    function () {
      function ManagementComponent(router) {
        _classCallCheck(this, ManagementComponent);

        this.router = router;
      }

      _createClass(ManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goHome",
        value: function goHome() {
          this.router.navigate(['management']);
        }
      }, {
        key: "goTo",
        value: function goTo(event) {
          var target = event.target.className;
          target = target.replace('toolbar-options ', '');
          this.router.navigate(['management/' + target]);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('cutie-plushie-token');
          localStorage.removeItem('user-details');
          this.router.navigate(['management/login']);
        }
      }, {
        key: "userIsLoggedIn",
        value: function userIsLoggedIn() {
          return localStorage.getItem('cutie-plushie-token') != null;
        }
      }, {
        key: "userIsAdmin",
        value: function userIsAdmin() {
          var details = localStorage.getItem('user-details');

          if (details != null) {
            var user = JSON.parse(details);

            if (user.userGroup == "ADMIN") {
              return true;
            }

            return false;
          }

          return false;
        }
      }]);

      return ManagementComponent;
    }();

    ManagementComponent.ɵfac = function ManagementComponent_Factory(t) {
      return new (t || ManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagementComponent,
      selectors: [["app-management"]],
      decls: 10,
      vars: 7,
      consts: [["role", "banner", 1, "toolbar"], ["height", "60px", "alt", "Logo", "src", "assets/images/cutie_plushie_logo_header.png", 3, "click"], ["class", "toolbar-options sales", 3, "click", 4, "ngIf"], ["class", "toolbar-options products", 3, "click", 4, "ngIf"], ["class", "toolbar-options suppliers", 3, "click", 4, "ngIf"], ["class", "toolbar-options distributors", 3, "click", 4, "ngIf"], ["class", "toolbar-options register", 3, "click", 4, "ngIf"], ["class", "toolbar-options passwordchange", 3, "click", 4, "ngIf"], ["class", "toolbar-options logout", 3, "click", 4, "ngIf"], [1, "toolbar-options", "sales", 3, "click"], [1, "sales"], [1, "toolbar-options", "products", 3, "click"], [1, "products"], [1, "toolbar-options", "suppliers", 3, "click"], [1, "suppliers"], [1, "toolbar-options", "distributors", 3, "click"], [1, "distributors"], [1, "toolbar-options", "register", 3, "click"], [1, "register"], [1, "toolbar-options", "passwordchange", 3, "click"], [1, "passwordchange"], [1, "toolbar-options", "logout", 3, "click"], [1, "logout"]],
      template: function ManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagementComponent_Template_img_click_1_listener($event) {
            return ctx.goHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagementComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagementComponent_div_3_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManagementComponent_div_4_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagementComponent_div_5_Template, 3, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManagementComponent_div_6_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManagementComponent_div_7_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManagementComponent_div_8_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn() && ctx.userIsAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn() && ctx.userIsAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn() && ctx.userIsAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    margin: -8px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-color: white;\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 600;\r\n    font-family: poppins;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n    margin-top: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n.toolbar-options[_ngcontent-%COMP%]{\r\n    margin: 1%;\r\n    margin-top: 2%;\r\n    background-color: inherit;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    width: 160px;\r\n    height: 80px;\r\n    text-align: center;\r\n    font-size: large;    \r\n    display: -webkit-box;    \r\n    display: flex; \r\n    -webkit-box-align: center; \r\n            align-items: center;\r\n}\r\n\r\n.toolbar-options[_ngcontent-%COMP%]:hover{\r\n    background-color: #ddd;\r\n}\r\n\r\n.toolbar-options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin: auto; \r\n    vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYW5hZ2VtZW50L21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJhcHAvbWFuYWdlbWVudC9tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogLThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b29sYmFyLW9wdGlvbnN7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJhci1vcHRpb25zOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnRvb2xiYXItb3B0aW9ucyBkaXZ7XHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-management',
          templateUrl: './management.component.html',
          styleUrls: ['./management.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Documents\UVM\8vo Semestre\PlushieWorld\workspace\cutie-plushie\public\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map