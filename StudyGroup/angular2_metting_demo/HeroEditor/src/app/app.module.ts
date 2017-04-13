/**
 * Created by khjan on 2017-03-04.
 */
import { NgModule } from '@angular/core'; //주요 요소의 Decorator, Core Module
import { BrowserModule } from '@angular/platform-browser';  //브라우져 모듈
import { FormsModule }   from '@angular/forms';  //폼관련 모듈
import { HttpModule } from '@angular/http';

import { AppRoutingModule} from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMememoryDataSerive} from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent} from './heroes.component'
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component'
import { HeroService} from './hero.service';


//Application 전역으로 사용하는 모듈이나 최상의 컴퍼넌트 모듈이나 최상위 컴퍼넌트를 등록함
@NgModule({
    //
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMememoryDataSerive),
        AppRoutingModule
    ],
    declarations : [AppComponent, DashboardComponent, HeroDetailComponent,
        HeroesComponent, HeroSearchComponent],  //사용할 구성요소
    bootstrap : [AppComponent], //가장 먼저 호출하는 App Commponent 등록
    providers: [HeroService]
})
export class AppModule {}