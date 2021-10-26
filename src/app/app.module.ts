import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './auth/guard/login.guard';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'reg',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'reg',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
