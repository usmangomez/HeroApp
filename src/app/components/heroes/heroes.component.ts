import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/heroe';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroes: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroes.getHeroes();
  }

}
