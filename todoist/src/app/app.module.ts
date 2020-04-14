import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CabComponent } from './cab/cab.component';
import { TicComponent } from './tic/tic.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CabComponent,
    TicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
