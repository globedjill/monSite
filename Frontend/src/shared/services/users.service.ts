import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserSession } from '../modeles/userSession.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public idSession$: BehaviorSubject<UserSession> = new BehaviorSubject({
    isAuth: null,
    _id: null
  })
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
    signin(user: User): Observable<any>{
    return this.http.post('/api/users/signin', user).pipe(
      tap((response)=>{
        this.idSession$.next({
          isAuth: true,
          _id: response._id
        });
        console.log(response);
      },err => {
        console.log(err);
      })
    );
    }

    // Deconnexion
    loggout(): Observable<any>{
      return this.http.get('api/users/signout').pipe(
        tap((response)=>{
          this.idSession$.next({
            isAuth: false,
            _id: response._id
          });
          console.log(response);
          },err => {
          console.log(err);
        })
      );
    }
}
