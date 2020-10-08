import { Injectable } from '@angular/core';
import { Animal } from '../Models/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
 
  list(): Observable<Animal[]>{
    return this.http.get<Animal[]>('/api/animal/listar');
  }

  create(animal: Animal): Observable<Animal>{
    return this.http.post<Animal>('/api/animal/cadastrar', animal);
  }
}
