import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TecnicaturaService } from '../../services/tecnicaturaService/tecnicatura.service';
import { Tecnicatura } from '../../../backend/tecnicatura/tecnicatura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tecnicatura',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-tecnicatura.component.html',
  styleUrl: './create-tecnicatura.component.scss'
})
export class CreateTecnicaturaComponent {
  dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private tecnicaturaService: TecnicaturaService, private router: Router) {
    this.dataForm = this.formBuilder.group({
      tecnicatura: this.formBuilder.group({
        nombre: [''],
        duracion: [''],
        cantidadAsignaturas: [''],
        numeroDeResolucion: [''],
        estadoResolucion: [''],
        fechaCaducidad: ['']
      })
    })
  }

  onClick() {
    console.log(this.dataForm.value.tecnicatura.nombre),
      console.log(this.dataForm.value.tecnicatura.duracion),
      console.log(this.dataForm.value.tecnicatura.cantidadAsignaturas),
      console.log(this.dataForm.value.tecnicatura.numeroDeResolucion)
      console.log(this.dataForm.value.tecnicatura.estadoVigenciaResolucion)
      console.log(this.dataForm.value.tecnicatura.fechaCaducidadResolucion)
  }

  onSubmit() {
    console.log('Enviando');
    let nombre = this.dataForm.value.tecnicatura.nombre;
    let duracion = this.dataForm.value.tecnicatura.duracion;
    let asignaturas = this.dataForm.value.tecnicatura.cantidadAsignaturas;
    let resolucion = this.dataForm.value.tecnicatura.numeroDeResolucion;
    let estadoResolucion = this.dataForm.value.tecnicatura.estadoResolucion;
    let fechaVencimiento = this.dataForm.value.tecnicatura.fechaCaducidad;
    
    const tecnicatura = new Tecnicatura(nombre,duracion,asignaturas,resolucion,estadoResolucion,fechaVencimiento);
    console.log(tecnicatura);
    this.tecnicaturaService.postTecnicatura(tecnicatura).subscribe(
      response => {console.log(response), this.router.navigate(['tecnicatura'])},
      error => {console.log(error)}
    );
  }
}
