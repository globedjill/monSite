import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Formation } from 'src/shared/modeles/formation.interface';
import { ParcourService } from 'src/shared/services/parcour.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.sass']
})
export class FormationFormComponent implements OnInit {

  public id: string;

  formationForm: FormGroup;
  formation: Formation;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private parcourService: ParcourService,
    private activatedRoute: ActivatedRoute
  ) { }

    get liste(){
      return this.formationForm.get('liste') as FormArray;
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('_id');
    })
    this.initForm();
  }

  initForm(
  //   formation: Formation = {
  //   nomFormation:'',
  //   image:'',
  //   alt:'',
  //   lieu:'',
  //   adresse:'',
  //   dateEntree: new Date,
  //   dateSortie: new Date,
  //   contenu:''
  // }
  ): void {
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
      liste: this.fb.array([]),
      lien: [null]
    });
  }

  addAxeListe(){
    this.liste.push(new FormControl(''));
  }
  deleteAxe(i){
    this.liste.removeAt(i)
  }

  onSaveFormation(){
    this.parcourService.createNewFormation(this.formationForm.value);
    // this.router.navigate(['/'])
  }

  retour(){
    this.router.navigate(['parcour']);
  }

}
