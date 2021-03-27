import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtrasPageRoutingModule } from './extras-routing.module';

import { ExtrasPage } from './extras.page';
import { ExternalBrowserComponent } from './external-browser/external-browser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExtrasPageRoutingModule
  ],
  declarations: [
    ExtrasPage,
    ExternalBrowserComponent
  ]
})
export class ExtrasPageModule { }
