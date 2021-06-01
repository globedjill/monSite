"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FonctionGeneralService = void 0;
var core_1 = require("@angular/core");
var FonctionGeneralService = /** @class */ (function () {
    function FonctionGeneralService() {
        this.dateDeMaintenant = new Date(Date.now());
        /*GOOGLE API*/
        this.valueLieu = {
            name: '',
            cp: '',
            dept: '',
            lien: ''
        };
        this.messageErreur = {
            required: 'Ce champ doit etre rempli.',
            minLenght: this.nbcaract
        };
    }
    FonctionGeneralService.prototype.addPosSticky = function (position) {
        var sticky = document.getElementById('navi');
        window.addEventListener('scroll', function () {
            if (scrollY >= position) {
                sticky.classList.add('navi');
            }
            if (scrollY < position) {
                sticky.classList.remove('navi');
            }
        });
    };
    /*GESTION DES ERREUR*/
    FonctionGeneralService.prototype.nbcaract = function (nbCarac) {
        return 'au moins ' + nbCarac + ' caractére sont necessaire';
    };
    /* DATE */
    /*GOOGLE API*/
    FonctionGeneralService.prototype.handleAddressChange = function (address) {
        this.valueLieu.name = address.name;
        this.valueLieu.lien = address.website;
        for (var index = 0; index < address.address_components.length; index++) {
            /*POUR LA RECHERCHE DU CODE POSTAL*/
            if (address.address_components[index].types[0] === "postal_code") {
                this.valueLieu.cp = ' (' + address.address_components[index].long_name.split('')[0] + address.address_components[index].long_name.split('')[1] + ')';
            }
            /*POUR LA RECHERCHE DU DEPT*/
            if (address.address_components[index].types[0] === "administrative_area_level_2") {
                this.valueLieu.dept = address.address_components[index].long_name;
            }
        }
    };
    FonctionGeneralService.prototype.afficheNomEcole = function (i) {
        if (this.valueLieu.name !== '') {
            return 'Ecole : ' + this.valueLieu.name;
        }
        else {
            return 'Ecole n° : ' + i + 1;
        }
    };
    __decorate([
        core_1.ViewChild('placeRef')
    ], FonctionGeneralService.prototype, "placesRef");
    FonctionGeneralService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FonctionGeneralService);
    return FonctionGeneralService;
}());
exports.FonctionGeneralService = FonctionGeneralService;
