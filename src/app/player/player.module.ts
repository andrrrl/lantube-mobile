import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerService } from '../services/player.service';
import { PlayerPageComponent } from './player-page/player-page.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
