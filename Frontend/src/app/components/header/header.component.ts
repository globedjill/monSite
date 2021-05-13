import { Subscription } from 'rxjs';
import { UsersService } from './../../../shared/services/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserSession } from 'src/shared/modeles/userSession.interface';
import { FonctionGeneralService } from 'src/shared/services/fonction-general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  listeMenu: any[];
  activeLink: string;
  menuConnect: any[];

  subscription: Subscription;
  userSession: UserSession;

  constructor(
    private router: Router,
    private userService: UsersService,
    private fGService: FonctionGeneralService
    )
  {
    this.listeMenu = [
      {
        nom: 'Acceuil',
        lien: 'acceuil',
        fragment: 'acceuil'
      },
      {
        nom: 'Parcour',
        lien: 'parcour',
        fragment: 'parcour'
       },
       {
        nom: 'Portfolio',
        lien: 'portfolio',
        fragment: 'portfolio'
      },
      {
        nom: 'Contact',
        lien: 'contact',
        fragment: 'contact'
      }

    ];
    this.menuConnect = [
      {
       titre: 'Se connecter',
       lien: 'seConnecter'
      },
      {
        // titre: 's\'inscrire',
        // lien: 'sInscrire'
      }
   ];
    this.activeLink = this.listeMenu[0];


  }

  ngOnInit(): void {
    this.subscription = this.userService.idSession$.subscribe((userSession: UserSession)=> {
      this.userSession = userSession;
    })
    this.fGService.addPosSticky(60);
  }


  loggout(){
    this.userService.loggout().subscribe(()=>{
      console.log('deconnexion reussi !');
    },
    err=>{
      console.log('deconnexion reussi dans lerreur');
      console.log(err)
    });;
  }

  ngOnDestroy(): void {
    if(this.subscription){this.subscription.unsubscribe();}
  }
}
