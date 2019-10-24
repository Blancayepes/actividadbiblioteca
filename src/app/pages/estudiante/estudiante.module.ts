import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { EstudianteComponent } from './estudiante.component';


@NgModule({
  declarations: [StudentFormComponent, StudentTableComponent,EstudianteComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
