import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService
  ) {
    this.createForm();
  }

  usuario: Usuario;
  angForm: FormGroup;
  angFormError: boolean = false;
  angFormErrorMessage: String = null;

  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  create(): void {
    this.service.create(this.usuario)
      .subscribe(
        result => {
          window.location.reload();
        },
        err => {
          this.angFormError = true;
          this.angFormErrorMessage = err.error.mensagem;
        }
      );
  }

}
