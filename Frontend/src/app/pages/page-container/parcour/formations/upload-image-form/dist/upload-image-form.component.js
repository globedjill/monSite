"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UploadImageFormComponent = void 0;
var core_1 = require("@angular/core");
var UploadImageFormComponent = /** @class */ (function () {
    function UploadImageFormComponent(upLoadFileService) {
        this.upLoadFileService = upLoadFileService;
        this.filesHolder$ = this.upLoadFileService.filesHolder$.asObservable();
    }
    UploadImageFormComponent.prototype.ngOnInit = function () {
    };
    UploadImageFormComponent.prototype.openFile = function () {
        this.inputRef.nativeElement.click();
    };
    UploadImageFormComponent.prototype.addFile = function ($event) {
        var file = $event.target.files;
        this.upLoadFileService.addFile(file);
        this.noFile = this.upLoadFileService.filesHolder$.value.length;
    };
    UploadImageFormComponent.prototype.deleteFile = function (index) {
        this.upLoadFileService.removeFile(index);
        this.noFile = this.upLoadFileService.filesHolder$.value.length;
    };
    UploadImageFormComponent.prototype.dropFile = function ($event) {
        console.log($event);
        if ($event.dataTransfer) {
            var file = $event.dataTransfer.files;
            this.upLoadFileService.addFile(file);
        }
    };
    __decorate([
        core_1.ViewChild('fileinput', { static: false })
    ], UploadImageFormComponent.prototype, "inputRef");
    UploadImageFormComponent = __decorate([
        core_1.Component({
            selector: 'app-upload-image-form',
            templateUrl: './upload-image-form.component.html',
            styleUrls: ['./upload-image-form.component.sass']
        })
    ], UploadImageFormComponent);
    return UploadImageFormComponent;
}());
exports.UploadImageFormComponent = UploadImageFormComponent;
