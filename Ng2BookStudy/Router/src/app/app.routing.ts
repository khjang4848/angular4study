/**
 * Created by khjan on 2017-04-24.
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// Config
let hashLocationStrategy: boolean = false;

import { HelloComponent } from './hello/hello.component';
import { IntroComponent} from './intro.component';

const helloRoutes : Routes = [
    {path : '', component : IntroComponent},
    {path : 'hello', component : HelloComponent}
];

const appRoutes : Routes = [
    ...helloRoutes
];

export const appRoutingProviders : any[] = [];
if(hashLocationStrategy){
    appRoutingProviders.push({provide : LocationStrategy, useClass : HashLocationStrategy});
}

export const AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(appRoutes);
