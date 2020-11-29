import { Injectable } from '@angular/core';
import { Animal } from '../Models/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  list(): Observable<Animal[]> {
    const data = JSON.parse(localStorage.getItem("userData"));
    return this.http.get<Animal[]>(`/api/animal/listar/${data._id}`);
  }

  qanimal(): Observable<Number> {
    return this.http.get<Number>('/api/animal/qanimal/false');
  }

  create(animal: Animal): Observable<Animal> {
    const data = JSON.parse(localStorage.getItem("userData"));
    animal.usuario = data._id;
    return this.http.post<Animal>('/api/animal/cadastrar', animal);
  }
}
