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
    function ExperienceComponent(userService, ParcourService, uploadService) {
        this.userService = userService;
        this.ParcourService = ParcourService;
        this.uploadService = uploadService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.idSession$.subscribe(function (usersession) {
            _this.userSession = usersession;
        });
        this.tableaurecupExperienceSubscription = this.ParcourService.experienceTab$.subscribe(function (experienceTab) {
            _this.experienceTab = experienceTab;
        });
        this.ParcourService.recupExperience();
        console.log(this.experienceTab);
    };
    ExperienceComponent.prototype.editExperience = function (experience) {
        this.ParcourService.experience = experience;
    };
    ExperienceComponent.prototype.deleteExperience = function (id) {
        this.ParcourService.supprimerUneExperience(id);
    };
    ExperienceComponent.prototype.deleteLinkImage = function (experienceImage) {
        this.uploadService.removeFileOfCard(experienceImage.split('/')[3]);
    };
    ExperienceComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.tableaurecupExperienceSubscription.unsubscribe();
    };
    ExperienceComponent.prototype.tempsTravailler = function (dateSortie, dateEntree) {
        var minute = 1000 * 60;
        var heure = minute * 60;
        var journee = heure * 24;
        var annee = 365 * journee;
        var moi = annee / 12;
        // Ratio 1 mois
        var ratio = 1 / 12;
        var dateFin = new Date(dateSortie).getTime();
        var dateDebut = new Date(dateEntree).getTime();
        var nbAnnee = parseInt(new Number((dateFin - dateDebut) / (annee)).toPrecision(2).split('.')[0]);
        var mois1 = (parseInt((((dateFin - dateDebut) / (moi)) / 12).toFixed(5).split('.')[1])) / 100000;
        var nbMois = (mois1 / ratio).toFixed(0);
        if (nbAnnee === 0) {
            return nbMois + ' mois';
        }
        else if (mois1 === 0) {
            return nbAnnee + ' ans';
        }
        else {
            return nbAnnee + ' ans et ' + nbMois + ' mois';
        }
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
