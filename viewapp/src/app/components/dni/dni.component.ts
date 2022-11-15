import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnInit {
  titulo: string;
  tituloDni: string;
  tituloBoton: string;
  nDni!: number;
  sDni: string;
  static readonly SECUENCIALETRAS: string[] = [
    'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',
  ];

  constructor() {
    this.titulo = 'Calculadora de letra del DNI';
    this.tituloDni = 'Calcule su letra';
    this.tituloBoton = 'Calcular letra';
    this.sDni = '';
  }

  ngOnInit(): void {}

  calcularLetraDni(): void {
    this.sDni = '';
    if (!isNaN(this.nDni) && this.nDni.toString().length == 8) {
      let resto: number = this.nDni % 23;
      this.sDni = this.nDni + DniComponent.SECUENCIALETRAS[resto];
    }
  }
}
