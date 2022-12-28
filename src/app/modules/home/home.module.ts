import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
