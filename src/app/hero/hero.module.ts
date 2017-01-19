import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HeroComponents } from './hero-components';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, 
  ],
  declarations: [ HeroComponents ],
  exports: [ HeroComponents ],
  bootstrap: [ HeroListComponent ],
  providers: [ HeroService ]
})
export class HeroModule { }


