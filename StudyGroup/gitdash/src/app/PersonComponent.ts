/**
 * Created by khjan on 3/20/2017.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {GitDashService} from './gitDashService';
import {Events} from 'ionic-angular';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId : module.id,
  selector: 'git-dash-person',
  templateUrl : 'PersonComponent.html'
})


export class PersonComponent implements OnInit{
  repo : [string];
  fil : string;
  static _this : PersonComponent;

  constructor(
    private gitDashService : GitDashService,
    private route : ActivatedRoute,
    private events : Events
  ){
    PersonComponent._this = this;
    events.subscribe('app', this.onEvent);
  }

  onEvent(events : any) : void{
      let e = events;
      let t = PersonComponent._this;

      t.fil = e;

      alert(t.fil);

  }
  ngOnInit() : void{
    this.route.params
      .switchMap((params : Params) => this.gitDashService.getRepo(params['id']))
      .subscribe(repo => {
        this.repo = repo
      });
  }

  goHomePage(url : string) : void{
    window.open(url);
  }

}

