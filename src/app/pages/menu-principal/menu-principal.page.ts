import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  fotoPerfil = localStorage.getItem('fotoPerfil');

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goHoteles(){
    this.route.navigate(['hoteles']);
  }

  goRestaurantes(){
    this.route.navigate(['restaurantes']);
  }

  goTours(){
    this.route.navigate(['tours']);
  }

  goHome(){
    this.route.navigate(['menu-inicio']);
  }

  goOut(){
    localStorage.clear();
    this.route.navigate(['login']);
  }

  goMap(){
    this.route.navigate(['mapa']);
  }

  goError(){
    this.route.navigate(['error']);
  }
  goMisDatos(){
    this.route.navigate(['menu'])
  }


}
