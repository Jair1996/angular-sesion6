import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    AboutUsPageComponent,
    AboutUsComponent
  ],
  exports: [
    AboutUsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
