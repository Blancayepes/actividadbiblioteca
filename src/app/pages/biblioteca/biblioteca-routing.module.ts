import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';


const routes: Routes = [
  {
    path:'area',
    component: AreaComponent
  },
  {
    path:'autores',
    component: AutoresComponent
  },
  {
    path:'editoriales',
    component: EditorialesComponent
  },
  {
    path:'existencia',
    component: ExistenciaComponent
  },
  {
    path:'libro',
    component: LibroComponent
  },
  {
    path:'tipo',
    component: TipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
