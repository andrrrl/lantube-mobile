import { PlayerStatsComponent } from './../player/player-stats/player-stats/player-stats.component';
import { TemperatureComponent } from './../sensor/temperature/temperature.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddComponent } from '../search/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemperatureComponent,
    PlayerStatsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule
  ],
  exports: [
    TemperatureComponent,
    PlayerStatsComponent,
    AddComponent
  ]
})
export class SharedModule { }
