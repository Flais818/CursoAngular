<<<<<<< HEAD
import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { SharedModule } from './shared/shared.module';

// Configuracion del local de la app
import localEsMx from '@angular/common/locales/es-MX'
import localFrCa from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common'

registerLocaleData( localEsMx )
registerLocaleData( localFrCa )

@NgModule({
  declarations: [
    AppComponent,
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
=======
    HttpClientModule,

    SharedModule,
  ],
  providers: [],
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1
  bootstrap: [AppComponent]
})
export class AppModule { }
