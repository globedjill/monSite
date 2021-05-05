"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PortfolioService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
        this.portFolioTab = [];
        this.portFolioTab$ = new rxjs_1.BehaviorSubject([]);
    }
    PortfolioService.prototype.emmetreLePortFolio = function () {
        this.portFolioTab$.next(this.portFolioTab);
    };
    PortfolioService.prototype.createPortfolio = function (newPortfolio) {
        this.portFolioTab.push(newPortfolio);
        this.savePortfolioOnDb(newPortfolio);
        this.emmetreLePortFolio();
    };
    /* Queries*/
    PortfolioService.prototype.savePortfolioOnDb = function (portfolio) {
        this.http.post('/api/portfolio', portfolio).subscribe(function () { });
    };
    PortfolioService.prototype.recupPortfolio = function () {
        var _this = this;
        this.http.get('/api/portfolio').subscribe(function (portfolio) {
            _this.portFolioTab = portfolio;
            _this.emmetreLePortFolio();
        });
    };
    PortfolioService.prototype.updateSiteOfPortfolio = function (site, id) {
        this.http.post('/api/portfolio/update/' + id, site).subscribe(function () { });
    };
    PortfolioService.prototype.deleteSite = function (id) {
        var _this = this;
        this.http["delete"]('api/portfolio/' + id).subscribe(function () {
            return function (site) {
                _this.portFolioTab = site;
            };
        });
        this.recupPortfolio();
    };
    PortfolioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PortfolioService);
    return PortfolioService;
}());
exports.PortfolioService = PortfolioService;
