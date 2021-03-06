import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  list(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/post/listar');
  }
  
  create(post: Post): Observable<Post> {
    const data = JSON.parse(localStorage.getItem("userData"));
    post.usuario = data;
    return this.http.post<Post>('api/post/cadastrar', post);
  }
}
