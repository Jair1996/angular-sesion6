import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServiceDescriptionComponent } from './components/service-description/service-description.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    ServiceDescriptionComponent
  ],
  exports: [
    ServicePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
