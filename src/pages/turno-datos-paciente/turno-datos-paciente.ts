import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-turno-datos-paciente',
  templateUrl: 'turno-datos-paciente.html',
})
export class TurnoDatosPacientePage {

  obraSocial: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurnoDatosPacientePage');
  }

  irATipoDeBusqueda(){
    this.navCtrl.push('OpcBusquedaProfesionalPage');
  }


}
