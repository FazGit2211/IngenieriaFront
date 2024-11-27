import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TecnicaturaService } from '../services/tecnicaturaService/tecnicatura.service';

@Component({
  selector: 'app-tecnicatura',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tecnicatura.component.html',
  styleUrl: './tecnicatura.component.scss'
})
export class TecnicaturaComponent implements OnInit{

  tecnicaturas: any;
  constructor(private tecnicaturaService: TecnicaturaService){}

  ngOnInit(): void {
      this.tecnicaturaService.getAllData().subscribe(
        response => {this.tecnicaturas = response;},error => {console.log(error)}
      )
  }

  eliminar(id:number){
    console.log(id);
    this.tecnicaturaService.deleteTecnicatura(id).subscribe(
      response => {console.log(response)},
      error => {console.error(error)}
    );
  }

}
