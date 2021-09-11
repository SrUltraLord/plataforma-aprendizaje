import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { KatexModule } from 'ng-katex';

import { UbicacionElementoComponent } from './../ubicacion-elemento/ubicacion-elemento.component';
import { GeneralidadesDesarrolloComponent } from './../generalidades-desarrollo/generalidades-desarrollo.component';
import { PropiedadesVariacionComponent } from './../propiedades-variacion/propiedades-variacion.component';

import { EjerciciosPropuestosComponent } from './../ejercicios-propuestos/ejercicios-propuestos.component';
import { EjerciciosResueltosComponent } from './../ejercicios-resueltos/ejercicios-resueltos.component';
import { QuizComponent } from './../quiz/quiz.component';

@NgModule({
  imports: [WelcomeRoutingModule, KatexModule],
  declarations: [
    WelcomeComponent,
    GeneralidadesDesarrolloComponent,
    UbicacionElementoComponent,
    PropiedadesVariacionComponent,
    EjerciciosPropuestosComponent,
    EjerciciosResueltosComponent,
    QuizComponent,
  ],
  exports: [
    WelcomeComponent,
    GeneralidadesDesarrolloComponent,
    UbicacionElementoComponent,
    PropiedadesVariacionComponent,
    EjerciciosPropuestosComponent,
    EjerciciosResueltosComponent,
    QuizComponent,
  ],
})
export class WelcomeModule {}
