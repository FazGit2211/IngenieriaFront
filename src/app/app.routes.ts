import { Routes } from '@angular/router';
import { TecnicaturaComponent } from './tecnicatura/tecnicatura.component';
import { CreateTecnicaturaComponent } from './forms/create-tecnicatura/create-tecnicatura.component';

export const routes: Routes = [
    {
        'path': 'tecnicatura',
        component: TecnicaturaComponent
    },
    {
        'path': 'createTecForm',
        component: CreateTecnicaturaComponent
    }
];
