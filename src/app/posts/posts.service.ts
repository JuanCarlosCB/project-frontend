import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_BASE = 'http://localhost:3000/user';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(URL_BASE);
  }

  

}
