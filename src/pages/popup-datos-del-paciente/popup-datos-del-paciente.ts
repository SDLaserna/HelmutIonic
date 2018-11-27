import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popup-datos-del-paciente',
  templateUrl: 'popup-datos-del-paciente.html',
})
export class PopupDatosDelPacientePage {

  paginas: Array<{nombre: string, index:number}>;
  paginaVisualizada : string;

  constructor(public navParams: NavParams,
     public viewCtrl: ViewController,
     public navCtrl : NavController) {
    this.paginas = [
      {nombre:"Datos personales", index : 0},
      {nombre:"Ant. patológicos", index : 1},
      {nombre:"Ant. no patológicos", index : 2},
      {nombre:"Ant. familiares", index : 3} 
    ] 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupDatosDelPacientePage');
  }

  cerrarPopover(linea){
    // linea puede ser null si se hace click fuera del popover
    if (linea != null){
      this.viewCtrl.dismiss(linea.index);
    }
  }



}
