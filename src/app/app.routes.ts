import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'about-us', component: AboutComponent},
    {path: 'buscador/:busqueda', component: BuscadorComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }