"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SInscrireComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SInscrireComponent = /** @class */ (function () {
    function SInscrireComponent(fb, router, usersService) {
        this.fb = fb;
        this.router = router;
        this.usersService = usersService;
    }
    SInscrireComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SInscrireComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            pseudo: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
    };
    // tslint:disable-next-line: typedef
    SInscrireComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usersService.createUser(this.form.value).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/seConnecter']);
        }, function (err) {
            _this.error = err;
        });
        ;
    };
    SInscrireComponent.prototype.goSeConnecter = function () {
        this.router.navigate(['/seConnecter']);
    };
    // GESTION DES ERREURS
    // tslint:disable-next-line: typedef
    SInscrireComponent.prototype.errorMail = function () {
        if (this.form.get('email').hasError('email')) {
            return 'le mail n\'est pas au bon format';
        }
    };
    SInscrireComponent.prototype.errorPassword = function () {
        if (this.form.get('password').hasError('minlength')) {
            return 'le mot de passe doit contenir au moins 8 caract??res';
        }
    };
    SInscrireComponent.prototype.errorPasswordConfirm = function () {
    };
    SInscrireComponent = __decorate([
        core_1.Component({
            selector: 'app-s-inscrire',
            templateUrl: './s-inscrire.component.html',
            styleUrls: ['./s-inscrire.component.sass']
        })
    ], SInscrireComponent);
    return SInscrireComponent;
}());
exports.SInscrireComponent = SInscrireComponent;
