﻿import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Hero} from './hero';
import {HeroService} from './hero.service';



@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private _router : Router,
        private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes().then(result => this.heroes = result.slice(0, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }



}