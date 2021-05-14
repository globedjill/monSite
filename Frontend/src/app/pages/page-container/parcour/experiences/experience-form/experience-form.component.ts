import { UploadFileService } from 'src/shared/services/upload-file.service';
import { Experience } from './../../../../../../shared/modeles/experience.interface';
import { ParcourService } from 'src/shared/services/parcour.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  private imageLocal: string = 'imageRecup';

  public index: number;
  public noFile: boolean = true; // Vrai si il n'y as pas de fichier
  public imageInstanceAModifier: boolean = true; // Vrai si image a modifier
  public setValueANull: string;

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
    ];
  }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('_id');
      const xpRecup = this.parcourService.experience;
      if(this.id){
        this.initFormExperience(xpRecup);
        if( xpRecup.image ===  this.uploadService.imgDefault ) {
          localStorage.setItem(this.imageLocal , xpRecup.image);

          // this.imageVal = this.imageLocal;
          this.imageVal = localStorage.getItem(this.imageLocal);
          this.imageInstanceAModifier = false;
          this.experienceForm.controls.image.setValue(null);
        }else if(xpRecup.image !== null){
          console.log('il y as bien une image ici' + xpRecup.image);
          this.experienceForm.controls.image.setValue(xpRecup.image);
          this.imageVal = xpRecup.image;
          localStorage.setItem(this.imageLocal , xpRecup.image);
          this.imageInstanceAModifier = true;
          this.noFile = false;
          this.experienceForm.controls.image.setValue(this.imageVal);
        }
      }
      else{
        this.initFormExperience(this.experience);
      }
    })
  }

  initFormExperience(
    experience: Experience = {
      dateEntree: new Date,
      dateSortie: new Date,
      image: null,
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
      image: [experience.image],
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
    this.experienceForm.controls.image.setValue(this.imageVal);
    this.parcourService.updateExperience(this.experienceForm.value, this.id);

    const files = this.uploadService.filesHolder$.value.slice();
    files.splice(this.index,1);
    this.uploadService.filesHolder$.next(files);
    this.router.navigate(['parcour']);
    this.noFile = false;
  }

  retour(imageval:string){
    // Si l'image du depart et la meme que lorque l'on apui sur le bouton retour
    if(localStorage.getItem(this.imageLocal) !== this.imageVal && this.imageLocal === undefined) {
    console.log('les images sont differentes');
    this.deleteFile(0);
    this.imageVal === localStorage.getItem(this.imageLocal);
    localStorage.clear();
  }
  this.router.navigate(['parcour']);
  }

  openFile(){
    this.inputRef.nativeElement.click();
  }

  addFile($event){
      this.imageVal = $event.target.files[0].name;
      let file = $event.target.files;
      this.uploadService.addFile(file);
      this.noFile = false;
  }

  deleteFile(index:number){
    this.uploadService.removeFile(index);
    this.imageVal = this.uploadService.imgDefault;
    this.noFile = true;
  }
  supprImgLinkmodif(image: string){     // Si l'utilisateur supprime une image pour en mettre une autre
    this.uploadService.removeFileOfCard(image.split('/')[3]);
    this.parcourService.updateExperience(this.experienceForm.value, this.id);
    this.imageVal =  this.uploadService.imgDefault;
    this.experienceForm.controls.image.setValue("null");
    this.noFile = true;
    this.imageInstanceAModifier = false;
  }
}
