import { Component } from '@angular/core';

/**
 * Generated class for the HistoriaClinicaPacienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'historia-clinica-paciente',
  templateUrl: 'historia-clinica-paciente.html'
})
export class HistoriaClinicaPacienteComponent {

  text: string;

  constructor() {
    console.log('Hello HistoriaClinicaPacienteComponent Component');
    this.text = 'Hello World';
  }

}
