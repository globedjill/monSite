import { ValueLieu } from './../../../../../../shared/modeles/formation.interface';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Formation, NiveauGroup } from 'src/shared/modeles/formation.interface';
import { ParcourService } from 'src/shared/services/parcour.service';

import { ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/shared/services/upload-file.service';
import { FonctionGeneralService } from 'src/shared/services/fonction-general.service';
import { GooglePlacesComponent } from 'src/app/components/googleApi/google-places/google-places.component';
@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.sass']
})
export class FormationFormComponent implements OnInit{

  /*VARIABLE*/
  public id: string;
  public formation: Formation;
  public formationForm: FormGroup;

  public imageVal: string [] = [];
  private imageLocal: string = 'imageRecup';
  public imageDefault: string = this.upLoadFileService.imgDefault;

  public index: number;
  public noFile: boolean = true;
  public imageInstanceAModifier: boolean = true;
  public setValueANull: boolean [] = [];

  public nomFormation: any;
  public option: any;
  public image: any;
  public alt: any;
  public lieu: any;
  public adresse: any;
  public dateEntree: any;
  public dateSortie: any;
  public contenu: any;
  public lien: any;

  public maxDate: Date = new Date(Date.now());

  public localImage: string = localStorage.getItem(this.imageLocal);

  public niveauTab: NiveauGroup[] = [
    {
      name:'Niveau 3',
      lastName: '-',
      niveau: [
        {value: 'CAP' , viewValue: 'CAP'},
        {value: 'BEP' , viewValue: 'BEP'}
      ]
    },
    {
      name:'Niveau 4',
      lastName: 'Bac',
      niveau: [
        {value: 'Bac' , viewValue: 'Baccalaureat'},
      ]
    },
    {
      name:'Niveau 5',
      lastName: 'Bac +2',
      niveau: [
        {value: 'DEUG' , viewValue: 'DEUG'},
        {value: 'BTS' , viewValue: 'BTS'},
        {value: 'DUT' , viewValue: 'DUT'},
        {value: 'DEUST' , viewValue: 'DEUST'},
      ]
    },
    {
      name:'Niveau 6',
      lastName: 'Bac +3',
      niveau: [
        {value: 'License' , viewValue: 'Licence'},
        {value: 'LicensePro' , viewValue: 'License Pro'},
      ]
    },
    {
      name:'Niveau 6',
      lastName: 'Bac +4',
      niveau: [
        {value: 'Maitrise' , viewValue: 'Maitrise'},
        {value: 'Master1' , viewValue: 'Master1'},
      ]
    },
    {
      name:'Niveau 7',
      lastName: 'Bac +5',
      niveau: [
        {value: 'Master' , viewValue: 'Master'},
        {value: 'Diplome d\'étude approfondue' , viewValue: 'Diplome d\'étude approfondue'},
        {value: 'Diplome étude approfondie' , viewValue: 'Diplome étude approfondie spécialisées'},
        {value: 'Ingénieur' , viewValue: 'Ingenieur'},
      ]
    },
    {
      name:'Niveau 8',
      lastName: 'Bac +8',
      niveau: [
        {value: 'Doctorat' , viewValue: 'Doctorat'},
        {value: 'Chercheur' , viewValue: 'Chercheur'},
      ]
    },
  ];

  public initMajuscule: string;
  public forcerMajFirstLetter: string;

  @ViewChild('fileInput') inputRef: ElementRef;
  @ViewChild('googlePlacesComponent') googlePlace: ElementRef<GooglePlacesComponent>;

  public filesHolder$: Observable<{
    file: File,
    progress$: Observable<number>
  }[]> = this.upLoadFileService.filesHolder$.asObservable();

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private parcourService: ParcourService,
    private activatedRoute: ActivatedRoute,
    public upLoadFileService: UploadFileService,
    public fGservice: FonctionGeneralService
  ) {}

    get liste(){
      return this.formationForm.get('liste') as FormArray;
    }

    get ecoles(){
      return this.formationForm.get('ecoles') as FormArray;
    }

  ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
          this.id = paramMap.get('_id');
          const formationRecup = this.parcourService.formation;
          if(this.id){
            this.initForm(formationRecup);
            // if( formationRecup.image === this.upLoadFileService.imgDefault) {
            //   localStorage.setItem(this.imageLocal, formationRecup.image);
            //   this.imageVal = localStorage.getItem(this.imageLocal);
            //   this.imageInstanceAModifier = false;
            //   this.formationForm.controls.image.setValue(null);
            // } else if ( formationRecup.image !== null){
            //   this.formationForm.controls.image.setValue(formationRecup.image);
            //   this.imageVal = formationRecup.image;
            //   localStorage.setItem(this.imageLocal , formationRecup.image);
            //   this.imageInstanceAModifier = true;
            //   this.noFile = false;
            //   this.formationForm.controls.image.setValue(this.imageVal);
            // }
          }else {
            this.initForm(this.formation);
          }
        });
      }

  /*FONCTIONS*/
  initForm(
    formation: Formation = {
    niveau: null,
    diplome: null,
    nomFormation:null,
    option:null,
    ecoles: [],
    contenu: null,
    liste: [],
  }

  ): void {
    this.formationForm = this.fb.group({
      niveau:[formation.niveau],
      diplome: [formation.diplome],
      nomFormation: [formation.nomFormation, [Validators.required, Validators.minLength(3)]],
      option: [formation.option, Validators.minLength(3)],
      ecoles: this.fb.array([]),
      contenu: [formation.contenu, Validators.required],
      liste: this.fb.array(formation.liste),
    });
  }

  addAxeListe(){
    this.liste.push(new FormControl(''));
  }
  deleteAxe(i){
    this.liste.removeAt(i)
  }

  addListeEcole(){
    this.ecoles.push(this.fb.group({
      nomEcole: [null],
      image: [null],
      alt: ['image par default'],
      departement: [null],
      cp: [null],
      dateEntree: [new Date()],
      dateSortie: [new Date()],
      lien: [null],
    }));
    this.setValueANull.push(true);
    this.fGservice.tabAdress.push({
      name: null,
      dept:null,
      cp:null,
      lien:null
    });
  }

  deleteEcole(i){
    this.ecoles.removeAt(i);
    this.imageVal.splice(i,1);
    this.setValueANull.splice(i,1);
    this.fGservice.tabAdress.splice(i,1);
  }

  // ACTION SUR LE SERVICE
  onSaveFormation(){
  console.log(this.formationForm.value);
  // this.formationForm.controls.image.setValue(this.imageVal);
  this.parcourService.createNewFormation(this.formationForm.value);

  const files = this.upLoadFileService.filesHolder$.value.slice();
  files.splice(this.index, 1);
  this.upLoadFileService.filesHolder$.next(files);
  localStorage.clear();
  this.router.navigate(['parcour']);
  }

  onModify(){
    this.formationForm.controls.image.setValue(this.imageVal);
    this.parcourService.updateFormation(this.formationForm.value, this.id);

    const files = this.upLoadFileService.filesHolder$.value.slice();
    files.splice(this.index, 1);
    this.upLoadFileService.filesHolder$.next(files);
    localStorage.clear();
    this.router.navigate(['parcour']);
    // this.noFile = false;
  }

  retour(){
   if(localStorage.getItem(this.imageLocal)!== this.imageLocal && this.imageLocal === undefined){
     this.deleteFile(0);
    //  this.imageVal === localStorage.getItem(this.imageLocal);
     localStorage.clear();
   }
    this.router.navigate(['parcour']);
  }
/* FILE*/
  openFile(i) {
    this.inputRef.nativeElement.click();
  }

  addFile($event, i){
    let file = $event.target.files;
    this.upLoadFileService.addFile(file);
    // this.noFile = false;
    if(this.imageVal[i] === null){
      console.log('modif de l\'image');
      this.imageVal.splice(i,1, $event.target.files[0].name);
      this.ecoles.controls[i].get('alt').setValue(this.imageVal[i]);
    } else if($event.target.files[0].name !== null ){
      this.imageVal.push($event.target.files[0].name);
      this.ecoles.controls[i].get('alt').setValue(this.imageVal[i]);
    }
    this.setValueANull[i] = false;

    console.log(this.imageVal);
    console.log(this.setValueANull);
  }

  deleteFile(index:number){
    if(this.upLoadFileService.filesHolder$.value.length > 0){
      this.upLoadFileService.removeFile(index);
      this.imageVal.splice(index,1,null);
      this.setValueANull[index] = true;
      this.ecoles.controls[index].get('alt').setValue('image par default');
      this.ecoles.controls[index].get('image').setValue('');
    }
  }

  supprImgLinkmodif(image: string){     // Si l'utilisateur supprime une image pour en mettre une autre
  this.upLoadFileService.removeFileOfCard(image.split('/')[3]);
  this.parcourService.updateExperience(this.formationForm.value, this.id);
  // this.imageVal = this.upLoadFileService.imgDefault;
  this.formationForm.controls.image.setValue('null');
  // this.noFile = true;
  this.imageInstanceAModifier =  false;
}

  dropFile($event){
    if($event.dataTransfer){
      const file = $event.dataTransfer.files;
      this.upLoadFileService.addFile(file)
    }
  }
  maxiDate($event){
    console.log($event);
    this.dateEntree.value = $event;
  }

  getErrorMessage(nom: any){
    if(nom.hasError('required') || nom.value === "" ){
      return this.fGservice.messageErreur.required;
    }else if( nom.hasError('minlength')){
      return this.fGservice.messageErreur.minLenght(3);
    }
  }

  recupPremiereLettre(){
    const tabFirstLetter = [];
    const tabMajFirstLetter = [];
    if(this.formationForm.value.nomFormation !== null && this.formationForm.value.nomFormation !== undefined ){
      const maString = this.formationForm.value.nomFormation.split(' ');
      if(maString.length > 1){
        for (let index = 0; index < maString.length; index++) {
          if(maString[index].length > 1 && maString[index].length <= 3){
            tabMajFirstLetter.push(maString[index].toString());
          } else if(maString[index].length > 3){
            if(maString[index].toString().includes('\'')){
              let recupMaj = maString[index].split("'")[1].toString().charAt(0).toUpperCase();
              // console.log(maString.concat(maString[index].split("'")[1],maString[index].split("'")[1].substring(1)));
              tabFirstLetter.push(recupMaj);
              tabMajFirstLetter.push(maString[index].split("'")[0].concat("'", recupMaj , maString[index].split("'")[1].substring(1)));
            }else{
              let recupMaj = maString[index].toString().charAt(0).toUpperCase();
              tabFirstLetter.push(recupMaj);
              tabMajFirstLetter.push(recupMaj.concat(maString[index].substring(1)));
            }
          }
          this.forcerMajFirstLetter = tabMajFirstLetter.join(' ');
        }
      }
    }
    this.initMajuscule = tabFirstLetter.join('');
  }
}




