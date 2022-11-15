import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  titulo:string;
  tituloBoton:string;
  tituloPeso:string;
  medidaPeso:string;
  tituloAltura:string;
  medidaAltura:string;
  nAltura!:number;
  nPeso!:number;
  nImc:number;
  sImc:string;
  iImc:string;

  constructor() {
    this.titulo = "Calcule su IMC";
    this.tituloBoton = "Calcular IMC";
    this.tituloAltura = "Altura";
    this.medidaAltura = "En Centímetros";
    this.tituloPeso = "Peso";
    this.medidaPeso = "En Kilogramos";
    this.nImc = 0;
    this.sImc = '';
    this.iImc = '';
  }

  ngOnInit(): void {
  }

  calcularImc(): void {
    this.sImc = '';
    this.nImc = 0;
    this.iImc = '';

    if(!isNaN(this.nAltura) && !isNaN(this.nPeso) ){
      this.nImc = Math.round((this.nPeso / (this.nAltura * this.nAltura))*10000);
    }
    if(this.nImc!=0){
      if (this.nImc < 16) {
        this.sImc = "DESNUTRIDO";
        this.iImc = "./assets/desnutricion.jpg";
      } else if (this.nImc >= 16 && this.nImc < 18) {
        this.sImc = "DELGADO";
        this.iImc = "./assets/delgado.jpg";
      } else if (this.nImc >= 18 && this.nImc < 25) {
        this.sImc = "IDEAL";
        this.iImc = "./assets/pesoideal.png";
      } else if (this.nImc >= 25 && this.nImc < 31) {
        this.sImc = "SOBREPESO";
        this.iImc = "./assets/sobrepeso.jpg";
      } else if (this.nImc >= 31) {
        this.sImc = "OBESIDAD";
        this.iImc = "./assets/obesidad.jpg";
      }
    }
  }

}
