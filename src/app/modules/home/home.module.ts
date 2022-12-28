import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductosComponent } from './components/productos/productos.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent,
    ProductosComponent
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
