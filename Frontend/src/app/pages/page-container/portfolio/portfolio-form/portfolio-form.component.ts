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

  public id : string;
  public portfolioForm: FormGroup;
  public site: Portfolio;
  public noFile: number;
  public imageVal: string;
  public index: number;

  @ViewChild('fileinput') inputRef: ElementRef;

  public filesHolder$: Observable<{
    file:File,
    progress$:Observable<number>
  }[]> = this.upLoadFileService.filesHolder$.asObservable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private upLoadFileService: UploadFileService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const siteRecup = this.portfolioService.portfolio;
      if(this.id){
        this.initForm(siteRecup);
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
    }){
      this.portfolioForm = this.fb.group({
        name:[site.name, Validators.required ],
        lienSite:[site.lienSite ],
        description:[site.description, Validators.required],
        lienGit:[site.lienGit],
        image:[''],
        alt:[site.alt]
      })
    }

    onModifyPorfolio(){
      this.portfolioForm.controls.image.setValue(this.imageVal);

      this.portfolioService.updateSiteOfPortfolio(this.portfolioForm.value, this.id);

      const files = this.upLoadFileService.filesHolder$.value.slice();
      files.splice(this.index, 1);
      this.upLoadFileService.filesHolder$.next(files);
      this.router.navigate(['portfolio']);
    }


    onSavePortfolio(){
      this.portfolioForm.controls.image.setValue(this.imageVal);

      this.portfolioService.createPortfolio(this.portfolioForm.value);

      const files = this.upLoadFileService.filesHolder$.value.slice();
      files.splice(this.index, 1);
      this.upLoadFileService.filesHolder$.next(files);
      this.router.navigate(['portfolio']);
    }

    retour(){
      this.router.navigate(['portfolio']);
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
