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
  public formation: Formation;
  public formationForm: FormGroup;

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
          const index =paramMap.get('index');
          if(this.id){
            this.formation = this.parcourService.getFormation(Number(index));
          }
          this.initForm(this.formation);
        })
  }

  initForm(
    formation: Formation = {
    nomFormation:'',
    option:'',
    image:'',
    alt:'',
    lieu:'',
    adresse:'',
    dateEntree: new Date,
    dateSortie: new Date,
    contenu:'',
    liste:[],
    lien:''
  }
  ): void {
    this.formationForm = this.fb.group({
      nomFormation: [formation.nomFormation, Validators.required],
      option: [formation.option, Validators.minLength(3)],
      image: [formation.image],
      alt: [formation.alt, Validators.minLength(3)],
      lieu: [formation.lieu, Validators.required],
      adresse: [formation.adresse, Validators.minLength(3)],
      dateEntree: [formation.dateEntree, Validators.required],
      dateSortie: [formation.dateSortie, Validators.required],
      contenu: [formation.contenu, Validators.required],
      liste: this.fb.array(formation.liste),
      lien: [formation.lien]
    });
  }

  addAxeListe(){
    this.liste.push(new FormControl(''));
  }
  deleteAxe(i){
    this.liste.removeAt(i)
  }


  // ACTION SUR LE SERVICE
  onSaveFormation(){
    this.parcourService.createNewFormation(this.formationForm.value);
    this.router.navigate(['parcour']);
  }

  onModify(){
    this.parcourService.updateFormation(this.formationForm.value, this.id);
    this.router.navigate(['parcour']);
  }

  retour(){
    this.router.navigate(['parcour']);
  }

}
