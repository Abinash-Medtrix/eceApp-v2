import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeSubComponent } from './home-sub/home-sub.component';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeSubComponent,
    HeaderComponent,
    LeftmenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule
  ],
  providers: [
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
