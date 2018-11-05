import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarioPage } from '../../pages/calendario/calendario';

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

  constructor(public navCtrl : NavController) {
    console.log('Hello MedicoListaComponent Component');
  }

  visualizar(nomOmatriculaABuscar:any){
    // console.log("Debe visualizar los horarios de disponibilidad del médico"+medico.nombre);
    this.navCtrl.push(CalendarioPage, {nomOmatriculaABuscar : nomOmatriculaABuscar});
  }
}
