import { Injectable, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Injectable({
  providedIn: 'root'
})
export class FonctionGeneralService {
  /*GESTION DES EREEURS*/

  /*DATE*/
  public dateMax: Date;
  public dateDeMaintenant: Date = new Date(Date.now());

  /*GOOGLE API*/
  public valueLieu = {
    name:'',
    cp: '',
    dept:'',
    lien:''
  };
  public addres;

  @ViewChild('placeRef') placesRef: GooglePlaceDirective;

  constructor() {
  }
  addPosSticky(position: number){
    const sticky = document.getElementById('navi');
    window.addEventListener('scroll',()=> {
      if(scrollY >= position){
        sticky.classList.add('navi');
      }
      if (scrollY < position){
        sticky.classList.remove('navi');
      }
    });
  }

  /*GESTION DES ERREUR*/
  nbcaract(nbCarac: number){
    return  'au moins ' + nbCarac + ' caractére sont necessaire'
  }

  public messageErreur = {
    required:'Ce champ doit etre rempli.',
    minLenght: this.nbcaract,
  }

  /* DATE */

  /*GOOGLE API*/
  public handleAddressChange(address: Address) {
    this.valueLieu.name = address.name;
    this.valueLieu.lien = address.website;

    for (let index = 0; index < address.address_components.length; index++) {
      /*POUR LA RECHERCHE DU CODE POSTAL*/
      if(address.address_components[index].types[0] === "postal_code"){
        this.valueLieu.cp = ' (' + address.address_components[index].long_name.split('')[0] + address.address_components[index].long_name.split('')[1] + ')';
      }
      /*POUR LA RECHERCHE DU DEPT*/
      if(address.address_components[index].types[0] === "administrative_area_level_2"){
        this.valueLieu.dept = address.address_components[index].long_name;
      }
    }
  }

  afficheNomEcole(i: number){
    if(this.valueLieu.name !== ''){
      return 'Ecole : ' + this.valueLieu.name;
    }else {
      return 'Ecole n° : '+ i+1;
    }
  }
}
