import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';



@NgModule({
  declarations: [
    UserPageComponent
  ],
  exports: [
    UserPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
