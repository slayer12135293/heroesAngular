import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from './hero.service';





@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private _heroService: HeroService,
        private _routeParams: RouteParams) { } 

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(x=> this.hero = x);
    }

    goBack() {
        window.history.back();
    }
}