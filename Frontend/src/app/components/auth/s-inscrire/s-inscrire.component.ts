import { UsersService } from './../../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-s-inscrire',
  templateUrl: './s-inscrire.component.html',
  styleUrls: ['./s-inscrire.component.sass']
})
export class SInscrireComponent implements OnInit {

 public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      pseudo:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // passwordConfirm: ['', Validators.required]
    });

  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    this.usersService.createUser(this.form.value);
  }


  // GESTION DES ERREURS
// tslint:disable-next-line: typedef
errorMail(){
  if (this.form.get('email').hasError('email')){
    return 'le mail n\'est pas au bon format';
  }
}

errorPassword(){
  if ( this.form.get('password').hasError('minlength')){
    return 'le mot de passe doit contenir au moins 8 caractéres';
  }
}

errorPasswordConfirm(){

  }
  }
