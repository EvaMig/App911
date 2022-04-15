import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsShellComponent } from './containers/settings-shell/settings-shell.component';

const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', component: SettingsShellComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule { }