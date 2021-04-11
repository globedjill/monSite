import { Formation } from 'src/shared/modeles/formation.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParcourService  {

  formationTab: Formation [] = [];

  constructor(
    private http: HttpClient
  ) { }

  createNewFormation(newFormation: Formation){
    this.formationTab.push(newFormation);
    this.saveFormations(newFormation);
    console.log(this.formationTab);
  }

  saveFormations(formation: Formation){
    this.http.post<Formation>('/api/formations',formation).subscribe((formation)=>{
      console.log(formation);
    });
  }
}
