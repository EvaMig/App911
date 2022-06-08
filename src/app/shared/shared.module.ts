import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { MaterialModule } from './modules/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SafeHtmlPipe,
  ]
})
export class SharedModule { }
