import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { ProjectsComponent } from './core/projects/projects.component';
import { ContactComponent } from './core/contact/contact.component';
import { DetailsCardComponent } from './shared/components/details-card/details-card.component';
import { HeaderMenuComponent } from './core/header-menu/header-menu.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SocialMediaIconsComponent } from './shared/components/social-media-icons/social-media-icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MobileDetailsComponent } from './shared/components/mobile-details/mobile-details.component';
import { CloudArchitectureDetailsComponent } from './shared/components/cloud-architecture-details/cloud-architecture-details.component';
import { ProjectsDetailsComponent } from './shared/components/projects-details/projects-details.component';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { ProjectCardListComponent } from './shared/components/project-card-list/project-card-list.component';
import { ContactDetailsComponent } from './shared/components/contact-details/contact-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    DetailsCardComponent,
    HeaderMenuComponent,
    SocialMediaIconsComponent,
    MobileDetailsComponent,
    CloudArchitectureDetailsComponent,
    ProjectsDetailsComponent,
    ProjectCardComponent,
    ProjectCardListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
