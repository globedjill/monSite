import { UsersService } from './../../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.sass']
})
export class SeConnecterComponent implements OnInit {

  singinForm: FormGroup;
  error: any;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.singinForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  submit(){
    this.userService.signin(this.singinForm.value).subscribe((err)=>{
      this.error = JSON.stringify(err);
      }
    );
  }


  //Gestion des erreurs
  seconnecterErreur(){
    return this.error;
  }

}
