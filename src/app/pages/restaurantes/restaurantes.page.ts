import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goMenu(){
    this.route.navigate(['menu-principal']);
  }

}
