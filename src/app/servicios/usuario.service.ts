import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getUsuariosTrabajador(): Observable<any> {
    return this.http.get<any>(`${apiURL}/usuario/listartrabajador`);
  }

  getUsuariosCliente(): Observable<any> {
    return this.http.get<any>(`${apiURL}/usuario/listarcliente`);
  }

  agregarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${apiURL}/usuario/crear`, usuario, this.httpOptions);
  }

  editarUsuario(
    id_usuario:number,
    email: string, 
    nombre: string,
    apellidos: string,
    celular: string, 
  ): Observable<any> {
  return this.http.put<any>(`${apiURL}/usuario/actualizar/${id_usuario}`, 
    {
      email: email,
      nombre: nombre,
      apellidos: apellidos,
      celular: celular,
    }, this.httpOptions);
  }

  editarUsuarioContrasenia(id_usuario:number, contrasenia: string): Observable<any> {
    return this.http.put<any>(`${apiURL}/usuario/actualizar/contra/${id_usuario}`, { contrasenia }, this.httpOptions);
  }

  deleteUsuario(id_usuario:number): Observable<any> {
    return this.http.put<any>(`${apiURL}/usuario/delete/${id_usuario}`, this.httpOptions);
  }
  
}
