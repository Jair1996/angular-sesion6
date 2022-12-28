import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactPageComponent,
    ContactContentComponent,
    ContactFormComponent
  ],
  exports: [
    ContactPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
