import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getOrdenes(estado:string): Observable<any> {
    return this.http.get<any>(`${apiURL}/orden/buscar/porestado/${estado}`, this.httpOptions);
  }

  getOrdenesCocina1(estado:string): Observable<any> {
    return this.http.get<any>(`${apiURL}/orden/buscar/porestadococina1/${estado}`, this.httpOptions);
  }

  getOrdenesCocina2(estado:string): Observable<any> {
    return this.http.get<any>(`${apiURL}/orden/buscar/porestadococina2/${estado}`, this.httpOptions);
  }

  getOrdenesBebidas(estado:string): Observable<any> {
    return this.http.get<any>(`${apiURL}/orden/buscar/porestadobebidas/${estado}`, this.httpOptions);
  }

  getOrdenesPromos(estado:string): Observable<any> {
    return this.http.get<any>(`${apiURL}/orden/buscar/porestadopromos/${estado}`, this.httpOptions);
  }

  updateEstado(id_orden:number, estado:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/orden/update/estado/${id_orden}`, { estado }, this.httpOptions);
  }
}
