import { Formation } from 'src/shared/modeles/formation.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcourService  {

  formationTab: Formation [] = [];
  formationTab$: BehaviorSubject<Formation[]> = new BehaviorSubject([]);
  formation: Formation;

  constructor(
    private http: HttpClient
  ) { }

  emettreLesFormationsRecuperer(){
    this.formationTab$.next(this.formationTab);
  }

  createNewFormation(newFormation: Formation){
    this.formationTab.push(newFormation);
    this.saveFormations(newFormation);
    this.emettreLesFormationsRecuperer()
  }

  saveFormations(formation: Formation){
    this.http.post<Formation>('/api/formations',formation).subscribe((formation)=>{});
  }

  recupFormations(){
    this.http.get<Formation[]>('api/formations')
      .subscribe((formations: Formation[])=> {
      this.formationTab = formations;
      this.emettreLesFormationsRecuperer();
    });
  }

  recupOneFormation(){
    this.http.get<Formation>('api/formations/one')
      .subscribe((formation: Formation) => {
        this.formation = formation
      });
  }

  supprimerUneFormation(formation: Formation){
    this.http.delete<Formation>('api/:formationId').subscribe((formation: Formation) => {
      console.log(formation);
    });
  }

}
