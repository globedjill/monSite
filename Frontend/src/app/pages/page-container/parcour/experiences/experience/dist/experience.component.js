"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExperienceComponent = void 0;
var core_1 = require("@angular/core");
var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(userService) {
        this.userService = userService;
        this.experienceTab = [
            {
                dateEntree: new Date('2018/01/05'),
                dateSortie: new Date('2021/02/01'),
                image: '../../../../assets/images/ban_bricoDepot.png',
                typeContrat: 'CDI',
                enseigne: 'Bricot Dépot',
                lieu: 'Trélissac (24000)',
                fonction: 'Vendeur Polyvalent - Secteur Outillage/Peinture/Electicité '
            },
            {
                dateEntree: new Date('2009/01/05'),
                dateSortie: new Date('2017/05/01'),
                image: '../../../../assets/images/ban-cashexpress.png',
                typeContrat: 'CDI',
                enseigne: 'CashExpress',
                lieu: 'Trélissac (24000)',
                fonction: 'Acheteur Vendeur Polyvalent - Gestion '
            }
        ];
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.idSession$.subscribe(function (usersession) {
            _this.userSession = usersession;
        });
    };
    ExperienceComponent = __decorate([
        core_1.Component({
            selector: 'app-experience',
            templateUrl: './experience.component.html',
            styleUrls: ['./experience.component.sass']
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());
exports.ExperienceComponent = ExperienceComponent;
