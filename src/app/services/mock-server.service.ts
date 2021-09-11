import { Injectable } from '@angular/core';
import { Usuario } from './../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class MockServerService {
  public usuario: Usuario;

  constructor(usuario: Usuario) {
    this.usuario = usuario;
  }

  isAuthUser() {
    return this.usuario.token === 'Empanada123';
  }

  getUsuario() {
    return this.usuario;
  }
}
