import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-confirmar-profesional',
  templateUrl: 'confirmar-profesional.html',
})
export class ConfirmarProfesionalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarProfesionalPage');
  }

  visualizarDisponibilidad(){
    this.navCtrl.push('CalendarioPage');
  }

}
