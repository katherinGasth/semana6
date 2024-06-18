import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciasPage } from './experiencias.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienciasPageRoutingModule {}
