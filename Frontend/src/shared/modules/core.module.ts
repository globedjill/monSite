import { GooglePlacesComponent } from 'src/app/components/googleApi/google-places/google-places.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { PortfolioService } from './../services/portfolio.service';
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
import { UploadImageFormComponent } from 'src/app/pages/page-container/parcour/formations/upload-image-form/upload-image-form.component';
import { PortfolioComponent } from 'src/app/pages/page-container/portfolio/portfolio.component';
import { PortfolioFormComponent } from 'src/app/pages/page-container/portfolio/portfolio-form/portfolio-form.component';
import { AlertSupprImgComponent } from 'src/app/components/alert/alert-suppr-img/alert-suppr-img.component';
import { FonctionGeneralService } from '../services/fonction-general.service';

const MODULES = [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AcceuilComponent,
    SeConnecterComponent,
    SInscrireComponent,
    PageContainerComponent,
    ParcourComponent,
    PortfolioComponent,
    PortfolioFormComponent,
    ContactComponent,
    FormationComponent,
    ExperienceComponent,
    FormationFormComponent,
    ExperienceFormComponent,
    UploadImageFormComponent,
    AlertSupprImgComponent,
    GooglePlacesComponent
];

@NgModule({
  declarations: [
    MODULES
  ],
  imports: [
    AppRoutingModule,
    LayoutModule,
    GooglePlaceModule,
  ],
  exports: [
    MODULES,
    LayoutModule,
  ],
  providers:[
    ParcourService,
    PortfolioService,
    UsersService,
    FonctionGeneralService
  ]

})
export class CoreModule { }
