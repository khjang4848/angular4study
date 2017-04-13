/**
 * Created by khjan on 2017-03-12.
 */
import {Component, OnInit} from '@angular/core';
import {} from './GitDashService';
import {GitDashService} from "./GitDashService";
''
@Component({
    moduleId : module.id,
    selector: 'git-dash-home',
    templateUrl : './HomeComponent.html'
})


export class HomeComponent implements OnInit{
    person : [string];
    constructor(private gitService : GitDashService){

    }
    getPerson() : void{
        this.gitService.getPerson()
            .then(persons => {
                this.person = persons.items;
                //console.log(this.person);
            });
    }
    ngOnInit() : void{
        this.getPerson();
    }
}

