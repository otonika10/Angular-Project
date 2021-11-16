import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { StatsComponent } from './stats/stats.component';
import { RouterModule } from '@angular/router';
import { LoginGuard } from '../auth/guard/login.guard';






@NgModule({
  declarations: [GamesComponent ,PlayersComponent,TeamsComponent,StatsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home/games',
        component: GamesComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'home/teams',
        component: TeamsComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'home/players',
        component: PlayersComponent,
        canActivate:[LoginGuard]
      },
      {
        path: 'home/stats',
        component: StatsComponent,
        canActivate:[LoginGuard]
      },
    ])
  ],
  exports:[GamesComponent,PlayersComponent,TeamsComponent,StatsComponent]
})
export class CoreModule { }
