/**
 * Created by khjan on 2017-05-06.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {IntroComponent} from "./intro.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {appRoutingProviders, routing} from "./app.routing";
import {ValueProviderComponent} from "./value-provider/value-provider.component";
import { FactoryProviderComponent } from './factory-provider/factory-provider.component';
import { ClassProviderComponent } from './class-provider/class-provider.component';
import { FactoryComponent } from './factory/factory.component';
import { ReflectiveInjectorComponent } from './reflective-injector/reflective-injector.component';
import { OpaqueTokenComponent } from './opaque-token/opaque-token.component';

import { Engine, SpeedMeter} from './factory-provider/car.service';

@NgModule({
    declarations : [AppComponent, IntroComponent, ValueProviderComponent,
        FactoryProviderComponent, ClassProviderComponent, OpaqueTokenComponent,
        FactoryComponent, ReflectiveInjectorComponent],
    imports : [BrowserModule, CommonModule, FormsModule, routing],
    providers : [appRoutingProviders, Engine, SpeedMeter],
    bootstrap : [AppComponent]
})
export class AppModule {}
