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

  experienceTab: Experience[];

  constructor(
    private userService: UsersService
  ) {
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
    this.subscription = this.userService.idSession$.subscribe((usersession: UserSession)=> {
      this.userSession = usersession;
    })

  }

}
