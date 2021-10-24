import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Importamos o componente para que ele seja acessado
import { MeuPrimeiroComponent } from "./meu-primeiro/meu-primeiro.component";
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';


@NgModule({
  declarations: [
    AppComponent,
    // Adicionamos o componente na declaration
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
