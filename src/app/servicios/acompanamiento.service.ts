import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { Acompanamiento } from '../models/acompanamiento';

@Injectable({
  providedIn: 'root'
})
export class AcompanamientoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAcomps(): Observable<any> {
    return this.http.get<any>(`${apiURL}/acompanamiento/listar`);
  }

  agregarAcomp(acompanamiento: Acompanamiento): Observable<any> {
    return this.http.post<any>(`${apiURL}/acompanamiento/crear`, acompanamiento, this.httpOptions);
  }

  editarAcomp(id_acompanamiento:number, nombre:string, precio:string, id_tipo_acompanamiento:number): Observable<any> {
    return this.http.put<any>(`${apiURL}/acompanamiento/actualizar/${id_acompanamiento}`, 
    { nombre, precio, id_tipo_acompanamiento}, 
    this.httpOptions);
  }

  deleteAcomp(id_acompanamiento:number): Observable<any> {
    return this.http.put<any>(`${apiURL}/acompanamiento/delete/${id_acompanamiento}`, this.httpOptions);
  }

  asignarAcompProd(id_productos:any[], id_acompanamiento:number): Observable<any> {
    return this.http.post<any>(`${apiURL}/acompanamiento/crear/prodacomp`,{ id_productos, id_acompanamiento }, this.httpOptions);
  }

  listarAcompProd(id_acompanamiento:number): Observable<any> {
    return this.http.get<any>(`${apiURL}/acompanamiento/listar/prodacomp/${id_acompanamiento}`, this.httpOptions);
  }
}
