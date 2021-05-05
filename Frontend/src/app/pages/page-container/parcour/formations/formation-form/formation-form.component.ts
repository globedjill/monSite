import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Formation } from 'src/shared/modeles/formation.interface';
import { ParcourService } from 'src/shared/services/parcour.service';

import {  ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/shared/services/upload-file.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.sass']
})
export class FormationFormComponent implements OnInit {

  public id: string;
  public formation: Formation;
  public formationForm: FormGroup;
  public index: number;
  public imageVal: string;
  public noFile: number;

  @ViewChild('fileinput', { static: false }) inputRef: ElementRef;

  public filesHolder$: Observable<{
    file: File,
    progress$: Observable<number>
  }[]> = this.upLoadFileService.filesHolder$.asObservable();

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private parcourService: ParcourService,
    private activatedRoute: ActivatedRoute,
    private upLoadFileService: UploadFileService,
  ) {}

    get liste(){
      return this.formationForm.get('liste') as FormArray;
    }

  ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
          this.id = paramMap.get('_id');
          const formationRecup = this.parcourService.formation;
          if(this.id){
            this.initForm(formationRecup);
          }else{
            this.initForm(this.formation);
          }
        });
  }

  initForm(
    formation: Formation = {
    nomFormation:null,
    option:null,
    image: '',
    alt: null,
    lieu: null,
    adresse: null,
    dateEntree: new Date,
    dateSortie: new Date,
    contenu: null,
    liste:[],
    lien: null
  }

  ): void {
    this.formationForm = this.fb.group({
      nomFormation: [formation.nomFormation, Validators.required],
      option: [formation.option, Validators.minLength(3)],
      image: [''],
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
  this.formationForm.controls.image.setValue(this.imageVal);

  this.parcourService.createNewFormation(this.formationForm.value);

  const files = this.upLoadFileService.filesHolder$.value.slice();
  files.splice(this.index, 1);
  this.upLoadFileService.filesHolder$.next(files);
  this.router.navigate(['parcour']);
  }

  onModify(){
    this.formationForm.controls.image.setValue(this.imageVal);

    this.parcourService.updateFormation(this.formationForm.value, this.id);

    const files = this.upLoadFileService.filesHolder$.value.slice();
    files.splice(this.index, 1);
    this.upLoadFileService.filesHolder$.next(files);
    this.router.navigate(['parcour']);
  }

  retour(){
    this.router.navigate(['parcour']);
  }
/* FILE*/
  openFile() {
    this.inputRef.nativeElement.click();
  }

  addFile($event){
    this.imageVal ='http://localhost:3000/' + $event.target.files[0].name;
    const file = $event.target.files;
    this.upLoadFileService.addFile(file);
    this.noFile = this.upLoadFileService.filesHolder$.value.length;
  }

  deleteFile(index:number){
    this.upLoadFileService.removeFile(index);
    this.noFile = this.upLoadFileService.filesHolder$.value.length;
  }

  dropFile($event){
    if($event.dataTransfer){
      const file = $event.dataTransfer.files;
      this.upLoadFileService.addFile(file)
    }
  }
}




