import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  tituloDni:string;
  tituloBoton:string;
  nDni!:number;
  sDni!:string;
  readonly SECUENCIALETRAS:string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  constructor() {
    this.tituloDni = "Calcule su letra";
    this.tituloBoton = "Calcular letra";
  }

  ngOnInit(): void {
  }

  calcularLetraDni(): void {
    let resto:number = this.nDni%23;
    this.sDni = this.nDni+this.SECUENCIALETRAS[resto];
  }

}
