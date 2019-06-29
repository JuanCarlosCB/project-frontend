import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_BASE = 'http://localhost:3000/friend';

@Injectable()
export class FriendsService {

  constructor(private http : HttpClient) { }

  getFriendsFromUser(){
    return this.http.get(URL_BASE + '?iduser=1');
  }
}
