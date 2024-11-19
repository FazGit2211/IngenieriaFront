import { Component, OnInit } from '@angular/core';


import { TecnicaturaService } from '../../services/tecnicaturaService/tecnicatura.service';
import { Tecnicatura } from '../../../backend/tecnicatura/tecnicatura';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-tecnicatura',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-tecnicatura.component.html',
  styleUrl: './edit-tecnicatura.component.scss'
})
export class EditTecnicaturaComponent implements OnInit {

  //variable para el id seleccionado desde el componente tecnicatura
  tecnicaturaId: any;
  dataForm: FormGroup;
  constructor(private router: ActivatedRoute, private formBuilder: FormBuilder, private tecnicaturaService: TecnicaturaService) {
    this.dataForm = this.formBuilder.group({
      tecnicatura: this.formBuilder.group({
        nombre: [''],
        duracion: [''],
        cantidadAsignaturas: [''],
        numeroDeResolucion: ['']
      })
    })
  }

  ngOnInit(): void {
    //obtener el parámetro en la URL
    this.router.paramMap.subscribe(
      params => { this.tecnicaturaId = params.get('id'); console.log(this.tecnicaturaId) },
      error => { console.log(error) }
    );
    //solicitar servicio getById y autocompletar los campos con valores de la tecnicatura obtenida
    this.tecnicaturaService.getByIdTecnicatura(this.tecnicaturaId).subscribe(
      response => {
        this.dataForm.patchValue({
          tecnicatura: {
            nombre: response.nombre,
            duracion: response.duracion,
            cantidadAsignaturas: response.cantidadAsignaturas,
            numeroDeResolucion: response.numeroResolucion
          }
        })
      },
      error => { console.error(error) }
    )
  }

  onClick() {
    console.log(this.dataForm.value.tecnicatura.nombre),
      console.log(this.dataForm.value.tecnicatura.duracion),
      console.log(this.dataForm.value.tecnicatura.cantidadAsignaturas),
      console.log(this.dataForm.value.tecnicatura.numeroDeResolucion)
  }

  onSubmit() {
    console.log('Enviando');
    const tecnicatura = new Tecnicatura(this.dataForm.value.tecnicatura.nombre, this.dataForm.value.tecnicatura.duracion, this.dataForm.value.tecnicatura.cantidadAsignaturas, this.dataForm.value.tecnicatura.numeroDeResolucion);
    this.tecnicaturaService.putTecnicatura(this.tecnicaturaId,tecnicatura).subscribe(
      response => {console.log(response)},
      error => console.error(error)
    );
  }

}
