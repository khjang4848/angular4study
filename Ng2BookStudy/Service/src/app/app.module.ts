/**
 * Created by khjan on 2017-04-17.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { IntroComponent} from './intro.component';

import { OopComponent } from './oop-service/oop.component';

import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './promise/list.component';

import { CarComponent } from './shared-service/car.component';
import { TaxiComponent } from './shared-service/taxi.component';
import { ParentComponent } from './shared-service/parent.component';

@NgModule({
    declarations : [AppComponent, IntroComponent, OopComponent,
        PromiseComponent, ListComponent, CarComponent, TaxiComponent, ParentComponent],
    imports : [BrowserModule, CommonModule, FormsModule, routing],
    providers : [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule{
}
