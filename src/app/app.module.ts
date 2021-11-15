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
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    TeamsComponent,
    PlayersComponent,
    GamesComponent,
    StatsComponent
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
        
      },
      {
        path: 'teams',
        component: TeamsComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'games',
        component: GamesComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'players',
        component: PlayersComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'stats',
        component: StatsComponent,
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
