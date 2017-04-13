/**
 * Created by khjan on 2017-03-12.
 */
import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'my-app',
    template : `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink = '/Home' routerLinkActive="active">Home</a>
    <a routerLink = '/Person' routerLinkActive="active">Person</a>
    <a routerLink = '/Fork' routerLinkActive="active">Fork</a>
    <a routerLink = '/Star' routerLinkActive="active">Star</a>
    <a routerLink = '/Language' routerLinkActive="active">Language</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls : ['./app.component.css']
})

export class AppComponent{
    title = "GitHub Tours";
}