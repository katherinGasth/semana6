import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.page.html',
  styleUrls: ['./menu-inicio.page.scss'],
})
export class MenuInicioPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  irMenuPrincipal(){
    this.route.navigate(['menu-principal']);
  }

  irDatos(){
    this.route.navigate(['menu']);
  }



}
