"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.listeMenu = [
            {
                nom: 'Acceuil',
                lien: 'acceuil',
                fragment: 'acceuil'
            },
            {
                nom: 'Parcour',
                lien: 'parcour',
                fragment: 'parcour'
            },
            {
                nom: 'Portfolio',
                lien: 'portfolio',
                fragment: 'portfolio'
            },
            {
                nom: 'Contact',
                lien: 'contact',
                fragment: 'contact'
            }
        ];
        this.menuConnect = [
            {
                titre: 'Se connecter',
                lien: 'seConnecter'
            },
            {
            // titre: 's\'inscrire',
            // lien: 'sInscrire'
            }
        ];
        this.activeLink = this.listeMenu[0];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.idSession$.subscribe(function (userSession) {
            _this.userSession = userSession;
        });
    };
    HeaderComponent.prototype.loggout = function () {
        this.userService.loggout().subscribe(function () {
            console.log('deconnexion reussi !');
        }, function (err) {
            console.log('deconnexion reussi dans lerreur');
            console.log(err);
        });
        ;
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.sass']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
