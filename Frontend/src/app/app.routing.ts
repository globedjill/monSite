import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SInscrireComponent } from './components/auth/s-inscrire/s-inscrire.component';
import { SeConnecterComponent } from './components/auth/se-connecter/se-connecter.component';
import { AcceuilComponent } from './pages/page-container/acceuil/acceuil.component';
import { ContactComponent } from './pages/page-container/contact/contact.component';
import { PageContainerComponent } from './pages/page-container/page-container.component';
import { ExperienceFormComponent } from './pages/page-container/parcour/experiences/experience-form/experience-form.component';
import { ExperienceComponent } from './pages/page-container/parcour/experiences/experience/experience.component';
import { FormationFormComponent } from './pages/page-container/parcour/formations/formation-form/formation-form.component';
import { FormationComponent } from './pages/page-container/parcour/formations/formation/formation.component';
import { ParcourComponent } from './pages/page-container/parcour/parcour.component';

const routes: Routes = [

  { path: 'acceuil', component: AcceuilComponent},
  { path: 'seConnecter', component: SeConnecterComponent},
  { path: 'sInscrire', component: SInscrireComponent},

  { path: 'parcour', component: ParcourComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'formation/:_id', component: FormationFormComponent},
  { path: 'formationForm', component: FormationFormComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'experienceForm' , component:ExperienceFormComponent},

  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
