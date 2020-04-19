function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-div\">\n<mat-card class=\"z-depth center\" flex=\"50\">\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"name\" ngModel type=\"text\" placeholder=\"Name\" #nameInput=\"ngModel\" required />\n      <mat-error *ngIf=\"nameInput.invalid\">Please enter your name</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email />\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel #passwordInput=\"ngModel\" matInput placeholder=\"Password\" required />\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!isLoading\">Signup</button>\n  </form>\n</mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/user/signup/signup.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 100%; }\n\nmat-spinner {\n  margin: auto; }\n\n.center {\n  width: 75%;\n  margin: 10px auto; }\n\n.main-div {\n  height: 70vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL21lYW4tc3RhY2stZGVtby9zcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2VudGVye1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLm1haW4tZGl2e1xuICBoZWlnaHQ6IDcwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(userService) {
        _classCallCheck(this, SignupComponent);

        this.userService = userService;
        this.isLoading = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.signupStatusSub = this.userService.getAuthStatusListener().subscribe(function (signupStatus) {
            _this.isLoading = false;
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup(form) {
          if (form.invalid) {
            return;
          }

          this.isLoading = true;
          this.userService.createUser(form.value.name, form.value.email, form.value.password);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.signupStatusSub.unsubscribe();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/user/signup/signup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user/signup/signup.component */
    "./src/app/user/signup/signup.component.ts");

    var routes = [{
      path: 'signup',
      component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user/signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + '/user/';

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.signupStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(UserService, [{
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.signupStatusListener.asObservable();
        }
      }, {
        key: "createUser",
        value: function createUser(name, email, password) {
          var _this2 = this;

          var userData = {
            name: name,
            email: email,
            password: password
          };
          this.http.post(BACKEND_URL + 'signup', userData).subscribe(function () {
            _this2.router.navigate(['/']);
          }, function (error) {
            _this2.signupStatusListener.next(false);
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map