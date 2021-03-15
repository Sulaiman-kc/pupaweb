(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 20rem;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7O0NBRXJCIiwiZmlsZSI6InNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container row\">\n  <div class=\"col-8\">\n    <h3 class=\"text-center\">\n      Add College\n    </h3>\n  </div>\n  <div class=\"col-4\" align=\"right\">\n    <mat-dialog-actions align=\"right\">\n      <!-- <button mat-button mat-dialog-close>Cancel</button> -->\n      <button mat-raised-button color=\"primary\" (click)=\"save()\" cdkFocusInitial>Save</button>\n      <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Save</button> -->\n    </mat-dialog-actions>\n  </div>\n</div>\n<hr>\n\n<div class=\"text-center\">\n  <mat-form-field class=\"example-full-width col-md-5 col-sm-12\">\n    <input [(ngModel)]=\"heading\" matInput placeholder=\"Title\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width col-md-5 col-sm-12\">\n    <input [(ngModel)]=\"place\" matInput placeholder=\"Place\">\n  </mat-form-field>\n  <!-- <mat-form-field class=\"example-full-width col-md-5 col-sm-12\">\n    <input matInput placeholder=\"Image URL4\">\n  </mat-form-field> -->\n  <mat-form-field appearance=\"fill\" style=\"width: 90%;\">\n    <mat-label>Description</mat-label>\n    <textarea [(ngModel)]=\"Description\" matInput></textarea>\n  </mat-form-field>\n  <!-- <mat-form-field class=\"example-full-width col-md-5 col-sm-12\">\n    <input matInput placeholder=\"Image URL5\">\n  </mat-form-field> -->\n  <br>\n  <button mat-raised-button (click)=\"openDialog('Image')\">Add/View Image ({{image.length}})</button> \n  <br>\n  <br>\n  <button mat-raised-button (click)=\"openDialog('key_specs')\">Add/View key_specs ({{key.length}})</button>\n  <br>\n  <br>\n  <h4>Course List</h4>\n  <hr>\n  <br>\n  <button mat-raised-button (click)=\"openDialog('Engineering')\">Add/View Engineering ({{eng.length}})</button>\n  <br>\n  <br>\n  <button mat-raised-button (click)=\"openDialog('Management_degree')\">Add/View Management_degree ({{deg.length}})</button>\n  <br>\n  <br>\n  <button mat-raised-button (click)=\"openDialog('Medical')\">Add/View Medical ({{med.length}})</button>\n  <br>\n  <br>\n  <button mat-raised-button (click)=\"openDialog('Others')\">Add/View Others ({{oth.length}})</button>\n  <br>\n  <br>\n  <br>\n  \n\n  <!-- <button mat-raised-button (click)=\"test()\">test</button> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adddialog/adddialog.component */ "./src/app/add/adddialog/adddialog.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = /** @class */ (function () {
    function AddComponent(dialog, db, router, arouter) {
        this.dialog = dialog;
        this.db = db;
        this.router = router;
        this.arouter = arouter;
        this.stream = ['Engineering', 'Medical', 'Management_degree', 'Others'];
        this.item = [];
        this.image = [];
        this.eng = [];
        this.med = [];
        this.oth = [];
        this.deg = [];
        this.key = [];
        this.heading = '';
        this.place = '';
        this.type = '';
        this.Description = '';
        console.log(arouter.snapshot.queryParamMap); // this
        arouter.params.subscribe(function (params) { return console.log(params); });
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('isLoggedIn') != 'true') {
            this.router.navigate(['/login']);
        }
        // var quiz_id = this.arouter.snapshot.params;
        this.arouter.paramMap.subscribe(function (params) {
            _this.type = params.get('type');
            if (params.get('type') == 'edit') {
                console.log((params.get('data')));
                _this.data = JSON.parse(params.get('data'));
                console.log((_this.data));
                _this.image = _this.data.image;
                _this.eng = _this.data.Engineering;
                _this.med = _this.data.Medical;
                _this.deg = _this.data.Management_degree;
                _this.oth = _this.data.Others;
                _this.key = _this.data.key_specs;
                _this.heading = _this.data.title;
                _this.place = _this.data.place;
                _this.Description = _this.data.Description;
            }
        });
    };
    AddComponent.prototype.save = function () {
        console.log('hello');
        var strem = [];
        if (this.eng.length != 0) {
            strem.push('Engineering');
        }
        if (this.deg.length != 0) {
            strem.push('Management_degree');
        }
        if (this.med.length != 0) {
            strem.push('Medical');
        }
        if (this.oth.length != 0) {
            strem.push('Others');
        }
        var newId = this.type == 'edit' ? this.data.id : this.db.createId();
        console.log(this.heading);
        console.log(this.image);
        console.log(this.place);
        if (this.heading != '' && this.place != '' && this.image.length != 0) {
            console.log('hello111111');
            this.db.collection("recCollege").doc(newId).set({
                title: this.heading,
                Description: this.Description,
                id: newId,
                place: this.place,
                Engineering: this.eng,
                Management_degree: this.deg,
                Medical: this.med,
                Others: this.oth,
                image: this.image,
                key_specs: this.key,
                stream: strem,
                isAvailable: true
            });
            this.router.navigate(['/list']);
        }
    };
    AddComponent.prototype.openDialog = function (type) {
        var _this = this;
        if (type == 'Engineering') {
            this.item = this.eng;
        }
        if (type == 'Management_degree') {
            this.item = this.deg;
        }
        if (type == 'Medical') {
            this.item = this.med;
        }
        if (type == 'Others') {
            this.item = this.oth;
        }
        if (type == 'Image') {
            this.item = this.image;
        }
        if (type == 'key_specs') {
            this.item = this.key;
        }
        var dialogRef = this.dialog.open(_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_2__["AdddialogComponent"], {
            width: '350px',
            height: '450px',
            data: { course: this.stream, type: type, item: this.item }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result != undefined) {
                _this.item = result.item;
                var type = result.type;
                console.log(_this.item);
                if (type == 'Engineering') {
                    _this.eng = _this.item;
                }
                if (type == 'Management_degree') {
                    _this.deg = _this.item;
                }
                if (type == 'Medical') {
                    _this.med = _this.item;
                }
                if (type == 'Others') {
                    _this.oth = _this.item;
                }
                if (type == 'Image') {
                    _this.image = _this.item;
                }
            }
        });
    };
    AddComponent.prototype.test = function () {
        console.log(this.eng);
        console.log(this.deg);
        console.log(this.med);
        console.log(this.oth);
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/add/adddialog/adddialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add/adddialog/adddialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-base .mat-list-item .mat-list-item-content, .mat-list-base .mat-list-option .mat-list-item-content{\r\n    padding: 0;\r\n}\r\n.oflow{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding: 0;\r\n}\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n.center {\r\n    margin: 0;\r\n    position: absolute;\r\n    /* top: 50%; */\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZGRpYWxvZy9hZGRkaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFFVix5Q0FBaUM7WUFBakMsaUNBQWlDO0dBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWRkL2FkZGRpYWxvZy9hZGRkaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQsIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWl0ZW0tY29udGVudHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm9mbG93e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiA1MCU7ICovXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/add/adddialog/adddialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/add/adddialog/adddialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p style=\"text-align: center;\">\n  {{title}}\n</p>\n<hr>\n<br>\n<div mat-dialog-actions class=\"center\">\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data.item\" cdkFocusInitial>Save</button>\n</div>\n<br> -->\n<div class=\"row\">\n  <div class=\"col-8\">\n    <h2 mat-dialog-title>{{title}}</h2>\n  </div>\n  <div class=\"col-4\">\n    <mat-dialog-actions align=\"right\">\n      <!-- <button mat-button mat-dialog-close>Cancel</button> -->\n      <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Save</button>\n    </mat-dialog-actions>\n  </div>\n</div>\n\n\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <mat-form-field style=\"width: 100%;\" class=\"example-full-width\">\n        <input [(ngModel)]=\"url\" matInput placeholder=\"Add Url\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-3\">\n      <button (click)=\"test()\" style=\"width: 70%;height: 70%;\">+</button>\n    </div>\n  </div>\n  <mat-list role=\"list\">\n    <mat-list-item style=\"height: 40px;\" *ngFor=\"let url of urls\" role=\"listitem\" title=\"{{url}}\">\n      <div class=\"col-10 oflow\" *ngIf=\"title != 'key_specs'\">{{url}}</div>\n      <div class=\"col-10 oflow\" *ngIf=\"title == 'key_specs'\">name:{{url.name}}, spec:{{url.spec}}</div>\n      <div class=\"col-2\" style=\"text-align: right;right: 0px;\"><mat-icon class=\"pointer\" (click)=\"delete(url)\" >delete</mat-icon></div>\n    </mat-list-item>\n    \n  </mat-list>\n</mat-dialog-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/add/adddialog/adddialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add/adddialog/adddialog.component.ts ***!
  \******************************************************/
/*! exports provided: AdddialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddialogComponent", function() { return AdddialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AdddialogComponent = /** @class */ (function () {
    function AdddialogComponent(db, dialogRef, data) {
        this.db = db;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.cou = {};
        this.items = [];
        this.url = '';
        this.urls = [];
        this.engineering = [];
        this.degree = [];
        this.medical = [];
        this.others = [];
        this.urls = data.item;
    }
    AdddialogComponent.prototype.onNoClick = function () {
        var item = this.urls;
        this.data.item = item;
        this.dialogRef.close();
    };
    AdddialogComponent.prototype.ngOnInit = function () {
        this.course = this.data.course;
        this.title = this.data.type;
    };
    AdddialogComponent.prototype.test = function () {
        var url;
        if (this.title == 'key_specs') {
            url = { name: this.url.split(',')[0], spec: this.url.split(',')[1] };
            this.urls.push(url);
        }
        else {
            this.urls.push(this.url);
        }
        console.log(this.urls);
        this.url = '';
        this.data.item = this.urls;
    };
    AdddialogComponent.prototype.delete = function (url) {
        console.log(url);
        var i = this.urls.findIndex(function (rank) { return rank == url; });
        this.urls.splice(i, 1);
        this.data.item = this.urls;
        // JSON.stringify
    };
    AdddialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adddialog',
            template: __webpack_require__(/*! ./adddialog.component.html */ "./src/app/add/adddialog/adddialog.component.html"),
            styles: [__webpack_require__(/*! ./adddialog.component.css */ "./src/app/add/adddialog/adddialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AdddialogComponent);
    return AdddialogComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"] },
    { path: 'course', component: _course_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'list', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-todo-list></app-todo-list> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // items: Observable<any[]>;
        // constructor(db: AngularFirestore) {
        //   this.items = db.collection('connected').valueChanges();
        // }
        this.title = 'angularFireIntro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _add_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add/adddialog/adddialog.component */ "./src/app/add/adddialog/adddialog.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _add_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_13__["AdddialogComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_16__["CourseComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase)
            ],
            providers: [
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_add_adddialog_adddialog_component__WEBPACK_IMPORTED_MODULE_13__["AdddialogComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"width: 100%;\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Position Column -->\n    <ng-container matColumnDef=\"slno\">\n      <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> SL_NO </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.slno}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"course\">\n      <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Course </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.course}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"branch\">\n      <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Branch </th>\n      <td mat-cell *matCellDef=\"let element\" > {{element.branch}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ELEMENT_DATA = [
    { slno: 1, course: 'Hydrogen', branch: 'H' },
];
var CourseComponent = /** @class */ (function () {
    function CourseComponent() {
        this.displayedColumns = ['slno', 'course', 'branch'];
        this.dataSource = ELEMENT_DATA;
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    CourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body  \r\n{  \r\n    margin: 0;  \r\n    padding: 0;  \r\n    background-color:#6abadeba;  \r\n    font-family: 'Arial';  \r\n}  \r\n.login{  \r\n        width: 382px;  \r\n        overflow: hidden;  \r\n        margin: auto;  \r\n        margin: 20 0 0 450px;  \r\n        padding: 80px;  \r\n        background: #23463f;  \r\n        border-radius: 15px ;  \r\n          \r\n}  \r\nh2{  \r\n    text-align: center;  \r\n    color: #277582;  \r\n    padding: 20px;  \r\n}  \r\nlabel{  \r\n    color: #08ffd1;  \r\n    font-size: 17px;  \r\n}  \r\n#Uname{  \r\n    width: 100%;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 3px;  \r\n    padding-left: 8px;  \r\n}  \r\n#Pass{  \r\n    width: 100%;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 3px;  \r\n    padding-left: 8px;  \r\n      \r\n}  \r\n#log{  \r\n    width: 100%;  \r\n    height: 30px;  \r\n    border: none;  \r\n    border-radius: 17px;  \r\n    padding-left: 7px;  \r\n    color: blue;  \r\n  \r\n  \r\n}  \r\nspan{  \r\n    color: white;  \r\n    font-size: 17px;  \r\n}  \r\na{  \r\n    float: right;  \r\n    background-color: grey;  \r\n}  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixxQkFBcUI7Q0FDeEI7QUFDRDtRQUNRLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLHFCQUFxQjs7Q0FFNUI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7Q0FFckI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTs7O0NBR2Y7QUFDRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSAgXHJcbnsgIFxyXG4gICAgbWFyZ2luOiAwOyAgXHJcbiAgICBwYWRkaW5nOiAwOyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2YWJhZGViYTsgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7ICBcclxufSAgXHJcbi5sb2dpbnsgIFxyXG4gICAgICAgIHdpZHRoOiAzODJweDsgIFxyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgICAgICBtYXJnaW46IGF1dG87ICBcclxuICAgICAgICBtYXJnaW46IDIwIDAgMCA0NTBweDsgIFxyXG4gICAgICAgIHBhZGRpbmc6IDgwcHg7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjM0NjNmOyAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCA7ICBcclxuICAgICAgICAgIFxyXG59ICBcclxuaDJ7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgY29sb3I6ICMyNzc1ODI7ICBcclxuICAgIHBhZGRpbmc6IDIwcHg7ICBcclxufSAgXHJcbmxhYmVseyAgXHJcbiAgICBjb2xvcjogIzA4ZmZkMTsgIFxyXG4gICAgZm9udC1zaXplOiAxN3B4OyAgXHJcbn0gIFxyXG4jVW5hbWV7ICBcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7ICBcclxuICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDsgIFxyXG59ICBcclxuI1Bhc3N7ICBcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7ICBcclxuICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDsgIFxyXG4gICAgICBcclxufSAgXHJcbiNsb2d7ICBcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7ICBcclxuICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7ICBcclxuICAgIGNvbG9yOiBibHVlOyAgXHJcbiAgXHJcbiAgXHJcbn0gIFxyXG5zcGFueyAgXHJcbiAgICBjb2xvcjogd2hpdGU7ICBcclxuICAgIGZvbnQtc2l6ZTogMTdweDsgIFxyXG59ICBcclxuYXsgIFxyXG4gICAgZmxvYXQ6IHJpZ2h0OyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyAgXHJcbn0gICJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login Page</h2><br>    \n  <div class=\"login\">    \n    <form id=\"login\" method=\"get\" action=\"login.php\">    \n        <label><b>User Name     \n        </b>    \n        </label>    \n        <input type=\"text\" name=\"Uname\" [(ngModel)]=\"name\" id=\"Uname\" placeholder=\"Username\">    \n        <br><br>    \n        <label><b>Password     \n        </b>    \n        </label>    \n        <input type=\"Password\" name=\"Pass\" [(ngModel)]=\"password\" id=\"Pass\" placeholder=\"Password\">    \n        <br><br>    \n        <input type=\"button\" name=\"log\" id=\"log\" (click)=\"login()\" value=\"Log In Here\">       \n        <br><br>       \n    </form>     \n</div>    "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('isLoggedIn') == 'true') {
            this.router.navigate(['/list']);
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.name == 'pupaadmin' && this.password == 'admin@pupa') {
            this.router.navigate(['/list']);
            localStorage.setItem('isLoggedIn', 'true');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1 class=\"text-center\">\n    Hello\n  </h1>\n\n  <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/add\">Add College</button> &nbsp;\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\">Log Out</button>\n</div>\n\n<hr>\n\n<ul>\n  <li class=\"mb-3\" *ngFor=\"let item of items\">\n    <div class=\"row\">\n      <div class=\"col\">\n        {{item.title | titlecase}}\n        <div style=\"font-size: 10px;color: rgb(190, 190, 190);\">{{item.place | titlecase}}</div>\n      </div>\n      <div style=\"text-align: right;\" class=\"col\">\n        <button class=\"btn btn-primary\" (click)=\"update(item)\">Update</button>\n        <!-- <button class=\"btn btn-danger ml-2\" (click)=\"delete(item)\">Delete</button> -->\n      </div>\n    </div>\n    \n    <hr>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(db, router) {
        this.db = db;
        this.router = router;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('isLoggedIn'));
        if (localStorage.getItem('isLoggedIn') != 'true') {
            this.router.navigate(['/login']);
        }
        this.db.collection('recCollege').snapshotChanges().subscribe(function (data) {
            _this.items = [];
            data.forEach(function (a) {
                var item = a.payload.doc.data();
                console.log(item);
                item.id = a.payload.doc.id;
                _this.items.push(item);
            });
        });
    };
    TodoListComponent.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', 'false');
        this.router.navigate(['/login']);
    };
    TodoListComponent.prototype.add = function () {
        this.db.collection("items").add({
            timestamp: new Date()
        });
    };
    TodoListComponent.prototype.update = function (item) {
        console.log(item);
        this.router.navigate(['/add', { data: JSON.stringify(item), type: 'edit' }]);
        // this.db.doc(`items/${item.id}`).update({
        //   timestamp: new Date()
        // });
    };
    TodoListComponent.prototype.delete = function (item) {
        this.db.doc("items/" + item.id).delete();
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAUztNqJ8VvWRjpvtfdtU5PTLmVjUo0uzk",
        authDomain: "pupa-educations-56f97.firebaseapp.com",
        projectId: "pupa-educations-56f97",
        storageBucket: "pupa-educations-56f97.appspot.com",
        messagingSenderId: "141532361926",
        appId: "1:141532361926:web:5d3f72ea9bb03e4718d3c7",
        measurementId: "G-7YF08TNSEV"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sulaiman kc\Desktop\project\Angular-FireStore-CRUD-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map