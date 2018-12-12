import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opc-busqueda-profesional',
  templateUrl: 'opc-busqueda-profesional.html',
})
export class OpcBusquedaProfesionalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcBusquedaProfesionalPage');
  }

  irAListaDeProfesionales(){
    this.navCtrl.push('ListaDeMedicosPage');
  }

  irAListaDeEspecialidades(){
    this.navCtrl.push('ListaEspecialidadesPage')
  }

}
