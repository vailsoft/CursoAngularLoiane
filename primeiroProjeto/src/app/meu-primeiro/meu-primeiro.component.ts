import { Component } from "@angular/core"; // Importação do Component
@Component({
    // Seletor é o nome da tag HTML que usaremos para utilizar o componente.
    selector: 'meu-primeiro-component',
    
    //Template inline - Utilizar somente se tiver poucas linhas, senão usar o templateUrl indicando o arquivo html que vai ser usado
    template: `
     <p>Meu primeiro component com Angular 2</p>
    `
})

/*
    O export vai permitir que a classe seja importada por outro arquivo.

*/

export class MeuPrimeiroComponent { 

}