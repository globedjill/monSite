import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.sass']
})
export class ExperienceFormComponent implements OnInit {

  experienceForm: FormGroup;

  typeContrat: string[];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.typeContrat = [
      'CDD',
      'CDI',
      'Contrat d\'apprentissage',
      'Contrat de Professionnalissation',
      'Contrat Unique d\'insertion'
    ]

  }

  ngOnInit(): void {
    this.initFormExperience();
  }

  initFormExperience(){
    this.experienceForm = this.fb.group({
      dateEntree: [null, Validators.required],
      dateSortie: [null, Validators.required],
      image: [null, Validators.required],
      alt: [null, Validators.required],
      typeContrat: [null, Validators.required],
      enseigne: [null, Validators.required],
      lien: [null, Validators.required],
      lieu: [null, Validators.required],
      fonction: [null, Validators.required]
    })
  }

  onSaveExperience(){

  }
  envoyer(e){

  }

  retour(){
    this.router.navigate(['experience'])
  }
}
