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
    function FormationFormComponent(fb, router, parcourService, activatedRoute, upLoadFileService, fGservice) {
        this.fb = fb;
        this.router = router;
        this.parcourService = parcourService;
        this.activatedRoute = activatedRoute;
        this.upLoadFileService = upLoadFileService;
        this.fGservice = fGservice;
        this.imageLocal = 'imageRecup';
        this.imageDefault = this.upLoadFileService.imgDefault;
        this.noFile = true;
        this.imageInstanceAModifier = true;
        this.localImage = localStorage.getItem(this.imageLocal);
        this.valueLieu = {
            name: '',
            cp: '',
            dept: '',
            lieu: ''
        };
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
                if (formationRecup.image === _this.upLoadFileService.imgDefault) {
                    localStorage.setItem(_this.imageLocal, formationRecup.image);
                    _this.imageVal = localStorage.getItem(_this.imageLocal);
                    _this.imageInstanceAModifier = false;
                    _this.formationForm.controls.image.setValue(null);
                }
                else if (formationRecup.image !== null) {
                    _this.formationForm.controls.image.setValue(formationRecup.image);
                    _this.imageVal = formationRecup.image;
                    localStorage.setItem(_this.imageLocal, formationRecup.image);
                    _this.imageInstanceAModifier = true;
                    _this.noFile = false;
                    _this.formationForm.controls.image.setValue(_this.imageVal);
                }
            }
            else {
                _this.initForm(_this.formation);
            }
        });
        this.nomFormation = this.formationForm.get('nomFormation');
        this.option = this.formationForm.get('option');
        this.image = this.formationForm.get('image');
        this.alt = this.formationForm.get('alt');
        this.lieu = this.formationForm.get('lieu');
        this.adresse = this.formationForm.get('adresse');
        this.dateEntree = this.formationForm.get('dateEntree');
        this.dateSortie = this.formationForm.get('dateSortie');
        this.contenu = this.formationForm.get('contenu');
        this.lien = this.formationForm.get('lien');
    };
    FormationFormComponent.prototype.handleAddressChange = function (address) {
        this.valueLieu.cp = address.address_components[5].long_name.split('')[0] + address.address_components[5].long_name.split('')[1];
        this.valueLieu.dept = address.address_components[0].types[0];
        this.valueLieu.lieu = address.address_components[1].long_name;
        this.valueLieu.name = address.name;
        console.log(this.valueLieu);
        console.log(address);
    };
    /*FONCTIONS*/
    FormationFormComponent.prototype.initForm = function (formation) {
        if (formation === void 0) { formation = {
            nomFormation: null,
            option: null,
            image: null,
            alt: "image par defaut",
            lieu: null,
            adresse: null,
            dateEntree: new Date,
            dateSortie: new Date,
            contenu: null,
            liste: [],
            lien: null
        }; }
        this.formationForm = this.fb.group({
            nomFormation: [formation.nomFormation, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            option: [formation.option, forms_1.Validators.minLength(3)],
            image: [formation.image],
            alt: [formation.alt, [forms_1.Validators.minLength(3), forms_1.Validators.required]],
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
        var files = this.upLoadFileService.filesHolder$.value.slice();
        files.splice(this.index, 1);
        this.upLoadFileService.filesHolder$.next(files);
        localStorage.clear();
        this.router.navigate(['parcour']);
    };
    FormationFormComponent.prototype.onModify = function () {
        this.formationForm.controls.image.setValue(this.imageVal);
        this.parcourService.updateFormation(this.formationForm.value, this.id);
        var files = this.upLoadFileService.filesHolder$.value.slice();
        files.splice(this.index, 1);
        this.upLoadFileService.filesHolder$.next(files);
        localStorage.clear();
        this.router.navigate(['parcour']);
        this.noFile = false;
    };
    FormationFormComponent.prototype.retour = function () {
        console.log(this.imageLocal);
        if (localStorage.getItem(this.imageLocal) !== this.imageLocal && this.imageLocal === undefined) {
            this.deleteFile(0);
            this.imageVal === localStorage.getItem(this.imageLocal);
            localStorage.clear();
        }
        this.router.navigate(['parcour']);
    };
    /* FILE*/
    FormationFormComponent.prototype.openFile = function () {
        this.inputRef.nativeElement.click();
    };
    FormationFormComponent.prototype.addFile = function ($event) {
        this.imageVal = $event.target.files[0].name;
        var file = $event.target.files;
        this.upLoadFileService.addFile(file);
        this.noFile = false;
        this.formationForm.controls.alt.setValue(null);
    };
    FormationFormComponent.prototype.deleteFile = function (index) {
        this.upLoadFileService.removeFile(index);
        this.imageVal = this.upLoadFileService.imgDefault;
        this.formationForm.controls.alt.setValue('image par default');
        this.noFile = true;
    };
    FormationFormComponent.prototype.supprImgLinkmodif = function (image) {
        this.upLoadFileService.removeFileOfCard(image.split('/')[3]);
        this.parcourService.updateExperience(this.formationForm.value, this.id);
        this.imageVal = this.upLoadFileService.imgDefault;
        this.formationForm.controls.image.setValue('null');
        this.noFile = true;
        this.imageInstanceAModifier = false;
    };
    FormationFormComponent.prototype.dropFile = function ($event) {
        if ($event.dataTransfer) {
            var file = $event.dataTransfer.files;
            this.upLoadFileService.addFile(file);
        }
    };
    FormationFormComponent.prototype.getErrorMessage = function (nom) {
        if (nom.hasError('required')) {
            return this.fGservice.messageErreur.required;
        }
        else if (nom.hasError('minlength')) {
            return this.fGservice.messageErreur.minLenght(3);
        }
    };
    __decorate([
        core_2.ViewChild('fileInput')
    ], FormationFormComponent.prototype, "inputRef");
    __decorate([
        core_2.ViewChild('placeRef')
    ], FormationFormComponent.prototype, "placesRef");
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
