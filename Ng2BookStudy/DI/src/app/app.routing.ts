/**
 * Created by khjan on 2017-05-06.
 */
import {RouterModule, Routes} from "@angular/router";
import {IntroComponent} from "./intro.component";
import {ModuleWithProviders} from "@angular/core";
import {ValueProviderComponent} from "./value-provider/value-provider.component";
import {FactoryProviderComponent} from "./factory-provider/factory-provider.component";
import { ClassProviderComponent } from './class-provider/class-provider.component';
import {OpaqueTokenComponent} from "./opaque-token/opaque-token.component";
import {FactoryComponent} from "./factory/factory.component";
import { ReflectiveInjectorComponent } from './reflective-injector/reflective-injector.component';


const appRoutes : Routes = [
    { path: '', component: IntroComponent },
    { path: 'value-provider', component: ValueProviderComponent },
    { path: 'factory-provider', component: FactoryProviderComponent },
    { path: 'class-provider', component: ClassProviderComponent },
    { path: 'opaque-token', component: OpaqueTokenComponent },
    { path: 'factory', component: FactoryComponent },
    { path: 'reflective-injector', component: ReflectiveInjectorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
