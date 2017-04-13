import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { ChartsModule as Chart } from 'ng2-charts/ng2-charts';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMememoryDataSerive} from './InMememoryDataSerive';
import { GitDashService} from './gitDashService';
import {HomeComponent} from './HomeComponent';
import {LanguageComponent} from './LanguageComponent';
import {PersonComponent} from './PersonComponent';
import {MyFileterPipe} from './myFilter';

import {Events} from 'ionic-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent,
    PersonComponent,
    MyFileterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMememoryDataSerive),
    AppRoutingModule,
    Chart
  ],
  providers: [GitDashService, Events],
  bootstrap: [AppComponent]
})
export class AppModule { }
