import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { TipoAcompanamiento } from '../models/tipo_acompanamiento';

@Injectable({
  providedIn: 'root'
})
export class TipoAcompanamientoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getTipoAcomp(): Observable<any> {
    return this.http.get<any>(`${apiURL}/tipoacompanamiento/listar`);
  }

  agregarTipoAcomp(tipoAcompanamiento: TipoAcompanamiento): Observable<any> {
    return this.http.post<any>(`${apiURL}/tipoacompanamiento/crear`, tipoAcompanamiento, this.httpOptions);
  }

  editarTipoAcomp(id_tipo_acompanamiento:number, tipo:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/tipoacompanamiento/actualizar/${id_tipo_acompanamiento}`, { tipo }, this.httpOptions);
  }

  deleteTipoAcomp(id_tipo_acompanamiento:number): Observable<any> {
    return this.http.delete<any>(`${apiURL}/tipoacompanamiento/delete/${id_tipo_acompanamiento}`, this.httpOptions);
  }
}
