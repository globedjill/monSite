import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserSession } from '../modeles/userSession.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;

  public idSession$: BehaviorSubject<UserSession> = new BehaviorSubject({
    isAuth: null,
    _id: null
  })
  public user: User;
  public error: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  // Queries
    // Inscription
    createUser(newUser: User): Observable<User>{
    return this.http.post<User>('/api/users/signup',newUser);
    }
    // Connexion en local
    signin(user: User): Observable<any>{
    return this.http.post('/api/users/signin', user).pipe(
      tap((response)=>{
        this.idSession$.next({
          isAuth: true,
          _id: response._id
        });
      },err => {
       this.error = err.error.substr(104,22);
      })
    );
  }

    // Connexion Google
    signinGoogle(){
      const optionRequete = {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization',
        // 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Credentials': 'true'
        })
      };

      this.http.get('/api/auth/google').subscribe((res)=>{
        console.log(res);
      }, err => {
        console.log(err);
      });
    }


    // userAPI(data): Observable<any> {
    //   return this.http.get(this.baseurl, data, httpOptions)
    //     .pipe(
    //       tap((resultat) => console.log("Résultat de la requête : ",resultat)),
    //       catchError(this.handleError('erreur lors de la requête CORS', []))
    //     );
    // }


    // Deconnexion
    loggout(): Observable<any>{
      return this.http.delete('api/users/signout').pipe(
        tap((response)=>{
          this.idSession$.next({
            isAuth: false,
            _id: ''
          });
          console.log(response);
          },err => {
          console.log(err.error);
        })
      );
    }
}
