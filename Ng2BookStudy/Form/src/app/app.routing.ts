/**
 * Created by khjan on 5/8/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import {BuiltInValidatorComponent} from "./built-in-validator/built-in-validator.component";
import {FormReferenceVariableComponent} from "./form-reference-variable/form-reference-variable.component";
import {FormGroupComponent} from "./form-group/form-group.component";
import {CustomValidatorsComponent} from "./custom-validators/custom-validators.component";

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'built-in-validator', component: BuiltInValidatorComponent },
    { path: 'form-reference-variable', component: FormReferenceVariableComponent },
    { path: 'form-group', component: FormGroupComponent },
    { path: 'custom-validator', component: CustomValidatorsComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
