import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaDeMedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-de-medicos',
  templateUrl: 'lista-de-medicos.html',
})
export class ListaDeMedicosPage {

  especializacionABuscar : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.especializacionABuscar = navParams.get("especializacionABuscar");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeMedicosPage');
    console.log("El parametro recibido fue:" + this.especializacionABuscar);
  }

}
