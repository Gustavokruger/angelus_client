import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private service: UsuarioService) { }

  usuario: Usuario; // Onde vai receber os dados do formulario

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  create(): void{
    this.service.create(this.usuario).subscribe((usuario) =>{
      console.log(usuario);
    });
  }

}
