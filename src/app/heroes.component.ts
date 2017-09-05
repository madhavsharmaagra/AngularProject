import { Component } from '@angular/core';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { OnInit } from "@angular/core";


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  madhavColor = '#1b6e9b';
  selectedHero: Hero;
  ngOnInit(): void{
        this.getHeroesSlowly();
  };

  constructor(private heroService: HeroService){}

  onSelect(hero: Hero): void{
      this.selectedHero = hero;
      }

    getHeroesSlowly(): void{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}



