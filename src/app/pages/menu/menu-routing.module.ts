import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'experiencias',
        loadChildren: () => import('./../../pages/experiencias/experiencias.module').then( m => m.ExperienciasPageModule)
      },
      {
        path: 'certificados',
        loadChildren: () => import('./../../pages/certificados/certificados.module').then( m => m.CertificadosPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./../../pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'mis-datos',
        loadChildren: () => import('./../../pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
      },
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
