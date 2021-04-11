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
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required]
    });

  }

  // tslint:disable-next-line: typedef
  onSubmit(){

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
  const recupPassword = this.form.get('password').value;
  const recupPasswordConfirm = this.form.get('passwordConfirm').value;
  console.log(recupPassword,recupPasswordConfirm);
  if (this.form.get('recupPasswordConfirm')){
    if (recupPassword !== recupPasswordConfirm){
      return 'Les mot de passe ne correspondent pas';
    }
  }
  }
  }
