import { Subscription } from 'rxjs';
import { UsersService } from './../../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.sass']
})
export class SeConnecterComponent implements OnInit {

  singinForm: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.singinForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submit(){
    this.userService.signin(this.singinForm.value).subscribe(()=>{
      console.log('la connexion cest bien deroule');
      this.router.navigate(['acceuil']);
      },
      err => {
        console.log('Apres soumission de la connection vous etes dans lerreur');
        this.error = this.userService.error;
      }
    );
  }

  goSInscrire(){
    this.router.navigate(['sInscrire']);
  }

  goggleConnection(){
    this.userService.signinGoogle();
  }

  //Gestion des erreurs
  seconnecterErreur(){
    return this.error;
  }
}
