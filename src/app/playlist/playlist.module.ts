import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';


@NgModule({
  declarations: [
    PlaylistPageComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    IonicModule
  ]
})
export class PlaylistModule { }
