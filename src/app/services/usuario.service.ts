import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  list(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('/api/usuario/listar')
  }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('/api/usuario/cadastrar', usuario);
  }
}
