import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/heroe';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero: Hero=null;
  id: number=0;

  constructor(private _heroService: HeroesService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    })

    this.hero = this._heroService.getHero(this.id);
  }

}
