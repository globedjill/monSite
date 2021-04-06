"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ParcourComponent = void 0;
var core_1 = require("@angular/core");
var ParcourComponent = /** @class */ (function () {
    function ParcourComponent() {
        this.parcourTab = [
            {
                nomFormation: 'Developpeur web FullStack',
                image: '../../../../assets/images/OC_Banner.png',
                alt: 'imageOpen',
                lieu: 'Telepresentiel',
                dateEntree: new Date(' 01/04/2020 '),
                dateSortie: new Date(' 01/10/2020 '),
                contenu: ' Le developpeur full-stack peut gére a la fois des tâches back-end et front-ent, bien qu\'il soit pas necesserement un expert dans l\'un ou l\'autre. ',
                liste: [
                    'creer un backend de site',
                    'Utiliser des bibliothéques ou des framework frontaux',
                    'gerer le deploiements des application et placer les projets sur les serveur'
                ],
                lien: 'https://openclassrooms.com/fr/paths/185-developpeur-web'
            },
            {
                nomFormation: 'BPA Conducteur d\'engin',
                image: '../../../../assets/images/OC_bazas.png',
                alt: 'imageBazas',
                lieu: 'EPLEFPA de Bazas',
                dateEntree: new Date(' 01/04/2007 '),
                dateSortie: new Date(' 01/10/207 '),
                contenu: ' Le brevet Professionnel Option Travaux forestier permer d\'aquérir des connaissances et des compétences professionnemmes en: ',
                liste: [
                    'Réalisation de travaux forestiers',
                    'Mécanique et entretiens des équipements',
                    'Conduite d\'engins forestiers',
                    'Connaissances scientifique et technique relative a la forêt',
                    'Organisation de chantiers forestiers'
                ]
            },
            {
                nomFormation: 'BTS Technico Commerciale',
                option: 'Produit d\'origine Forestier',
                image: '../../../../assets/images/OC_meymac.png',
                alt: 'imageBazas',
                lieu: 'Lycée forestier Meymac',
                adresse: 'Meymac(19)',
                dateEntree: new Date(' 01/04/2001 '),
                dateSortie: new Date(' 01/10/2004 '),
                contenu: ' Formation a devienir des agents commerciaux spécialiser dans le domaines de la filiére forêt-bois',
                liste: [
                    'Technique de marketing',
                    'Gestion de la relation client',
                    'De la négociation a la vente de solution technico commerciale',
                    'Laformation porte egalement sur la gestion cimmerciale, le suivides fournisseurs et des clients.'
                ]
            },
            {
                nomFormation: 'Baccalaureat Science et Technologie de l\'Agronomie et de l\'Environnement',
                option: 'Aménagement du territoire',
                image: '../../../../assets/images/OC_Charlesquentin.png',
                alt: 'imageBanniere lycee chauny',
                lieu: 'Lycée Robert chaumann',
                adresse: 'Chauny(02)',
                dateEntree: new Date(' 01/04/1999 '),
                dateSortie: new Date(' 01/10/2001 '),
                contenu: ' Formation permettant de maitriser les techinique de gestion et l\'aménagement des milieux, qu\'il soit artificielle ou naturelle.',
                liste: [
                    'Analyser les aménagements existant',
                    'participer des des suivies d\'épéces pour mieux appréhender la gestion des population naturelles',
                    'Réaliser des aménagements, de la conseption a la mise en oeuvre.',
                    'Découvrir les grands enjeux liées à l\'amenagemet des espaces et a la gestion des éspéces.'
                ]
            },
        ];
        this.experienceTab = [
            {
                dateEntree: new Date('2018/01/05'),
                dateSortie: new Date('2021/02/01'),
                image: '../../../../assets/images/ban_bricoDepot.png',
                typeContrat: 'CDI',
                enseigne: 'Bricot Dépot',
                lieu: 'Trélissac (24000)',
                fonction: 'Vendeur Polyvalent - Secteur Outillage/Peinture/Electicité '
            },
            {
                dateEntree: new Date('2009/01/05'),
                dateSortie: new Date('2017/05/01'),
                image: '../../../../assets/images/ban-cashexpress.png',
                typeContrat: 'CDI',
                enseigne: 'CashExpress',
                lieu: 'Trélissac (24000)',
                fonction: 'Acheteur Vendeur Polyvalent - Gestion '
            }
        ];
    }
    ParcourComponent.prototype.ngOnInit = function () {
    };
    ParcourComponent = __decorate([
        core_1.Component({
            selector: 'app-parcour',
            templateUrl: './parcour.component.html',
            styleUrls: ['./parcour.component.sass']
        })
    ], ParcourComponent);
    return ParcourComponent;
}());
exports.ParcourComponent = ParcourComponent;
