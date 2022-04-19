import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.modules';
import { SettingsShellComponent } from './containers/settings-shell/settings-shell.component';
import { SettingsHeaderComponent } from './components/settings-header/settings-header.component';
import { SettingsFooterComponent } from './components/settings-footer/settings-footer.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    SettingsShellComponent,
    SettingsHeaderComponent,
    SettingsFooterComponent,
    SettingsDialogComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
  ]
})
export class SettingsModule { }
