import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/shared/modeles/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  experienceTab: Experience[];


  constructor() {
    this.experienceTab = [
      {
        dateEntree: new Date('2018/01/05'),
        dateSortie: new Date('2021/02/01'),
        image: '../../../../assets/images/ban_bricoDepot.png',
        typeContrat: 'CDI',
        enseigne: 'Bricot Dépot',
        lieu: 'Trélissac (24000)',
        fonction: 'Vendeur Polyvalent - Secteur Outillage/Peinture/Electicité '
      },
      {
        dateEntree: new Date('2009/01/05'),
        dateSortie: new Date('2017/05/01'),
        image: '../../../../assets/images/ban-cashexpress.png',
        typeContrat: 'CDI',
        enseigne: 'CashExpress',
        lieu: 'Trélissac (24000)',
        fonction: 'Acheteur Vendeur Polyvalent - Gestion '
      }
    ];
  }

  ngOnInit(): void {
  }

}
