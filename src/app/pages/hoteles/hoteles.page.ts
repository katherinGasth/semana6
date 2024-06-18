import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goMenu(){
    this.route.navigate(['menu']);
  }

}
