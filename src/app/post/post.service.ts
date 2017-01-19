import { Post } from './post';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import {Observable} from 'rxjs';

@Injectable()
export class PostService {

  private postsurl : string = 'https://jsonplaceholder.typicode.com/posts';
  private headers = new Headers({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json', 
        'Access-Control-Allow-Credentials' : 'true', 
        'Content-Encoding' : 'gzip  ', 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'});

  constructor(private http: Http) { }

  GetPosts() : Observable<Post[]>{
    return this.http.get(`${this.postsurl}`).map((res : Response) => res.json());
  }

}
