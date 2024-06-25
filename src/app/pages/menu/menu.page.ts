import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goMenu(){
    this.route.navigate(['menu-principal']);
  }

}
