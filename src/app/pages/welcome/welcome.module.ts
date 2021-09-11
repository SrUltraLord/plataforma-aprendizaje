import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { KatexModule } from 'ng-katex';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

import { WelcomeComponent } from './welcome.component';
import { UbicacionElementoComponent } from './../ubicacion-elemento/ubicacion-elemento.component';
import { GeneralidadesDesarrolloComponent } from './../generalidades-desarrollo/generalidades-desarrollo.component';
import { PropiedadesVariacionComponent } from './../propiedades-variacion/propiedades-variacion.component';

import { EjerciciosPropuestosComponent } from './../ejercicios-propuestos/ejercicios-propuestos.component';
import { EjerciciosResueltosComponent } from './../ejercicios-resueltos/ejercicios-resueltos.component';
import { QuizComponent } from './../quiz/quiz.component';
import { BackgroundDirective } from '../../background.directive';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    ReactiveFormsModule,
    KatexModule,
    CommonModule,
    FormsModule,
    NzFormModule,
  ],
  declarations: [
    WelcomeComponent,
    GeneralidadesDesarrolloComponent,
    UbicacionElementoComponent,
    PropiedadesVariacionComponent,
    EjerciciosPropuestosComponent,
    EjerciciosResueltosComponent,
    QuizComponent,
    BackgroundDirective,
    
  ],
  exports: [
    WelcomeComponent,
    GeneralidadesDesarrolloComponent,
    UbicacionElementoComponent,
    PropiedadesVariacionComponent,
    EjerciciosPropuestosComponent,
    EjerciciosResueltosComponent,
    QuizComponent,
    BackgroundDirective,
  ],
})
export class WelcomeModule {}
