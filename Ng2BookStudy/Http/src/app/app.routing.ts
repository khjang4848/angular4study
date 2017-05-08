/**
 * Created by khjan on 5/8/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import {NotFoundComponent} from "./not-found.component";
import {PromisePrototypeComponent} from "./promise/promise-prototype.component";
import {PromiseMethodComponent} from "./promise/promise-method.component";
import {WikiPromiseComponent} from "./wiki/wiki.component.promise";
import {WikiComponent} from "./wiki/wiki.component";
import {PersonListPromiseComponent} from "./person/person-list.component.promise";

const helloRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'promise-prototype', component: PromisePrototypeComponent },
    { path: 'promise-method', component: PromiseMethodComponent },
    { path: 'wiki-promise', component: WikiPromiseComponent },
    { path: 'wiki-observable', component: WikiComponent },
    { path: 'promise', component: PersonListPromiseComponent },
];

const appRoutes: Routes = [
    ...helloRoutes,
    { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
