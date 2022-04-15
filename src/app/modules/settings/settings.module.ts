import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.modules';
import { SettingsShellComponent } from './containers/settings-shell/settings-shell.component';
import { SettingsHeaderComponent } from './components/settings-header/settings-header.component';
import { SettingsFooterComponent } from './components/settings-footer/settings-footer.component';



@NgModule({
  declarations: [
    SettingsShellComponent,
    SettingsHeaderComponent,
    SettingsFooterComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }
