/**
 * Created by khjan on 2017-04-17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IntroComponent } from './intro.component';
import { OopComponent } from './oop-service/oop.component';
import { PromiseComponent } from './promise/promise.component';
import { ParentComponent } from './shared-service/parent.component';


const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'oop-service', component: OopComponent },
    { path: 'promise', component: PromiseComponent },
    { path: 'shared-service', component: ParentComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
