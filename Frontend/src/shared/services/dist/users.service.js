"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.idSession$ = new rxjs_1.BehaviorSubject({
            isAuth: null,
            _id: null
        });
    }
    // Queries
    // Inscription
    UsersService.prototype.createUser = function (newUser) {
        return this.http.post('/api/users/signup', newUser);
    };
    // Connexion
    UsersService.prototype.signin = function (user) {
        var _this = this;
        return this.http.post('/api/users/signin', user).pipe(operators_1.tap(function (response) {
            _this.idSession$.next({
                isAuth: true,
                _id: response._id
            });
            console.log(response);
        }, function (err) {
            console.log(err);
        }));
    };
    // Deconnexion
    UsersService.prototype.loggout = function () {
        var _this = this;
        return this.http.get('api/users/signout').pipe(operators_1.tap(function (response) {
            _this.idSession$.next({
                isAuth: false,
                _id: response._id
            });
            console.log(response);
        }, function (err) {
            console.log(err);
        }));
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
