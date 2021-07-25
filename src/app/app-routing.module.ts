import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth/guards/auth-guard.guard';
import { LandingPageComponent } from './core/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,canActivate: [AuthGuardGuard],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
