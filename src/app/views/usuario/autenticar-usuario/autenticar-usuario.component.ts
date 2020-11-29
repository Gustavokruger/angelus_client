import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticar-usuario',
  templateUrl: './autenticar-usuario.component.html',
  styleUrls: ['./autenticar-usuario.component.css']
})
export class AutenticarUsuarioComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private authService: AuthService,
    private router: Router
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
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  login(): void {
    this.service.logar(this.usuario)
      .subscribe(
        result => {
          this.authService.createSession(result).then(() => {
            this.router.navigate(['/app']);
          });
        },
        err => {
          this.angFormError = true;
          this.angFormErrorMessage = err.error.mensagem;
        }
      );
  }

}
