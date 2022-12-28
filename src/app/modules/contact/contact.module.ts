import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';



@NgModule({
  declarations: [
    ContactPageComponent,
    ContactContentComponent
  ],
  exports: [
    ContactPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
