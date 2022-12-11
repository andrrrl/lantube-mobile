import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ConfigService } from 'src/app/services/config.service';
import { ConfigPageComponent } from './config-page/config-page.component';

@NgModule({
  declarations: [
    ConfigPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ConfigRoutingModule,
    IonicModule
  ],
  providers: [
    ConfigService
  ]
})
export class ConfigModule { }
