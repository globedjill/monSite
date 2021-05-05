"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PortfolioFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PortfolioFormComponent = /** @class */ (function () {
    function PortfolioFormComponent(fb, router, portfolioService, activatedRoute) {
        this.fb = fb;
        this.router = router;
        this.portfolioService = portfolioService;
        this.activatedRoute = activatedRoute;
    }
    PortfolioFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('id');
            var siteRecup = _this.portfolioService.portfolio;
            if (_this.id) {
                _this.initForm(siteRecup);
            }
            else {
                _this.initForm(_this.site);
            }
        });
    };
    PortfolioFormComponent.prototype.initForm = function (site) {
        if (site === void 0) { site = {
            name: null,
            lienSite: null,
            description: null,
            lienGit: null,
            image: null
        }; }
        this.portfolioForm = this.fb.group({
            name: [site.name, forms_1.Validators.required],
            lienSite: [site.lienSite],
            description: [site.description, forms_1.Validators.required],
            lienGit: [site.lienGit],
            image: [site.image]
        });
    };
    PortfolioFormComponent.prototype.onModifyPorfolio = function () {
        this.portfolioService.updateSiteOfPortfolio(this.portfolioForm.value, this.id);
    };
    PortfolioFormComponent.prototype.onSavePortfolio = function () {
        this.portfolioService.createPortfolio(this.portfolioForm.value);
        this.router.navigate(['portfolio']);
    };
    PortfolioFormComponent.prototype.retour = function () {
        this.router.navigate(['portfolio']);
    };
    PortfolioFormComponent = __decorate([
        core_1.Component({
            selector: 'app-portfolio-form',
            templateUrl: './portfolio-form.component.html',
            styleUrls: ['./portfolio-form.component.sass']
        })
    ], PortfolioFormComponent);
    return PortfolioFormComponent;
}());
exports.PortfolioFormComponent = PortfolioFormComponent;
