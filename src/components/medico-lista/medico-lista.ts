import { Component } from '@angular/core';
import { ItemSliding } from 'ionic-angular';

/**
 * Generated class for the MedicoListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'medico-lista',
  templateUrl: 'medico-lista.html'
})
export class MedicoListaComponent {

  medicos: any = [{ nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' },
  { nombre: 'Dr. Cureta', matricula: '456789525' } ];

  constructor() {
    console.log('Hello MedicoListaComponent Component');
  }

  visualizar(medico:any){
    console.log("Debe visualizar los horarios de disponibilidad del médico"+medico.nombre);
  }
}
