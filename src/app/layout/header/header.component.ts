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

  userName: string;

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userName = data.nome;
  }

  logout(): void {
    localStorage.removeItem("auth");
    this.router.navigate(['/login']);
  }
}
