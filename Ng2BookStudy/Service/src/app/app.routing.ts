/**
 * Created by khjan on 2017-04-17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IntroComponent } from './intro.component';
import { OopComponent } from './oop-service/oop.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'oop-service', component: OopComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
