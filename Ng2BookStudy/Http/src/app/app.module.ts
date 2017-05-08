/**
 * Created by khjan on 5/8/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { NotFoundComponent } from './not-found.component';

import { PromisePrototypeComponent } from './promise/promise-prototype.component';
import {PromiseMethodComponent} from "./promise/promise-method.component";
import {WikiPromiseComponent} from "./wiki/wiki.component.promise";
import {WikiComponent} from "./wiki/wiki.component";
import {PersonData} from "./data/person-data";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import { PersonListPromiseComponent } from './person/person-list.component.promise';
import { ItemEditComponent } from './person/item-edit.component';



@NgModule({
    declarations : [AppComponent, IntroComponent, NotFoundComponent,
        PromisePrototypeComponent, PromiseMethodComponent, WikiPromiseComponent,
        WikiComponent, PersonListPromiseComponent, ItemEditComponent],
    imports: [
        BrowserModule, CommonModule, FormsModule,
        AppRoutingModule,
        HttpModule, JsonpModule,
        InMemoryWebApiModule.forRoot(PersonData)
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
