import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdvicesShellComponent } from './containers/advices-shell/advices-shell.component';
import { AdviceItemComponent } from './components/advice-item/advice-item.component';
import { NewsShellComponent } from './containers/news-shell/news-shell.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CurrentNewComponent } from './containers/current-new/current-new.component';
import { CurrentAdviceComponent } from './containers/current-advice/current-advice.component';



@NgModule({
  declarations: [
    HomeShellComponent,
    AdvicesShellComponent,
    AdviceItemComponent,
    NewsShellComponent,
    NewItemComponent,
    CurrentNewComponent,
    CurrentAdviceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class HomeModule { }
