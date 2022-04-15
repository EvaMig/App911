import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './core/authorization/authorization.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', pathMatch: 'full', component: AuthorizationComponent},
  {
    path:'home', 
    loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
  },
  {
    path:'settings', 
    loadChildren: () => import('./modules/settings/settings.module').then(module => module.SettingsModule),
  },
  {path:'**', pathMatch: 'full', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
