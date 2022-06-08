import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDonatesShellComponent } from './pages/page-donates-shell/page-donates-shell.component';
import { PageNewsShellComponent } from './pages/page-news-shell/page-news-shell.component';
import { PsgeAdvicesShellComponent } from './pages/psge-advices-shell/psge-advices-shell.component';
import { CurrentAdviceComponent } from './containers/current-advice/current-advice.component';
import { CurrentNewComponent } from './containers/current-new/current-new.component';
import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { PageAboutUsShellComponent } from './pages/page-about-us-shell/page-about-us-shell.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeShellComponent },
    { path: 'advice/:id', component: CurrentAdviceComponent },
    { path: 'new/:id', pathMatch: 'full', component: CurrentNewComponent },
    { path:'about-us', pathMatch: 'full', component: PageAboutUsShellComponent },
    { path:'news', pathMatch: 'full', component: PageNewsShellComponent },
    { path:'advices', pathMatch: 'full', component: PsgeAdvicesShellComponent },
    { path:'donates', pathMatch: 'full', component: PageDonatesShellComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }