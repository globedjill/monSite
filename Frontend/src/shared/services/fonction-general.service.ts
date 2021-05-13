import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FonctionGeneralService {

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
}
