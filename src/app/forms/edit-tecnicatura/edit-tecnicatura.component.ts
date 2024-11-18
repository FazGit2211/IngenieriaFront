import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TecnicaturaService } from '../../services/tecnicaturaService/tecnicatura.service';
import { Tecnicatura } from '../../../backend/tecnicatura/tecnicatura';

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
  //variable para guardar los datos de la tecnicatura encontrada por id
  tecnicaturaData: any;
  dataForm: FormGroup;
  constructor(private router: ActivatedRoute, private formBuilder: FormBuilder, private tecnicaturaService: TecnicaturaService) {
    this.dataForm = this.formBuilder.group({
      tecnicatura: this.formBuilder.group({
        nombre: [this.tecnicaturaData.nombre],
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
    //solicitar servicio getById
    this.tecnicaturaService.getByIdTecnicatura(this.tecnicaturaId).subscribe(
      response => {this.tecnicaturaData = response;console.log(response)},
      error => {console.error(error)}
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
    this.tecnicaturaService.postTecnicatura(tecnicatura).subscribe(
      response => { console.log(response) },
      error => { console.log(error) }
    );
  }

}
