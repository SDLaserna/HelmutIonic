import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopupDatosDelPacientePage } from '../../pages/popup-datos-del-paciente/popup-datos-del-paciente';

@Component({
  selector: 'modificar-datos-paciente',
  templateUrl: 'modificar-datos-paciente.html'
})

export class ModificarDatosPacienteComponent {

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

  // indiceDesdePopover: number = 0;
  @Input() indiceDesdePopover : number = 0;

  
  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello ModificarDatosPacienteComponent Component');
  }



  // presentPopover(myEvent) {
  //   let popover = this.popoverCtrl.create(PopupDatosDelPacientePage);
  //   popover.present({
  //     ev: myEvent
  //   });
  //   popover.onDidDismiss(
  //     dato => {
  //       console.log(dato);
  //       this.indiceDesdePopover = dato;
  //       console.log(this.indiceDesdePopover);
        
  //     });
  // }


}
