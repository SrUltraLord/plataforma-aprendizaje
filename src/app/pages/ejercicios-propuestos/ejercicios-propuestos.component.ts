import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-ejercicios-propuestos',
  templateUrl: './ejercicios-propuestos.component.html',
  styleUrls: ['./ejercicios-propuestos.component.css'],
})
export class EjerciciosPropuestosComponent implements OnInit {
  options: KatexOptions = {
    displayMode: true,
  };

  parrafoEjercicio2: string = `
    Determinar los números cuánticos del último electrón del elemento
    cuya carga nuclear es $ 9.12 x 10^{-18} $ Coulombios.`;

  parrafoEjercicio6: string = `
    Si el número cuántico del Spin tuviera un solo valor: $+\\frac{1}{2} (\\uparrow)$
    y los otros números seguirían las
    reglas usuales; ¿cuál será la configuración electrónica del
    elemento de $ Z = 36 $? ¿Cuál será el número atómico del
    elemento que perteneciendo a la familia del anterior estuviera
    justamente encima?
  `;

  parrafoEjercicio12_c: string = `
  Ordenar de menor a mayor radio atómico los 3 elementos
  y los iones $A^+, \\; C^-$`;

  parrafoEjercicio14: string = `
    Dados los elementos $A$, $B$, $C$ y $D$ tales que: $A$ es un elemento cuyos estados
    de oxidación característicos son $-2$ y $-1$; $B$ y $C$ son elementos no metálicos
    del tercer período tales que $B$ tiene menor radio atómico que $C$ y $C$ mayor
    energría de ionización que $B$; $D^{++}$ presenta la configuración del Neón. Determinar:
  `;

  tablaEjercicio7: string = `
    \\begin{array}{c c c c c}
      \\; & \\textbf{n} & \\textbf{l} & \\textbf{m} & \\textbf{s}\\\\
      \\textbf{Elemento A} &3&2&+2&-1/2\\\\
      \\textbf{Elemento B} &4&1&-1&+1/2\\\\
    \\end{array}
  `;

  tablaEjercicio12: string = `
  \\begin{array}{c c c c}
    \\;&\\textbf{Elemento A}&\\textbf{Elemento B}&\\textbf{Elemento C}\\\\
    \\;&\\begin{array}{cccc} n&l&m&s \\end{array}&\\begin{array}{cccc} n&l&m&s \\end{array}&\\begin{array}{cccc} n&l&m&s \\end{array}\\\\
    \\textbf{último e}&\\begin{array}{cccc} 3&0&0&1/2 \\end{array}&\\begin{array}{cccc} 3&1&0&-1/2 \\end{array}&\\begin{array}{cccc} 4&1&0&-1/2 \\end{array}\\\\
    \\textbf{penúltimo e}&\\begin{array}{cccc} 2&1&1&-1/2 \\end{array}&\\begin{array}{cccc} 3&1&-1&-1/2 \\end{array}&\\begin{array}{cccc} 4&1&-1&-1/2 \\end{array}\\\\
  \\end{array}
  `;

  constructor() {}

  ngOnInit(): void {}
}
