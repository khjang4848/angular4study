/**
 * Created by khjan on 3/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GitDashService} from "./gitDashService";
import {Events} from 'ionic-angular';
@Component({
  moduleId : module.id,
  selector: 'git-dash-home',
  templateUrl : 'HomeComponent.html'
})

export class HomeComponent implements OnInit{
  person : [string];
  fil : string;
  static _this : HomeComponent;

  constructor(private gitService : GitDashService,
              private router : Router,
              private events : Events){

    HomeComponent._this = this;
    events.subscribe('app', this.onEvent);

  }

  onEvent(events : any) : void{
    let e = events;
    let t  = HomeComponent._this;

    t.fil = e;

    alert(t.fil);

  }

  getPeron() : void{
    this.gitService.getPerson()
      .then(persons => {
        this.person = persons.items;
      });
  }

  ngOnInit() : void{
    this.getPeron();
  }

}
