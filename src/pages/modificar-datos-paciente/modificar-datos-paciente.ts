import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { isNullOrUndefined } from "util";

@IonicPage()
@Component({
  selector: 'page-modificar-datos-paciente',
  templateUrl: 'modificar-datos-paciente.html',
})
export class ModificarDatosPacientePage {

  calidad: string;
  cantidadAlimentacion: string;
  cantidadAlcohol: string;
  frecuenciaAlcohol: string;
  antecedenteAlcohol: string;
  cantidadTabaco: string;
  frecuenciaTabaco: string;
  frecuenciaDeportes: string;
  parentezco: string;
  frecuenciaDeAlimentacion: string;


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
    let popover = this.popoverCtrl.create('PopupDatosDelPacientePage');
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(
      dato => {
        console.log(dato);
        if (!isNullOrUndefined(dato)) {
          this.indiceDesdePopover = dato;
        }
        console.log(this.indiceDesdePopover);
        
      });
  }

}
