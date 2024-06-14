<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
=======
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1



@NgModule({
  declarations: [
<<<<<<< HEAD
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent
=======
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1
  ]
})
export class SharedModule { }
