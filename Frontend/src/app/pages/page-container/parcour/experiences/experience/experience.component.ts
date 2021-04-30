import { UploadFileService } from 'src/shared/services/upload-file.service';
import { ParcourService } from 'src/shared/services/parcour.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/shared/modeles/experience.interface';
import { UserSession } from 'src/shared/modeles/userSession.interface';
import { UsersService } from 'src/shared/services/users.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  subscription: Subscription;
  userSession: UserSession;

  tableaurecupExperienceSubscription: Subscription;
  experienceTab: Experience[];

  constructor(
    private userService: UsersService,
    private ParcourService: ParcourService,
    private uploadService: UploadFileService
  ) {

  }

  ngOnInit(): void {
    this.subscription = this.userService.idSession$.subscribe((usersession: UserSession)=> {
      this.userSession = usersession;
    });

    this.tableaurecupExperienceSubscription = this.ParcourService.experienceTab$.subscribe(
      (experienceTab: Experience[]) =>{
        this.experienceTab = experienceTab;
      });

    this.ParcourService.recupExperience();
      console.log(this.experienceTab);

  }

  editExperience(experience: Experience){
    this.ParcourService.experience = experience;
  }

  deleteExperience(id: String){
    this.ParcourService.supprimerUneExperience(id);
  }

  deleteLinkImage(experienceImage: String){
    this.uploadService.removeFileOfCard(experienceImage.split('/')[3]);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
   this.tableaurecupExperienceSubscription.unsubscribe();
  }

  tempsTravailler(dateSortie: Date, dateEntree: Date){
    const minute = 1000*60;
    const heure = minute*60;
    const journee = heure*24;
    const annee = 365*journee;
    const moi = annee/12;

    // Ratio 1 mois
    const ratio = 1/12;

    const dateFin = new Date(dateSortie).getTime();
    const dateDebut = new Date(dateEntree).getTime();
    const nbAnnee = parseInt(new Number((dateFin - dateDebut)/(annee)).toPrecision(2).split('.')[0]);
    const mois1 = (parseInt((((dateFin - dateDebut)/ (moi))/12).toFixed(5).split('.')[1]))/100000;
    const nbMois =  (mois1/ratio).toFixed(0);

    if ( nbAnnee === 0 ){
      return nbMois + ' mois';
    } else if ( mois1 === 0 ){
      return nbAnnee + ' ans';
    } else {
      return nbAnnee + ' ans et ' + nbMois + ' mois';
    }
  }
}
