import { NotificationsService } from './../../../../node_modules/angular2-notifications/src/notifications.service';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  
  options: any;
  heroForm : FormGroup;
  @Output() hero : EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor(fb : FormBuilder, private heroService : HeroService, private notificationService : NotificationsService) {
    this.heroForm = fb.group({
      'name': ['', Validators.required],
      'id': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])]
    });
   }

  ngOnInit() {
    
  }

  SubmitForm(hero : Hero){
    this.heroService.CreateHero(hero)
    .subscribe(
      result => { this.hero.next(result as Hero) },
      error => { Observable.throw(`Error: ${error}`) }
    );
    this.notificationService.success(
        'Success!',
        `${hero.name} has been created`,
        {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
        }
    );
  }
}
