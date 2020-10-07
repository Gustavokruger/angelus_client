import { Injectable } from '@angular/core';
import { Animal } from '../Models/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  baseUrl:'http://localhost:1234';

  list(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.baseUrl);
  }
}
