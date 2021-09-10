import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { GeneralidadesDesarrolloComponent } from './../generalidades-desarrollo/generalidades-desarrollo.component';
import { PropiedadesVariacionComponent } from './../propiedades-variacion/propiedades-variacion.component';
import { UbicacionElementoComponent } from './../ubicacion-elemento/ubicacion-elemento.component';

import { EjerciciosPropuestosComponent } from './../ejercicios-propuestos/ejercicios-propuestos.component';
import { EjerciciosResueltosComponent } from './../ejercicios-resueltos/ejercicios-resueltos.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'generalidades-desarrollo',
    component: GeneralidadesDesarrolloComponent,
  },
  {
    path: 'propiedades-variacion',
    component: PropiedadesVariacionComponent,
  },
  {
    path: 'ubicacion-elemento',
    component: UbicacionElementoComponent,
  },
  {
    path: 'ejercicios-propuestos',
    component: EjerciciosPropuestosComponent,
  },
  {
    path: 'ejercicios-resueltos',
    component: EjerciciosResueltosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
