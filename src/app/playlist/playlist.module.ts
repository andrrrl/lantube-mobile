import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlaylistPageComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlaylistRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class PlaylistModule { }
