import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  opciones: any = [];

  login(credentials: { email: string; contrasenia: string }): Observable<any> {
    return this.http.post<any>(`${apiURL}/auth/login`, credentials);
  }

  guardarUsuario(usuario: any): void {
    sessionStorage.setItem('id_usuario', usuario.id_usuario);
    sessionStorage.setItem('email', usuario.email);
    sessionStorage.setItem('nombre', usuario.nombre);
    sessionStorage.setItem('apellidos', usuario.apellidos);
    sessionStorage.setItem('celular', usuario.celular);
    sessionStorage.setItem('rol', usuario.rol);
  }

  guardarToken(session_token: string): void {
    sessionStorage.setItem('token', session_token);
  }

  eliminarDatos() {
    sessionStorage.clear();
  }
}
