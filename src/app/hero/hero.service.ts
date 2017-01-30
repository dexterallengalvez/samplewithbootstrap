import { Observable } from 'rxjs';
import { CONSTANTS } from './../constants';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type' : 'application/json'});
  constructor(private http: Http) { }

  RetrieveHeroes(): Observable<Hero[]>{
    //return Promise.resolve(HEROES);    
    return this.http.get(CONSTANTS.HEROES_URL)
               .map((result : Response) => result.json().data)
               .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  RetieveHeroesSlowly(): Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.RetrieveHeroes()) ,2000);
    });
  }

  GetHero(id: number) : Observable<Hero>{
    const url = `${CONSTANTS.HEROES_URL}/${id}`;
    return this.http.get(url)
    .map((response : Response) => response.json().data as Hero)
    .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    //return this.RetrieveHeroes().then(heroes => heroes.find(hero => hero.id == id))
  }

  UpdateHero(hero: Hero) : Observable<Hero>{
    const url = `${CONSTANTS.HEROES_URL}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
                    .map((result : Response) => result.json())
                    .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  CreateHero(hero: Hero) : Observable<Hero>{
    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: this.headers})
    .map((result : Response) => result.json())
    .catch((error : any) => Observable.throw(error || 'Server Error'));
  }

}
