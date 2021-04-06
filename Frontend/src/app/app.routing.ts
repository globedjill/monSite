import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SInscrireComponent } from './components/auth/s-inscrire/s-inscrire.component';
import { SeConnecterComponent } from './components/auth/se-connecter/se-connecter.component';
import { AcceuilComponent } from './pages/page-container/acceuil/acceuil.component';
import { ContactComponent } from './pages/page-container/contact/contact.component';
import { PageContainerComponent } from './pages/page-container/page-container.component';
import { ParcourComponent } from './pages/page-container/parcour/parcour.component';

const routes: Routes = [

  { path: 'acceuil', component: AcceuilComponent},
  { path: 'seConnecter', component: SeConnecterComponent},
  { path: 'sInscrire', component: SInscrireComponent},
  { path: 'parcour', component: ParcourComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
