import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.page.html',
  styleUrls: ['./error-404.page.scss'],
})
export class Error404Page implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  irAlHome() {
    this.router.navigate(["menu"])
  }
}
