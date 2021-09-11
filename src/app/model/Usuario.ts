export class Usuario {
  public token: string;
  public nombre: string;

  constructor(token: string, nombre: string) {
    this.token = token;
    this.nombre = nombre;
  }
}
