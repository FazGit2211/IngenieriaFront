import { Component, OnInit } from '@angular/core';
import { AlumnoServiceService } from '../../services/alumno-service.service';
import { ActivatedRoute } from '@angular/router';
import { TecnicaturaService } from '../../services/tecnicaturaService/tecnicatura.service';

@Component({
  selector: 'app-lista-inscripcion',
  standalone: true,
  imports: [],
  templateUrl: './lista-inscripcion.component.html',
  styleUrl: './lista-inscripcion.component.scss'
})
export class ListaInscripcionComponent implements OnInit {

  alumnos: any[] = [];
  tecnicaturaId: any;

  constructor(private alumnoService: AlumnoServiceService, private router: ActivatedRoute, private TecnicaturaService: TecnicaturaService) { }

  ngOnInit(): void {
    this.alumnoService.getAllData().subscribe(
      response => { this.alumnos = response, console.log(response) }
    );

    //obtener el parámetro en la URL
    this.router.paramMap.subscribe(
      params => { this.tecnicaturaId = params.get('id'); console.log(this.tecnicaturaId) },
      error => { console.log(error) }
    );
  }

  agregarAlumno(idAlum: number){
    console.log(idAlum);
    this.TecnicaturaService.addAlumno(this.tecnicaturaId,idAlum).subscribe(
      response => {console.log(response)}
    )
  }

}
