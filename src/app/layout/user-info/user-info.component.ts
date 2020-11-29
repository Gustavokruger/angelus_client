import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  qanimal: Number = 0; qusuario: Number = 0;
  userName: string;

  constructor(
    private animalService: AnimalService,
    private usuarioService: UsuarioService,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.animalService.qanimal().subscribe((qtdea) => {
      this.qanimal = qtdea;
    });
    this.usuarioService.qusuario().subscribe((qtdeu) => {
      this.qusuario = qtdeu;
    });

    const data = JSON.parse(localStorage.getItem("userData"));
    this.userName = data.nome;
  }

  logout(): void {
    localStorage.removeItem("auth");
    this.router.navigate(['/login']);
  }
}
