import { RouterModule, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NotificationsService } from './../../../../node_modules/angular2-notifications/src/notifications.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private notificationService : NotificationsService) { }

  ngOnInit() {
    this.heroService.RetrieveHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      },
      error => {
        console.log(`Error: ${error}`);
      });
  }

  RefreshHeroList(hero : Hero){
    this.ngOnInit();
  }

  RemoveHero(hero){
    var index = this.heroes.indexOf(hero);
    if(index > -1){
      this.heroes.splice(index, 1);
      this.notificationService.success(
        'Success!',
        `${hero.name} has been deleted`,
        {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
        }
    );
    }
  }

  ViewHero(hero){
    this.selectedHero = hero;
  }

}
