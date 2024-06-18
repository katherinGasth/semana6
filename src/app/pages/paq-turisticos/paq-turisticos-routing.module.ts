import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaqTuristicosPage } from './paq-turisticos.page';

const routes: Routes = [
  {
    path: '',
    component: PaqTuristicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaqTuristicosPageRoutingModule {}
