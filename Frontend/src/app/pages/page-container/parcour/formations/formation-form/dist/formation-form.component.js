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
        this.imageVal = [];
        this.imageLocal = 'imageRecup';
        this.imageDefault = this.upLoadFileService.imgDefault;
        this.noFile = true;
        this.imageInstanceAModifier = true;
        this.setValueANull = [];
        this.maxDate = new Date(Date.now());
        this.localImage = localStorage.getItem(this.imageLocal);
        this.niveauTab = [
            {
                name: 'Niveau 3',
                lastName: '-',
                niveau: [
                    { value: 'CAP', viewValue: 'CAP' },
                    { value: 'BEP', viewValue: 'BEP' }
                ]
            },
            {
                name: 'Niveau 4',
                lastName: 'Bac',
                niveau: [
                    { value: 'Bac', viewValue: 'Baccalaureat' },
                ]
            },
            {
                name: 'Niveau 5',
                lastName: 'Bac +2',
                niveau: [
                    { value: 'DEUG', viewValue: 'DEUG' },
                    { value: 'BTS', viewValue: 'BTS' },
                    { value: 'DUT', viewValue: 'DUT' },
                    { value: 'DEUST', viewValue: 'DEUST' },
                ]
            },
            {
                name: 'Niveau 6',
                lastName: 'Bac +3',
                niveau: [
                    { value: 'License', viewValue: 'Licence' },
                    { value: 'LicensePro', viewValue: 'License Pro' },
                ]
            },
            {
                name: 'Niveau 6',
                lastName: 'Bac +4',
                niveau: [
                    { value: 'Maitrise', viewValue: 'Maitrise' },
                    { value: 'Master1', viewValue: 'Master1' },
                ]
            },
            {
                name: 'Niveau 7',
                lastName: 'Bac +5',
                niveau: [
                    { value: 'Master', viewValue: 'Master' },
                    { value: 'Diplome d\'étude approfondue', viewValue: 'Diplome d\'étude approfondue' },
                    { value: 'Diplome étude approfondie', viewValue: 'Diplome étude approfondie spécialisées' },
                    { value: 'Ingénieur', viewValue: 'Ingenieur' },
                ]
            },
            {
                name: 'Niveau 8',
                lastName: 'Bac +8',
                niveau: [
                    { value: 'Doctorat', viewValue: 'Doctorat' },
                    { value: 'Chercheur', viewValue: 'Chercheur' },
                ]
            },
        ];
        this.filesHolder$ = this.upLoadFileService.filesHolder$.asObservable();
    }
    Object.defineProperty(FormationFormComponent.prototype, "liste", {
        get: function () {
            return this.formationForm.get('liste');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormationFormComponent.prototype, "ecoles", {
        get: function () {
            return this.formationForm.get('ecoles');
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
                // if( formationRecup.image === this.upLoadFileService.imgDefault) {
                //   localStorage.setItem(this.imageLocal, formationRecup.image);
                //   this.imageVal = localStorage.getItem(this.imageLocal);
                //   this.imageInstanceAModifier = false;
                //   this.formationForm.controls.image.setValue(null);
                // } else if ( formationRecup.image !== null){
                //   this.formationForm.controls.image.setValue(formationRecup.image);
                //   this.imageVal = formationRecup.image;
                //   localStorage.setItem(this.imageLocal , formationRecup.image);
                //   this.imageInstanceAModifier = true;
                //   this.noFile = false;
                //   this.formationForm.controls.image.setValue(this.imageVal);
                // }
            }
            else {
                _this.initForm(_this.formation);
            }
        });
    };
    /*FONCTIONS*/
    FormationFormComponent.prototype.initForm = function (formation) {
        if (formation === void 0) { formation = {
            niveau: null,
            diplome: null,
            nomFormation: null,
            option: null,
            ecoles: [],
            contenu: null,
            liste: []
        }; }
        this.formationForm = this.fb.group({
            niveau: [formation.niveau],
            diplome: [formation.diplome],
            nomFormation: [formation.nomFormation, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            option: [formation.option, forms_1.Validators.minLength(3)],
            ecoles: this.fb.array([]),
            contenu: [formation.contenu, forms_1.Validators.required],
            liste: this.fb.array(formation.liste)
        });
    };
    FormationFormComponent.prototype.addAxeListe = function () {
        this.liste.push(new forms_1.FormControl(''));
    };
    FormationFormComponent.prototype.deleteAxe = function (i) {
        this.liste.removeAt(i);
    };
    FormationFormComponent.prototype.addListeEcole = function () {
        this.ecoles.push(this.fb.group({
            nomEcole: [null],
            image: [null],
            alt: ['image par default'],
            departement: [null],
            cp: [null],
            dateEntree: [new Date()],
            dateSortie: [new Date()],
            lien: [null]
        }));
        this.setValueANull.push(true);
        this.fGservice.tabAdress.push({
            name: null,
            dept: null,
            cp: null,
            lien: null
        });
    };
    FormationFormComponent.prototype.deleteEcole = function (i) {
        this.ecoles.removeAt(i);
        this.imageVal.splice(i, 1);
        this.setValueANull.splice(i, 1);
        this.fGservice.tabAdress.splice(i, 1);
    };
    // ACTION SUR LE SERVICE
    FormationFormComponent.prototype.onSaveFormation = function () {
        console.log(this.formationForm.value);
        // this.formationForm.controls.image.setValue(this.imageVal);
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
        // this.noFile = false;
    };
    FormationFormComponent.prototype.retour = function () {
        if (localStorage.getItem(this.imageLocal) !== this.imageLocal && this.imageLocal === undefined) {
            this.deleteFile(0);
            //  this.imageVal === localStorage.getItem(this.imageLocal);
            localStorage.clear();
        }
        this.router.navigate(['parcour']);
    };
    /* FILE*/
    FormationFormComponent.prototype.openFile = function (i) {
        this.inputRef.nativeElement.click();
    };
    FormationFormComponent.prototype.addFile = function ($event, i) {
        var file = $event.target.files;
        this.upLoadFileService.addFile(file);
        // this.noFile = false;
        if (this.imageVal[i] === null) {
            console.log('modif de l\'image');
            this.imageVal.splice(i, 1, $event.target.files[0].name);
            this.ecoles.controls[i].get('alt').setValue(this.imageVal[i]);
        }
        else if ($event.target.files[0].name !== null) {
            this.imageVal.push($event.target.files[0].name);
            this.ecoles.controls[i].get('alt').setValue(this.imageVal[i]);
        }
        this.setValueANull[i] = false;
        console.log(this.imageVal);
        console.log(this.setValueANull);
    };
    FormationFormComponent.prototype.deleteFile = function (index) {
        if (this.upLoadFileService.filesHolder$.value.length > 0) {
            this.upLoadFileService.removeFile(index);
            this.imageVal.splice(index, 1, null);
            this.setValueANull[index] = true;
            this.ecoles.controls[index].get('alt').setValue('image par default');
            this.ecoles.controls[index].get('image').setValue('');
        }
    };
    FormationFormComponent.prototype.supprImgLinkmodif = function (image) {
        this.upLoadFileService.removeFileOfCard(image.split('/')[3]);
        this.parcourService.updateExperience(this.formationForm.value, this.id);
        // this.imageVal = this.upLoadFileService.imgDefault;
        this.formationForm.controls.image.setValue('null');
        // this.noFile = true;
        this.imageInstanceAModifier = false;
    };
    FormationFormComponent.prototype.dropFile = function ($event) {
        if ($event.dataTransfer) {
            var file = $event.dataTransfer.files;
            this.upLoadFileService.addFile(file);
        }
    };
    FormationFormComponent.prototype.maxiDate = function ($event) {
        console.log($event);
        this.dateEntree.value = $event;
    };
    FormationFormComponent.prototype.getErrorMessage = function (nom) {
        if (nom.hasError('required') || nom.value === "") {
            return this.fGservice.messageErreur.required;
        }
        else if (nom.hasError('minlength')) {
            return this.fGservice.messageErreur.minLenght(3);
        }
    };
    FormationFormComponent.prototype.recupPremiereLettre = function () {
        var tabFirstLetter = [];
        var tabMajFirstLetter = [];
        if (this.formationForm.value.nomFormation !== null && this.formationForm.value.nomFormation !== undefined) {
            var maString = this.formationForm.value.nomFormation.split(' ');
            if (maString.length > 1) {
                for (var index = 0; index < maString.length; index++) {
                    if (maString[index].length > 1 && maString[index].length <= 3) {
                        tabMajFirstLetter.push(maString[index].toString());
                    }
                    else if (maString[index].length > 3) {
                        if (maString[index].toString().includes('\'')) {
                            var recupMaj = maString[index].split("'")[1].toString().charAt(0).toUpperCase();
                            // console.log(maString.concat(maString[index].split("'")[1],maString[index].split("'")[1].substring(1)));
                            tabFirstLetter.push(recupMaj);
                            tabMajFirstLetter.push(maString[index].split("'")[0].concat("'", recupMaj, maString[index].split("'")[1].substring(1)));
                        }
                        else {
                            var recupMaj = maString[index].toString().charAt(0).toUpperCase();
                            tabFirstLetter.push(recupMaj);
                            tabMajFirstLetter.push(recupMaj.concat(maString[index].substring(1)));
                        }
                    }
                    this.forcerMajFirstLetter = tabMajFirstLetter.join(' ');
                }
            }
        }
        this.initMajuscule = tabFirstLetter.join('');
    };
    __decorate([
        core_2.ViewChild('fileInput')
    ], FormationFormComponent.prototype, "inputRef");
    __decorate([
        core_2.ViewChild('googlePlacesComponent')
    ], FormationFormComponent.prototype, "googlePlace");
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
