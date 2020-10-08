import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../Models/Usuario';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }


  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.usuarioService.list().subscribe((lista) =>{
      this.usuarios = lista
    })
  }

}
