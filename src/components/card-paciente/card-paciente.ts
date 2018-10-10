import { Component } from '@angular/core';

/**
 * Generated class for the CardPacienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-paciente',
  templateUrl: 'card-paciente.html'
})
export class CardPacienteComponent {

  text: string;

  constructor() {
    console.log('Hello CardPacienteComponent Component');
    this.text = 'Hello World';
  }

}
