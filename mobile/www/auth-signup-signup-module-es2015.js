(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mango\">\n  <ion-title>Registration</ion-title>\n  </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding='true'>\n  <div class=\"center\">\n  <img src=\"assets/images/logo.png\" class=\"smallLogo\"/>\n\n  </div>\n\n    <h1> &nbsp;\n      &nbsp; Create Account</h1>\n  <form>\n  <ion-list>\n  <ion-item>\n  <ion-label position=\"stacked\">Email</ion-label>\n  <ion-input autocomplete=\"off\" name=\"email\" type=\"email\" [(ngModel)]=\"postData.email\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Username</ion-label>\n  <ion-input autocomplete=\"off\" name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Surname</ion-label>\n  <ion-input autocomplete=\"off\" name=\"surname\" type=\"text\" [(ngModel)]=\"postData.surname\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Forename</ion-label>\n  <ion-input autocomplete=\"off\" name=\"forename\" type=\"text\" [(ngModel)]=\"postData.forename\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-label position=\"stacked\">Location</ion-label>\n  <ion-input autocomplete=\"off\" name=\"location\" type=\"text\" [(ngModel)]=\"postData.location\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n  <ion-label position=\"stacked\">Password</ion-label>\n  <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\n  </ion-item>\n\n  <ion-item lines='none'>\n  Already have an account?\n    &nbsp;\n    <a routerLink=''>Sign in.</a>\n  </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" share=\"round\" color=\"secondary\" (click)=\"signAction()\">Registration</ion-button>\n  </form>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/auth/signup/signup-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/signup/signup-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/auth/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/signup/signup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/signup/signup.module.ts ***!
  \**********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/auth/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/auth/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/auth/signup/signup.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/signup/signup.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/signup/signup.page.ts ***!
  \********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/auth-constants */ "./src/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");







let SignupPage = class SignupPage {
    constructor(authService, toastService, storageService, router) {
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
    ngOnInit() { }
    validateInputs() {
        let surname = this.postData.surname.trim();
        let forename = this.postData.forename.trim();
        let location = this.postData.location.trim();
        let username = this.postData.password.trim();
        let password = this.postData.password.trim();
        let email = this.postData.email.trim();
        console.log(this.postData);
        return (this.postData.username &&
            this.postData.password &&
            this.postData.email &&
            this.postData.forename &&
            this.postData.surname &&
            this.postData.location &&
            username.length > 0 &&
            email.length > 0 &&
            password.length > 0);
    }
    signAction() {
        if (this.validateInputs()) {
            this.authService.signup(this.postData).subscribe((res) => {
                // Storing the User data.
                this.storageService
                    .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData)
                    .then(res => {
                    this.router.navigate(['']);
                });
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter email, username or password.');
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/auth/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=auth-signup-signup-module-es2015.js.map