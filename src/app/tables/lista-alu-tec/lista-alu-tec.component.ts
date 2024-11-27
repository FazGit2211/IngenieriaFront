import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-alu-tec',
  standalone: true,
  imports: [],
  templateUrl: './lista-alu-tec.component.html',
  styleUrl: './lista-alu-tec.component.scss'
})
export class ListaAluTecComponent implements OnInit {

  alumnos: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Accede al estado enviado
    this.route.root.queryParams.subscribe(
      response => {console.log(response)}
    )
  }

  verificar() {
    console.log(this.alumnos)
  }

}
