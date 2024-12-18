import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecnicaturaService } from '../../services/tecnicaturaService/tecnicatura.service';

@Component({
  selector: 'app-lista-alu-tec',
  standalone: true,
  imports: [],
  templateUrl: './lista-alu-tec.component.html',
  styleUrl: './lista-alu-tec.component.scss'
})
export class ListaAluTecComponent implements OnInit {

  alumnosTecnicatura: any;
  nombreTecnicatura: any;
  idTecnicatura: any;

  constructor(private tecnicaturaService: TecnicaturaService, private router: ActivatedRoute) { }

  ngOnInit(): void {
     //obtener el parámetro en la URL
     this.router.paramMap.subscribe(
      params => { this.nombreTecnicatura = params.get('nombre'); this.idTecnicatura = params.get('id') },
      error => { console.log(error) }
    );

    //llamar servicio tecnicatura para obtener también a sus alumnos
    this.tecnicaturaService.getByIdTecnicatura(this.idTecnicatura).subscribe(
      response => {this.obtenerAlumnos(response); console.log(response)},
      error => {console.error(error)}
    )

  }

  obtenerAlumnos(resp:any) {
    Object.entries(resp).forEach(([clave, valor]) => {
      if(Array.isArray(valor)){
        this.alumnosTecnicatura = valor
      }
    });
  }

  eliminarAlum(alumId: number){
    this.tecnicaturaService.removeAlumno(this.idTecnicatura,alumId).subscribe(
      response => {console.log(response)},
      error => {console.error(error)}
    );
    if(Array.isArray(this.alumnosTecnicatura)){
      this.alumnosTecnicatura = this.alumnosTecnicatura.filter(alum => alum.id !== alumId)
    }
  }

}
