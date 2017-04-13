"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by khjan on 2017-03-13.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var GitDashService = (function () {
    //https://api.github.com/users/web/repos
    function GitDashService(http) {
        this.http = http;
        this.personUrl = 'https://api.github.com/search/users?q=web&sort=stars&order=desc';
    }
    GitDashService.prototype.getPerson = function () {
        return this.http.get(this.personUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    GitDashService.prototype.getRepo = function (id) {
    };
    return GitDashService;
}());
GitDashService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GitDashService);
exports.GitDashService = GitDashService;
//# sourceMappingURL=GitDashService.js.map