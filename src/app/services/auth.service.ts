import { Usuario } from '../Models/Usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async createSession(usuario: Usuario) {
    return Promise.resolve().then(() => {
      localStorage.setItem("auth", "true");
      localStorage.setItem("userData", JSON.stringify(usuario));

      return true;
    });
  }
}
