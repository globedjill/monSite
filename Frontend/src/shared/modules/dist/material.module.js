"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var autocomplete_1 = require("@angular/material/autocomplete");
var badge_1 = require("@angular/material/badge");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var tabs_1 = require("@angular/material/tabs");
var sidenav_1 = require("@angular/material/sidenav");
var form_field_1 = require("@angular/material/form-field");
var menu_1 = require("@angular/material/menu");
var input_1 = require("@angular/material/input");
var expansion_1 = require("@angular/material/expansion");
var select_1 = require("@angular/material/select");
var checkbox_1 = require("@angular/material/checkbox");
var divider_1 = require("@angular/material/divider");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var progress_bar_1 = require("@angular/material/progress-bar");
var tooltip_1 = require("@angular/material/tooltip");
var MATERIAL = [
    autocomplete_1.MatAutocompleteModule,
    badge_1.MatBadgeModule,
    bottom_sheet_1.MatBottomSheetModule,
    button_1.MatButtonModule,
    button_toggle_1.MatButtonToggleModule,
    card_1.MatCardModule,
    list_1.MatListModule,
    icon_1.MatIconModule,
    tabs_1.MatTabsModule,
    sidenav_1.MatSidenavModule,
    form_field_1.MatFormFieldModule,
    menu_1.MatMenuModule,
    input_1.MatInputModule,
    expansion_1.MatExpansionModule,
    select_1.MatSelectModule,
    checkbox_1.MatCheckboxModule,
    datepicker_1.MatDatepickerModule,
    core_2.MatNativeDateModule,
    progress_bar_1.MatProgressBarModule,
    tooltip_1.MatTooltipModule,
    divider_1.MatDividerModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [MATERIAL],
            exports: [MATERIAL]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
