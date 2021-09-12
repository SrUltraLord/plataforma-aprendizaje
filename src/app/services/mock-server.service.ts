import { Injectable } from '@angular/core';
import { Usuario } from './../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class MockServerService {
  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  loginUser() {
    this.usuario.token = 'Empanada123';
  }

  isAuthUser() {
    return this.usuario.token === 'Empanada123';
  }

  getUsuario() {
    return this.usuario;
  }
}
