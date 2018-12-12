import { PopupDatosDelPacientePage } from './../popup-datos-del-paciente/popup-datos-del-paciente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modificar-datos-paciente',
  templateUrl: 'modificar-datos-paciente.html',
})
export class ModificarDatosPacientePage {

  pacienteParam : string;
  indiceDesdePopover: number = 0;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public popoverCtrl: PopoverController) {
    this.pacienteParam = navParams.get('paciente');
    console.log(this.pacienteParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarDatosPacientePage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopupDatosDelPacientePage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(
      dato => {
        console.log(dato);
        this.indiceDesdePopover = dato;
        console.log(this.indiceDesdePopover);
        
      });
  }

}
