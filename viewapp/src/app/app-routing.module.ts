import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaAlumnoComponent } from './components/busqueda-alumno/busqueda-alumno.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { PerroComponent } from './components/perro/perro.component';
import { OcioComponent } from './components/ocio/ocio.component';

const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"imc", component: ImcComponent},
  {path:"perro", component: PerroComponent},
  {path:"ocio", component: OcioComponent},
  {path:"buscar", component: BusquedaAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
