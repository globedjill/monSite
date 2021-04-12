import { FormationFormComponent } from 'src/app/pages/page-container/parcour/formations/formation-form/formation-form.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Formation } from 'src/shared/modeles/formation.interface';
import { ParcourService } from 'src/shared/services/parcour.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.sass']
})
export class FormationComponent implements OnInit, OnDestroy {

  tableauDeFormationSubscription: Subscription;
  parcourTab: Formation[];
  formation: Formation;

  constructor(
    private parcourService: ParcourService
  ) {
    // this.parcourTab = [
    //   {
    //     nomFormation: 'Developpeur web FullStack',
    //     image: '../../../../assets/images/OC_Banner.png' ,
    //     alt: 'imageOpen',
    //     lieu: 'Telepresentiel',
    //     dateEntree: new Date(' 01/04/2020 '),
    //     dateSortie: new Date(' 01/10/2020 '),
    //     contenu: ' Le developpeur full-stack peut gére a la fois des tâches back-end et front-ent, bien qu\'il soit pas necesserement un expert dans l\'un ou l\'autre. ',
    //     liste: [
    //       'creer un backend de site',
    //       'Utiliser des bibliothéques ou des framework frontaux',
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
    //     contenu: ' Le brevet Professionnel Option Travaux forestier permer d\'aquérir des connaissances et des compétences professionnemmes en: ',
    //     liste: [
    //       'Réalisation de travaux forestiers',
    //       'Mécanique et entretiens des équipements',
    //       'Conduite d\'engins forestiers',
    //       'Connaissances scientifique et technique relative a la forêt',
    //       'Organisation de chantiers forestiers'
    //     ]
    //   },
    //   {
    //     nomFormation: 'BTS Technico Commerciale',
    //     option: 'Produit d\'origine Forestier',
    //     image: '../../../../assets/images/OC_meymac.png',
    //     alt: 'imageBazas',
    //     lieu: 'Lycée forestier Meymac',
    //     adresse: 'Meymac(19)',
    //     dateEntree: new Date(' 01/04/2001 '),
    //     dateSortie: new Date(' 01/10/2004 '),
    //     contenu: ' Formation a devienir des agents commerciaux spécialiser dans le domaines de la filiére forêt-bois',
    //     liste: [
    //       'Technique de marketing',
    //       'Gestion de la relation client',
    //       'De la négociation a la vente de solution technico commerciale',
    //       'Laformation porte egalement sur la gestion cimmerciale, le suivides fournisseurs et des clients.'
    //     ]
    //   },
    //   {
    //     nomFormation: 'Baccalaureat Science et Technologie de l\'Agronomie et de l\'Environnement',
    //     option: 'Aménagement du territoire',
    //     image: '../../../../assets/images/OC_Charlesquentin.png',
    //     alt: 'imageBanniere lycee chauny',
    //     lieu: 'Lycée Robert chaumann',
    //     adresse: 'Chauny(02)',
    //     dateEntree: new Date(' 01/04/1999 '),
    //     dateSortie: new Date(' 01/10/2001 '),
    //     contenu: ' Formation permettant de maitriser les techinique de gestion et l\'aménagement des milieux, qu\'il soit artificielle ou naturelle.',
    //     liste: [
    //       'Analyser les aménagements existant',
    //       'participer des des suivies d\'épéces pour mieux appréhender la gestion des population naturelles',
    //       'Réaliser des aménagements, de la conseption a la mise en oeuvre.',
    //       'Découvrir les grands enjeux liées à l\'amenagemet des espaces et a la gestion des éspéces.'
    //     ]
    //   },
    // ];

   }

  ngOnInit(): void {
    this.tableauDeFormationSubscription = this.parcourService.formationTab$.subscribe(
      (formationTab: Formation[]) => {
        this.parcourTab = formationTab;
      }
    );
    this.parcourService.recupFormations();
    this.parcourService.emettreLesFormationsRecuperer();
  }

  ngOnDestroy(): void {
   this.tableauDeFormationSubscription.unsubscribe();
  }

  deleteFormation(){
    this.parcourService.supprimerUneFormation(this.formation);
  }
  modifyFormation(){

  }
}
