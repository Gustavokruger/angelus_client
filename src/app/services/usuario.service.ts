import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  baseUrl:'http://localhost:1234';

  constructor(private http: HttpClient) { }



  list(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl)
  }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }
}
