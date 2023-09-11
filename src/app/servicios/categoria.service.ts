import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get<any>(`${apiURL}/categoria/listar`);
  }

  agregarCategoria(categoria: Categoria): Observable<any> {
    return this.http.post<any>(`${apiURL}/categoria/crear`, categoria, this.httpOptions);
  }

  editarCategoria(id_categoria:number, nombre:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/categoria/actualizar/${id_categoria}`, { nombre }, this.httpOptions);
  }

  deleteCategoria(id_categoria:number): Observable<any> {
    return this.http.delete<any>(`${apiURL}/categoria/delete/${id_categoria}`, this.httpOptions);
  }
}
