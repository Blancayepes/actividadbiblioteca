import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreaComponent } from './area/area.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { EditorialesComponent } from './editoriales/editoriales.component';



@NgModule({
  declarations: [
    EditorialesComponent, 
    AutoresComponent, 
    TipoComponent, 
    AreaComponent, 
    LibroComponent, 
    ExistenciaComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
  FormsModule,ReactiveFormsModule  ]
})
export class BibliotecaModule { }
