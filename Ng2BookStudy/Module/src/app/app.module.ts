/**
 * Created by khjan on 2017-04-17.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { IntroComponent} from './intro.component';
import { HelloComponent} from './hello/hello.component';

import { CoreModule } from './core/core.module';
import { CoreTestComponent} from './core-test/core-test.component';

import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';

@NgModule({
    declarations : [AppComponent, IntroComponent, HelloComponent, CoreTestComponent],
    //Angular 라이브러리 모듈이나 라우팅 모듈 등록
    imports : [BrowserModule, CommonModule, FormsModule,AppRoutingModule,
    CoreModule.forRoot({nickName : 'Happy'}), MemberModule, PlayerModule],
    providers : [],
    bootstrap: [AppComponent]
})
export class AppModule{
}
