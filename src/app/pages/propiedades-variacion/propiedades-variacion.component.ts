import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-propiedades-variacion',
  templateUrl: './propiedades-variacion.component.html',
  styleUrls: ['./propiedades-variacion.component.css'],
})
export class PropiedadesVariacionComponent implements OnInit {
  options: KatexOptions = {
    displayMode: true,
  };

  // Energia de ionizacion
  eqEnergiaIonizacion1: string = `
  Li(g) -1 \\; \\text{electrón} + 520 \\; Kj/mo \\rightarrow
  \\; Li^+(g)`;

  parrafoEnergiaIon1: string = `
  La energía de ionización del litio es $+520 KJ/mol$
  (energía de ionización primaria) pero si se arranca
  un segundo o tercer electrón se habla de $Ei$ secundaria,
  terciaria, etc. (hasta $Ei_n$) y sus valores aumentan
  considerablemente:`;

  eqEnergiaIonizacion2: string = `E = - \\frac{Bz^2}{n^2}`;

  parrafoEnergiaIon2: string = `
    La energía de ionización sería el caso extremo de las transiciones
    electrónicas, ya que el electrón salta al nivel $ n = \\infty $, entonces 
    se puede decir que:
  `;

  eqEnergiaIonizacion3: string = `
    Ei = E_{\\infty} - E_1 \\\\
    Ei = 0 - (-\\frac{Bz^2}{n^2})=\\frac{Bz^2}{n^2}, \\;
    \\text{en donde}`;

  parrafoEnergiaIon3: string = `
    $ B = 2.17 x 10^{-11}$ regs/átomo $z = $ carga nuclear (número atómico),  
    $n =$ nivel o capa en la que está el último electrón que se arranca ($ n = 1 $). 
    Esta expresión permite calcular valores aproximados de la última energía
    de ionización ($ Ei_n $) para los primeros elementos, en el caso de Li se tiene:
    $Ei = 2.17 x 10^{-11}$ ergs/átomo. $(3)^2 / 1^2 = 11763 \\; KJ/mol$, valor que es
    parecido al experimental: $11815 \\; KJ/mol$
  `;

  
  constructor() {}

  ngOnInit(): void {}
}
