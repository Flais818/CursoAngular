import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
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
