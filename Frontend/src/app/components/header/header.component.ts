import { HttpClient } from '@angular/common/http';
import { UsersService } from './../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  listeMenu: any[];
  activeLink: string;
  menuConnect: any[];

  constructor(
    private router: Router,
    private userService: UsersService,
    private http: HttpClient
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
        titre: 's\'inscrire',
        lien: 'sInscrire'
      }
   ];
    this.activeLink = this.listeMenu[0];

  }

  ngOnInit(): void {

  }

  loggout(){
    this.userService.loggout();
  }
}
