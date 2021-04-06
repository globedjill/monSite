"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var app_routing_1 = require("./../../app/app.routing");
var core_1 = require("@angular/core");
var layout_module_1 = require("./layout.module");
var footer_component_1 = require("src/app/components/footer/footer.component");
var header_component_1 = require("src/app/components/header/header.component");
var navbar_component_1 = require("src/app/components/navbar/navbar.component");
var acceuil_component_1 = require("src/app/pages/page-container/acceuil/acceuil.component");
var contact_component_1 = require("src/app/pages/page-container/contact/contact.component");
var page_container_component_1 = require("src/app/pages/page-container/page-container.component");
var parcour_component_1 = require("src/app/pages/page-container/parcour/parcour.component");
var s_inscrire_component_1 = require("src/app/components/auth/s-inscrire/s-inscrire.component");
var se_connecter_component_1 = require("src/app/components/auth/se-connecter/se-connecter.component");
var MODULES = [
    header_component_1.HeaderComponent,
    footer_component_1.FooterComponent,
    navbar_component_1.NavbarComponent,
    acceuil_component_1.AcceuilComponent,
    se_connecter_component_1.SeConnecterComponent,
    s_inscrire_component_1.SInscrireComponent,
    page_container_component_1.PageContainerComponent,
    parcour_component_1.ParcourComponent,
    contact_component_1.ContactComponent,
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                MODULES
            ],
            imports: [
                app_routing_1.AppRoutingModule,
                layout_module_1.LayoutModule,
            ],
            exports: [
                MODULES,
                layout_module_1.LayoutModule,
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
