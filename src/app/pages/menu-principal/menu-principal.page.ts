import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

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
    this.route.navigate(['presentacion']);
  }

  goOut(){
    this.route.navigate(['login']);
  }


}
