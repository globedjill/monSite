import { UploadFileService } from 'src/shared/services/upload-file.service';
import { Experience } from './../../../../../../shared/modeles/experience.interface';
import { ParcourService } from 'src/shared/services/parcour.service';
import { Component, OnInit, ViewChild, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.sass']
})
export class ExperienceFormComponent implements OnInit {

  public filesHolder$: Observable<{
    file: File,
    progress$: Observable<number>;
  }[]> = this.uploadService.filesHolder$.asObservable()

  public id: string;
  public experienceForm: FormGroup;
  public experience: Experience;
  public imageVal: string;
  public index: number;
  public noFile: number;

  public typeContrat: string[];

  @ViewChild('fileInput') inputRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private parcourService: ParcourService,
    private ActivatedRoute: ActivatedRoute,
    private uploadService: UploadFileService
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
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('_id');
      const xpRecup = this.parcourService.experience;
      if(this.id){
        this.initFormExperience(xpRecup);
      }
      else{
        this.initFormExperience(this.experience);
      }
    })
  }

  initFormExperience(
    experience: Experience = {
      dateEntree: null,
      dateSortie: null,
      image: '',
      alt: null,
      typeContrat: null,
      enseigne: null,
      lien: null,
      lieu: null,
      fonction: null
    }
  ): void {
    this.experienceForm = this.fb.group({
      dateEntree: [experience.dateEntree, Validators.required],
      dateSortie: [experience.dateSortie, Validators.required],
      image: [''],
      alt: [experience.alt, Validators.required],
      typeContrat: [experience.typeContrat, Validators.required],
      enseigne: [experience.enseigne, Validators.required],
      lien: [experience.lien, Validators.required],
      lieu: [experience.lieu, Validators.required],
      fonction: [experience.fonction, Validators.required]
    })
  }

  onSaveExperience(){
    this.experienceForm.controls.image.setValue(this.imageVal);
    this.parcourService.createNewExperience(this.experienceForm.value);

    const files = this.uploadService.filesHolder$.value.slice();
    files.splice(this.index,1);
    this.uploadService.filesHolder$.next(files);
    this.router.navigate(['parcour']);
  }

  onModifyExperience(){
    this.parcourService.updateExperience(this.experienceForm.value, this.id);
    this.router.navigate(['parcour']);
  }

  retour(){
    this.router.navigate(['parcour']);
  }

  openFile(){
    this.inputRef.nativeElement.click();
  }

  addFile($event){
    this.imageVal = 'http://localhost:3000/' + $event.target.files[0].name;
    const file = $event.target.files;
    this.uploadService.addFile(file);
    this.noFile = this.uploadService.filesHolder$.value.length;
  }

  deleteFile(index:number){
    this.uploadService.removeFile(index);
    this.noFile = this.uploadService.filesHolder$.value.length;
  }
}
