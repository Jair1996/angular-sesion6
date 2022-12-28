import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';



@NgModule({
  declarations: [
    AboutUsPageComponent
  ],
  exports: [
    AboutUsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
