import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeShellComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
