import { Hero } from './../hero';
import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  heroForm : FormGroup;

  constructor(fb : FormBuilder) {
    this.heroForm = fb.group({
      'heroName': ['', Validators.required],
      'id': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])]
    });
   }

  ngOnInit() {
    
  }

  SubmitForm(value : any){
    console.log(value.heroName);
  }
}
