import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/shared/modeles/formation.interface';
import { ParcourService } from 'src/shared/services/parcour.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.sass']
})
export class FormationFormComponent implements OnInit {

  formationForm: FormGroup;
  formation: Formation;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private parcourService: ParcourService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(formation: Formation = {
    nomFormation:'',
    image:'',
    alt:'',
    lieu:'',
    adresse:'',
    dateEntree: new Date,
    dateSortie: new Date,
    contenu:''
  }): void {
    this.formationForm = this.fb.group({
      nomFormation: [null, Validators.required],
  option: [null, Validators.minLength(3)],
  image: [null],
  alt: [null, Validators.minLength(3)],
  lieu: [null, Validators.required],
  adresse: [null, Validators.minLength(3)],
  dateEntree: [null, Validators.required],
  dateSortie: [null, Validators.required],
  contenu: [null, Validators.required],
  liste:[null],
  lien: [null]
    });
  }

  onSaveFormation(){
    this.parcourService.createNewFormation(this.formationForm.value);
    // this.router.navigate(['/'])
  }

  retour(){
    this.router.navigate(['parcour']);
  }

}
