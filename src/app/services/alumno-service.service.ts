import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  private url = 'http://localhost:8080/alumno';
  private alumnos: any[] = [];
  constructor(private http: HttpClient) { }

  //obtener todos los alumnos
  getAllData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  //agregar array de tecnicatura con los alumnos
  setAlumnos(alumnos: any[]) {
    this.alumnos = alumnos;
  }

  //obtener el arrat con los alumnos
  getAlumnos(): any[] {
    return this.alumnos;
  }
}
