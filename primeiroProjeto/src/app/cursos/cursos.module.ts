import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';





@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],

  // Indica os componentes que podem ser acessados por outros módulos
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
