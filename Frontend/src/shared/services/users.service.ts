import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Queries
    // Inscription
    createUser(newUser: User): Observable<User>{
    return this.http.post<User>('/api/users/signup',newUser);
    }
    // Connexion
    signin(user: User){
    return this.http.post('/api/users/signin', user);
    }

    // Deconnexion
    loggout(){
      this.http.get('api/users/signout').subscribe(()=> {});
    }

}
