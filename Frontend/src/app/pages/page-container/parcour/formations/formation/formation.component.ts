import { UploadFileService } from 'src/shared/services/upload-file.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Formation } from 'src/shared/modeles/formation.interface';
import { UserSession } from 'src/shared/modeles/userSession.interface';
import { ParcourService } from 'src/shared/services/parcour.service';
import { UsersService } from 'src/shared/services/users.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.sass']
})
export class FormationComponent implements OnInit, OnDestroy {

  tableauDeFormationSubscription: Subscription;
  parcourTab: Formation[];

  userSub: Subscription;
  userSession: UserSession;

  constructor(
    private parcourService: ParcourService,
    private userService: UsersService,
    private uploadFileService: UploadFileService,
  ) {}

  ngOnInit(): void {
    this.userSub = this.userService.idSession$.subscribe(
      (userSession: UserSession) => {
        this.userSession = userSession;
    });

    this.tableauDeFormationSubscription = this.parcourService.formationTab$.subscribe(
      (formationTab: Formation[]) => {
        this.parcourTab = formationTab;
    });
    this.parcourService.recupFormations();
  }

  editFormation(formation: Formation){
    this.parcourService.formation = formation;
  }

  deleteFormation(id: String){
    this.parcourService.supprimerUneFormation(id);
  }

  ngOnDestroy(): void {
    this.tableauDeFormationSubscription.unsubscribe();
    if(this.userSub){this.userSub.unsubscribe()};
   }

   deleteImageLink(formation){
     this.uploadFileService.removeFileOfCard(formation.split('/')[3]);
   }
}


// this.parcourTab = [
    //   {
    //     nomFormation: 'Developpeur web FullStack',
    //     image: '../../../../assets/images/OC_Banner.png' ,
    //     alt: 'imageOpen',
    //     lieu: 'Telepresentiel',
    //     dateEntree: new Date(' 01/04/2020 '),
    //     dateSortie: new Date(' 01/10/2020 '),
    //     contenu: ' Le developpeur full-stack peut g??re a la fois des t??ches back-end et front-ent, bien qu\'il soit pas necesserement un expert dans l\'un ou l\'autre. ',
    //     liste: [
    //       'creer un backend de site',
    //       'Utiliser des biblioth??ques ou des framework frontaux',
    //       'gerer le deploiements des application et placer les projets sur les serveur'
    //     ],
    //     lien: 'https://openclassrooms.com/fr/paths/185-developpeur-web'
    //   },
    //   {
    //     nomFormation: 'BPA Conducteur d\'engin',
    //     image: '../../../../assets/images/OC_bazas.png',
    //     alt: 'imageBazas',
    //     lieu: 'EPLEFPA de Bazas',
    //     dateEntree: new Date(' 01/04/2007 '),
    //     dateSortie: new Date(' 01/10/207 '),
    //     contenu: ' Le brevet Professionnel Option Travaux forestier permer d\'aqu??rir des connaissances et des comp??tences professionnemmes en: ',
    //     liste: [
    //       'R??alisation de travaux forestiers',
    //       'M??canique et entretiens des ??quipements',
    //       'Conduite d\'engins forestiers',
    //       'Connaissances scientifique et technique relative a la for??t',
    //       'Organisation de chantiers forestiers'
    //     ]
    //   },
    //   {
    //     nomFormation: 'BTS Technico Commerciale',
    //     option: 'Produit d\'origine Forestier',
    //     image: '../../../../assets/images/OC_meymac.png',
    //     alt: 'imageBazas',
    //     lieu: 'Lyc??e forestier Meymac',
    //     adresse: 'Meymac(19)',
    //     dateEntree: new Date(' 01/04/2001 '),
    //     dateSortie: new Date(' 01/10/2004 '),
    //     contenu: ' Formation a devienir des agents commerciaux sp??cialiser dans le domaines de la fili??re for??t-bois',
    //     liste: [
    //       'Technique de marketing',
    //       'Gestion de la relation client',
    //       'De la n??gociation a la vente de solution technico commerciale',
    //       'Laformation porte egalement sur la gestion cimmerciale, le suivides fournisseurs et des clients.'
    //     ]
    //   },
    //   {
    //     nomFormation: 'Baccalaureat Science et Technologie de l\'Agronomie et de l\'Environnement',
    //     option: 'Am??nagement du territoire',
    //     image: '../../../../assets/images/OC_Charlesquentin.png',
    //     alt: 'imageBanniere lycee chauny',
    //     lieu: 'Lyc??e Robert chaumann',
    //     adresse: 'Chauny(02)',
    //     dateEntree: new Date(' 01/04/1999 '),
    //     dateSortie: new Date(' 01/10/2001 '),
    //     contenu: ' Formation permettant de maitriser les techinique de gestion et l\'am??nagement des milieux, qu\'il soit artificielle ou naturelle.',
    //     liste: [
    //       'Analyser les am??nagements existant',
    //       'participer des des suivies d\'??p??ces pour mieux appr??hender la gestion des population naturelles',
    //       'R??aliser des am??nagements, de la conseption a la mise en oeuvre.',
    //       'D??couvrir les grands enjeux li??es ?? l\'amenagemet des espaces et a la gestion des ??sp??ces.'
    //     ]
    //   },
    // ];

