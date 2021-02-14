import { PlayerService } from './../../services/player.service';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerPageRoutingModule } from './player-routing.module';

import { PlayerPage } from './player.page';
import { TemperatureComponent } from '../../sensor/temperature/temperature.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule
  ],
  declarations: [
    PlayerPage,
    PlayerStatsComponent,
    TemperatureComponent,
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerPageModule { }
