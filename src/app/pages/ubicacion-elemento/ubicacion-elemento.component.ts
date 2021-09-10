import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-ubicacion-elemento',
  templateUrl: './ubicacion-elemento.component.html',
  styleUrls: ['./ubicacion-elemento.component.css'],
})
export class UbicacionElementoComponent implements OnInit {
  options: KatexOptions = {
    displayMode: true,
  };

  equation: string = `
  \\begin{array}{c c c}
    d^1 \\Longrightarrow 3B    & & d^6 \\Longrightarrow 8B \\\\
    d^2 \\Longrightarrow 4B    & & d^7 \\Longrightarrow 8B \\\\
    d^3 \\Longrightarrow 5B    & & d^8 \\Longrightarrow 8B \\\\
    s^1d^5 \\Longrightarrow 6B & & s^1d^6 \\Longrightarrow 1B \\\\
    s^2d^5 \\Longrightarrow 7B & & s^2d^6 \\Longrightarrow 2B
  \\end{array}
  `;

  equation2: string = `
      Z = 37 \\Longrightarrow{} 1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2 \\ 3d^{10} \\ 4p^6 \\ 5s^1\\\\
    \\begin{array}{c c c}
          Bloque = s & Periodo = 5 & Grupo = 1A 
    \\end{array}\\\\\\\\
    Z = 41 \\Longrightarrow{} 1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2 \\ 3d^{10} \\ 4p^6 \\ 5s^2 \\ 4d^3\\\\
    \\begin{array}{c c c}
          Bloque = d & Periodo = 5 & Grupo = 5B 
    \\end{array}\\\\\\\\
    Z = 20 \\Longrightarrow{} 1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2\\\\
    \\begin{array}{c c c}
          Bloque = s & Periodo = 4 & Grupo = 2A 
    \\end{array}\\\\\\\\
    Z = 53 \\Longrightarrow{} 1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2 \\ 3d^{10} \\ 4p^6 \\ 5s^2 \\ 4d^{10} \\ 5p^5\\\\
    \\begin{array}{c c c}
          Bloque = p & Periodo = 5 & Grupo = 7A 
    \\end{array}\\\\\\\\
    Z = 82 \\Longrightarrow{} 1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2 \\ 3d^{10} \\ 4p^6 \\ 5s^2 \\ 4d^{10} \\ 5p^6 \\ 6s^2 \\ 4f^{14} \\ 5d^{10} \\ 6p^2\\\\
    \\begin{array}{c c c}
          Bloque = p & Periodo = 6 & Grupo = 4A 
    \\end{array}\\\\\\\\
    Z = 94 \\Longrightarrow{} 1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2 \\ 3d^{10} \\ 4p^6 \\ 5s^2 \\ 4d^{10} \\ 5p^6 \\ 6s^2 \\ 4f^{14} \\ 5d^{10} \\ 6p^6 \\ 7s^2 \\ 5f^6\\\\
    \\begin{array}{c c c}
          Bloque = f & Periodo = 7 & Grupo = Actinidos 
    \\end{array}\\\\
  `;

  equation3: string = `
    1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^1 \\ 3d^5 \\\\
    1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^1 \\ 3d^{10}\\\\
    1s^2 \\ 2S^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^1 \\ 3d^{10} \\ 4p^6 \\ 5s^1 \\ 4d^{10}
  `;

  equation4: string = `
    \\begin{array}{c c c c}
    La    & Z = 57 & [Xe] & 6s^2 \\ 5d^1 \\\\
    W     & Z = 74 & [Xe] & 6s^2 \\ 4f^{14} \\ 5d^4 \\\\
    Pt    & Z = 78 & [Xe] & 6s^1 \\ 4f^{14} \\ 5d^9 \\\\
    Ac    & Z = 89 & [Rn] & 7s^2 \\ 6d^1 
  \\end{array}
  `;

  parrafo: string = `
  Corolario de la regla de HUND.- "Los elementos que tienen la subcapa "d" a medio llenar ($d^5$) o completamente llena ($d^{10}$) tienen estabilidades acrecentadas". 
  En algunos casos se produce el salto de un electrón de la subcapa s hacia la subcapa d como ocurre en el Cr ($Z=24$); Cu ($Z=29$) y Ag ($Z=47$) cuyas configuraciones serán:
  `;

  constructor() {}

  ngOnInit(): void {}
}
