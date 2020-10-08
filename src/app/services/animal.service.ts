import { Injectable } from '@angular/core';
import { Animal } from '../Models/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl:'http://localhost:1234';
  

  constructor(private http: HttpClient) { }
 
  list(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.baseUrl);
  }

  create(animal: Animal): Observable<Animal>{
    return this.http.post<Animal>(this.baseUrl, animal);
  }
}
