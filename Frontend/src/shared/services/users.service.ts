import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user.interface';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Auth } from '../modeles/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isConnect: BehaviorSubject<Auth> = new BehaviorSubject({
    isAuth: null,
    keyConnect:null
  })

  public user: User;
  public error: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUser(newUser: User){
    this.saveUser(newUser);
  }

  // Queries
    // Inscription
    saveUser(newUser: User){
      this.http.post<User>('/api/users/signup',newUser).subscribe(()=>{
        this.router.navigate(['/seConnecter']);
      });
    }
    // Connexion
    signin(user: User){
    return this.http.post('/api/users/signin', user)
    // .pipe(
    //   tap((keyConnect: string)=> {
    //     this.isConnect.next({
    //       isAuth: true,
    //       keyConnect: keyConnect
    //     });

    //   })
    // );
    }

    // Deconnexion
    loggout(){
      this.http.get('api/users/signout').subscribe(()=> {});
    }


}
