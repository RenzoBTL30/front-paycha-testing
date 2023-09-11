import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { Lugar } from '../models/lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getLugares(): Observable<any> {
    return this.http.get<any>(`${apiURL}/lugar/listarweb`);
  }

  agregarLugar(lugar: Lugar): Observable<any> {
    return this.http.post<any>(`${apiURL}/lugar/crear`, lugar, this.httpOptions);
  }

  editarLugar(id_lugar:number, lugar:string, comision:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/lugar/update/${id_lugar}`, 
    { 
      lugar: lugar,
      comision: comision
    }, this.httpOptions);
  }

  deleteLugar(id_lugar:number): Observable<any> {
    return this.http.put<any>(`${apiURL}/lugar/delete/${id_lugar}`, this.httpOptions);
  }
}
