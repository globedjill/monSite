// import { MatInputModule } from '@angular/material/input';
// import { HttpClient } from '@angular/common/http';
// import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { ThemePalette } from '@angular/material/core';
// import { Observable, Subscription } from 'rxjs';
// import { NgxMatFileInputModule, NgxMatFileInputIcon, AcceptValidator, MaxSizeValidator } from '@angular-material-components/file-input';
// import { UploadFileService } from 'src/shared/services/upload-file.service';


// @Component({
//   selector: 'app-upload-image-form',
//   templateUrl: './upload-image-form.component.html',
//   styleUrls: ['./upload-image-form.component.sass']
// })
// export class UploadImageFormComponent implements OnInit {

//   public filesHolder$: Observable<File[]> = this.uploadService.fileHolders$.asObservable();
//   public filetabSub: Subscription;
//   fileTab: [];

//   @ViewChild('fileInput', {static: true}) inputRef: ElementRef;
//   color: ThemePalette = 'primary';
//   disabled: boolean = false;
//   multiple: boolean = false;
//   accept: string;
//   formControl: FormControl;

//   constructor(
//     private uploadService: UploadFileService,
//     private http: HttpClient,
//   ) {}

//   ngOnInit(): void {
//     this.formControl = new FormControl([Validators.required]);
//   }
// }




import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/shared/services/upload-file.service';

@Component({
    selector: 'app-upload-image-form',
    templateUrl: './upload-image-form.component.html',
    styleUrls: ['./upload-image-form.component.sass']
  })
  export class UploadImageFormComponent implements OnInit {

    essaifile: File;
    noFile: number;

    public filesHolder$: Observable<{
      file: File,
      progress$: Observable<number>
    }[]> = this.upLoadFileService.filesHolder$.asObservable();
    @ViewChild('fileinput', { static: false }) inputRef: ElementRef;

  constructor(
    private upLoadFileService: UploadFileService,
  ) {}

  ngOnInit(): void {
  }

  openFile() {
    this.inputRef.nativeElement.click();
  }

  addFile($event){
    const file = $event.target.files;
    this.upLoadFileService.addFile(file);
    this.noFile = this.upLoadFileService.filesHolder$.value.length;
  }

  deleteFile(index){
    this.upLoadFileService.removeFile(index);
    this.noFile = this.upLoadFileService.filesHolder$.value.length;
  }

  dropFile($event){
    console.log($event);

    if($event.dataTransfer){
      const file = $event.dataTransfer.files;
      this.upLoadFileService.addFile(file)
    }
  }
}



