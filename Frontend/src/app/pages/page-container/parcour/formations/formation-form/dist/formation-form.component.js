"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormationFormComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var FormationFormComponent = /** @class */ (function () {
    function FormationFormComponent(fb, router, parcourService, activatedRoute, upLoadFileService) {
        this.fb = fb;
        this.router = router;
        this.parcourService = parcourService;
        this.activatedRoute = activatedRoute;
        this.upLoadFileService = upLoadFileService;
        this.filesHolder$ = this.upLoadFileService.filesHolder$.asObservable();
    }
    Object.defineProperty(FormationFormComponent.prototype, "liste", {
        get: function () {
            return this.formationForm.get('liste');
        },
        enumerable: false,
        configurable: true
    });
    FormationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('_id');
            var formationRecup = _this.parcourService.formation;
            if (_this.id) {
                _this.initForm(formationRecup);
            }
            else {
                _this.initForm(_this.formation);
            }
        });
    };
    FormationFormComponent.prototype.initForm = function (formation) {
        if (formation === void 0) { formation = {
            nomFormation: '',
            option: '',
            image: '',
            alt: '',
            lieu: '',
            adresse: '',
            dateEntree: new Date,
            dateSortie: new Date,
            contenu: '',
            liste: [],
            lien: ''
        }; }
        this.formationForm = this.fb.group({
            nomFormation: [formation.nomFormation, forms_1.Validators.required],
            option: [formation.option, forms_1.Validators.minLength(3)],
            image: [formation.image],
            alt: [formation.alt, forms_1.Validators.minLength(3)],
            lieu: [formation.lieu, forms_1.Validators.required],
            adresse: [formation.adresse, forms_1.Validators.minLength(3)],
            dateEntree: [formation.dateEntree, forms_1.Validators.required],
            dateSortie: [formation.dateSortie, forms_1.Validators.required],
            contenu: [formation.contenu, forms_1.Validators.required],
            liste: this.fb.array(formation.liste),
            lien: [formation.lien]
        });
    };
    FormationFormComponent.prototype.addAxeListe = function () {
        this.liste.push(new forms_1.FormControl(''));
    };
    FormationFormComponent.prototype.deleteAxe = function (i) {
        this.liste.removeAt(i);
    };
    // ACTION SUR LE SERVICE
    FormationFormComponent.prototype.onSaveFormation = function () {
        this.formationForm.controls.image.setValue(this.imageVal);
        this.parcourService.createNewFormation(this.formationForm.value);
        this.router.navigate(['parcour']);
    };
    FormationFormComponent.prototype.onModify = function () {
        this.parcourService.updateFormation(this.formationForm.value, this.id);
        this.router.navigate(['parcour']);
    };
    FormationFormComponent.prototype.retour = function () {
        this.router.navigate(['parcour']);
    };
    FormationFormComponent.prototype.openFile = function () {
        this.inputRef.nativeElement.click();
    };
    FormationFormComponent.prototype.addFile = function ($event) {
        this.imageVal = 'upload/' + $event.target.files[0].name;
        var file = $event.target.files;
        this.upLoadFileService.addFile(file);
        this.noFile = this.upLoadFileService.filesHolder$.value.length;
    };
    FormationFormComponent.prototype.deleteFile = function (index) {
        this.upLoadFileService.removeFile(index);
        this.noFile = this.upLoadFileService.filesHolder$.value.length;
    };
    FormationFormComponent.prototype.dropFile = function ($event) {
        if ($event.dataTransfer) {
            var file = $event.dataTransfer.files;
            this.upLoadFileService.addFile(file);
        }
    };
    __decorate([
        core_2.ViewChild('fileinput', { static: false })
    ], FormationFormComponent.prototype, "inputRef");
    FormationFormComponent = __decorate([
        core_1.Component({
            selector: 'app-formation-form',
            templateUrl: './formation-form.component.html',
            styleUrls: ['./formation-form.component.sass']
        })
    ], FormationFormComponent);
    return FormationFormComponent;
}());
exports.FormationFormComponent = FormationFormComponent;
