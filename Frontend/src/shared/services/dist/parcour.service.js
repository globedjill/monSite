"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ParcourService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ParcourService = /** @class */ (function () {
    function ParcourService(http) {
        this.http = http;
        this.formationTab = [];
        this.formationTab$ = new rxjs_1.BehaviorSubject([]);
        this.experienceTab = [];
        this.experienceTab$ = new rxjs_1.BehaviorSubject([]);
    }
    ParcourService.prototype.emettreLesFormationsRecuperer = function () {
        this.formationTab$.next(this.formationTab);
    };
    ParcourService.prototype.createNewFormation = function (newFormation) {
        this.formationTab.push(newFormation);
        this.saveFormations(newFormation);
        this.emettreLesFormationsRecuperer();
    };
    ParcourService.prototype.emettreLesExperienceRecuperer = function () {
        this.experienceTab$.next(this.experienceTab);
    };
    ParcourService.prototype.createNewExperience = function (newExperience) {
        this.experienceTab.push(newExperience);
        this.saveExperiences(newExperience);
        this.emettreLesFormationsRecuperer();
    };
    // Queries
    // Formations
    ParcourService.prototype.saveFormations = function (formation) {
        this.http.post('/api/formations', formation).subscribe(function () {
        });
    };
    ParcourService.prototype.updateFormation = function (formation, id) {
        this.http.post('/api/formations/update/' + id, formation).subscribe(function () { });
    };
    ParcourService.prototype.recupFormations = function () {
        var _this = this;
        this.http.get('/api/formations')
            .subscribe(function (formations) {
            _this.formationTab = formations;
            _this.emettreLesFormationsRecuperer();
        });
    };
    ParcourService.prototype.supprimerUneFormation = function (id) {
        var _this = this;
        this.http["delete"]('api/formations/' + id).subscribe(function () {
            (function (formation) {
                _this.formationTab = formation;
            });
        });
        this.recupFormations();
        this.emettreLesFormationsRecuperer();
    };
    // Experiences
    ParcourService.prototype.saveExperiences = function (experience) {
        this.http.post('/api/experience', experience).subscribe(function () { });
    };
    ParcourService.prototype.updateExperience = function (experience, id) {
        this.http.post('/api/experience/update/' + id, experience).subscribe(function () { });
    };
    ParcourService.prototype.recupExperience = function () {
        var _this = this;
        this.http.get('/api/experience')
            .subscribe(function (experiences) {
            _this.experienceTab = experiences;
            _this.emettreLesExperienceRecuperer();
        });
    };
    ParcourService.prototype.supprimerUneExperience = function (id) {
        var _this = this;
        this.http["delete"]('/api/experience/' + id).subscribe(function () {
            (function (experiences) {
                _this.experienceTab = experiences;
            });
        });
        this.recupExperience();
        this.emettreLesExperienceRecuperer();
    };
    ParcourService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ParcourService);
    return ParcourService;
}());
exports.ParcourService = ParcourService;
