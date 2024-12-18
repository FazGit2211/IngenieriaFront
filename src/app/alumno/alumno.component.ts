import { Component, OnInit } from '@angular/core';
import { AlumnoServiceService } from '../services/alumno-service.service';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.scss'
})
export class AlumnoComponent implements OnInit {

  alumnos:any;

  constructor(private alumnoService: AlumnoServiceService){};

  ngOnInit(): void {
      this.alumnoService.getAllData().subscribe(
        response => {this.alumnos = response}
      )
  }

}
