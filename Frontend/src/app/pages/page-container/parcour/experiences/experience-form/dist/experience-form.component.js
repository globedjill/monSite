"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExperienceFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ExperienceFormComponent = /** @class */ (function () {
    function ExperienceFormComponent(fb, router, parcourService, ActivatedRoute, uploadService) {
        this.fb = fb;
        this.router = router;
        this.parcourService = parcourService;
        this.ActivatedRoute = ActivatedRoute;
        this.uploadService = uploadService;
        this.filesHolder$ = this.uploadService.filesHolder$.asObservable();
        this.typeContrat = [
            'CDD',
            'CDI',
            'Contrat d\'apprentissage',
            'Contrat de Professionnalissation',
            'Contrat Unique d\'insertion'
        ];
    }
    ExperienceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ActivatedRoute.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('_id');
            var xpRecup = _this.parcourService.experience;
            if (_this.id) {
                _this.initFormExperience(xpRecup);
            }
            else {
                _this.initFormExperience(_this.experience);
            }
        });
    };
    ExperienceFormComponent.prototype.initFormExperience = function (experience) {
        if (experience === void 0) { experience = {
            dateEntree: null,
            dateSortie: null,
            image: '',
            alt: null,
            typeContrat: null,
            enseigne: null,
            lien: null,
            lieu: null,
            fonction: null
        }; }
        this.experienceForm = this.fb.group({
            dateEntree: [experience.dateEntree, forms_1.Validators.required],
            dateSortie: [experience.dateSortie, forms_1.Validators.required],
            image: [''],
            alt: [experience.alt, forms_1.Validators.required],
            typeContrat: [experience.typeContrat, forms_1.Validators.required],
            enseigne: [experience.enseigne, forms_1.Validators.required],
            lien: [experience.lien, forms_1.Validators.required],
            lieu: [experience.lieu, forms_1.Validators.required],
            fonction: [experience.fonction, forms_1.Validators.required]
        });
    };
    ExperienceFormComponent.prototype.onSaveExperience = function () {
        this.experienceForm.controls.image.setValue(this.imageVal);
        this.parcourService.createNewExperience(this.experienceForm.value);
        var files = this.uploadService.filesHolder$.value.slice();
        files.splice(this.index, 1);
        this.uploadService.filesHolder$.next(files);
        this.router.navigate(['parcour']);
    };
    ExperienceFormComponent.prototype.onModifyExperience = function () {
        this.parcourService.updateExperience(this.experienceForm.value, this.id);
        this.router.navigate(['parcour']);
    };
    ExperienceFormComponent.prototype.retour = function () {
        this.router.navigate(['parcour']);
    };
    ExperienceFormComponent.prototype.openFile = function () {
        this.inputRef.nativeElement.click();
    };
    ExperienceFormComponent.prototype.addFile = function ($event) {
        this.imageVal = 'http://localhost:3000/' + $event.target.files[0].name;
        var file = $event.target.files;
        this.uploadService.addFile(file);
        this.noFile = this.uploadService.filesHolder$.value.length;
    };
    ExperienceFormComponent.prototype.deleteFile = function (index) {
        this.uploadService.removeFile(index);
        this.noFile = this.uploadService.filesHolder$.value.length;
    };
    __decorate([
        core_1.ViewChild('fileInput')
    ], ExperienceFormComponent.prototype, "inputRef");
    ExperienceFormComponent = __decorate([
        core_1.Component({
            selector: 'app-experience-form',
            templateUrl: './experience-form.component.html',
            styleUrls: ['./experience-form.component.sass']
        })
    ], ExperienceFormComponent);
    return ExperienceFormComponent;
}());
exports.ExperienceFormComponent = ExperienceFormComponent;
