import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.scss']
})

export class HeroDashboardComponent implements OnInit {

  //variables
  heroes: Hero[];

  //Inject Service to constructor
  constructor(private heroService: HeroService, private route: Router) { }

  //Initialize viewmodel
  ngOnInit() {
    this.GetHeroes();
  }

  //Encapsulate Retrieval of Heroes
  GetHeroes() : void{
    this.heroService.RetrieveHeroes().subscribe(heroes => this.heroes = heroes.slice(1,4));
  }

  GoToDetail(id: number) : void{
    this.route.navigate(['/hero-detail', id]);
  }

}
