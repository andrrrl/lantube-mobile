import { PlayerStatsComponent } from './../player/player-stats/player-stats/player-stats.component';
import { TemperatureComponent } from './../sensor/temperature/temperature.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    TemperatureComponent,
    PlayerStatsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
  ],
  providers: [
    HttpClientModule
  ],
  exports: [
    TemperatureComponent,
    PlayerStatsComponent,
  ]
})
export class SharedModule { }
