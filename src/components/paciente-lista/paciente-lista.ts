import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'paciente-lista',
  templateUrl: 'paciente-lista.html'
})
export class PacienteListaComponent {

  pacientes: any = [{ nombre: 'Jiren', apellido: 'Alvarez', dni: '84513297' },
  { nombre: 'Makoto', apellido: 'Shishio', dni: '986456545' },
  { nombre: 'Kenshin', apellido: 'Himura', dni: '986456545' }, 
  { nombre: 'Chester', apellido: 'Laninster', dni: '986456545' },
  { nombre: 'Dean', apellido: 'Winchester', dni: '986456545' },
  { nombre: 'Aldo', apellido: 'Alvear', dni: '986456545' },
  { nombre: 'Pipa', apellido: 'Higuaín', dni: '986456545' },
  { nombre: 'Makoto', apellido: 'Shishio', dni: '986456545' },
  { nombre: 'Makoto', apellido: 'Shishio', dni: '986456545' },
  { nombre: 'Makoto', apellido: 'Shishio', dni: '986456545' },
  { nombre: 'Makoto', apellido: 'Shishio', dni: '986456545' }];

  text: string;

  constructor(public navCtrl : NavController) {
    console.log('Hello PacienteListaComponent Component');
    this.text = 'Hello World';
  }

  verHistoriaClinica(pacienteParam){
    this.navCtrl.push('HistoriaClinicaPage', {paciente : pacienteParam})
  }

  editarDatosDelPaciente(pacienteParam){
    this.navCtrl.push('ModificarDatosPacientePage', {paciente : pacienteParam});
  }

}
