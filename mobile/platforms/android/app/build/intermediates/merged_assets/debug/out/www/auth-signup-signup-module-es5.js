(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mango\">\n  <ion-title>Registration</ion-title>\n  </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding='true'>\n  <div class=\"center\">\n  <img src=\"assets/images/logo.png\" class=\"smallLogo\"/>\n\n  </div>\n\n    <h1> &nbsp;\n      &nbsp; Create Account</h1>\n  <form>\n  <ion-list>\n  <ion-item>\n  <ion-label position=\"stacked\">Email</ion-label>\n  <ion-input autocomplete=\"off\" name=\"email\" type=\"email\" [(ngModel)]=\"postData.email\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Username</ion-label>\n  <ion-input autocomplete=\"off\" name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Surname</ion-label>\n  <ion-input autocomplete=\"off\" name=\"surname\" type=\"text\" [(ngModel)]=\"postData.surname\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Forename</ion-label>\n  <ion-input autocomplete=\"off\" name=\"forename\" type=\"text\" [(ngModel)]=\"postData.forename\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Location</ion-label>\n  <ion-input autocomplete=\"off\" name=\"location\" type=\"text\" [(ngModel)]=\"postData.location\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n  <ion-label position=\"stacked\">Password</ion-label>\n  <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\n  </ion-item>\n\n  <ion-item lines='none'>\n  Already have an account?\n    &nbsp;\n    <a routerLink=''>Sign in.</a>\n  </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" share=\"round\" color=\"secondary\" (click)=\"signAction()\">Registration</ion-button>\n  </form>\n  </ion-content>\n";
      /***/
    },

    /***/
    "./src/app/auth/signup/signup-routing.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/auth/signup/signup-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppAuthSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/auth/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/signup/signup.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/auth/signup/signup.module.ts ***!
      \**********************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppAuthSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/auth/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/auth/signup/signup.page.ts");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/auth/signup/signup.page.scss":
    /*!**********************************************!*\
      !*** ./src/app/auth/signup/signup.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/auth/signup/signup.page.ts":
    /*!********************************************!*\
      !*** ./src/app/auth/signup/signup.page.ts ***!
      \********************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppAuthSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../config/auth-constants */
      "./src/config/auth-constants.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/storage.service */
      "./src/app/services/storage.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/toast.service */
      "./src/app/services/toast.service.ts");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(authService, toastService, storageService, router) {
          _classCallCheck(this, SignupPage);

          this.authService = authService;
          this.toastService = toastService;
          this.storageService = storageService;
          this.router = router;
          this.postData = {
            surname: '',
            forename: '',
            location: '',
            username: '',
            email: '',
            password: ''
          };
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "validateInputs",
          value: function validateInputs() {
            var surname = this.postData.surname.trim();
            var forename = this.postData.forename.trim();
            var location = this.postData.location.trim();
            var username = this.postData.password.trim();
            var password = this.postData.password.trim();
            var email = this.postData.email.trim();
            console.log(this.postData);
            return this.postData.username && this.postData.password && this.postData.email && this.postData.forename && this.postData.surname && this.postData.location && username.length > 0 && email.length > 0 && password.length > 0;
          }
        }, {
          key: "signAction",
          value: function signAction() {
            var _this = this;

            if (this.validateInputs()) {
              this.authService.signup(this.postData).subscribe(function (res) {
                // Storing the User data.
                _this.storageService.store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData).then(function (res) {
                  _this.router.navigate(['']);
                });
              }, function (error) {
                _this.toastService.presentToast('Network Issue.');
              });
            } else {
              this.toastService.presentToast('Please enter email, username or password.');
            }
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/auth/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    },

    /***/
    "./src/app/services/toast.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "presentToast",
          value: function presentToast(infoMessage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: infoMessage,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-signup-signup-module-es5.js.map