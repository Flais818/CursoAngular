import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
const routes: Routes = [
  { path: '',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1
})
export class AppRoutingModule { }
