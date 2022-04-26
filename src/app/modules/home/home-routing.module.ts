import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentAdviceComponent } from './containers/current-advice/current-advice.component';
import { CurrentNewComponent } from './containers/current-new/current-new.component';
import { HomeShellComponent } from './containers/home-shell/home-shell.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeShellComponent },
    { path: 'advice/:id', component: CurrentAdviceComponent },
    { path: 'new/:id', pathMatch: 'full', component: CurrentNewComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }