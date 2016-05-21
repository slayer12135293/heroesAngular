import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from '@angular/router-deprecated';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
    
})

export class HeroesComponent implements OnInit {
  
    heroes : Hero[];    
    selectedHero: Hero;
   

    constructor(
        private _router:Router,
        private heroService: HeroService) { }


    getHeroes() {
        this.heroService.getHeroesSlowly().then(result => this.heroes = result);
    }



    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }


 }

