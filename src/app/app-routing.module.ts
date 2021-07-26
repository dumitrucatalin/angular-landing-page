import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth/guards/auth-guard.guard';
import { ContactComponent } from './core/contact/contact.component';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { ProjectsComponent } from './core/projects/projects.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,canActivate: [AuthGuardGuard],
  },
  {
    path: 'projects', component: ProjectsComponent,canActivate: [AuthGuardGuard],
  },
  {
    path: 'contact', component: ContactComponent,canActivate: [AuthGuardGuard],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
