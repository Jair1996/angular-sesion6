import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './modules/about-us/pages/about-us-page/about-us-page.component';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { ContactPageComponent } from './modules/contact/pages/contact-page/contact-page.component';
import { ContactModule } from './modules/contact/contact.module';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { HomeModule } from './modules/home/home.module';
import { ServicePageComponent } from './modules/services/pages/service-page/service-page.component';
import { ServicesModule } from './modules/services/services.module';
import { UserPageComponent } from './modules/users/pages/user-page/user-page.component';
import { UsersModule } from './modules/users/users.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'servicio',
    component: ServicePageComponent,
  },
  {
    path: 'nosotros',
    component: AboutUsPageComponent,
  },
  {
    path: 'contacto',
    component: ContactPageComponent,
  },
  {
    path: 'usuarios',
    component: UserPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    ServicesModule,
    AboutUsModule,
    ContactModule,
    UsersModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
