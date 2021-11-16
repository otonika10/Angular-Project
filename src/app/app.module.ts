import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './auth/guard/login.guard';
import { AuthModule } from './auth/auth.module';
import { TeamsComponent } from './core/teams/teams.component';
import { PlayersComponent } from './core/players/players.component';
import { GamesComponent } from './core/games/games.component';
import { StatsComponent } from './core/stats/stats.component';
import { CoreModule } from './core/core.module';
import { core } from '@angular/compiler';
import { DetailsComponent } from './core/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    DetailsComponent,

  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'reg',
        pathMatch: 'full'
      },
      
      {
        path: 'home',
        component: HomeComponent,
        
      },
      {
        path: 'teams',
        loadChildren:()=>import('./core/core.module').then(m => m.CoreModule)
      },
      {
        path: 'games',
        loadChildren:()=>import('./core/core.module').then(m => m.CoreModule)
      },
      {
        path: 'players',
        loadChildren:()=>import('./core/core.module').then(m => m.CoreModule)
      },
      {
        path: 'stats',
        loadChildren:()=>import('./core/core.module').then(m => m.CoreModule)
      },
      {
        path: 'details',
        loadChildren:()=>import('./core/core.module').then(m => m.CoreModule)
      },
      {
        path: 'reg',
        component: RegisterComponent
      },
      {
        path: 'login',
        loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)
      },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
