import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienciasPageRoutingModule } from './experiencias-routing.module';

import { ExperienciasPage } from './experiencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExperienciasPage]
})
export class ExperienciasPageModule {}
