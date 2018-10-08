import { Component } from '@angular/core';

/**
 * Generated class for the CardBuscadorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-buscador',
  templateUrl: 'card-buscador.html'
})
export class CardBuscadorComponent {

  text: string;

  constructor() {
    console.log('Hello CardBuscadorComponent Component');
    this.text = 'Hello World';
  }

}
