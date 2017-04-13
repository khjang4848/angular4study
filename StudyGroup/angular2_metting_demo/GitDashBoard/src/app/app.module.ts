/**
 * Created by khjan on 2017-03-12.
 */
import { NgModule } from '@angular/core'; //주요 요소의 Decorator, Core Module
import { BrowserModule } from '@angular/platform-browser';  //브라우져 모듈
import { FormsModule }   from '@angular/forms';  //폼관련 모듈
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app.routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';

import { HomeComponent} from './HomeComponent';
import { PersonComponent} from './PersonComponent';
import { ForkComponent} from './ForkComponent';
import { StarComponent} from './StarComponent';
import { LanguageComponent} from './LanguageComponent';

import { GitDashService } from './GitDashService';

@NgModule({
    imports  : [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ChartsModule,
        NgbModule
    ],
    declarations : [AppComponent, HomeComponent, PersonComponent, ForkComponent,
        StarComponent, LanguageComponent],
    bootstrap : [AppComponent], //가장 먼저 호출하는 App Commponent 등록
    providers : [GitDashService]
})

export class AppModule {}