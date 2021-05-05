"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var portfolio_form_component_1 = require("./pages/page-container/portfolio/portfolio-form/portfolio-form.component");
var portfolio_component_1 = require("./pages/page-container/portfolio/portfolio.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("src/shared/auth.guard");
var s_inscrire_component_1 = require("./components/auth/s-inscrire/s-inscrire.component");
var se_connecter_component_1 = require("./components/auth/se-connecter/se-connecter.component");
var acceuil_component_1 = require("./pages/page-container/acceuil/acceuil.component");
var contact_component_1 = require("./pages/page-container/contact/contact.component");
var page_container_component_1 = require("./pages/page-container/page-container.component");
var experience_form_component_1 = require("./pages/page-container/parcour/experiences/experience-form/experience-form.component");
var experience_component_1 = require("./pages/page-container/parcour/experiences/experience/experience.component");
var formation_form_component_1 = require("./pages/page-container/parcour/formations/formation-form/formation-form.component");
var formation_component_1 = require("./pages/page-container/parcour/formations/formation/formation.component");
var parcour_component_1 = require("./pages/page-container/parcour/parcour.component");
var routes = [
    { path: 'acceuil', component: acceuil_component_1.AcceuilComponent },
    { path: 'seConnecter', component: se_connecter_component_1.SeConnecterComponent },
    { path: 'sInscrire', component: s_inscrire_component_1.SInscrireComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    { path: 'parcour', component: parcour_component_1.ParcourComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent },
    { path: 'portfolioForm', component: portfolio_form_component_1.PortfolioFormComponent },
    { path: 'portfolio/:id',
        // canActivate:[AuthGuard],
        component: portfolio_form_component_1.PortfolioFormComponent },
    { path: 'formation', component: formation_component_1.FormationComponent },
    { path: 'formation/:_id',
        canActivate: [auth_guard_1.AuthGuard],
        component: formation_form_component_1.FormationFormComponent },
    { path: 'formationForm',
        canActivate: [auth_guard_1.AuthGuard],
        component: formation_form_component_1.FormationFormComponent },
    { path: 'experience', component: experience_component_1.ExperienceComponent },
    { path: 'experience/:_id',
        // canActivate: [AuthGuard],
        component: experience_form_component_1.ExperienceFormComponent
    },
    { path: 'experienceForm',
        // canActivate:[AuthGuard],
        component: experience_form_component_1.ExperienceFormComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: page_container_component_1.PageContainerComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
