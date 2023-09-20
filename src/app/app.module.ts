import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    NavbarComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class AppModule { }
