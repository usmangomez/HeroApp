import { Injectable } from '@angular/core';
import { Hero } from '../model/heroe';
import { Heroes } from '../hero.data';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Hero[] = Heroes;

  constructor() { 
  }

  getHeroes() {
    return this.heroes;
  }

  getHero(idx: number): Hero {
    return this.heroes[idx];
  }
}
