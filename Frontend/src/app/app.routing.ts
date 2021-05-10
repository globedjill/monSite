import { PortfolioFormComponent } from './pages/page-container/portfolio/portfolio-form/portfolio-form.component';
import { PortfolioComponent } from './pages/page-container/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/shared/auth.guard';

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
  { path: 'sInscrire', component: SInscrireComponent,
    canActivate: [AuthGuard],
  },

  { path: 'parcour', component: ParcourComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolioForm', component: PortfolioFormComponent},
  { path: 'portfolio/:id',
    // canActivate:[AuthGuard],
    component: PortfolioFormComponent},

  { path: 'formation', component: FormationComponent},
  { path: 'formation/:_id',
    // canActivate:[AuthGuard],
    component: FormationFormComponent},
  { path: 'formationForm',
    // canActivate:[AuthGuard],
    component: FormationFormComponent},

  { path: 'experience', component: ExperienceComponent},
  { path: 'experience/:_id',
    // canActivate: [AuthGuard],
    component: ExperienceFormComponent
  },
  { path: 'experienceForm',
    // canActivate:[AuthGuard],
    component:ExperienceFormComponent},

  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
