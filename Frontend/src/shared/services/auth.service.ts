import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  essairecup: object;

  constructor(
    private http: HttpClient
  ) {
    console.log(this.essairecup);
  }

  essai(){
    this.http.get('/api').subscribe((response)=>{
      this.essairecup = response;
    });
  }
}
