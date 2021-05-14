import { AlertSupprImgComponent } from 'src/app/components/alert/alert-suppr-img/alert-suppr-img.component';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileService } from 'src/shared/services/upload-file.service';
import { PortfolioService } from './../../../../../shared/services/portfolio.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Portfolio } from 'src/shared/modeles/portfolio.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.sass']
})
export class PortfolioFormComponent implements OnInit {

  public filesHolder$: Observable<{
    file:File,
    progress$:Observable<number>
  }[]> = this.upLoadFileService.filesHolder$.asObservable();

  public id : string;
  public portfolioForm: FormGroup;
  public site: Portfolio;

  public imageVal: string;
  private imageLocal: string = 'imageRecup';

  public index: number;
  public noFile: boolean = true;
  public imageInstanceAModifier: boolean = true;
  public setValueANull: string;

  @ViewChild('fileInput') inputRef: ElementRef;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private upLoadFileService: UploadFileService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const siteRecup = this.portfolioService.portfolio;
      if(this.id){
        this.initForm(siteRecup);
        if( siteRecup.image === this.upLoadFileService.imgDefault){
          localStorage.setItem(this.imageLocal , siteRecup.image);
          this.imageVal = localStorage.getItem(this.imageLocal);
          this.imageInstanceAModifier = false;
          this.portfolioForm.controls.image.setValue(null);
        }else if (siteRecup.image !== null ){
          // this.portfolioForm.controls.image.setValue(siteRecup.image);
          this.imageVal = siteRecup.image;
          localStorage.setItem(this.imageLocal, siteRecup.image);
          this.imageInstanceAModifier = true;
          this.noFile = false;
          this.portfolioForm.controls.image.setValue(this.imageVal);
        }
      }
      else{
        this.initForm(this.site);
      }
    })
  }

    initForm(site:Portfolio = {
      name: null,
      lienSite: null,
      description: null,
      lienGit: null,
      image: '',
      alt: null
    }): void {
      this.portfolioForm = this.fb.group({
        name:[site.name, Validators.required ],
        lienSite:[site.lienSite ],
        description:[site.description, Validators.required],
        lienGit:[site.lienGit],
        image:[''],
        alt:[site.alt]
      })
    }

    onSavePortfolio(){
      this.portfolioForm.controls.image.setValue(this.imageVal);
      this.portfolioService.createPortfolio(this.portfolioForm.value);

      const files = this.upLoadFileService.filesHolder$.value.slice();
      files.splice(this.index, 1);
      this.upLoadFileService.filesHolder$.next(files);
      this.router.navigate(['portfolio']);
    }

    onModifyPorfolio(){
      this.portfolioForm.controls.image.setValue(this.imageVal);
      this.portfolioService.updateSiteOfPortfolio(this.portfolioForm.value, this.id);

      const files = this.upLoadFileService.filesHolder$.value.slice();
      files.splice(this.index, 1);
      this.upLoadFileService.filesHolder$.next(files);
      this.router.navigate(['portfolio']);
      this.noFile = false;
    }

    retour(){
      if(this.upLoadFileService.imgDefault !== this.imageVal && this.imageLocal === undefined){
          this.deleteFile(0);
          this.imageVal === localStorage.getItem(this.imageLocal);
          localStorage.clear();
      }
      this.router.navigate(['portfolio']);
    }

    /* FILE*/
  openFile() {
    this.inputRef.nativeElement.click();
  }

  addFile($event){
    this.imageVal = this.upLoadFileService.urlImg + $event.target.files[0].name;
    const file = $event.target.files;
    this.upLoadFileService.addFile(file);
    this.noFile = false;
  }

  deleteFile(index:number){
    this.upLoadFileService.removeFile(index);
    this.noFile = true;
  }

  supprImgLinkmodif(image: string){
    const dialogRef = this.matDialog.open(AlertSupprImgComponent
     );

    dialogRef.afterClosed().subscribe(result =>{
       console.log(result);
      if(result === true){
        this.upLoadFileService.removeFileOfCard(image.split('/')[3]);
        this.imageVal = this.upLoadFileService.imgDefault;
        this.portfolioForm.controls.image.setValue(this.upLoadFileService.imgDefault);
        this.portfolioService.updateSiteOfPortfolio(this.portfolioForm.value, this.id);
        this.noFile = true;
        this.imageInstanceAModifier = false;
      }
     });
  }

  dropFile($event){
    if($event.dataTransfer){
      const file = $event.dataTransfer.files;
      this.upLoadFileService.addFile(file)
    }
  }
}
