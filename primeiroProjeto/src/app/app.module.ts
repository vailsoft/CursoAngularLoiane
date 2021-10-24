import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
// Importamos o componente para que ele seja acessado
import { MeuPrimeiroComponent } from "./meu-primeiro/meu-primeiro.component";
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  // Componentes, Diretivas e Pipes
  declarations: [
    AppComponent,
    // Adicionamos o componente na declaration
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
    
  ],
  // Outros módulos
  imports: [
    BrowserModule,
    // Acessando do módulo cursos
    CursosModule
  ],
  // Serviços
  providers: [],
  // Componente container do projeto
  bootstrap: [AppComponent]
})
export class AppModule { }
