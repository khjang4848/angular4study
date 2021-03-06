import {Component} from "@angular/core";


/**
 * Created by khjan on 2017-03-04.
 */
@Component({
    moduleId: module.id,
    selector : 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink = '/dashboard' routerLinkActive="active">Dashboard</a>
    <a routerLink = '/heroes' routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls : ['./app.component.css']
})

export class AppComponent{
    title = "Tour of Heroes";
}
