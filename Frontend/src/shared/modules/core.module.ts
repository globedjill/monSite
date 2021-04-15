import { AppRoutingModule } from './../../app/app.routing';
import { NgModule } from '@angular/core';

import { LayoutModule } from './layout.module';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AcceuilComponent } from 'src/app/pages/page-container/acceuil/acceuil.component';
import { ContactComponent } from 'src/app/pages/page-container/contact/contact.component';
import { PageContainerComponent } from 'src/app/pages/page-container/page-container.component';
import { ParcourComponent } from 'src/app/pages/page-container/parcour/parcour.component';
import { SInscrireComponent } from 'src/app/components/auth/s-inscrire/s-inscrire.component';
import { SeConnecterComponent } from 'src/app/components/auth/se-connecter/se-connecter.component';
import { FormationComponent } from 'src/app/pages/page-container/parcour/formations/formation/formation.component';
import { ExperienceFormComponent } from 'src/app/pages/page-container/parcour/experiences/experience-form/experience-form.component';
import { ExperienceComponent } from 'src/app/pages/page-container/parcour/experiences/experience/experience.component';
import { FormationFormComponent } from 'src/app/pages/page-container/parcour/formations/formation-form/formation-form.component';

import { ParcourService } from '../services/parcour.service';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';


const MODULES = [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AcceuilComponent,
    SeConnecterComponent,
    SInscrireComponent,
    PageContainerComponent,
    ParcourComponent,
    ContactComponent,
    FormationComponent,
    ExperienceComponent,
    FormationFormComponent,
    ExperienceFormComponent,
];

@NgModule({
  declarations: [
    MODULES
  ],
  imports: [
    AppRoutingModule,
    LayoutModule,
  ],
  exports: [
    MODULES,
    LayoutModule,
  ],
  providers:[
    ParcourService,
    UsersService,
    AuthService
  ]

})
export class CoreModule { }
