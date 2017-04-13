/**
 * Created by khjan on 2017-03-04.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common'

import { HeroService } from './hero.service'
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId : module.id,
    selector: 'my-hero-detail',
    templateUrl : './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{
    hero : Hero;

    constructor(
        private heroService : HeroService,
        private route : ActivatedRoute,
        private location : Location
    ){}

    ngOnInit() : void {
        this.route.params
            .switchMap((params : Params) => this.heroService.getHero(+params['id'])) //'+' number convert
            .subscribe(hero => this.hero = hero)
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}