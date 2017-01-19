import { CONSTANTS } from './../constants';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type' : 'application/json'});
  constructor(private http: Http) { }

  RetrieveHeroes(): Promise<Hero[]>{
    //return Promise.resolve(HEROES);    
    return this.http.get(CONSTANTS.HEROES_URL)
    .toPromise()
    .then(response => response.json().data as Hero[])
    .catch(error => { console.log("Error" + error); });
  }

  RetieveHeroesSlowly(): Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.RetrieveHeroes()) ,2000);
    });
  }

  GetHero(id: number) : Promise<Hero>{
    const url = `${CONSTANTS.HEROES_URL}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(error => console.log(`Error: ${error}`));
    //return this.RetrieveHeroes().then(heroes => heroes.find(hero => hero.id == id))
  }

  UpdateHero(hero: Hero) : Promise<Hero>{
    const url = `${CONSTANTS.HEROES_URL}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
                .toPromise()
                .then(() => hero)
                .catch(error => console.log(`Error: ${error}`));
  }

}
