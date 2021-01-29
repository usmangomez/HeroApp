import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  buscarHero(texto:string) {
    this._router.navigate(['/buscador', texto]);

    return false;
  }

}
