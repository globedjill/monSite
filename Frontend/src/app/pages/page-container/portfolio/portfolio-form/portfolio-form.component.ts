import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.sass']
})
export class PortfolioFormComponent implements OnInit {

  public id : string;
  public portfolioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

    initForm(){
      this.portfolioForm = this.fb.group({
        name:[null, Validators.required ],
        liensite:[null, [Validators.required,Validators.pattern('')] ],
        description:[null, Validators.required],
        lienGit:[null, Validators.pattern('')],
        image:[null]
      })
    }

    onModifyPortfolio(){}
    onSavePortfolio(){}

    retour(){
      this.router.navigate(['portfolio']);
    }
}
