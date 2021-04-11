import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.sass']
})
export class AcceuilComponent implements OnInit {

  age: any;
  dateDeNaissance: Date = new Date(1981,15,11);

  constructor() {
    const essai = (new Date().getTime());
    this.age = ((essai - this.dateDeNaissance.getTime())/31536000000).toFixed(0);
   }

  ngOnInit(): void {
  }
  Age(dateDeNaissance) {
    dateDeNaissance = new Date(dateDeNaissance);
    return new Number((new Date().getTime() - dateDeNaissance.getTime()) / 31536000000).toFixed(0);
  }

}
