import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/model/heroe';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  
  @Input() hero:Hero;
  @Input() idx: number;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  
  heroP(idx: number) {
    this._router.navigate(['/hero', idx]);
  }

}
