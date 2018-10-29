import { Component } from '@angular/core';

/**
 * Generated class for the PacienteListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'paciente-lista',
  templateUrl: 'paciente-lista.html'
})
export class PacienteListaComponent {

  text: string;

  constructor() {
    console.log('Hello PacienteListaComponent Component');
    this.text = 'Hello World';
  }

}
