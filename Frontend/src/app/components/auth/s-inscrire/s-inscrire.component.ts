import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-inscrire',
  templateUrl: './s-inscrire.component.html',
  styleUrls: ['./s-inscrire.component.sass']
})
export class SInscrireComponent implements OnInit {

  seConnecteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // this.initForm();
    this.seConnecteForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // initForm(){

  // }

  onSubmit(){

  }

}
