/**
 * Created by khjan on 2017-05-07.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { CustomDirectiveCmp } from './custom-directive/custom-directive.component';
import { MyClickDirective } from './custom-directive/my-click.directive';


import { PassToDirectiveComponent } from './pass-to-directive/pass-to-directive.component';
import { myDirective } from './pass-to-directive/my.directive';

import { BindingToDirectiveComponent } from './binding-to-directive/binding-to-directive.component';
import { AlertDirective } from './binding-to-directive/alert.directive';

import { CustomAttrDirective } from './custom-attr-directive/custom-attr.directive';
import { CustomAttrDirectiveCmp } from './custom-attr-directive/custom-attr-directive.component';

import { CustomStructuralDirectiveCmp } from './custom-structural-directive/custom-structural-directive.component';
import { MyIfDirective } from './custom-structural-directive/myif.directive';

@NgModule({
    declarations : [AppComponent, IntroComponent, CustomDirectiveCmp, MyClickDirective,
        PassToDirectiveComponent, myDirective, BindingToDirectiveComponent, AlertDirective,
        CustomAttrDirective, CustomAttrDirectiveCmp,
        CustomStructuralDirectiveCmp, MyIfDirective],
    imports : [BrowserModule, CommonModule, FormsModule, routing],
    providers : [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
