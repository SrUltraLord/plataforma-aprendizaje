import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-generalidades-desarrollo',
  templateUrl: './generalidades-desarrollo.component.html',
  styleUrls: ['./generalidades-desarrollo.component.css'],
})
export class GeneralidadesDesarrolloComponent implements OnInit {
  options: KatexOptions = {
    displayMode: true,
  };

  equation: string = `
    \\begin{array}{c c c} \\text{Periodo} & \\text{Número de elementos} &
    \\text{Nombre} \\\\ \\hline\\\\ 1(k) & 2 & \\text{Muy Corto}\\\\ 2(L) & 8 &
    \\text{Corto}\\\\ 3(M) & 8 & \\text{Corto}\\\\ 4(N) & 18 & \\text{Largo}\\\\ 5(O) &
    18 & \\text{Largo}\\\\ 6(P) & 32 & \\text{Muy Largo}\\\\ 7(Q) & 6 &
    \\text{Incompleto}\\\\ \\end{array}
  `;

  constructor() {}

  ngOnInit(): void {}
}
