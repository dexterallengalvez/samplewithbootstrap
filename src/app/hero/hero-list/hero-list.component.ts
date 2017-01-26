import { RouterModule, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.RetrieveHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      },
      error => {
        console.log(`Error: ${error}`);
      });
  }

  RemoveHero(hero){
    var index = this.heroes.indexOf(hero);
    if(index > -1){
      this.heroes.splice(index, 1);
    }
  }

  ViewHero(hero){
    this.selectedHero = hero;
  }

}
