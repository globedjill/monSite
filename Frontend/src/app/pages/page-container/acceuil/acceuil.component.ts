import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.sass']
})
export class AcceuilComponent implements OnInit {

  dateDeNaissance: string ;

  constructor() {
    this.dateDeNaissance = ' 39 ans ' ;
   }

  ngOnInit(): void {
  }

}
