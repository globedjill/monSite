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
var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Queries
    // Inscription
    UsersService.prototype.createUser = function (newUser) {
        return this.http.post('/api/users/signup', newUser);
    };
    // Connexion
    UsersService.prototype.signin = function (user) {
        return this.http.post('/api/users/signin', user);
    };
    // Deconnexion
    UsersService.prototype.loggout = function () {
        this.http.get('api/users/signout').subscribe(function () { });
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;