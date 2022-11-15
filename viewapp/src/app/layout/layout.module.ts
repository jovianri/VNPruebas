import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusuperiorComponent } from './menusuperior/menusuperior.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MenusuperiorComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    MenusuperiorComponent, //declarado aquí, el COmpoente se puede usar fuera de otro módulo
  ],
})
export class LayoutModule {}
