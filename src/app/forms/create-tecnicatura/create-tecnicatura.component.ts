import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TecnicaturaService } from '../../services/tecnicaturaService/tecnicatura.service';
import { Tecnicatura } from '../../../backend/tecnicatura/tecnicatura';

@Component({
  selector: 'app-create-tecnicatura',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-tecnicatura.component.html',
  styleUrl: './create-tecnicatura.component.scss'
})
export class CreateTecnicaturaComponent {
  dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private tecnicaturaService: TecnicaturaService) {
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
    console.log('Enviando');
    const tecnicatura = new Tecnicatura(this.dataForm.value.tecnicatura.nombre,this.dataForm.value.tecnicatura.duracion,this.dataForm.value.tecnicatura.cantidadAsignaturas,this.dataForm.value.tecnicatura.numeroDeResolucion);
    this.tecnicaturaService.postTecnicatura(tecnicatura).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
    );
  }
}
