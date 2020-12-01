import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/Usuario';
import { Animal } from '../../../Models/Animal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../Models/Post';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'app-cadastrar-post',
  templateUrl: './cadastrar-post.component.html',
  styleUrls: ['./cadastrar-post.component.css']
})
export class CadastrarPostComponent implements OnInit {

  post: Post;
  usuario: Usuario;
  animais: Animal[];
  animaisDoUsuario: Animal[];
  angForm: FormGroup;
  angFormError: boolean = false;
  angFormErrorMessage: String = null;



  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private animalService: AnimalService,

  ) {
    this.createForm();
  }



  createForm(){
    this.angForm = this.fb.group({
      descricao:['', Validators.required],
      animais:['']
    });
  }

  ngOnInit(): void {
    this.post = new Post();
    this.usuario = new Usuario();
    this.animais = [];
    this.animalService.list().subscribe((lista) =>{
      this.animaisDoUsuario = lista;
    })

  }

  create(): void {
    this.postService.create(this.post).subscribe((post) => {
      console.log(post);
    }
    )
  }
}
