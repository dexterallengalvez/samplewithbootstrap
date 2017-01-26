import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';               //Operator to use with the route parameters Observable

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {


  //Declare Variables
  hero: Hero;
  paramHeroId: number;

  //Inject needed services
  constructor(
    private heroService : HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.hero = {
        id: null,
        name: ''
    }
    this.GetHero();
  }

  GetHero() : void{
    this.route.params.subscribe(
        (parameter: Params) => this.paramHeroId = parameter['id']
      );
    this.heroService.GetHero(this.paramHeroId).subscribe(
      response => {
        this.hero = response;
      },
      error => {
        console.log(`Error: ${error}`);
      }
    );
  }

  UpdateHero() : void{
    this.heroService.UpdateHero(this.hero)
                    .then(() => this.GoBack());
  }

  GoBack() : void{
    this.location.back();
  }

}
