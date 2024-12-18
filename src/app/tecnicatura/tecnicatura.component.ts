import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TecnicaturaService } from '../services/tecnicaturaService/tecnicatura.service';
import { AlumnoServiceService } from '../services/alumno-service.service';

@Component({
  selector: 'app-tecnicatura',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tecnicatura.component.html',
  styleUrl: './tecnicatura.component.scss'
})
export class TecnicaturaComponent implements OnInit {

  tecnicaturas: any;

  constructor(private tecnicaturaService: TecnicaturaService, private alumnoService: AlumnoServiceService, private router: Router) { }

  ngOnInit(): void {
    this.tecnicaturaService.getAllData().subscribe(
      response => { this.tecnicaturas = response; console.log(response)}, error => { console.log(error) }
    )
  }


  onSubmit() {
    console.log(this.tecnicaturas)
  }

  eliminar(id: number) {
    console.log(id);
    this.tecnicaturaService.deleteTecnicatura(id).subscribe(
      response => {
        console.log(response)        
      },
      error => { console.error(error) }
    );
    if(Array.isArray(this.tecnicaturas)){
      this.tecnicaturas = this.tecnicaturas.filter(tec => tec.id !== id);
    }
  }

  //accion del btn verListadoAlumno redireccionar al componente
  verListado(nombreTecnicatura:string, idTecnicatura: number){
    this.alumnoService.setAlumnos(this.tecnicaturas.alumnos);
    this.router.navigate(['/listAlumTec', nombreTecnicatura, idTecnicatura]);
  }

}
