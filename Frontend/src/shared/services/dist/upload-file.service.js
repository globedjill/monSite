"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.UploadFileService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UploadFileService = /** @class */ (function () {
    function UploadFileService(http) {
        this.http = http;
        this.filesHolder$ = new rxjs_1.BehaviorSubject([]);
    }
    UploadFileService.prototype.addFile = function (files) {
        var _this = this;
        this.filesHolder$.next(__spreadArrays(this.filesHolder$.value, Array.from(files).map(function (f) {
            var formData = new FormData();
            formData.append('f', f);
            var request = new http_1.HttpRequest('POST', '/api/upload', formData, {
                reportProgress: true
            });
            return {
                file: f,
                progress$: _this.http.request(request).pipe(operators_1.map(function (event) {
                    switch (event.type) {
                        case http_1.HttpEventType.Sent: {
                            return 0;
                        }
                        case http_1.HttpEventType.UploadProgress: {
                            return Math.round(event.loaded / event.total * 100);
                        }
                        case http_1.HttpEventType.Response: {
                            return 100;
                        }
                        default: {
                            return 0;
                        }
                    }
                }))
            };
        })));
    };
    UploadFileService.prototype.removeFile = function (index) {
        var files = this.filesHolder$.value.slice();
        this.http["delete"]("/api/upload/" + files[index].file.name).subscribe();
        files.splice(index, 1);
        this.filesHolder$.next(files);
    };
    UploadFileService.prototype.removeFileOfCard = function (nom) {
        this.http["delete"]("/api/upload/" + nom).subscribe();
    };
    UploadFileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UploadFileService);
    return UploadFileService;
}());
exports.UploadFileService = UploadFileService;
