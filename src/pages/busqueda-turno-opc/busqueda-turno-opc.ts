import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-busqueda-turno-opc',
  templateUrl: 'busqueda-turno-opc.html',
})
export class BusquedaTurnoOpcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaTurnoOpcPage');
  }

  irAListaDeProfesionales(){
    this.navCtrl.push('ListaDeMedicosPage');
  }

  irAListaDeEspecialidades(){
    this.navCtrl.push('ListaEspecialidadesPage')
  }

}
