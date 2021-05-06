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
    function PortfolioFormComponent(fb, router, portfolioService, activatedRoute, upLoadFileService) {
        this.fb = fb;
        this.router = router;
        this.portfolioService = portfolioService;
        this.activatedRoute = activatedRoute;
        this.upLoadFileService = upLoadFileService;
        this.filesHolder$ = this.upLoadFileService.filesHolder$.asObservable();
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
            image: '',
            alt: null
        }; }
        this.portfolioForm = this.fb.group({
            name: [site.name, forms_1.Validators.required],
            lienSite: [site.lienSite],
            description: [site.description, forms_1.Validators.required],
            lienGit: [site.lienGit],
            image: [''],
            alt: [site.alt]
        });
    };
    PortfolioFormComponent.prototype.onModifyPorfolio = function () {
        this.portfolioForm.controls.image.setValue(this.imageVal);
        this.portfolioService.updateSiteOfPortfolio(this.portfolioForm.value, this.id);
        var files = this.upLoadFileService.filesHolder$.value.slice();
        files.splice(this.index, 1);
        this.upLoadFileService.filesHolder$.next(files);
        this.router.navigate(['portfolio']);
    };
    PortfolioFormComponent.prototype.onSavePortfolio = function () {
        this.portfolioForm.controls.image.setValue(this.imageVal);
        this.portfolioService.createPortfolio(this.portfolioForm.value);
        var files = this.upLoadFileService.filesHolder$.value.slice();
        files.splice(this.index, 1);
        this.upLoadFileService.filesHolder$.next(files);
        this.router.navigate(['portfolio']);
    };
    PortfolioFormComponent.prototype.retour = function () {
        this.router.navigate(['portfolio']);
    };
    /* FILE*/
    PortfolioFormComponent.prototype.openFile = function () {
        this.inputRef.nativeElement.click();
    };
    PortfolioFormComponent.prototype.addFile = function ($event) {
        this.imageVal = 'http://localhost:3000/' + $event.target.files[0].name;
        var file = $event.target.files;
        this.upLoadFileService.addFile(file);
        this.noFile = this.upLoadFileService.filesHolder$.value.length;
    };
    PortfolioFormComponent.prototype.deleteFile = function (index) {
        this.upLoadFileService.removeFile(index);
        this.noFile = this.upLoadFileService.filesHolder$.value.length;
    };
    PortfolioFormComponent.prototype.dropFile = function ($event) {
        if ($event.dataTransfer) {
            var file = $event.dataTransfer.files;
            this.upLoadFileService.addFile(file);
        }
    };
    __decorate([
        core_1.ViewChild('fileinput')
    ], PortfolioFormComponent.prototype, "inputRef");
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
