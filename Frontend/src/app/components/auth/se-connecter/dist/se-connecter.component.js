"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SeConnecterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SeConnecterComponent = /** @class */ (function () {
    function SeConnecterComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
    }
    SeConnecterComponent.prototype.ngOnInit = function () {
        this.singinForm = this.fb.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    SeConnecterComponent.prototype.submit = function () {
        var _this = this;
        this.userService.signin(this.singinForm.value).subscribe(function (err) {
            _this.error = JSON.stringify(err);
        });
    };
    //Gestion des erreurs
    SeConnecterComponent.prototype.seconnecterErreur = function () {
        return this.error;
    };
    SeConnecterComponent = __decorate([
        core_1.Component({
            selector: 'app-se-connecter',
            templateUrl: './se-connecter.component.html',
            styleUrls: ['./se-connecter.component.sass']
        })
    ], SeConnecterComponent);
    return SeConnecterComponent;
}());
exports.SeConnecterComponent = SeConnecterComponent;
