import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MissionVissionComponent } from './components/mission-vission/mission-vission.component';



@NgModule({
  declarations: [
    AboutUsPageComponent,
    AboutUsComponent,
    MissionVissionComponent
  ],
  exports: [
    AboutUsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
