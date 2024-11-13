import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-tecnicatura',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-tecnicatura.component.html',
  styleUrl: './create-tecnicatura.component.scss'
})
export class CreateTecnicaturaComponent {
  dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dataForm = this.formBuilder.group({
      tecnicatura: this.formBuilder.group({
        nombre: [''],
        duracion: [''],
        cantidadAsignaturas: [''],
        numeroDeResolucion: ['']
      })
    })
  }

  onClick() {
    console.log(this.dataForm.value.tecnicatura.nombre),
      console.log(this.dataForm.value.tecnicatura.duracion),
      console.log(this.dataForm.value.tecnicatura.cantidadAsignaturas),
      console.log(this.dataForm.value.tecnicatura.numeroDeResolucion)
  }

  onSubmit() {
    console.log('Enviado')
  }
}
