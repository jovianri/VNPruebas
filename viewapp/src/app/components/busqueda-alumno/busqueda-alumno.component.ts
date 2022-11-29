import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-alumno',
  templateUrl: './busqueda-alumno.component.html',
  styleUrls: ['./busqueda-alumno.component.css']
})
export class BusquedaAlumnoComponent implements OnInit {

  repogithub:boolean;

  constructor() {
    this.repogithub = false;
  }

  checkTocado(){
    this.repogithub = !this.repogithub;
  }

  ngOnInit(): void {
  }

}
