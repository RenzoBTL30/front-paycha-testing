import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  asignarRol(id_usuario:number, id_rol:number): Observable<any> {
    return this.http.post<any>(`${apiURL}/rol/asignar/${id_usuario}`,{id_rol}, this.httpOptions);
  }

  updateRolUsuario(id_usuario:number, id_rol:number): Observable<any> {
    return this.http.put<any>(`${apiURL}/rol/updaterolusuario/${id_usuario}`,{id_rol}, this.httpOptions);
  }

  crearRol(rol:Rol): Observable<any> {
    return this.http.post<any>(`${apiURL}/rol/crear`,rol, this.httpOptions);
  }

  updateRol(id_rol:number, nombre:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/rol/update/${id_rol}`,{ nombre }, this.httpOptions);
  }

  getRoles(): Observable<any> {
    return this.http.get<any>(`${apiURL}/rol/listar`);
  }

  getRolesTrabajador(): Observable<any> {
    return this.http.get<any>(`${apiURL}/rol/listartrabajador`);
  }
}
