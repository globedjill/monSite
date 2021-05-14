import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  urlImg: string = '';
  imgDefault: string = 'http://localhost:3000/Capture d’écran 2021-04-05 à 16.26.17.png'

  public filesHolder$: BehaviorSubject<{
    file: File,
    progress$: Observable<number>
  }[]> = new BehaviorSubject([]);
  constructor(
    private http: HttpClient,
  ) { }

  public addFile(files: []){
    this.filesHolder$.next([
      ...this.filesHolder$.value,
       ...Array.from(files).map( (f: File) => {
      const formData = new FormData();
      formData.append('f', f);
      const request = new HttpRequest('POST','/api/upload', formData, {
        reportProgress: true
      });
      return {
        file: f,
        progress$: this.http.request(request).pipe(
          map((event:HttpEvent<any>) => {
            switch (event.type){
              case HttpEventType.Sent:{
                return 0;
              }
              case HttpEventType.UploadProgress:{
                return Math.round(event.loaded / event.total * 100);
              }
              case HttpEventType.Response:{
                return 100;
              }
              default: {
                return 0;
              }
            }
          })
        )
      };
    })
  ]);
  }

  public removeFile(index:number){
    const files = this.filesHolder$.value.slice();
    this.http.delete(`/api/upload/${files[index].file.name}`).subscribe();
    files.splice(index, 1);
    this.filesHolder$.next(files);
  }

  public removeFileOfCard(nom:string){
    this.http.delete(`/api/upload/${nom}`).subscribe();
  }
}
