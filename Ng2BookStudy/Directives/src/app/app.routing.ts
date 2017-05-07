/**
 * Created by khjan on 2017-05-07.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import { CustomDirectiveCmp } from './custom-directive/custom-directive.component';
import {PassToDirectiveComponent} from "./pass-to-directive/pass-to-directive.component";
import {BindingToDirectiveComponent} from "./binding-to-directive/binding-to-directive.component";
import {CustomAttrDirectiveCmp} from "./custom-attr-directive/custom-attr-directive.component";
import { CustomStructuralDirectiveCmp } from './custom-structural-directive/custom-structural-directive.component';

const appRoutes : Routes = [
    { path: '', component: IntroComponent },
    { path: 'custom-directive', component: CustomDirectiveCmp },
    { path: 'pass-to-directive', component: PassToDirectiveComponent },
    { path: 'binding-to-directive', component: BindingToDirectiveComponent },
    { path: 'custom-attr-directive', component: CustomAttrDirectiveCmp },
    { path: 'custom-structural-directive', component: CustomStructuralDirectiveCmp }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

