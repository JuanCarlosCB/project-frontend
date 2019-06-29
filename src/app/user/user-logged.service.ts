import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../entities/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token'
  })
};

const URL_BASE = 'http://localhost:3000/user';

@Injectable()
export class UserLoggedService {

  constructor(private http: HttpClient) { }

  getUserLogged(){
    return this.http.get(URL_BASE+'/'+1);
  }

  saveMessageUserLogged(user:User):Observable<User>{
    const url = `${URL_BASE}/${1}`; /*cambiar user.id por 1, por si acaso*/
    return this.http.put<User>(url, user, httpOptions);
  }
}
