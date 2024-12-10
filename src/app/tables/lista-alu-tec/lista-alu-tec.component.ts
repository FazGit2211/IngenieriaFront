import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoServiceService } from '../../services/alumno-service.service';

@Component({
  selector: 'app-lista-alu-tec',
  standalone: true,
  imports: [],
  templateUrl: './lista-alu-tec.component.html',
  styleUrl: './lista-alu-tec.component.scss'
})
export class ListaAluTecComponent implements OnInit {

  alumnosTecnicatura: any[] = [];
  nombreTecnicatura: any;

  constructor(private alumnoService: AlumnoServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // Asignar los alumnos de la tecnicatura
    this.alumnosTecnicatura = this.alumnoService.getAlumnos();

     //obtener el parámetro en la URL
     this.router.paramMap.subscribe(
      params => { this.nombreTecnicatura = params.get('nombre'); console.log(this.nombreTecnicatura) },
      error => { console.log(error) }
    );
  }

  verificar() {
    console.log(this.alumnosTecnicatura)
  }

}
