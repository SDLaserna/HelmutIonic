import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModificarDatosPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificar-datos-paciente',
  templateUrl: 'modificar-datos-paciente.html',
})
export class ModificarDatosPacientePage {

  pacienteParam : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pacienteParam = navParams.get('paciente');
    console.log(this.pacienteParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarDatosPacientePage');
  }

}
