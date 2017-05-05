/**
 * Created by khjan on 2017-04-23.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

/* feature module */
import { MemberModule } from './member/member.module';
import { ChildrenModule } from './children/children.module';

import {AppComponent} from './app.component';

import { HelloComponent } from './hello/hello.component';
import { IntroComponent} from './intro.component';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component';

/* application router settings */
import { AppRoutingModule } from './app.routing';


@NgModule({
    imports : [BrowserModule, CommonModule, FormsModule, AppRoutingModule,
        MemberModule, ChildrenModule],
    declarations : [AppComponent, HelloComponent, IntroComponent,
        NotFoundComponent, LoginComponent],
    bootstrap : [AppComponent]
})

export class AppModule{}
