import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';

const routes: Routes = [
  

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
  
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    //canActivate: [DbService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./pages/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },

  
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'menu-inicio',
    loadChildren: () => import('./pages/menu-inicio/menu-inicio.module').then( m => m.MenuInicioPageModule)
  },

  
  {
    path: 'paq-turisticos',
    loadChildren: () => import('./pages/paq-turisticos/paq-turisticos.module').then( m => m.PaqTuristicosPageModule)
  },
  {
    path: 'hoteles',
    loadChildren: () => import('./pages/hoteles/hoteles.module').then( m => m.HotelesPageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./pages/tours/tours.module').then( m => m.ToursPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./pages/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/error-404/error-404.module').then( m => m.Error404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
