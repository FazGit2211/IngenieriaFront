import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  private url = 'http://localhost:8080/alumno';
  constructor(private http: HttpClient) { }

  //obtener todos los alumnos
  getAllData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
