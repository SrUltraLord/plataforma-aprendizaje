import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-ejercicios-resueltos',
  templateUrl: './ejercicios-resueltos.component.html',
  styleUrls: ['./ejercicios-resueltos.component.css'],
})
export class EjerciciosResueltosComponent implements OnInit {
  options: KatexOptions = {
    displayMode: true,
  };

  parrafoEjercicio1: string = `La configuración electrónica de cierto elemento químico termina en 
    $ np^4 $, entonces el elemento podría tener:`;
  solucionEjercicio1: string = `
    c) \\; Z=34 \\quad \\text{C.E.:} \\; 1s^2,2s^2,2p^6,3s^2,3p^6,4s^2,3d^{10},4p^4 \\quad \\text{(Sí)}\\\\
    4p^4 \\quad
    $\\begin{array}{|c|c|c|}
    \\hline\\\\
    \\ce{v ^} & \\ce{v ^} & \\ce{v ^}\\\\
    \\hline
    \\end{array}$`;

  parrafoEjercicio3: string = `
    Si el ión $A^{-2}$, tiene la configuración electrónica del gan noble del
    tercer período; entonces A:
  `;

  parrafoEjercicio6: string = `
    El elemento cuya energía de su última ionización es $3.35 \\cdot 10^5 kJ/mol$:

  `;

  parrafoLiteralCejercicio14: string = `
    La configuración electrónica y el diagrama de orbital de los dos últimos subniveles, sabiendo que el anión $C^{-1}$
    tiene igual configuración electrónica que el ión divalente del estroncio.
  `;

  constructor() {}

  ngOnInit(): void {}
}
