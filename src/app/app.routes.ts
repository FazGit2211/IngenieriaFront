import { Routes } from '@angular/router';
import { TecnicaturaComponent } from './tecnicatura/tecnicatura.component';
import { CreateTecnicaturaComponent } from './forms/create-tecnicatura/create-tecnicatura.component';
import { EditTecnicaturaComponent } from './forms/edit-tecnicatura/edit-tecnicatura.component';
import { ListaAluTecComponent } from './tables/lista-alu-tec/lista-alu-tec.component';
import { ListaInscripcionComponent } from './tables/lista-inscripcion/lista-inscripcion.component';

export const routes: Routes = [
    {
        'path': 'tecnicatura',
        component: TecnicaturaComponent
    },
    {
        'path': 'createTecForm',
        component: CreateTecnicaturaComponent
    },
    {
        'path': 'editTecForm/:id',
        component: EditTecnicaturaComponent
    },
    {
        'path': 'listAlumTec/:nombre/:id',
        component: ListaAluTecComponent
    },
    {
        'path': 'listaInscripcion/:id/:nombre',
        component: ListaInscripcionComponent
    }
];
