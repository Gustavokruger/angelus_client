import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/Usuario';
import { Animal } from '../../../Models/Animal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-post',
  templateUrl: './cadastrar-post.component.html',
  styleUrls: ['./cadastrar-post.component.css']
})
export class CadastrarPostComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  usuario: Usuario;
  animais: Animal[];
  angForm: FormGroup;
  angFormError: boolean = false;
  angFormErrorMessage: String = null;

  createForm(){
    this.angForm = this.fb.group({
      descricao:['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.animais = [];

  }

  create(): void {
    this
  }
}
