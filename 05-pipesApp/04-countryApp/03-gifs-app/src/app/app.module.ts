import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LazyImageComponent } from './shared/components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GifsModule,
  ],
  exports: [
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
