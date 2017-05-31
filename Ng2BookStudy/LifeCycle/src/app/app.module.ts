/**
 * Created by khjan on 2017-05-11.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { CmpLifecycleComponent } from './cmp-lifecycle/cmp-lifecycle';
import { ChildCmp } from './cmp-lifecycle/child-cmp.component';
import { Window } from './cmp-lifecycle/window.directive';
import { MyCmp } from './cmp-lifecycle/my-cmp.component';

@NgModule({
    declarations : [AppComponent, IntroComponent, CmpLifecycleComponent, ChildCmp, Window, MyCmp],
    imports : [BrowserModule, CommonModule, FormsModule, routing],
    providers : [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
