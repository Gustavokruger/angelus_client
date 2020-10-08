import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../Models/Animal';
import { AnimalService } from '../../../services/animal.service';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../Models/Usuario';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.css']
})
export class CadastrarAnimalComponent implements OnInit {

  animal: Animal;
  angForm: FormGroup;
  usuarios: Usuario[] = [];

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
       id: ['', Validators.required ],
       nome: ['', Validators.required ],
       tipo: ['', Validators.required ],
       idade: ['', Validators.required ],
       porte: ['', Validators.required ],
       sexo: ['', Validators.required ],
       descricao: ['', Validators.required ],
       usuario: ['', Validators.required ],
    });
  }

  ngOnInit(): void {
    this.animal = new Animal();

    this.usuarioService.list().subscribe((lista) =>{
      this.usuarios = lista
    })
  }

  create(): void {
    this.animalService.create(this.animal).subscribe((animal) => {
      console.log(animal);
    });
  }

  navigateToCadastrarAnimal(): void{
    this.router.navigate(['animal/cadastrar']);
  }
}
