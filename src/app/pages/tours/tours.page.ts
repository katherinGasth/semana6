import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss'],
})
export class ToursPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goMenu(){
    this.route.navigate(['menu-principal']);
  }

}
