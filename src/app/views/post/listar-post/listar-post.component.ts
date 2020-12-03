import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';
import { Post } from '../../../Models/Post';
import { PostService } from '../../../services/post.service';
import { UtilsService } from '../../../services/utils.service';
import { Animal } from '../../../Models/Animal';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {


  posts: Post[] = [];
  animais: Animal[] = [];

  constructor(
    private postService: PostService,
    private utilService: UtilsService
  ) { }

  ngOnInit(): void {

    this.postService.list().subscribe((lista) =>{
      this.posts = lista;
      this.posts
    })
  }

}
