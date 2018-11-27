import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SeleccionDeTurnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccion-de-turno',
  templateUrl: 'seleccion-de-turno.html',
})
export class SeleccionDeTurnoPage {

  // Podría usar el campo "duracion" para crear el arreglo de cantidad de líneas en base a eso dependiendo 
  //cada profesional

  public cantidadDeLineas: Array<any> = new Array(48);
  paramFecha: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.paramFecha = navParams.get("objetofecha");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionDeTurnoPage');
    console.log("El parámetro recibido es: " + this.paramFecha);
    this.cantidadDeLineas.fill(1);
  }

  // seleccionDeTurno(item, elemento:MouseEvent){
  //   console.log("El elemento es:");
  //   console.log(elemento["srcElement"]["offsetParent"]);
  //   console.log("El item seleccionado es:"+ item);
  //   if (elemento.target["style"]["color"] != 'white') {
  //     elemento["srcElement"]["offsetParent"]["style"]["background-color"] = '#008784';
  //     // elemento.target["style"]["background-color"] = '#008784';
  //     elemento.target["style"]["color"] = 'white';
  //   }
  //   else{
  //     elemento["srcElement"]["offsetParent"]["style"]["background-color"] = 'white';
  //     elemento.target["style"]["color"] = 'black';
  //   }
  // }

  abreConfirmacionDeTurno(elemento) {
    console.log("Abrir el diálogo de confirmación al igual que el votar de elektu");

    const confirm = this.alertCtrl.create({
      title: '¿Desea confirmar el turno a las ' + elemento + ' ?',
      // message: 'Acá se puede agregar un mensaje',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Se confirmó el turno');
          }
        },
        {
          text: 'No, gracias',
          handler: () => {
            console.log('Se rechazó la confirmación del turno');
          }
        }
      ]
    });
    confirm.present();
  }

}
