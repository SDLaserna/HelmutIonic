import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-buscar-historia-clinica',
  templateUrl: 'buscar-historia-clinica.html',
})
export class BuscarHistoriaClinicaPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarHistoriaClinicaPage');
  }

  verHistoriaClinica(pacienteParam){
    this.navCtrl.push('HistoriaClinicaPage', {paciente : pacienteParam})
  }

  editarDatosDelPaciente(pacienteParam){
    this.navCtrl.push('ModificarDatosPacientePage', {paciente : pacienteParam});
  }

}
