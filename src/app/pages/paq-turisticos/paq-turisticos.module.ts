import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaqTuristicosPageRoutingModule } from './paq-turisticos-routing.module';

import { PaqTuristicosPage } from './paq-turisticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaqTuristicosPageRoutingModule
  ],
  declarations: [PaqTuristicosPage]
})
export class PaqTuristicosPageModule {}
