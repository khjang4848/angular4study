"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by khjan on 2017-03-12.
 */
var core_1 = require("@angular/core"); //주요 요소의 Decorator, Core Module
var platform_browser_1 = require("@angular/platform-browser"); //브라우져 모듈
var forms_1 = require("@angular/forms"); //폼관련 모듈
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app.routing.module");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var HomeComponent_1 = require("./HomeComponent");
var PersonComponent_1 = require("./PersonComponent");
var ForkComponent_1 = require("./ForkComponent");
var StarComponent_1 = require("./StarComponent");
var LanguageComponent_1 = require("./LanguageComponent");
var GitDashService_1 = require("./GitDashService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            ng2_charts_1.ChartsModule,
            ng_bootstrap_1.NgbModule
        ],
        declarations: [app_component_1.AppComponent, HomeComponent_1.HomeComponent, PersonComponent_1.PersonComponent, ForkComponent_1.ForkComponent,
            StarComponent_1.StarComponent, LanguageComponent_1.LanguageComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [GitDashService_1.GitDashService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map