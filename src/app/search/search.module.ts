import { AddComponent } from 'src/app/search/add/add.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    SharedModule,
    FormsModule,
    IonicModule
  ]
})
export class SearchModule { }
