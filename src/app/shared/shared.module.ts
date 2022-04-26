import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SafeHtmlPipe,
  ]
})
export class SharedModule { }
