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

  getSearchHeroes(name: string): Hero[] {

    let heroesSeach: Hero[]=[];

    for (let i = 0; i < this.heroes.length; i++) {
      let hero = this.heroes[i];
      if(hero.nombre.toLowerCase().indexOf(name.toLowerCase()) >= 0) {
        hero.idx=i;
        heroesSeach.push(hero);
      }

    }

    return heroesSeach;

  }
}
