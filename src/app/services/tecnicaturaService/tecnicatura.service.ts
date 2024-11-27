import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnicatura } from '../../../backend/tecnicatura/tecnicatura';

@Injectable({
  providedIn: 'root'
})
export class TecnicaturaService {

  private url = 'http://localhost:8080/tecnicatura';
  constructor(private http: HttpClient) { }
  //obtener todas las tecnicaturas
  getAllData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  //crear nueva tecnicatura
  postTecnicatura(tecnicatura:Tecnicatura): Observable<any>{
    return this.http.post<any>(this.url,tecnicatura);
  }

  //obt una tecnicatura por id
  getByIdTecnicatura(id:number): Observable<any>{
    return this.http.get<any>(this.url+'/'+id);
  }

  //actualizar tecnicatura
  putTecnicatura(id:number, tecnicatura:Tecnicatura): Observable<any>{
    return this.http.put<any>(this.url+'/'+id,tecnicatura);
  }

  //eliminar tecnicatura
  deleteTecnicatura(id:number): Observable<any>{
    return this.http.delete<any>(this.url+'/'+id);
  }

  //agregar alumno a tecnicatura
  addAlumno(idTecnicatura:number,idAlumno:number): Observable<any>{
    return this.http.put<any>(this.url+'/'+'addAlumno'+'/'+idTecnicatura+'/'+idAlumno,null);
  }
}
