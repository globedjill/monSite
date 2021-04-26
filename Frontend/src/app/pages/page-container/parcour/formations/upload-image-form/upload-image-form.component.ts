
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



