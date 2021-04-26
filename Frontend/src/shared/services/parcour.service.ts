import { Formation } from 'src/shared/modeles/formation.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcourService  {

  formationTab: Formation [] = [];
  formationTab$: BehaviorSubject<Formation[]> = new BehaviorSubject([]);
  formation: Formation;

  constructor(
    private http: HttpClient,
  ) { }

  emettreLesFormationsRecuperer(){
    this.formationTab$.next(this.formationTab);
  }

  createNewFormation(newFormation: Formation){
    this.formationTab.push(newFormation);
    this.saveFormations(newFormation);
    this.emettreLesFormationsRecuperer();
  }

  // Queries
  saveFormations(formation: Formation){
    this.http.post<Formation>('/api/formations',formation).subscribe(()=>{});
  }

  updateFormation(formation:Formation, id: String){
    this.http.post<Formation>('/api/formations/update/'+ id, formation).subscribe(()=> {});
  }

  recupFormations(){
    this.http.get<Formation[]>('/api/formations')
      .subscribe((formations: Formation[])=> {
      this.formationTab = formations;
      this.emettreLesFormationsRecuperer();
    });
  }

  supprimerUneFormation(id: String){
    this.http.delete('api/formations/' + id ).subscribe(()=> {
      ((formation: Formation[] ) => {
        this.formationTab = formation;
      })
    })
    this.recupFormations();
    this.emettreLesFormationsRecuperer();
  }
}
