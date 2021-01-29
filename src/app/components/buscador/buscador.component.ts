import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/model/heroe';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  heroes: Hero[];
  heroSearch: string;

  constructor(private _heroesService:HeroesService, private _activeRouter:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe( params => {
      this.heroes = this._heroesService.getSearchHeroes(params['busqueda']);
    })

    console.log(this.heroes);
  }
  
  heroP(idx: number) {
    this._router.navigate(['/hero', idx]);
  }

}
