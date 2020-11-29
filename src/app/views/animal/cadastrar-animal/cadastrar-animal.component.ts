import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../Models/Animal';
import { AnimalService } from '../../../services/animal.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.css']
})
export class CadastrarAnimalComponent implements OnInit {

  animal: Animal;
  angForm: FormGroup;
  angFormError: boolean = false;
  angFormErrorMessage: String = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private animalService: AnimalService,
    private usuarioService: UsuarioService
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      idade: ['', Validators.required],
      porte: ['', Validators.required],
      sexo: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.animal = new Animal();
  }

  create(): void {
    this.animalService.create(this.animal).subscribe(
      result => {
        this.router.navigate(['/app']);
      },
      err => {
        this.angFormError = true;
        this.angFormErrorMessage = err.error.mensagem;
      });
  }

  navigateToCadastrarAnimal(): void {
    this.router.navigate(['animal/cadastrar']);
  }
}
