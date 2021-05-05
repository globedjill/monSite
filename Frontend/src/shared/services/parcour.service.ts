import { Formation } from 'src/shared/modeles/formation.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience } from '../modeles/experience.interface';
@Injectable({
  providedIn: 'root'
})
export class ParcourService  {

  formationTab: Formation [] = [];
  formationTab$: BehaviorSubject<Formation[]> = new BehaviorSubject([]);
  formation: Formation;

  experienceTab: Experience [] = [];
  experienceTab$: BehaviorSubject<Experience[]> = new BehaviorSubject([]);
  experience: Experience;

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

  emettreLesExperienceRecuperer(){
    this.experienceTab$.next(this.experienceTab);
  }

  createNewExperience(newExperience: Experience){
    this.experienceTab.push(newExperience);
    this.saveExperiences(newExperience);
    this.emettreLesFormationsRecuperer();
  }


  // Queries
    // Formations
  saveFormations(formation: Formation){
    this.http.post<Formation>('/api/formations',formation).subscribe(()=>{
    });
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
  // Experiences
  saveExperiences(experience: Experience){
    this.http.post<Experience>('/api/experience', experience).subscribe(()=>{});
  }

  updateExperience(experience: Experience, id: String){
    this.http.post<Experience>('/api/experience/update/'+ id, experience).subscribe(()=> {});
  }

  recupExperience(){
    this.http.get<Experience[]>('/api/experience')
    .subscribe((experiences: Experience[])=> {
      this.experienceTab = experiences;
      this.emettreLesExperienceRecuperer();
    });
  }

  supprimerUneExperience(id: String){
    this.http.delete('/api/experience/' + id ).subscribe
      ((experiences: Experience[]) => {
        this.experienceTab = experiences;
      });
    this.recupExperience();
  }

}
