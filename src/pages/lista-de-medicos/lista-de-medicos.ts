import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-de-medicos',
  templateUrl: 'lista-de-medicos.html',
})
export class ListaDeMedicosPage {

  especializacionABuscar : string;

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.especializacionABuscar = navParams.get("especializacionABuscar");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeMedicosPage');
    console.log("El parametro recibido fue:" + this.especializacionABuscar);
  }

  visualizarConfirmacion(profesional:any){
    this.navCtrl.push('ConfirmarProfesionalPage', {profesional : profesional});
  }

}
