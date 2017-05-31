/**
 * Created by khjan on 2017-05-11.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { CmpLifecycleComponent } from './cmp-lifecycle/cmp-lifecycle';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'cmp-lifecycle', component: CmpLifecycleComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
