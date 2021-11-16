import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { StatsComponent } from './stats/stats.component';






@NgModule({
  declarations: [GamesComponent ,PlayersComponent,TeamsComponent,StatsComponent],
  imports: [
    CommonModule
  ],
  exports:[GamesComponent,PlayersComponent,TeamsComponent,StatsComponent]
})
export class CoreModule { }
