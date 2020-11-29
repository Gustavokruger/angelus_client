import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem("auth");
    this.router.navigate(['/login']);
  }
}
